// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.20.0
// source: cart_product.sql

package db

import (
	"context"

	"github.com/google/uuid"
)

const createCartProduct = `-- name: CreateCartProduct :one
INSERT INTO cart_products (
  user_id,
  product_id,
  quantity
) VALUES (
  $1, $2, $3
) RETURNING user_id, product_id, quantity, created_at
`

type CreateCartProductParams struct {
	UserID    uuid.UUID `json:"user_id"`
	ProductID uuid.UUID `json:"product_id"`
	Quantity  int32     `json:"quantity"`
}

func (q *Queries) CreateCartProduct(ctx context.Context, arg CreateCartProductParams) (CartProduct, error) {
	row := q.db.QueryRowContext(ctx, createCartProduct, arg.UserID, arg.ProductID, arg.Quantity)
	var i CartProduct
	err := row.Scan(
		&i.UserID,
		&i.ProductID,
		&i.Quantity,
		&i.CreatedAt,
	)
	return i, err
}

const deleteCartProduct = `-- name: DeleteCartProduct :exec
DELETE FROM cart_products
WHERE user_id = $1 AND product_id = $2
`

type DeleteCartProductParams struct {
	UserID    uuid.UUID `json:"user_id"`
	ProductID uuid.UUID `json:"product_id"`
}

func (q *Queries) DeleteCartProduct(ctx context.Context, arg DeleteCartProductParams) error {
	_, err := q.db.ExecContext(ctx, deleteCartProduct, arg.UserID, arg.ProductID)
	return err
}

const getCartProductByUserIDAndProductID = `-- name: GetCartProductByUserIDAndProductID :one
SELECT user_id, product_id, quantity, created_at FROM cart_products
WHERE user_id = $1 AND product_id = $2
ORDER BY created_at
`

type GetCartProductByUserIDAndProductIDParams struct {
	UserID    uuid.UUID `json:"user_id"`
	ProductID uuid.UUID `json:"product_id"`
}

func (q *Queries) GetCartProductByUserIDAndProductID(ctx context.Context, arg GetCartProductByUserIDAndProductIDParams) (CartProduct, error) {
	row := q.db.QueryRowContext(ctx, getCartProductByUserIDAndProductID, arg.UserID, arg.ProductID)
	var i CartProduct
	err := row.Scan(
		&i.UserID,
		&i.ProductID,
		&i.Quantity,
		&i.CreatedAt,
	)
	return i, err
}

const getCartProductsByUserID = `-- name: GetCartProductsByUserID :many
SELECT user_id, product_id, quantity, created_at FROM cart_products
WHERE user_id = $1
`

func (q *Queries) GetCartProductsByUserID(ctx context.Context, userID uuid.UUID) ([]CartProduct, error) {
	rows, err := q.db.QueryContext(ctx, getCartProductsByUserID, userID)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []CartProduct{}
	for rows.Next() {
		var i CartProduct
		if err := rows.Scan(
			&i.UserID,
			&i.ProductID,
			&i.Quantity,
			&i.CreatedAt,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const truncateCartProductsTable = `-- name: TruncateCartProductsTable :exec
TRUNCATE TABLE cart_products CASCADE
`

func (q *Queries) TruncateCartProductsTable(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, truncateCartProductsTable)
	return err
}

const updateCartProduct = `-- name: UpdateCartProduct :one
UPDATE cart_products
SET
  quantity = $3
WHERE user_id = $1 AND product_id = $2
RETURNING user_id, product_id, quantity, created_at
`

type UpdateCartProductParams struct {
	UserID    uuid.UUID `json:"user_id"`
	ProductID uuid.UUID `json:"product_id"`
	Quantity  int32     `json:"quantity"`
}

func (q *Queries) UpdateCartProduct(ctx context.Context, arg UpdateCartProductParams) (CartProduct, error) {
	row := q.db.QueryRowContext(ctx, updateCartProduct, arg.UserID, arg.ProductID, arg.Quantity)
	var i CartProduct
	err := row.Scan(
		&i.UserID,
		&i.ProductID,
		&i.Quantity,
		&i.CreatedAt,
	)
	return i, err
}
