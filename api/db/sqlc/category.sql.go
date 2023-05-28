// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.18.0
// source: category.sql

package db

import (
	"context"

	"github.com/google/uuid"
	"github.com/lib/pq"
)

const createCategory = `-- name: CreateCategory :one
INSERT INTO categories (
  name
) VALUES (
  $1
) RETURNING id, name, created_at
`

func (q *Queries) CreateCategory(ctx context.Context, name string) (Category, error) {
	row := q.db.QueryRowContext(ctx, createCategory, name)
	var i Category
	err := row.Scan(&i.ID, &i.Name, &i.CreatedAt)
	return i, err
}

const deleteCategory = `-- name: DeleteCategory :exec
DELETE FROM categories
WHERE id = $1
`

func (q *Queries) DeleteCategory(ctx context.Context, id uuid.UUID) error {
	_, err := q.db.ExecContext(ctx, deleteCategory, id)
	return err
}

const getCategoriesByIDs = `-- name: GetCategoriesByIDs :many
SELECT id, name, created_at FROM categories
WHERE id = ANY(($1)::uuid[])
ORDER BY id
`

func (q *Queries) GetCategoriesByIDs(ctx context.Context, ids []uuid.UUID) ([]Category, error) {
	rows, err := q.db.QueryContext(ctx, getCategoriesByIDs, pq.Array(ids))
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Category{}
	for rows.Next() {
		var i Category
		if err := rows.Scan(&i.ID, &i.Name, &i.CreatedAt); err != nil {
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

const getCategory = `-- name: GetCategory :one
SELECT id, name, created_at FROM categories
WHERE id = $1 LIMIT 1
`

func (q *Queries) GetCategory(ctx context.Context, id uuid.UUID) (Category, error) {
	row := q.db.QueryRowContext(ctx, getCategory, id)
	var i Category
	err := row.Scan(&i.ID, &i.Name, &i.CreatedAt)
	return i, err
}

const listCategories = `-- name: ListCategories :many
SELECT id, name, created_at FROM categories
ORDER BY id
LIMIT $1
OFFSET $2
`

type ListCategoriesParams struct {
	Limit  int32 `json:"limit"`
	Offset int32 `json:"offset"`
}

func (q *Queries) ListCategories(ctx context.Context, arg ListCategoriesParams) ([]Category, error) {
	rows, err := q.db.QueryContext(ctx, listCategories, arg.Limit, arg.Offset)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	items := []Category{}
	for rows.Next() {
		var i Category
		if err := rows.Scan(&i.ID, &i.Name, &i.CreatedAt); err != nil {
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

const truncateCategoriesTable = `-- name: TruncateCategoriesTable :exec
TRUNCATE TABLE categories CASCADE
`

func (q *Queries) TruncateCategoriesTable(ctx context.Context) error {
	_, err := q.db.ExecContext(ctx, truncateCategoriesTable)
	return err
}
