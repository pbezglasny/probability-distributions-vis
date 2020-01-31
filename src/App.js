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


const distrMap = {
    'binom': <Binomial/>,
    'bernoulli': <p/>
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
                                <ListItem button className={classes.nested}
                                          onClick={(_) => this.handleSelectDistribution('binom')}>
                                    <ListItemText primary="Binomial"/>
                                </ListItem>
                                <ListItem button className={classes.nested}
                                          onClick={(_) => this.handleSelectDistribution('bernoulli')}>
                                    <ListItemText primary="Bernoulli"/>
                                </ListItem>
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
                {distrMap[this.state.currentGraph]}
            </div>
        )
    }
}

export default withStyles(styles)(App);
