import React from 'react';
import SideBar from '@/components/sidebar';
import RoleRoute from '@/routes/RoleRoutes';
import { Button } from '@/ui/button';
import { useTheme } from '@/components/themeProvider';

const Layout = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className=' flex flex-row gap-2'>
      <SideBar/>
      <RoleRoute />
      <Button onClick={() => toggleTheme(theme === 'light' ? 'dark' : 'light')}>Theme</Button>
    </div>
  )
}

export default Layout