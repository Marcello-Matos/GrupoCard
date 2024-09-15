import React, { useState } from 'react';
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import {
   Box,
   List,
   Drawer, 
   ListItem,
   ListItemText, 
   ListItemButton, 
   ListItemIcon, 
   listItemTextClasses
}  from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRounded from "@mui/icons-material/CommentRounded";
import PhoneRounded from '@mui/icons-material/PhoneRounded';
import ShoppingCartRounded from '@mui/icons-material/ShoppingCartRounded';
import PhonelinkRounded from '@mui/icons-material/PhonelinkRounded';

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOpitions = [
    {
      text: "Home",
      icon: <HomeIcon />
    },
    {
      text: "Sobre",
      icon: <InfoIcon />
    },
    {
      text: "Testemunho",
      icon: <CommentRounded />
    },
    {
      text: "Contato",
      icon: <PhonelinkRounded />
    },
    {
      text: "Cart",
      icon: <ShoppingCartRounded />
    },
  ];

  return (
    <nav>
      <div className="nav-logo-container">
        <img src={`${process.env.PUBLIC_URL}/Assets/Logo.svg`} alt="Logo" />
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Testemunho</a>
        <a href="">Contato</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        <button className="primary-button"> Faça sua Reserva</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onclose={() => setOpenMenu(false)} anchor="right" >
        <Box
            sx={{width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onkeyDown={() => setOpenMenu(false)}

            >
              <List>
                {menuOpitions.map((item) => (
                  <ListItem key={item.text} disablePadding >
                    <ListItemButton>
                      <ListItemIcon>
                        {item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>

                  </ListItem>
                ) )}
              </List>
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
