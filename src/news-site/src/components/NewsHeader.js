import React, { Component } from 'react';
import NewsSideDrawer from './NewsSideDrawer';
import { AppBar, Toolbar, Tabs, Menu, MenuItem, Select, Button, InputLabel} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import '../resources/styles/newsHeader.css';


class NewsHeader extends Component {
    state = {  }

    state = { 
        drawerOpen: false,
        headerShow: false, 
        menuOpen: null,

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);    
    }
    

    handleScroll = () => {

        if (window.scrollY > 150) {
            this.setState({
                headerShow: true
            })
        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    toggleDrawer = (value) => {
         this.setState({
             drawerOpen: value
         })
    }

    handleClick = event => {
        this.setState({ menuOpen: event.currentTarget });
      };
    
      handleClose = () => {
        this.setState({ menuOpen: null });
      };
    

    render() { 

        const { menuOpen } = this.state;

        return ( 

            <div className='news-appbar'>
                
                <AppBar>

                    <Toolbar>
                        
                        <div className='header-logo-news'>
                            <div className='font_righteous header-logo-name'>News HQ</div>
                            <div className='header-logo-sub-title'>Digging for the Truth!</div>
                        </div>

                        <IconButton
                            aria-label='Menu'
                            color='inherit'
                            onClick={() => this.toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <NewsSideDrawer 
                            open={this.state.drawerOpen}
                            onClose={(value) => this.toggleDrawer(value)}
                        />

                        <div class="navbar">
                            <a href="#home">Home</a>
                            <div class="dropdown">
                                <button class="dropbtn">Sections 
                                <i class="fa fa-caret-down"></i>
                                </button>
                                <div class="dropdown-content">
                                    <a href="#">Politics</a>
                                    <a href="#">World</a>
                                    <a href="#">Culture</a>
                                    <a href="#">Technology</a>
                                    <a href="#">Business</a>
                                </div>
                            </div> 
                        </div>
                    </Toolbar>
                </AppBar>
            </div>

         );

    }
}
 
export default NewsHeader;


/*

<Button
                            aria-owns={menuOpen ? 'simple-menu' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleClick}
                            >
                            Open Menu
                        </Button>

                        <Menu
                            id="simple-menu"
                            anchorEl={menuOpen}
                            open={Boolean(menuOpen)}
                            onClose={this.handleClose}
                        >

                            <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                            <MenuItem onClick={this.handleClose}>My account</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </Menu>
*/