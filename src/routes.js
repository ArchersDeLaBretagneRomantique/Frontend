import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
import PresentationPage from './components/PresentationPage';
import InfoPage from './components/InfoPage';
import PhotosPage from './components/PhotosPage';
import NotFoundPage from './components/NotFoundPage.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="presentation" component={PresentationPage} />
    <Route path="info" component={InfoPage} />
    <Route path="photos" component={PhotosPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
