import React, { Component } from 'react'
import '../resources/styles/appBar.css';

class AppBar extends Component {

    render() {


        return (
            <div className='app-bar-container'>
                <div className='appbar-site-name'>News HQ</div>/>
                <div className='appbar-sections'>
                    Popular
                </div>
                <div className='appbar-sections'>
                    Latest
                </div>
                <div className='appbar-sections'>
                    Sections
                </div>
                <div className='appbar-sections'>
                    About
                </div>

            </div>
        )
    }
}
export default AppBar;