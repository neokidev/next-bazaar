package db

import (
	"context"
	"database/sql"
	"testing"
	"time"

	"github.com/ot07/next-bazaar/test_util"
	"github.com/ot07/next-bazaar/util"
	"github.com/stretchr/testify/require"
)

func createRandomSession(t *testing.T, testQueries *Queries) Session {
	user := createRandomUser(t, testQueries)

	arg := CreateSessionParams{
		UserID:                user.ID,
		SessionToken:          util.RandomUUID(),
		SessionTokenExpiredAt: time.Now().Add(time.Minute),
		RefreshToken:          util.RandomUUID(),
		RefreshTokenExpiredAt: time.Now().Add(time.Minute),
	}

	session, err := testQueries.CreateSession(context.Background(), arg)
	require.NoError(t, err)
	require.NotEmpty(t, session)

	require.Equal(t, arg.UserID, session.UserID)
	require.Equal(t, arg.SessionToken, session.SessionToken)
	require.WithinDuration(t, arg.SessionTokenExpiredAt, session.SessionTokenExpiredAt, time.Second)
	require.Equal(t, arg.RefreshToken, session.RefreshToken)
	require.WithinDuration(t, arg.RefreshTokenExpiredAt, session.RefreshTokenExpiredAt, time.Second)

	require.NotEmpty(t, session.ID)
	require.NotZero(t, session.CreatedAt)

	return session
}

func TestCreateSession(t *testing.T) {
	t.Parallel()

	db := test_util.OpenTestDB(t)
	defer db.Close()

	testQueries := New(db)

	createRandomSession(t, testQueries)
}

func TestGetSession(t *testing.T) {
	t.Parallel()

	db := test_util.OpenTestDB(t)
	defer db.Close()

	testQueries := New(db)

	session1 := createRandomSession(t, testQueries)
	session2, err := testQueries.GetSession(context.Background(), session1.SessionToken)
	require.NoError(t, err)
	require.NotEmpty(t, session2)

	require.Equal(t, session1.ID, session2.ID)
	require.Equal(t, session1.UserID, session2.UserID)
	require.Equal(t, session1.SessionToken, session2.SessionToken)
	require.Equal(t, session1.SessionTokenExpiredAt, session2.SessionTokenExpiredAt)
	require.Equal(t, session1.RefreshToken, session2.RefreshToken)
	require.Equal(t, session1.RefreshTokenExpiredAt, session2.RefreshTokenExpiredAt)
	require.WithinDuration(t, session1.CreatedAt, session2.CreatedAt, time.Second)
}

func TestDeleteSession(t *testing.T) {
	t.Parallel()

	db := test_util.OpenTestDB(t)
	defer db.Close()

	testQueries := New(db)

	session1 := createRandomSession(t, testQueries)
	err := testQueries.DeleteSession(context.Background(), session1.ID)
	require.NoError(t, err)

	session2, err := testQueries.GetSession(context.Background(), session1.ID)
	require.Error(t, err)
	require.EqualError(t, err, sql.ErrNoRows.Error())
	require.Empty(t, session2)
}
