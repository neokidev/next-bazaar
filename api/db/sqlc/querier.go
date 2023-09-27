// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.22.0

package db

import (
	"context"

	"github.com/google/uuid"
)

type Querier interface {
	AddProduct(ctx context.Context, arg AddProductParams) (Product, error)
	CountProducts(ctx context.Context) (int64, error)
	CountProductsBySeller(ctx context.Context, sellerID uuid.UUID) (int64, error)
	CreateCartProduct(ctx context.Context, arg CreateCartProductParams) (CartProduct, error)
	CreateCategory(ctx context.Context, name string) (Category, error)
	CreateProduct(ctx context.Context, arg CreateProductParams) (Product, error)
	CreateSession(ctx context.Context, arg CreateSessionParams) (Session, error)
	CreateUser(ctx context.Context, arg CreateUserParams) (User, error)
	DeleteCartProduct(ctx context.Context, arg DeleteCartProductParams) error
	DeleteCategory(ctx context.Context, id uuid.UUID) error
	DeleteSession(ctx context.Context, sessionToken uuid.UUID) error
	GetCartProductByUserIDAndProductID(ctx context.Context, arg GetCartProductByUserIDAndProductIDParams) (CartProduct, error)
	GetCartProductsByUserID(ctx context.Context, userID uuid.UUID) ([]CartProduct, error)
	GetCategoriesByIDs(ctx context.Context, ids []uuid.UUID) ([]Category, error)
	GetCategory(ctx context.Context, id uuid.UUID) (Category, error)
	GetProduct(ctx context.Context, id uuid.UUID) (Product, error)
	GetSession(ctx context.Context, sessionToken uuid.UUID) (Session, error)
	GetUser(ctx context.Context, id uuid.UUID) (User, error)
	GetUserByEmail(ctx context.Context, email string) (User, error)
	GetUsersByIDs(ctx context.Context, ids []uuid.UUID) ([]User, error)
	ListCategories(ctx context.Context, arg ListCategoriesParams) ([]Category, error)
	ListProducts(ctx context.Context, arg ListProductsParams) ([]Product, error)
	ListProductsBySeller(ctx context.Context, arg ListProductsBySellerParams) ([]Product, error)
	TruncateCartProductsTable(ctx context.Context) error
	TruncateCategoriesTable(ctx context.Context) error
	TruncateProductsTable(ctx context.Context) error
	TruncateSessionsTable(ctx context.Context) error
	TruncateUsersTable(ctx context.Context) error
	UpdateCartProduct(ctx context.Context, arg UpdateCartProductParams) (CartProduct, error)
	UpdateProduct(ctx context.Context, arg UpdateProductParams) (Product, error)
	UpdateUser(ctx context.Context, arg UpdateUserParams) (User, error)
}

var _ Querier = (*Queries)(nil)
