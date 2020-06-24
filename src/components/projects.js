import React, { useState } from 'react';
import { Card, CardText, CardTitle, CardActions, Button } from 'react-mdl';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import DayPlanner from '../assets/work-schedule.png';
import Employee from '../assets/employee-directory.png';
import BookFinder from '../assets/bookfinder.png'
import Budget from '../assets/budget.png';
import Fitness from '../assets/fitness.png';

const Projects = (props) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >
                        JavaScript
              </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => { toggle('2'); }}
                    >
                        React
              </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => { toggle('3'); }}
                    >
                        MongoDB
              </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
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
                </TabPane>
                <TabPane tabId="2">
                    <div>
                        < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                        }>
                            <CardTitle style={{ height: '250px', background: `url(${Employee}` }}></CardTitle>
                            <CardText style={{ color: 'black' }}>
                                <h6>Employee Directory</h6>
                            Employee directory is a react app that allows you to sort through employees alphabetically by first name, preferred coding language or by phone number.

                    </CardText>
                            <CardActions border>
                                <Button raised ripplehref="https://github.com/oakleeohmie/user-directory" target="_blank" rel="noopener noreferrer">GitHub</Button>
                                <Button raised ripple href="https://oakleeohmie-user-directory.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                            </CardActions>
                        </Card >
                    </div>
                </TabPane>
                <TabPane tabId="3">
                    <div className="projects-grid">
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
                        </ Card>
                        < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                            <CardTitle style={{ height: '250px', background: `url(${Fitness}` }}></CardTitle>
                            <CardText style={{ color: 'black' }}>
                                <h6>Fitness Tracker</h6>
                    Fitness tracker is a tracker that allows you to record your exercises and stores them in a MongoDB database.
        </CardText>
                            <CardActions border>
                                <Button raised ripple href="https://github.com/oakleeohmie/fitness-tracker" target="_blank" rel="noopener noreferrer">GitHub</Button>
                                <Button raised ripple href="https://tranquil-bayou-18491.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</Button>
                            </CardActions>
                        </Card >
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default Projects;