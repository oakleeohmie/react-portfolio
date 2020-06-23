import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class About extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='about-page'>
                            <h1>About Me</h1>
                            <hr />
                            <div className='about-info'>
                                <h3>
                                    I'm Oaklee. I'm 20 years old. So far, coding has been a really challenging
                                    yet very rewarding field of study. I love learning new things and this definitely keeps me on my
                                    toes. In the future, I hope to master all types of development including both front end and back
                                    end. Please check out my github for more info on my projects as I only listed a few on my projects tab.
                            </h3>
                            </div>
                            <div className='social-links'>
                                <a href="https://github.com/oakleeohmie" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/oakleeohmie/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default About;