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
                                    I'm Oaklee. I'm 20 years old. I'm a full-stack web development student at the University of
                        Utah. I currently work at a property preservation company in Salt Lake City while I go to
                        school.
                        After school, I plan on becoming a web developer. So far, coding has been a really challenging
                        yet very rewarding field of study. I love learning new things and this definitely keeps me on my
                        toes. In the future, I hope to master all types of development including both front end and back
                        end.
                            </h3>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default About;