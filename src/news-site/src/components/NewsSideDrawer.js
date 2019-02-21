
import React from 'react'
import { Drawer, List, ListItem } from '@material-ui/core';


const NewsSideDrawer = (props) => {


    const scrollToSection = (section) => {
        

    }

    return (
        <Drawer
            anchor='right'
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component='nav'>
                <ListItem button onClick={() => scrollToSection('about')}>
                    Opinion
                </ListItem>

                <ListItem button onClick={() => scrollToSection('about')}>
                    US
                </ListItem>

                <ListItem button onClick={() => scrollToSection('portfolio')}>
                    World
                </ListItem>

                <ListItem button onClick={() => scrollToSection('contact')}> 
                    Sports
                </ListItem>

                <ListItem button onClick={() => scrollToSection('github')}>
                    Finance
                </ListItem>
            </List>
        </Drawer>
    )
}

export default NewsSideDrawer;
