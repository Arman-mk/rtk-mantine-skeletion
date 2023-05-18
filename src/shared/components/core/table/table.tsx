import { FC } from 'react'
import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table'
import { Box } from '@mantine/core'

const PER_PAGES = ['5', '10', '20']

interface ITable extends MantineReactTableProps {
  isLoading?: boolean
  pagination?: {
    pageIndex: number
    pageSize: number
  }
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
  return (
    <MantineReactTable
      data={data}
      columns={columns}
      initialState={{
        showColumnFilters: false,
        ...initialState,
      }}
      state={{
        isLoading,
        pagination,
        ...state,
      }}
      enableColumnActions={false}
      enableSorting={false}
      manualPagination
      enableTopToolbar={false}
      mantinePaperProps={() => ({
        component: Box,
        sx: { display: 'grid' },
      })}
      mantinePaginationProps={
        {
          // rowsPerPageOptions: PER_PAGES,
        }
      }
      {...rest}
    />
  )
}

Table.defaultProps = {
  state: {},
}

export default Table
