import React,{useState} from 'react'
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { Divider,styled} from '@mui/material';
import DrawerLogin from './DrawerLogin';
const ToolBar=styled(Toolbar)(({theme})=>({
    [theme.breakpoints.up('sm')]:
    {
        display:'none'
    }
}))
function DrawerButton(){
    const [isOpen, setIsOpen] = useState(false);
  return (
    <ToolBar>
    <IconButton  onClick={()=>setIsOpen(true)}>
    <MenuIcon style={{color:'white'}}/>
    </IconButton>
    <Drawer  open={isOpen}  onClose={()=>setIsOpen(!isOpen)}>
        <Toolbar>
            <List style={{width:'30vw'}}>
             <ListItem disablePadding>
               <DrawerLogin/>
             </ListItem>
             <Divider/>
            </List>
        </Toolbar>
    </Drawer>
    </ToolBar>
  )
}

export default DrawerButton