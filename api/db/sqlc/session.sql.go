// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0
// source: session.sql

package db

import (
	"context"
	"time"

	"github.com/google/uuid"
)

const createSession = `-- name: CreateSession :one
INSERT INTO sessions (
  user_id,
  session_token,
  expired_at
) VALUES (
  $1, $2, $3
) RETURNING id, session_token, user_id, expired_at, created_at
`

type CreateSessionParams struct {
	UserID       uuid.UUID `json:"user_id"`
	SessionToken uuid.UUID `json:"session_token"`
	ExpiredAt    time.Time `json:"expired_at"`
}

func (q *Queries) CreateSession(ctx context.Context, arg CreateSessionParams) (Session, error) {
	row := q.db.QueryRowContext(ctx, createSession, arg.UserID, arg.SessionToken, arg.ExpiredAt)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.SessionToken,
		&i.UserID,
		&i.ExpiredAt,
		&i.CreatedAt,
	)
	return i, err
}

const deleteSession = `-- name: DeleteSession :exec
DELETE FROM sessions
WHERE session_token = $1
`

func (q *Queries) DeleteSession(ctx context.Context, sessionToken uuid.UUID) error {
	_, err := q.db.ExecContext(ctx, deleteSession, sessionToken)
	return err
}

const getSession = `-- name: GetSession :one
SELECT id, session_token, user_id, expired_at, created_at FROM sessions
WHERE session_token = $1 LIMIT 1
`

func (q *Queries) GetSession(ctx context.Context, sessionToken uuid.UUID) (Session, error) {
	row := q.db.QueryRowContext(ctx, getSession, sessionToken)
	var i Session
	err := row.Scan(
		&i.ID,
		&i.SessionToken,
		&i.UserID,
		&i.ExpiredAt,
		&i.CreatedAt,
	)
	return i, err
}

const truncateSessionsTable = `-- name: TruncateSessionsTable :exec
TRUNCATE TABLE sessions CASCADE
`

func (q *Queries) TruncateSessionsTable(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, truncateSessionsTable)
	return err
}
