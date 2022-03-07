import React, { useState, useContext } from "react";
import { MoreVert } from "@material-ui/icons";
import { Menu, MenuItem, makeStyles } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { AccountContext } from "../../context/AccountProvider";
import InfoDrawer from "../drawer/InfoDrawer";

const useStyles = makeStyles({
  menuItem: {
    padding: "15px 60px 5px 24px",
    fontSize: 14,
    color: "#4A4A4A",
  },
  logout: {
    border: "none!important",
    boxShadow: "none!important",
    "& > *": {
      padding: "0px!important",
    },
  },
});

const HeaderMenu = () => {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setAccount } = useContext(AccountContext);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const onLogoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setAccount("");
  };
  const toggleDrawer = () => {
    setOpenDrawer(true);
  };

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          className={classes.menuItem}
          onClick={() => {
            handleClose();
            toggleDrawer();
          }}
        >
          Profile
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={handleClose}>
          <GoogleLogout
            className={classes.logout}
            buttonText="Logout"
            onLogoutSuccess={onLogoutSuccess}
          ></GoogleLogout>
        </MenuItem>
      </Menu>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default HeaderMenu;
