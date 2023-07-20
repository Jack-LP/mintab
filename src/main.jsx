import { render } from 'preact';
import { App } from './app.jsx';
import { AppWrapper } from './context/AppContext.jsx';
import './index.css';

render(
  <AppWrapper>
    <App />
  </AppWrapper>,
  document.getElementById('app')
);
