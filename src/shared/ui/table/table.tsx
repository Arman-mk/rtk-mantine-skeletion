import { FC } from 'react'
import { MantineReactTable, MantineReactTableProps } from 'mantine-react-table'

interface ITable extends MantineReactTableProps {}

const Table: FC<ITable> = ({ ...rest }: ITable) => {
  return <MantineReactTable {...rest} />
}

export default Table
