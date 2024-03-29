/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Next Bazaar API
 * OpenAPI spec version: 0.0.1
 */
import type {
  QueryFunction,
  QueryKey,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'
import type { ErrorType } from '../../custom-axios-instance'
import { customAxiosInstance } from '../../custom-axios-instance'
import type {
  ApiErrorResponse,
  GetProductsCategoriesParams,
  GetProductsParams,
  ProductDomainListProductCategoriesResponse,
  ProductDomainListProductsResponse,
  ProductDomainProductResponse,
} from '../../model'

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never

/**
 * @summary List products
 */
export const getProducts = (
  params: GetProductsParams,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ProductDomainListProductsResponse>(
    { url: `/products`, method: 'get', params, signal },
    options
  )
}

export const getGetProductsQueryKey = (params: GetProductsParams) =>
  [`/products`, ...(params ? [params] : [])] as const

export const getGetProductsQueryOptions = <
  TData = Awaited<ReturnType<typeof getProducts>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProducts>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryOptions<Awaited<ReturnType<typeof getProducts>>, TError, TData> & {
  queryKey: QueryKey
} => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProductsQueryKey(params)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProducts>>> = ({
    signal,
  }) => getProducts(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProducts>>
>
export type GetProductsQueryError = ErrorType<ApiErrorResponse>

export const useGetProducts = <
  TData = Awaited<ReturnType<typeof getProducts>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProducts>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetProductsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Get product
 */
export const getProductsId = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ProductDomainProductResponse>(
    { url: `/products/${id}`, method: 'get', signal },
    options
  )
}

export const getGetProductsIdQueryKey = (id: string) =>
  [`/products/${id}`] as const

export const getGetProductsIdQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductsId>>,
  TError = ErrorType<ApiErrorResponse>
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProductsId>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryOptions<Awaited<ReturnType<typeof getProductsId>>, TError, TData> & {
  queryKey: QueryKey
} => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetProductsIdQueryKey(id)

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getProductsId>>> = ({
    signal,
  }) => getProductsId(id, requestOptions, signal)

  return { queryKey, queryFn, enabled: !!id, ...queryOptions }
}

export type GetProductsIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductsId>>
>
export type GetProductsIdQueryError = ErrorType<ApiErrorResponse>

export const useGetProductsId = <
  TData = Awaited<ReturnType<typeof getProductsId>>,
  TError = ErrorType<ApiErrorResponse>
>(
  id: string,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProductsId>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetProductsIdQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary List product categories
 */
export const getProductsCategories = (
  params: GetProductsCategoriesParams,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ProductDomainListProductCategoriesResponse>(
    { url: `/products/categories`, method: 'get', params, signal },
    options
  )
}

export const getGetProductsCategoriesQueryKey = (
  params: GetProductsCategoriesParams
) => [`/products/categories`, ...(params ? [params] : [])] as const

export const getGetProductsCategoriesQueryOptions = <
  TData = Awaited<ReturnType<typeof getProductsCategories>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetProductsCategoriesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProductsCategories>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getProductsCategories>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey =
    queryOptions?.queryKey ?? getGetProductsCategoriesQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getProductsCategories>>
  > = ({ signal }) => getProductsCategories(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetProductsCategoriesQueryResult = NonNullable<
  Awaited<ReturnType<typeof getProductsCategories>>
>
export type GetProductsCategoriesQueryError = ErrorType<ApiErrorResponse>

export const useGetProductsCategories = <
  TData = Awaited<ReturnType<typeof getProductsCategories>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetProductsCategoriesParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getProductsCategories>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetProductsCategoriesQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}
