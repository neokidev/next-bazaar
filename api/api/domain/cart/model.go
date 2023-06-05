package cart_domain

import (
	"database/sql"

	"github.com/google/uuid"
	db "github.com/ot07/next-bazaar/db/sqlc"
)

type CartProduct struct {
	ID          uuid.UUID
	Name        string
	Description sql.NullString
	Price       string
	Quantity    int32
	Subtotal    string
}

type GetProductsRequest struct {
	ID uuid.UUID `params:"user_id"`
}

type AddProductRequest struct {
	ProductID uuid.UUID `json:"product_id" validate:"required"`
	Quantity  int32     `json:"quantity" validate:"required,min=1"`
}

type CartProductResponse struct {
	ID          uuid.UUID     `json:"id"`
	Name        string        `json:"name"`
	Description db.NullString `json:"description" swaggertype:"string"`
	Price       string        `json:"price"`
	Quantity    int32         `json:"quantity"`
	Subtotal    string        `json:"subtotal"`
}

func NewCartProductResponse(cartProduct CartProduct) CartProductResponse {
	return CartProductResponse{
		ID:          cartProduct.ID,
		Name:        cartProduct.Name,
		Description: db.NullString{NullString: cartProduct.Description},
		Price:       cartProduct.Price,
		Quantity:    cartProduct.Quantity,
		Subtotal:    cartProduct.Subtotal,
	}
}

type CartResponse []CartProductResponse

func NewCartResponse(products []CartProduct) CartResponse {
	rsp := make(CartResponse, 0, len(products))
	for _, product := range products {
		rsp = append(rsp, NewCartProductResponse(product))
	}
	return rsp
}