import { ProductDomainProductResponse } from '@/api/model'
import { Product } from '@/features/products'
import Decimal from 'decimal.js'

export function transformProduct(
  product: ProductDomainProductResponse
): Product {
  if (product.id === undefined) {
    throw new Error(
      'required field `id` is undefined:' + JSON.stringify(product)
    )
  } else if (product.name === undefined) {
    throw new Error(
      'required field `name` is undefined:' + JSON.stringify(product)
    )
  } else if (product.price === undefined) {
    throw new Error(
      'required field `price` is undefined:' + JSON.stringify(product)
    )
  } else if (product.stock_quantity === undefined) {
    throw new Error(
      'required field `stock_quantity` is undefined:' + JSON.stringify(product)
    )
  } else if (product.category === undefined) {
    throw new Error(
      'required field `category` is undefined:' + JSON.stringify(product)
    )
  } else if (product.seller === undefined) {
    throw new Error(
      'required field `seller` is undefined:' + JSON.stringify(product)
    )
  }

  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: new Decimal(product.price),
    stockQuantity: product.stock_quantity,
    category: product.category,
    seller: product.seller,
    imageUrl: product.image_url,
  }
}
