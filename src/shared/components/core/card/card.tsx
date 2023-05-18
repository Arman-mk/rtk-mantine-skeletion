import { Card as CoreCard, CardProps } from '@mantine/core'
import { FC } from 'react'

interface IProps extends CardProps {
  children: React.ReactNode
}

const Card: FC<IProps> = ({ children, ...rest }) => {
  return <CoreCard {...rest}>{children}</CoreCard>
}

export default Card
