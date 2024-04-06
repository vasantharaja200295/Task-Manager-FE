import React from 'react';
import SideBar from '@/components/sidebar';
import RoleRoute from '@/routes/RoleRoutes';

const Layout = () => {
  return (
    <div className=' flex flex-row gap-2'>
      <SideBar/>
      <RoleRoute />
    </div>
  )
}

export default Layout