import { FC, useMemo } from 'react'
import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table'
import { IDataPagination, ITablePagination } from '@core/data-grid/types'
import { DEFAULT_PAGE_SIZE } from '@shared/constants/app'

const paginationAdapter = (pagination: IDataPagination): ITablePagination => {
  return {
    pageIndex: pagination.page + 1,
    pageSize: pagination.perPage || DEFAULT_PAGE_SIZE,
  }
}

interface ITable extends MantineReactTableProps {
  pagination?: IDataPagination | undefined
  isLoading?: boolean
}

const Table: FC<ITable> = ({
  initialState,
  data,
  pagination,
  isLoading,
  state,
  columns,
  ...rest
}: ITable) => {
  const memoState = useMemo(() => {
    return {
      isLoading,
      pagination: pagination ? paginationAdapter(pagination) : undefined,
      ...state,
    }
  }, [isLoading, pagination, state])

  const memoInitialState = useMemo(() => {
    return {
      showColumnFilters: false,
      ...initialState,
    }
  }, [initialState])

  return (
    <MantineReactTable
      data={data}
      columns={columns}
      initialState={memoInitialState}
      state={memoState}
      enableColumnActions={false}
      enableSorting={false}
      manualPagination
      enableTopToolbar={false}
      {...rest}
    />
  )
}

export default Table
