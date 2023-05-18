import { useState } from 'react'
import { IDataPagination, ITablePagination } from './types'
import { DEFAULT_PAGE_SIZE } from '@shared/constants/app'

const useDataPagination = ({ page = 1, perPage = DEFAULT_PAGE_SIZE, total }: IDataPagination) => {
  const [pagination, setPagination] = useState<IDataPagination>({
    page,
    perPage,
    total,
  })

  const onPaginationChange = (pagination: ITablePagination) => {
    setPagination({
      page: pagination.pageIndex + 1,
      perPage: pagination.pageSize,
      total: pagination.total || total,
    })
  }

  return [pagination, onPaginationChange]
}

export default useDataPagination
