import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import DayPlanner from '../assets/work-schedule.png';
import Puppy from '../assets/puppy-parlor.png';
import BookFinder from '../assets/bookfinder.png'
import Budget from '../assets/budget.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ height: '250px', background: `url(${DayPlanner}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Day Planner</h6>
                            Day planner allows you to plan your day using color coded time slots.
                    </CardText>
                        <CardActions border>
                            <Button raised ripple href="https://github.com/oakleeohmie/day-planner" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://oakleeohmie.github.io/day-planner/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card >
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ height: '250px', background: `url(${BookFinder}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Book Finder</h6>
                            Book Finder uses an API to find best selling books by title, author or ISBN.
                </CardText>
                        <CardActions border>
                            <Button raised ripple href="https://github.com/oakleeohmie/book-search" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://oakleeohmie.github.io/book-search/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ height: '250px', background: `url(${Puppy}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Puppy Parlor</h6>
                            Puppy Parlor is a spa made to pamper your pet. Grabs room availability from a SQL database so you can only book rooms that are open.
                    </CardText>
                        <CardActions border>
                            <Button raised ripplehref="https://github.com/jacobdolph/Puppy-Parlor" target="_blank" rel="noopener noreferrer">GitHub</Button>
                            <Button raised ripple href="https://puppy-parlor.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                        </CardActions>
                    </Card >
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                }>
                    <CardTitle style={{ height: '250px', background: `url(${Budget}` }}></CardTitle>
                    <CardText style={{ color: 'black' }}>
                        <h6>Budget Tracker</h6>
                        Budget tracker is connected to a Mongo Database that allows you to inout transactions offline and then stores them when you come back online.
            </CardText>
                    <CardActions border>
                        <Button raised ripple href="https://github.com/oakleeohmie/budget-tracker" target="_blank" rel="noopener noreferrer">GitHub</Button>
                        <Button raised ripple href="https://secret-anchorage-34294.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                    </CardActions>
                </Card >
            )
        }
    };
    render() {
        return (
            <div className="category-tabs">
                <h1>My Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ color: '#D3CCE3' }}>JavaScript</Tab>
                    <Tab style={{ color: '#D3CCE3' }}>SQL</Tab>
                    <Tab style={{ color: '#D3CCE3' }}>MongoDB</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
};

export default Projects;