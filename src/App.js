import React from 'react';
import './App.css';
import Background from './assets/mountains.jpg';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout style={{ backgroundImage: `url(${Background}` }}>
        <Header transparent title=" " style={{ color: '#D3CCE3' }}>
          <Navigation>
            <Link to="/" style={{ color: '#D3CCE3' }}>Home</Link>
            <Link to="/about" style={{ color: '#D3CCE3' }}>About Me</Link>
            <Link to="/portfolio" style={{ color: '#D3CCE3' }}>Portfolio</Link>

          </Navigation>
        </Header>
        <Drawer title=" " style={{ backgroundColor: '#0000' }}>
          <Navigation>
            <Link to="/" style={{ color: '#D3CCE3' }}>Home</Link>
            <Link to="/about" style={{ color: '#D3CCE3' }}>About Me</Link>
            <Link to="/portfolio" style={{ color: '#D3CCE3' }}>Portfolio</Link>

          </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
      </Layout>
    </div >
  );
}

export default App;
