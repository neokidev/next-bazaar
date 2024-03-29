import {
  getGetProductsQueryKey,
  useGetProducts as useGetProductsQuery,
} from '@/api/endpoints/products/products'
import {
  ProductDomainListProductsResponse,
  ProductDomainListProductsResponseMeta,
} from '@/api/model'
import { transformProduct } from '@/features/products/utils/transform'
import { addNonCredentialsToQueryKey } from '@/utils/query-key'
import { AxiosResponse } from 'axios'
import { Product } from '../types'

interface GetProductsResultData {
  meta: ProductDomainListProductsResponseMeta
  data: Product[]
}

function transform(
  response: AxiosResponse<ProductDomainListProductsResponse>
): GetProductsResultData {
  const { data } = response
  if (data.meta === undefined) {
    throw new Error(
      'required field `meta` is undefined:' + JSON.stringify(data)
    )
  } else if (data.data === undefined) {
    throw new Error(
      'required field `data` is undefined:' + JSON.stringify(data)
    )
  }

  return {
    meta: data.meta,
    data: data.data.map(transformProduct),
  }
}

interface UseGetProductsParams {
  page: number
  pageSize: number
  categoryId?: string
}

export function useGetProducts({
  page,
  pageSize,
  categoryId,
}: UseGetProductsParams) {
  const params = {
    page_id: page,
    page_size: pageSize,
    category_id: categoryId,
  }
  const originalQueryKey = getGetProductsQueryKey(params)

  return useGetProductsQuery<GetProductsResultData>(params, {
    query: {
      queryKey: addNonCredentialsToQueryKey(originalQueryKey),
      select: transform,
    },
  })
}
