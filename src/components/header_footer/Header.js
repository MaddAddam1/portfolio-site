import React, { Component } from 'react'
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';


class Header extends Component {

    state = { 
        drawerOpen: false,
        headerShow: false, 

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

    render() { 

        return ( 

            <div>
                <AppBar
                    position='fixed'
                    style={{
                        backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                        boxShadow: 'none',
                        padding: '0px 0px'
                    }}
                >
                    <Toolbar>
                        <div className='header-logo'>
                            <div className='font_righteous header-logo-portfolio'>Caleb Bass</div>
                            <div className='header-logo-title'>Web Developer</div>
                        </div>

                        <IconButton
                            aria-label='Menu'
                            color='inherit'
                            onClick={() => this.toggleDrawer(true)}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <SideDrawer 
                            open={this.state.drawerOpen}
                            onClose={(value) => this.toggleDrawer(value)}
                        />

                    </Toolbar>   

                </AppBar>
            </div>
         );
    }
}
 
export default Header;