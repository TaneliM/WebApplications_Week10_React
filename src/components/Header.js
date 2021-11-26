import {Link} from "react-router-dom"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import {Suspense} from "react";

const Header = () => {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Button component={Link} to="/" color="inherit">{t("Home")}</Button>
                        <Button component={Link} to="/about" color="inherit">{t("About")}</Button>
                    </Typography>
                    <Button color="inherit" onClick={() => changeLanguage("fi")}>FI</Button>
                    <Button color="inherit" onClick={() => changeLanguage("en")}>EN</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default function App() {
    return (
        <Suspense fallback="loading">
            <Header />
        </Suspense>
    )
}
