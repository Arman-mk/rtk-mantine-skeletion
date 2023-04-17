export interface INavMenuItem {
  title: string
  path: string
  icon?: React.ReactNode | string
  children?: Array<INavMenuItem>
}
