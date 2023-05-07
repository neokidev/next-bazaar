/**
 * Generated by orval v6.15.0 🍺
 * Do not edit manually.
 * Next Bazaar API
 * OpenAPI spec version: 0.0.1
 */
import { useQuery, useMutation } from "@tanstack/react-query";
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from "@tanstack/react-query";
import type {
  ApiMessageResponse,
  ApiErrorResponse,
  ApiCreateUserRequest,
  ApiLoginUserRequest,
  ApiUserResponse,
} from "../../model";
import { customAxiosInstance } from "../../custom-axios-instance";
import type { ErrorType } from "../../custom-axios-instance";

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P
) => any
  ? P
  : never;

/**
 * @summary Create user
 */
export const postUsers = (
  apiCreateUserRequest: ApiCreateUserRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: apiCreateUserRequest,
    },
    options
  );
};

export const getPostUsersMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsers>>,
    TError,
    { data: ApiCreateUserRequest },
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsers>>,
  TError,
  { data: ApiCreateUserRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsers>>,
    { data: ApiCreateUserRequest }
  > = (props) => {
    const { data } = props ?? {};

    return postUsers(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostUsersMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsers>>
>;
export type PostUsersMutationBody = ApiCreateUserRequest;
export type PostUsersMutationError = ErrorType<ApiErrorResponse>;

export const usePostUsers = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsers>>,
    TError,
    { data: ApiCreateUserRequest },
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}) => {
  const mutationOptions = getPostUsersMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Login user
 */
export const postUsersLogin = (
  apiLoginUserRequest: ApiLoginUserRequest,
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    {
      url: `/users/login`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: apiLoginUserRequest,
    },
    options
  );
};

export const getPostUsersLoginMutationOptions = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogin>>,
    TError,
    { data: ApiLoginUserRequest },
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersLogin>>,
  TError,
  { data: ApiLoginUserRequest },
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersLogin>>,
    { data: ApiLoginUserRequest }
  > = (props) => {
    const { data } = props ?? {};

    return postUsersLogin(data, requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostUsersLoginMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersLogin>>
>;
export type PostUsersLoginMutationBody = ApiLoginUserRequest;
export type PostUsersLoginMutationError = ErrorType<ApiErrorResponse>;

export const usePostUsersLogin = <
  TError = ErrorType<ApiErrorResponse>,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof postUsersLogin>>,
    TError,
    { data: ApiLoginUserRequest },
    TContext
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}) => {
  const mutationOptions = getPostUsersLoginMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Logout user
 */
export const postUsersLogout = (
  options?: SecondParameter<typeof customAxiosInstance>
) => {
  return customAxiosInstance<ApiMessageResponse>(
    { url: `/users/logout`, method: "post" },
    options
  );
};

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
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseMutationOptions<
  Awaited<ReturnType<typeof postUsersLogout>>,
  TError,
  TVariables,
  TContext
> => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof postUsersLogout>>,
    TVariables
  > = () => {
    return postUsersLogout(requestOptions);
  };

  return { mutationFn, ...mutationOptions };
};

export type PostUsersLogoutMutationResult = NonNullable<
  Awaited<ReturnType<typeof postUsersLogout>>
>;

export type PostUsersLogoutMutationError = ErrorType<ApiErrorResponse>;

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
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}) => {
  const mutationOptions = getPostUsersLogoutMutationOptions(options);

  return useMutation(mutationOptions);
};
/**
 * @summary Get logged in user
 */
export const getUsersMe = (
  options?: SecondParameter<typeof customAxiosInstance>,
  signal?: AbortSignal
) => {
  return customAxiosInstance<ApiUserResponse>(
    { url: `/users/me`, method: "get", signal },
    options
  );
};

export const getGetUsersMeQueryKey = () => [`/users/me`] as const;

export const getGetUsersMeQueryOptions = <
  TData = Awaited<ReturnType<typeof getUsersMe>>,
  TError = ErrorType<ApiErrorResponse>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getUsersMe>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseQueryOptions<Awaited<ReturnType<typeof getUsersMe>>, TError, TData> & {
  queryKey: QueryKey;
} => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGetUsersMeQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersMe>>> = ({
    signal,
  }) => getUsersMe(requestOptions, signal);

  return { queryKey, queryFn, ...queryOptions };
};

export type GetUsersMeQueryResult = NonNullable<
  Awaited<ReturnType<typeof getUsersMe>>
>;
export type GetUsersMeQueryError = ErrorType<ApiErrorResponse>;

export const useGetUsersMe = <
  TData = Awaited<ReturnType<typeof getUsersMe>>,
  TError = ErrorType<ApiErrorResponse>
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof getUsersMe>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof customAxiosInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const queryOptions = getGetUsersMeQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
};
