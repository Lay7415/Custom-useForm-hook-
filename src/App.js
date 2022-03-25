import { RegisterPage } from './containers/RegisterPage/RegisterPage';
import classes from './App.module.css'
export const App =()=> {
  return (
    <div className={classes.app}>
      <RegisterPage/>
    </div>
  );
}