import React from 'react';
import Binomial from "./distributions/Binomial";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withStyles} from '@material-ui/core/styles';
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Geometric from "./distributions/Geometric";
import NegativeBinomial from "./distributions/NegativeBinomial";
import {ThemeProvider} from "@material-ui/core/styles";
import {createMuiTheme} from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const distrMap = {
    'binom': {name: 'Binomial', jcx: <Binomial/>},
    'geom': {name: 'Geometric', jcx: <Geometric/>},
    'negative_binom': {name: 'Negative Binomial', jcx: <NegativeBinomial/>}
};

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    }
});


const theme = createMuiTheme({
    palette: {
        primary: blue,
        secondary: {
            main: '#009688',
        },
    },
});

class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            currentGraph: 'binom',
            sideOpen: false,
            discrete: false
        };
        this.handleSelectDistribution = this.handleSelectDistribution.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.collapseDiscrete = this.collapseDiscrete.bind(this);
    }

    handleSelectDistribution(id) {
        this.setState({currentGraph: id});
        this.toggleDrawer();
        this.collapseDiscrete();
    }

    collapseDiscrete() {
        this.setState(state => (
            {discrete: !state.discrete}
        ))
    };

    toggleDrawer() {
        this.setState(state => ({
            sideOpen: !state.sideOpen
        }));
    }

    render() {
        const {classes} = this.props;
        return (
            <div>
                <ThemeProvider theme={theme}>
                    <Drawer anchor="left"
                            open={this.state.sideOpen}
                            onClose={this.toggleDrawer}>
                        <div role="presentation"
                             className={classes.list}>
                            <ListItem button onClick={this.collapseDiscrete}>
                                <ListItemText primary="Discrete"/>
                                {this.state.discrete ? <ExpandLess/> : <ExpandMore/>}
                            </ListItem>
                            <Collapse in={this.state.discrete} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {Object.keys(distrMap).map(distr =>
                                        <ListItem key={distr} button className={classes.nested}
                                                  onClick={(_) => this.handleSelectDistribution(distr)}>
                                            <ListItemText primary={distrMap[distr].name}/>
                                        </ListItem>
                                    )}
                                </List>
                            </Collapse>
                        </div>
                    </Drawer>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton edge="start" className={classes.menuButton}
                                        color="inherit" aria-label="menu"
                                        onClick={this.toggleDrawer}>
                                <MenuIcon/>
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Statistics and probability
                            </Typography>
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
                {distrMap[this.state.currentGraph].jcx}
            </div>
        )
    }
}

export default withStyles(styles)(App);
