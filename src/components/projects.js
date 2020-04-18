import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import DayPlanner from '../assets/work-schedule.png';
import CodeQuiz from '../assets/code-quiz.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    < Card shadow={5} style={{ minWidth: '450', margin: 'auto' }
                    }>
                        <CardTitle style={{ height: '250px', background: `url(${DayPlanner}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Day Planner</h6>
                            Day planner allows you to plan your day using color coded time slots.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/oakleeohmie/day-planner" target="_blank">GitHub</Button>
                            <Button colored href="https://oakleeohmie.github.io/day-planner/" target="_blank">Demo</Button>
                        </CardActions>
                    </Card >
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#D3CCE3', height: '176px', background: `url(${CodeQuiz}` }}></CardTitle>
                        <CardText style={{ color: 'black' }}>
                            <h6>Code Quiz</h6>
                            Code quiz is a quiz made from JavaScript that has a timer and decreases time if the question is answered wrong.
                </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/oakleeohmie/code-quiz" target="_blank">GitHub</Button>
                            <Button colored href="https://oakleeohmie.github.io/code-quiz/" target="_blank">Demo</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is NodeJS</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is SQL</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is MongoDB</h1></div>
            )
        }
    };
    render() {
        return (
            <div className="category-tabs">
                <h1>My Projects</h1>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{ color: '#D3CCE3' }}>JavaScript</Tab>
                    <Tab style={{ color: '#D3CCE3' }}>NodeJS</Tab>
                    <Tab style={{ color: '#D3CCE3' }}>SQL</Tab>
                    <Tab style={{ color: '#D3CCE3' }}>MongoDB</Tab>
                </Tabs>
                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
};

export default Projects;