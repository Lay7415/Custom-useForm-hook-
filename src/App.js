import classes from './App.module.css'
import {SignIn} from './containers/RegisterPage/SignIn'
import {SignUp} from './containers/RegisterPage/SignUp'

export const App =()=> {
  return (
    <div className={classes.app}>
      <SignIn/>
      <SignUp/>
    </div>
  );
}