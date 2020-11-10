import React from "react";
import FaceIcon from "@material-ui/icons/Face";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

const UserComponent = (props) => {
  return (
    <React.Fragment>
      <IconButton color="inherit">
        {props.user ? (
          <Avatar alt={props.user.email} src={props.user.photoURL} />
        ) : (
          <FaceIcon />
        )}
      </IconButton>
    </React.Fragment>
  );
};
export default UserComponent;
