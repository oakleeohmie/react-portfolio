import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <div className='contact-page'>
                            <h1>Contact Me</h1>
                            <hr />
                            <div className='phone'>
                                <i className="fa fa-mobile"></i>
                                <h3>
                                    801.205.4347</h3>
                            </div>

                            <div className='email'>
                                <i className="fas fa-envelope"></i>
                                <h3>
                                    oakleeohmie@outlook.com
                                </h3>
                            </div>
                        </div>
                    </Cell>

                </Grid>
            </div>
        );
    }
}

export default Contact;