import React, { useState, useEffect } from "react";
// import FaceIcon from "@material-ui/icons/Face";
// import IconButton from "@material-ui/core/IconButton";
// import Avatar from "@material-ui/core/Avatar";
// import userStores from "../Stores/userStores";

const UserComponent = (props) => {
  // const [user, setUser] = useState(
  //     userStores.getUserData()
  // )

  // useEffect(() => {
  //     function onUsersChange() {
  //         setUser(userStores.getUserData());
  //     }

  //     userStores.addChangeListener(onUsersChange);

  //     return () => {
  //         userStores.removeChangeListener(onUsersChange);
  //     };
  // });

  // return (<React.Fragment><IconButton color="inherit">{user ? (<Avatar alt={user.name} src={user.avatar_url} />) : (<FaceIcon />)}</IconButton></React.Fragment>);
  return <React.Fragment></React.Fragment>;
};
export default UserComponent;
