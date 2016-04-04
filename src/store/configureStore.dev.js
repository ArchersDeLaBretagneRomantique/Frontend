import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
  let store = createStore(rootReducer, initialState, compose(
    // Add other middleware on this line...
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
