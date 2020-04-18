import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div><h1>This is Javascript</h1></div>
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