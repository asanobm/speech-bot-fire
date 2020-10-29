import React, { useEffect } from 'react'
import { PageProps } from '../interfaces/PageProps'

const HomePage: React.FC<PageProps> = (props: PageProps) => {
  useEffect(() => {
    console.log(props.history.location)
    // return () => {}
  }, [])
  return (
    <div>
      <div>hello</div>
    </div>
  )
}

export default HomePage
