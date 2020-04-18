import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='landing-page'>
                            <h1>Oaklee Ohmie</h1>
                            <h2>Fullstack Web Developer</h2>
                            <hr />
                            <p> CSS | Bootsrap | JavaScript | NodeJS | React | Express | MongoDB | SQL</p>
                            <div className='social-links'>
                                <a href="https://github.com/oakleeohmie" target="_blank"><i class="fab fa-github"></i></a>
                                <a href="https://www.linkedin.com/in/oakleeohmie/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}
export default Landing;