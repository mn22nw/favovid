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
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { syncReduxAndRouter } from 'redux-simple-router'
import Routes         from './routes'


//require('file?name=[name].[ext]!../index.html');  //To be able to copy the html file to dist folder via file-loader webpack
if (module.hot) {
  module.hot.accept();
}

const history = createBrowserHistory()
syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
   <Router history={history}>{Routes}</Router>
  </Provider>,
  document.getElementById('root')
)
/*
// setup Firebase listeners
setTimeout(function(){
	//store.dispatch( actions.startListeningToAuth() );
	store.dispatch( actions.startListeningToVideos() );
});  */