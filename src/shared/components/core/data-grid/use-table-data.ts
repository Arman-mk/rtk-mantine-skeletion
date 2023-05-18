import useDataPagination from './use-data-pagination'
import { DEFAULT_PAGE_SIZE } from '@shared/constants/app'
import { IDataTable } from './types'

const useTableData = (props: IDataTable | undefined) => {
  const [pagination, setPagination] = useDataPagination({
    page: 1,
    perPage: DEFAULT_PAGE_SIZE,
    total: props?.total || 0,
  })

  return { pagination, onPaginationChange: setPagination }
}

export default useTableData
