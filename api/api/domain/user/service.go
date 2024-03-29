package user_domain

import (
	"context"
	"time"

	"github.com/google/uuid"
	db "github.com/ot07/next-bazaar/db/sqlc"
	"github.com/ot07/next-bazaar/token"
	"github.com/ot07/next-bazaar/util"
)

type UserService struct {
	store db.Store
}

func NewUserService(store db.Store) *UserService {
	return &UserService{
		store: store,
	}
}

func (s *UserService) GetUser(ctx context.Context, id uuid.UUID) (User, error) {
	user, err := s.store.GetUser(ctx, id)
	if err != nil {
		return User{}, err
	}

	rsp := User{
		ID:                user.ID,
		Name:              user.Name,
		Email:             user.Email,
		HashedPassword:    user.HashedPassword,
		PasswordChangedAt: user.PasswordChangedAt,
		CreatedAt:         user.CreatedAt,
	}

	return rsp, err
}

func (s *UserService) GetUserByEmail(ctx context.Context, email string) (User, error) {
	user, err := s.store.GetUserByEmail(ctx, email)
	if err != nil {
		return User{}, err
	}

	rsp := User{
		ID:                user.ID,
		Name:              user.Name,
		Email:             user.Email,
		HashedPassword:    user.HashedPassword,
		PasswordChangedAt: user.PasswordChangedAt,
		CreatedAt:         user.CreatedAt,
	}

	return rsp, err
}

type CreateUserServiceParams struct {
	Name           string
	Email          string
	HashedPassword string
}

func (s *UserService) CreateUser(ctx context.Context, params CreateUserServiceParams) error {
	_, err := s.store.CreateUser(ctx, db.CreateUserParams{
		Name:           params.Name,
		Email:          params.Email,
		HashedPassword: params.HashedPassword,
	})

	return err
}

type UpdateUserServiceParams struct {
	ID    uuid.UUID
	Name  string
	Email string
}

func (s *UserService) UpdateUser(ctx context.Context, params UpdateUserServiceParams) error {
	user, err := s.GetUser(ctx, params.ID)
	if err != nil {
		return err
	}

	_, err = s.store.UpdateUser(ctx, db.UpdateUserParams{
		ID:             params.ID,
		Name:           params.Name,
		Email:          params.Email,
		HashedPassword: user.HashedPassword,
	})

	return err
}

type UpdateUserPasswordServiceParams struct {
	ID          uuid.UUID
	OldPassword string
	NewPassword string
}

func (s *UserService) UpdateUserPassword(ctx context.Context, params UpdateUserPasswordServiceParams) error {
	user, err := s.GetUser(ctx, params.ID)
	if err != nil {
		return err
	}

	err = util.CheckPassword(params.OldPassword, user.HashedPassword)
	if err != nil {
		return err
	}

	hashedNewPassword, err := util.HashPassword(params.NewPassword)
	if err != nil {
		return err
	}

	_, err = s.store.UpdateUser(ctx, db.UpdateUserParams{
		ID:             params.ID,
		Name:           user.Name,
		Email:          user.Email,
		HashedPassword: hashedNewPassword,
	})

	return err
}

type CreateSessionServiceParams struct {
	UserID               uuid.UUID
	SessionTokenDuration time.Duration
	RefreshTokenDuration time.Duration
}

func (s *UserService) CreateSession(ctx context.Context, params CreateSessionServiceParams) (*token.Token, error) {
	sessionToken := token.NewToken(params.SessionTokenDuration)
	refreshToken := token.NewToken(params.RefreshTokenDuration)

	_, err := s.store.CreateSession(ctx, db.CreateSessionParams{
		UserID:                params.UserID,
		SessionToken:          sessionToken.ID,
		SessionTokenExpiredAt: sessionToken.ExpiredAt,
		RefreshToken:          refreshToken.ID,
		RefreshTokenExpiredAt: refreshToken.ExpiredAt,
	})
	if err != nil {
		return nil, err
	}

	return sessionToken, nil
}

type RegisterServiceParams struct {
	Name     string
	Email    string
	Password string
}

func (s *UserService) Register(ctx context.Context, params RegisterServiceParams) error {
	hashedPassword, err := util.HashPassword(params.Password)
	if err != nil {
		return err
	}

	return s.CreateUser(ctx, CreateUserServiceParams{
		Name:           params.Name,
		Email:          params.Email,
		HashedPassword: hashedPassword,
	})
}

type LoginServiceParams struct {
	Email                string
	Password             string
	SessionTokenDuration time.Duration
	RefreshTokenDuration time.Duration
}

func (s *UserService) Login(ctx context.Context, params LoginServiceParams) (*token.Token, error) {
	user, err := s.GetUserByEmail(ctx, params.Email)
	if err != nil {
		return nil, err
	}

	err = util.CheckPassword(params.Password, user.HashedPassword)
	if err != nil {
		return nil, err
	}

	arg := CreateSessionServiceParams{
		UserID:               user.ID,
		SessionTokenDuration: params.SessionTokenDuration,
		RefreshTokenDuration: params.RefreshTokenDuration,
	}

	sessionToken, err := s.CreateSession(ctx, arg)
	if err != nil {
		return nil, err
	}

	return sessionToken, nil
}

func (s *UserService) Logout(ctx context.Context, sessionTokenID uuid.UUID) error {
	return s.store.DeleteSession(ctx, sessionTokenID)
}
