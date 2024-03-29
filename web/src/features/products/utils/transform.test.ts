import Decimal from 'decimal.js'
import { Product } from '../types'
import { transformProduct } from './transform'

describe('transformProduct', () => {
  it('transforms the product correctly', () => {
    const product = {
      id: '1',
      name: 'Product',
      description: 'Description',
      price: '10.00',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
      image_url: 'https://example.com/image.png',
    }

    const expectedProduct: Product = {
      id: '1',
      name: 'Product',
      description: 'Description',
      price: new Decimal('10.00'),
      stockQuantity: 5,
      categoryId: '1',
      category: 'Category',
      seller: 'Seller',
      imageUrl: 'https://example.com/image.png',
    }

    expect(transformProduct(product)).toEqual(expectedProduct)
  })

  it('transforms the product correctly if optional fields are undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '10.00',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
    }

    const expectedProduct: Product = {
      id: '1',
      name: 'Product',
      price: new Decimal('10.00'),
      stockQuantity: 5,
      categoryId: '1',
      category: 'Category',
      seller: 'Seller',
    }

    expect(transformProduct(product)).toEqual(expectedProduct)
  })

  it('throws an error if id is undefined', () => {
    const product = {
      name: 'Product',
      price: '10.00',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `id` is undefined'
    )
  })

  it('throws an error if name is undefined', () => {
    const product = {
      id: '1',
      price: '10.00',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `name` is undefined'
    )
  })

  it('throws an error if price is undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `price` is undefined'
    )
  })

  it('throws an error if stock_quantity is undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '10.00',
      category_id: '1',
      category: 'Category',
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `stock_quantity` is undefined'
    )
  })

  it('throws an error if category_id is undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '10.00',
      category: '1',
      stock_quantity: 5,
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `category_id` is undefined'
    )
  })

  it('throws an error if category is undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '10.00',
      category_id: '1',
      stock_quantity: 5,
      seller: 'Seller',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `category` is undefined'
    )
  })

  it('throws an error if seller is undefined', () => {
    const product = {
      id: '1',
      name: 'Product',
      price: '10.00',
      stock_quantity: 5,
      category_id: '1',
      category: 'Category',
    }

    expect(() => transformProduct(product)).toThrowError(
      'required field `seller` is undefined'
    )
  })
})
