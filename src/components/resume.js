import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import ResumePDF from '../assets/Resume.pdf'
import ResumeImg from '../assets/resume.png';

class Resume extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='resume'>
                            <h1>My Resume</h1>
                            <hr />
                            <div className='resume-pic'>
                                <h6>Below is a screenshot preview of my resume, to view the whole thing,<Button style={{ color: '#D3CCE3', fontSize: '30px' }} ripple href={ResumePDF} target="_blank" rel="noopener noreferrer">Click here</Button> </h6>
                            </div>
                            <div className='resume-img'>
                                <img src={ResumeImg} />
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div >
        )
    }
}
export default Resume;