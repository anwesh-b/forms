import React from 'react';
import { Router as BrowserRouter, Switch, Route } from 'react-router-dom';

import history from 'utils/history';
import * as routes from 'constants/routes';

import PrivateRouter from './PrivateRouter';
import CustomSurvey from 'components/customSurvey';
import SurveyBuilder from 'components/surveyBuilder';

// Top level application router.
const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <PrivateRouter exact path={routes.BUILDER} component={SurveyBuilder} />
      <Route path={routes.HOME} component={CustomSurvey} />
    </Switch>
  </BrowserRouter>
);

export default Router;
