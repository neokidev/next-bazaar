/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Next Bazaar API
 * OpenAPI spec version: 0.0.1
 */
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { ErrorType } from '../../custom-axios-instance'
import { customAxiosInstance } from '../../custom-axios-instance'
import type {
  ApiErrorResponse,
  ApiMessageResponse,
  GetUsersProductsParams,
  ProductDomainAddProductRequest,
  ProductDomainListProductsResponse,
  ProductDomainUpdateProductRequestBody,
  UserDomainLoginRequest,
  UserDomainRegisterRequest,
  UserDomainUpdatePasswordRequest,
  UserDomainUpdateRequest,
  UserDomainUserResponse,
} from '../../model'

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never

/**
 * @summary Login
 */
export const postUsersLogin = (
  userDomainLoginRequest: UserDomainLoginRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/login`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: userDomainLoginRequest,
    },
    options
  )
}

export const getPostUsersLoginMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogin>>,
    TError,
    { data: UserDomainLoginRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersLogin>>,
  TError,
  { data: UserDomainLoginRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersLogin>>,
    { data: UserDomainLoginRequest }
  > = (props) => {
    const { data } = props ?? {}

    return postUsersLogin(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostUsersLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersLogin>>
>
export type PostUsersLoginMutationBody = UserDomainLoginRequest
export type PostUsersLoginMutationError = ErrorType<ApiErrorResponse>

export const usePostUsersLogin = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogin>>,
    TError,
    { data: UserDomainLoginRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPostUsersLoginMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Logout
 */
export const postUsersLogout = (
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    { url: `/users/logout`, method: 'post' },
    options
  )
}

export const getPostUsersLogoutMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogout>>,
    TError,
    TVariables,
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersLogout>>,
  TError,
  TVariables,
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersLogout>>,
    TVariables
  > = () => {
    return postUsersLogout(requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostUsersLogoutMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersLogout>>
>

export type PostUsersLogoutMutationError = ErrorType<ApiErrorResponse>

export const usePostUsersLogout = <
  TError = ErrorType<ApiErrorResponse>,
  TVariables = void,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogout>>,
    TError,
    TVariables,
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPostUsersLogoutMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Get current user
 */
export const getUsersMe = (
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<UserDomainUserResponse>(
    { url: `/users/me`, method: 'get', signal },
    options
  )
}

export const getGetUsersMeQueryKey = () => [`/users/me`] as const

export const getGetUsersMeQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersMe>>,
  TError = ErrorType<ApiErrorResponse>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData> & {
  queryKey: QueryKey
} => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUsersMeQueryKey()

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersMe>>> = ({
    signal,
  }) => getUsersMe(requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetUsersMeQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersMe>>
>
export type GetUsersMeQueryError = ErrorType<ApiErrorResponse>

export const useGetUsersMe = <
  TData = Awaited<ReturnType<typeof getUsersMe>>,
  TError = ErrorType<ApiErrorResponse>
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData>
  request?: SecondParameter<typeof customAxiosInstance>
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersMeQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Update user information
 */
export const patchUsersMe = (
  userDomainUpdateRequest: UserDomainUpdateRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/me`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: userDomainUpdateRequest,
    },
    options
  )
}

