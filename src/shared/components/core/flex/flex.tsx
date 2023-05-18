import { Flex as CoreFlex, FlexProps } from '@mantine/core'
import { FC } from 'react'

interface IFlexProps extends FlexProps {
  children: React.ReactNode
}

const Flex: FC<IFlexProps> = ({ children, ...rest }) => {
  return <CoreFlex {...rest}>{children}</CoreFlex>
}

export default Flex
