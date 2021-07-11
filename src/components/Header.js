import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import '../assets/css/header.css';
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <AppBar className={'header'} position="static">
            <Toolbar>
                <Link className={'homeLink'} to={`/`}>
                    <Typography variant="h6">
                        News Portal
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    )
};

export default Header;