export const getPatchUsersMeMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersMe>>,
    TError,
    { data: UserDomainUpdateRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchUsersMe>>,
  TError,
  { data: UserDomainUpdateRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchUsersMe>>,
    { data: UserDomainUpdateRequest }
  > = (props) => {
    const { data } = props ?? {}

    return patchUsersMe(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PatchUsersMeMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchUsersMe>>
>
export type PatchUsersMeMutationBody = UserDomainUpdateRequest
export type PatchUsersMeMutationError = ErrorType<ApiErrorResponse>

export const usePatchUsersMe = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersMe>>,
    TError,
    { data: UserDomainUpdateRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPatchUsersMeMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Update user password
 */
export const patchUsersMePassword = (
  userDomainUpdatePasswordRequest: UserDomainUpdatePasswordRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/me/password`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: userDomainUpdatePasswordRequest,
    },
    options
  )
}

export const getPatchUsersMePasswordMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersMePassword>>,
    TError,
    { data: UserDomainUpdatePasswordRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof patchUsersMePassword>>,
  TError,
  { data: UserDomainUpdatePasswordRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof patchUsersMePassword>>,
    { data: UserDomainUpdatePasswordRequest }
  > = (props) => {
    const { data } = props ?? {}

    return patchUsersMePassword(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PatchUsersMePasswordMutationResult = NonNullable<
  Awaited<ReturnType<typeof patchUsersMePassword>>
>
export type PatchUsersMePasswordMutationBody = UserDomainUpdatePasswordRequest
export type PatchUsersMePasswordMutationError = ErrorType<ApiErrorResponse>

export const usePatchUsersMePassword = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof patchUsersMePassword>>,
    TError,
    { data: UserDomainUpdatePasswordRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPatchUsersMePasswordMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary List products by seller
 */
export const getUsersProducts = (
  params: GetUsersProductsParams,
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ProductDomainListProductsResponse>(
    { url: `/users/products`, method: 'get', params, signal },
    options
  )
}

export const getGetUsersProductsQueryKey = (params: GetUsersProductsParams) =>
  [`/users/products`, ...(params ? [params] : [])] as const

export const getGetUsersProductsQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersProducts>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetUsersProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getUsersProducts>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryOptions<
  Awaited<ReturnType<typeof getUsersProducts>>,
  TError,
  TData
> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {}

  const queryKey = queryOptions?.queryKey ?? getGetUsersProductsQueryKey(params)

  const queryFn: QueryFunction<
    Awaited<ReturnType<typeof getUsersProducts>>
  > = ({ signal }) => getUsersProducts(params, requestOptions, signal)

  return { queryKey, queryFn, ...queryOptions }
}

export type GetUsersProductsQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersProducts>>
>
export type GetUsersProductsQueryError = ErrorType<ApiErrorResponse>

export const useGetUsersProducts = <
  TData = Awaited<ReturnType<typeof getUsersProducts>>,
  TError = ErrorType<ApiErrorResponse>
>(
  params: GetUsersProductsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof getUsersProducts>>,
      TError,
      TData
    >
    request?: SecondParameter<typeof customAxiosInstance>
  }
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersProductsQueryOptions(params, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey
  }

  query.queryKey = queryOptions.queryKey

  return query
}

/**
 * @summary Add product
 */
export const postUsersProducts = (
  productDomainAddProductRequest: ProductDomainAddProductRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/products`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: productDomainAddProductRequest,
    },
    options
  )
}

export const getPostUsersProductsMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersProducts>>,
    TError,
    { data: ProductDomainAddProductRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersProducts>>,
  TError,
  { data: ProductDomainAddProductRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersProducts>>,
    { data: ProductDomainAddProductRequest }
  > = (props) => {
    const { data } = props ?? {}

    return postUsersProducts(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostUsersProductsMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersProducts>>
>
export type PostUsersProductsMutationBody = ProductDomainAddProductRequest
export type PostUsersProductsMutationError = ErrorType<ApiErrorResponse>

export const usePostUsersProducts = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersProducts>>,
    TError,
    { data: ProductDomainAddProductRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPostUsersProductsMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Update product
 */
export const putUsersProductsId = (
  id: string,
  productDomainUpdateProductRequestBody: ProductDomainUpdateProductRequestBody,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/products/${id}`,
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      data: productDomainUpdateProductRequestBody,
    },
    options
  )
}

export const getPutUsersProductsIdMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putUsersProductsId>>,
    TError,
    { id: string; data: ProductDomainUpdateProductRequestBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof putUsersProductsId>>,
  TError,
  { id: string; data: ProductDomainUpdateProductRequestBody },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof putUsersProductsId>>,
    { id: string; data: ProductDomainUpdateProductRequestBody }
  > = (props) => {
    const { id, data } = props ?? {}

    return putUsersProductsId(id, data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PutUsersProductsIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof putUsersProductsId>>
>
export type PutUsersProductsIdMutationBody =
  ProductDomainUpdateProductRequestBody
export type PutUsersProductsIdMutationError = ErrorType<ApiErrorResponse>

export const usePutUsersProductsId = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof putUsersProductsId>>,
    TError,
    { id: string; data: ProductDomainUpdateProductRequestBody },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPutUsersProductsIdMutationOptions(options)

  return useMutation(mutationOptions)
}
/**
 * @summary Register user
 */
export const postUsersRegister = (
  userDomainRegisterRequest: UserDomainRegisterRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/register`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: userDomainRegisterRequest,
    },
    options
  )
}

export const getPostUsersRegisterMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersRegister>>,
    TError,
    { data: UserDomainRegisterRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersRegister>>,
  TError,
  { data: UserDomainRegisterRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {}

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersRegister>>,
    { data: UserDomainRegisterRequest }
  > = (props) => {
    const { data } = props ?? {}

    return postUsersRegister(data, requestOptions)
  }

  return { mutationFn, ...mutationOptions }
}

export type PostUsersRegisterMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersRegister>>
>
export type PostUsersRegisterMutationBody = UserDomainRegisterRequest
export type PostUsersRegisterMutationError = ErrorType<ApiErrorResponse>

export const usePostUsersRegister = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersRegister>>,
    TError,
    { data: UserDomainRegisterRequest },
    TContext
  >
  request?: SecondParameter<typeof customAxiosInstance>
}) => {
  const mutationOptions = getPostUsersRegisterMutationOptions(options)

  return useMutation(mutationOptions)
}
