import React from "react";
import { Button } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const HeaderComponent = () => {
    return (<React.Fragment>
        <Button color="inherit" component={RouterLink} to="/">
            Home
        </Button>
        <Button color="inherit" component={RouterLink} to="/dashboard">
            Sign in
        </Button>
    </React.Fragment>)
}

export default HeaderComponent;