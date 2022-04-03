import { Redirect, Route } from 'react-router-dom';
import './App.css';
import GoalsContainer from './components/containers/GoalsContainer.js';
import { connect } from 'react-redux';

function App(props) {


  return (

    <div className='app'>
      <Route path={'/goals'} render={(routerProps) => < GoalsContainer {...routerProps} />} />
      
      {props.user && props.user.email ? <Redirect to={'/goals'} /> : <Redirect to={'/signup'} />} 
    </div>
  )

}



const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(App)
