import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// import Users from './sections/users'
// import Products from './sections/1-all'
// import Conversion from './sections/conversion'

import All from './sections/1-all';
import Cms from './sections/2-cms';
import Inta from './sections/3-inta';
import Prog from './sections/4-prog';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function LinkTab(props) {
    return (
        <Tab
            component="a"
            onClick={event => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function Display() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Toutes les Catégories" {...a11yProps(0)} />
                    <LinkTab label="Gestion de Contenu" {...a11yProps(1)} />
                    <LinkTab label="Intelligence Artificielle" {...a11yProps(2)} />
                    <LinkTab label="Langage de Programmation" {...a11yProps(3)} />

                    {/* <LinkTab label="Conversion" {...a11yProps(0)} />
                    <LinkTab label="Utilisateurs" {...a11yProps(1)} />
                    <LinkTab label="Toutes les Catégories" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
                <All></All>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Cms></Cms>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Inta></Inta>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Prog></Prog>
            </TabPanel>

        </div>
    );
}
