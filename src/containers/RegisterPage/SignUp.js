import { useForm } from '../../hooks/useForm/useForm'
import { signUpData } from '../../utils/constants'
import './FormStyle.css'

export const SignUp =()=> {
    const { data, renderFormElements, submitHandler } = useForm(signUpData)
    console.log(data)
    
    return <form onSubmit={submitHandler} className='registerPageContainer'>
        {renderFormElements()}
        <button type='submit' className="submitButton">SignIn</button>
    </form>
}