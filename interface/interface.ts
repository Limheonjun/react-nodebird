export interface LogInProps {
  setIsLoggedIn: Function
}

export interface ChildProps {
  children: React.ReactNode
}

export interface FollowProps {
  header: string,
  data: Array<any>
}

export interface ImagesZoomProps {
  images: Array<Object>,
  onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}