import classes from './RegisterPage.module.css'

export const RegisterPage =()=> {
    return <form className={classes.registerPageContainer}>
        <label className={classes.label}>Email</label>
        <input className={classes.inputField}/>
        <label className={classes.label}>First Name</label>
        <input className={classes.inputField}/>
        <label className={classes.label}>Last Name</label>
        <input className={classes.inputField}/>
        <label className={classes.label}>Password</label>
        <input className={classes.inputField}/>
        <label className={classes.label}>Confirm the password</label>
        <input className={classes.inputField}/>
        <button className={classes.buttonSubmit}>SignUp</button>
    </form>
}