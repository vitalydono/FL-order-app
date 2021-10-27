import {applyMiddleware, createStore,compose} from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

const store = createStore(reducers,{},
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
)


export default store