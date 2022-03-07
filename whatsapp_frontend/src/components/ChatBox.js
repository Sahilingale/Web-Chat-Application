import React, { useContext } from "react";
import { Dialog, Box, makeStyles, withStyles } from "@material-ui/core";
import Menu from "./menu/Menu";
import { UserContext } from "../context/UserProvider";

//components
import Chat from "./chat/Chat";
import EmptyChat from "./chat/EmptyChat";

const useStyles = makeStyles({
  component: {
    display: "flex",
  },
  sideBar: {
    minWidth: 415,
  },
  chatBar: {
    borderLeft: "1px solid rgba(0, 0, 0, 0.14)",
    width: "71%",
    height: "100%",
    minWidth: 300,
  },
});

const style = {
  dialogPaper: {
    height: "95%",
    width: "91%",
    boxShadow: "none",
    borderRadius: 0,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
};

const ChatBox = ({ classes }) => {
  const classname = useStyles();
  const { person } = useContext(UserContext);

  return (
    <Dialog
      open={true}
      classes={{ paper: classes.dialogPaper }}
      BackdropProps={{ style: { backgroundColor: "unset" } }}
    >
      <Box className={classname.component}>
        <Box className={classname.sideBar}>
          <Menu />
        </Box>
        <Box className={classname.chatBar}>
          {Object.keys(person).length ? <Chat /> : <EmptyChat />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(style)(ChatBox);
