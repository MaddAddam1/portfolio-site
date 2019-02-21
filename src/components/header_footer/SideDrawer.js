
import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {


    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            duration: 1500,
            delay: 100,
            smooth: true
        })

    }

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToSection('about')}>
                    About
                </ListItem>

                <ListItem button onClick={() => scrollToSection('portfolio')}>
                    Portfolio
                </ListItem>

                <ListItem button onClick={() => scrollToSection('contact')}> 
                    Contact
                </ListItem>

                <ListItem button onClick={() => scrollToSection('github')}>
                    GitHub
                </ListItem>
            </List>
        </Drawer>
    )
}

export default SideDrawer;
