import React from 'react';
import './App.scss';
import Button from './components/Button';

const App: React.FC = () => (
  <div className="App">
    <div className="App-content">
      <Button disabled>button-disabled</Button>
      <Button type="link" href="http://localhost:3000/">button-link</Button>
      <Button type="danger">button-danger</Button>
      <Button type="primary">button-primary</Button>
      <Button type="default">button-default</Button>
      <Button type="default" size="large">button-large</Button>
      <Button type="default" size="small">button-small</Button>
      <Button block type="danger">button-block</Button>
    </div>
  </div>
)

export default App;
