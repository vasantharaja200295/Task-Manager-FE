import React , {useState} from 'react'
import { Button } from '@/ui/button'
import Icon from '../Icon'
import {useSelector} from 'react-redux';
import getNavRoutes from './navFunctions';
import { ROLES } from '@/routes/constants';
import ToolTip from './sidebarToolTip';
import SideBarItem from './sideBarItem';
import { useLocation } from 'react-router-dom';

const Index = () => {
    const locationn = useLocation();
    const [expanded, setExpanded] = useState(true);
    const isAdmin = useSelector(state => state.user.role === ROLES.HOD);
    const routes = getNavRoutes(isAdmin);

  return (
    <div className={` h-screen w-[${expanded ? '300px' : '60px'}] bg-primary-foreground shadow-md`}>
        <nav className=' h-full flex flex-col shadow-sm'>
            <div className=' p-4 pb-2 flex justify-between items-center'>
                <h3 className={` overflow-hidden transition-all font-bold ${expanded ? "w-auto mr-4" : "w-0"} text-primary`}>TaskManager</h3>
                <Button variant='outline' size='icon' onClick={()=>setExpanded(!expanded)}>
                    {
                        expanded ? <Icon name="ChevronLeft" /> : <Icon name="ChevronRight" />
                    }
                </Button>
            </div>
            <div className=' flex flex-col h-full px-2 gap-2 mt-8'>
                {
                    routes.map((item)=>(
                        <ToolTip key={item.id} Content={item.title} expanded={expanded}>
                            <SideBarItem item={item} active={locationn.pathname === item.path} expanded={expanded} />
                        </ToolTip>
                    ))
                }
            </div>
        </nav>
    </div>
  )
}

export default Index