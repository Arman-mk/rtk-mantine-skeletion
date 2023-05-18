import React, { FC, useCallback, useState } from 'react'
import { PageModeSwitcher } from '@shared/components/section'
import { IconPlus } from '@tabler/icons-react'
import { Button } from '@core/index'

type PageModeType = 'list' | 'grid'

interface ISectionProps {
  title: string
  className?: string
  onClickAdd?: () => void
  rightNode?: React.ReactNode
  showMode?: boolean
  children: React.ReactNode | (({ pageMode }: { pageMode: PageModeType }) => React.ReactNode)
}

const Section: FC<ISectionProps> = ({
  title,
  className,
  onClickAdd,
  rightNode,
  showMode,
  children,
}) => {
  const [pageMode, setPageMode] = useState<PageModeType>('list')

  const onChangeMode = useCallback(
    (mode: PageModeType) => {
      setPageMode(mode)
    },
    [pageMode],
  )

  return (
    <div className={className}>
      <div className='flex justify-between mb-3 items-start'>
        <h2 className='pl-3 md:pl-0 text-2xl mt-0 mb-2 font-bold uppercase'>{title}</h2>
        <div className='actions-block flex items-center'>
          {showMode && <PageModeSwitcher listMode={true} onChange={onChangeMode} />}
          <div className='mr-2' />
          {onClickAdd && (
            <Button className='ml-3' onClick={onClickAdd} leftIcon={<IconPlus />}>
              Add
            </Button>
          )}
          {rightNode && rightNode}
        </div>
      </div>
      {typeof children === 'function' ? children({ pageMode }) : children}
    </div>
  )
}

export default Section
