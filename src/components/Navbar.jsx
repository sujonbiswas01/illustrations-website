import { AppBar,Typography,IconButton,Button,List,ListItem,ListItemText,useMediaQuery, Toolbar, Drawer } from "@mui/material"
import Menuicon from '@mui/icons-material/menu'
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
function Navbar() {
    const [open,setopen]= useState(false);
    const Theme=useTheme();
    const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))
    const menuItems = ["About","services","Projects","Contacts"];
  return (
    <>
    <AppBar className="Navbar " position="sticky" sx={{backgroundColor:"white",color:"black"}}>
      <Toolbar>
        {IsMobile ?(
          <div>
            <IconButton color="inherit" onClick={()=>setopen(true)}>
              <Menuicon/>

            </IconButton>
          </div>
        ): (
          <>
          <Typography sx={{flexGrow:1}}>
            <img src="/logo1.png" className="imsize" id="imgsize" alt="" />

          </Typography>
          {
            menuItems.map((item)=>(
              <Button color="inherit" key={item}>{item}</Button>
            ))
          }
          <Button variant="outlined" sx={{color:"#2AB691",
            backgroundColor:"white",
            borderRadius:"10px",
            "&:hover":{
              backgroundColor:"#2AB666",
              color:"white"
            }
          }}>
            Sign up
          </Button>
          </>
        )}

      </Toolbar>
    </AppBar>
    <Drawer anchor="left" open={open} onClose={()=>setopen(false)}>
      <List>
        {
          menuItems.map((item)=>(

            <ListItem button key={item} onClick={()=>setopen(false)}>
              <ListItemText>{item}</ListItemText>

            </ListItem>
          ))
        }
        <ListItem button> <ListItemText primary="sign up" /> </ListItem>
      </List>

    </Drawer>

    </>
  )
}

export default Navbar