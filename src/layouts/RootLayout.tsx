import { Outlet, PathMatch, useMatch } from 'react-router-dom'
import NavBar from '../components/NavBar'
import React, { ReactNode } from 'react';


function RootOrChildren({ path, RootComponent }: { path: string, RootComponent: React.ReactElement }) {
  const match: PathMatch | null = useMatch(path);
  return match !== null ? RootComponent : <Outlet />
  /* Sedang di Root ? RootComp : Outlet */
}

function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <>
      <NavBar />
      <RootOrChildren path='/' RootComponent={children} />
    </>
  )
}

export default RootLayout