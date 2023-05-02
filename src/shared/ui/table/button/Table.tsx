import { FC } from 'react'
import { MantineReactTable } from 'mantine-react-table'

const Table: FC<> = ({ children, ...rest }) => {
  return <MantineReactTable {...rest} />
}

export default Table
