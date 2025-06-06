import StreamClientProvider from '@/components/providers/StreamProvider'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <StreamClientProvider>{children}</StreamClientProvider>
  )
}

export default Layout;
