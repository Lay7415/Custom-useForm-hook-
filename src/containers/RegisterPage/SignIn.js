import './SignIn.css'
import { useForm } from '../../hooks/useForm/useForm'
import eyeImgClose from './../../images/closeEye.png'
import eyeImgActive from './../../images/openEye.png'
import { regexpPatterns } from '../../utils/constants'

export const SignIn =()=> {
    const { data, renderFormElements, submitHandler } = useForm([
        {
            labelName: 'Email',
            labelClassName: 'label',
            keyName: 'email',
            state: '',
            inputClassName:'inputField',
            inputErrorClassName:'inputErrorField',
            inputType: 'text', 
            validate: regexpPatterns.email,
            errorClassName: 'error',
            errorText: 'bla bla email', 
            error: '',
            isNecessarily: true,
            wrapperClassName: 'formElementContainer',
        },
        {
            labelName: 'Password',
            labelClassName: 'label',
            keyName: 'password',
            state: '',
            inputClassName:'inputField',
            inputErrorClassName:'inputField',
            inputType: 'password', 
            errorClassName: 'error',
            errorText: 'bla bla email', 
            error: '',
            isNecessarily: true,
            wrapperClassName: 'formElementContainer',
            inputContainerClassName: 'inputErrorFieldContainer',
            isActiveEye: true,
            eyeClassName: 'eyeStyle',
            closeEyeImage: eyeImgClose,
            activeEyeImage: eyeImgActive,
        },
    ])
    console.log(data)
    
    return <form onSubmit={submitHandler} className='registerPageContainer'>
        {renderFormElements()}
        <button type='submit' className="submitButton">SignIn</button>
    </form>
}