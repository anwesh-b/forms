import React from 'react';
// import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from 'constants/routes';
import history from 'utils/history';

import CustomSurvey from 'components/customSurvey';
import SurveyBuilder from 'components/surveyBuilder';

// Top level application router.
const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.BUILDER} component={SurveyBuilder} />
      <Route path={routes.HOME} component={CustomSurvey} />
    </Switch>
  </BrowserRouter>
);

export default Router;
