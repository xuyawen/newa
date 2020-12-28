import React from 'react';
import './App.scss';
import Button from './components/Button';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';

const App: React.FC = () => (
  <div className="App">
    <div className="App-button">
      <Button disabled>button-disabled</Button>
      <Button type="link" href="http://localhost:3000/">button-link</Button>
      <Button type="danger">button-danger</Button>
      <Button type="primary">button-primary</Button>
      <Button type="default">button-default</Button>
      <Button type="default" size="large">button-large</Button>
      <Button type="default" size="small">button-small</Button>
      <Button block type="danger">button-block</Button>
    </div>
    <div className="App-menu">
      <Menu>
        <MenuItem>item1</MenuItem>
        <MenuItem>item2</MenuItem>
        <MenuItem>item3</MenuItem>
      </Menu>
    </div>
  </div>
)

export default App;
