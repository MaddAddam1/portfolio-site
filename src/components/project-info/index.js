import React from 'react'
import yotsubaNo from '../../resources/images/yotsuba-no.jpg';
import yotsubaSalute from '../../resources/images/yotsuba-salute.png';
import yotsubaGun from '../../resources/images/yotsuba-gun.jpg';
import Zoom from 'react-reveal/Zoom';

const ProjectInfo = () => {

    return (
        <div className='projects-background'>
            
            <div className='project-section-background'>
                <div className='project-center-wrapper'>
                    <div className='project-wrapper'>

                        <Zoom duration={500} delay={500}>
                            <div className='project-item'>
                                <div className='project-item-outer-wrapper'>
                                    <div className='project-item-inner-wrapper'>
                                        <div className='project-item-title'>
                                            <h2>Project Title</h2>
                                        </div>
                                        <div className='project-item-details'>
                                            details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>

                        <Zoom duration={600} delay={600}>
                            <div className='project-item'>
                                <div className='project-item-outer-wrapper'>
                                    <div className='project-item-inner-wrapper'>
                                        <div className='project-item-title'>
                                            <h2>Project Title</h2>
                                        </div>
                                        <div className='project-item-details'>
                                            details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>

                        <Zoom duration={700} delay={700}>
                            <div className='project-item'>
                                <div className='project-item-outer-wrapper'>
                                    <div className='project-item-inner-wrapper'>
                                        <div className='project-item-title'>
                                            <h2>Project Title</h2>
                                        </div>
                                        <div className='project-item-details'>
                                            details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>

                        <Zoom duration={800} delay={800}>
                            <div className='project-item'>
                                <div className='project-item-outer-wrapper'>
                                    <div className='project-item-inner-wrapper'>
                                        <div className='project-item-title'>
                                            <h2>Project Title</h2>
                                        </div>
                                        <div className='project-item-details'>
                                            details
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Zoom>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProjectInfo;
 