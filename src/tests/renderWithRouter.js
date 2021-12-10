import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Provider from '../context/MyProvider';

function renderWithRouter(component) {
  const customHistory = createMemoryHistory();

  const returnFromRender = render(
    <Provider>
      <BrowserRouter>
        <Switch>
          <Router history={ customHistory }>
            {component}
          </Router>
        </Switch>
      </BrowserRouter>
    </Provider>,
  );

  return { history: customHistory, ...returnFromRender };
}

export default renderWithRouter;
