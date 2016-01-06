/*
This is the entry point for the app! From here we merely import our routes definitions,
then use React and React-DOM to render it.
*/

//REACT
import { render } from 'react-dom'
import React          from 'react'

//REDUX 
import { Provider } from 'react-redux'
import	store from './store'

//ROUTER
import { Router, Route } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'
import Routes         from './routes'
import { createHistory, useBasename } from 'history'

import actions from './actions';


if (module.hot) {
  module.hot.accept();
}

let history = createHistory();
/*
// Run our app under the /base URL.
let history = useBasename(createHistory)({
  basename: '/favovid'
})*/

//const history = createBrowserHistory()
syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
   <Router history={history}>{Routes}</Router>
  </Provider>,
  document.getElementById('root')
)

// setup Firebase listeners
setTimeout(function(){
	store.dispatch( actions.startListeningToAuth() );
	store.dispatch( actions.fetchVideos() );
});