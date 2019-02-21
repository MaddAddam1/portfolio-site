import React, { Component } from 'react';
import { Fade, Flip } from 'react-reveal';
import csharp from '../../resources/images/csharp.png';
import vs from '../../resources/images/visualstudio.png';
import react from '../../resources/images/reactlogo.png';
import js from '../../resources/images/jslogo2.png';
import html from '../../resources/images/html.png';
import css from '../../resources/images/css.png';
import efcore from '../../resources/images/efcore.png';
import sql from '../../resources/images/sql.png';
import salesforce from '../../resources/images/salesforce.png';
import git from '../../resources/images/gitlogo.png';
import dotnet from '../../resources/images/dotnetcore.png';

const Skills = () => {

    return ( 

        <div className='skills-wrapper'>
            <h2>Skills</h2>
   
            <div className='skills-icons'>
                <Flip top delay={250}>
                    <div className='icon-images'>
                        <img className='icon-images' src={csharp} />
                    </div>
                </Flip>

                <Flip top delay={400}>
                    <div className='icon-images'>
                        <img className='icon-images' src={efcore} />
                    </div>
                </Flip>

                <Flip top delay={550}>
                    <div className='icon-images'>
                        <img className='icon-images' src={html} />
                    </div>
                </Flip>

                <Flip top delay={700}>
                    <div className='icon-images'>
                        <img className='icon-images' src={css} />
                    </div>
                </Flip>

                <Flip top delay={850}>
                    <div className='icon-images'>
                        <img className='icon-images' src={js} />
                    </div>
                </Flip>

                <Flip top delay={1000}>
                    <div className='icon-images'>
                        <img className='icon-images' src={react} />
                    </div>
                </Flip>

                <Flip top delay={1150}>
                    <div className='icon-images'>
                        <img className='icon-images' src={sql} />
                    </div>
                </Flip>


                </div>
                
            <h2>Technology</h2>

            <div className='tech-used'>
                <Flip bottom delay={550}>
                    <div>
                        <img src={salesforce} />
                    </div>
                </Flip>

                <Flip bottom delay={700}>
                    <div>
                        <img src={vs} />
                    </div>
                </Flip>

                <Flip bottom delay={850}>
                    <div>
                        <img src={git} />
                    </div>
                </Flip>


                    </div>
        </div>

    )
    
}

export default Skills;