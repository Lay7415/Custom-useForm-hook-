import { useForm } from '../../hooks/useForm/useForm'
import { signInData } from '../../utils/constants'
import './FormStyle.css'

export const SignIn =()=> {
    const { data, renderFormElements, submitHandler } = useForm(signInData)
    console.log(data)
    
    return <form onSubmit={submitHandler} className='registerPageContainer'>
        {renderFormElements()}
        <button type='submit' className="submitButton">SignIn</button>
    </form>
}