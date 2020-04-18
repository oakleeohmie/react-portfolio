import React from 'react';
import './App.css';
import Peach from './mountains.jpg';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{ height: '500px', position: 'relative' }}>
      <Layout style={{ backgroundImage: `url(${Peach}` }}>
        <Header transparent title=" " style={{ color: '#D3CCE3' }}>
          <Navigation>
            <Link to="/" style={{ color: '#D3CCE3' }}>Home</Link>
            <Link to="/contact" style={{ color: '#D3CCE3' }}>Contact Me</Link>
            <Link to="/portfolio" style={{ color: '#D3CCE3' }}>Portfolio</Link>
            <Link to="/resume" style={{ color: '#D3CCE3' }}>Resume</Link>
          </Navigation>
        </Header>
        <Drawer title="   " style={{ backgroundColor: '#0000' }}>
          <Navigation>
            <Link to="/" style={{ color: '#D3CCE3' }}>Home</Link>
            <Link to="/contact" style={{ color: '#D3CCE3' }}>Contact Me</Link>
            <Link to="/portolio" style={{ color: '#D3CCE3' }}>Portfolio</Link>
            <Link to="/resume" style={{ color: '#D3CCE3' }}>Resume</Link>
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
