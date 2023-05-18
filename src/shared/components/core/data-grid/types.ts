import { MRT_ColumnDef } from 'mantine-react-table'

interface IDataPagination {
  page: number
  perPage?: number
  total?: number
}

interface ITablePagination {
  pageIndex: number
  pageSize: number
  total?: number
}

interface IDataTable {
  total?: number
}

interface ITableColumn extends MRT_ColumnDef {
  accessorKey: string
  header: string
}

interface ICell {
  renderedCellValue: any
  row: any
}

export type { ITablePagination, IDataPagination, IDataTable, ICell, ITableColumn }
