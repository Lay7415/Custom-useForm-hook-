import { useForm } from '../../hooks/useForm/useForm'
import { regexpPatterns } from '../../utils/constants'
import eyeImgClose from './../../images/closeEye.png'
import eyeImgActive from './../../images/openEye.png'
import './SignIn.css'

export const SignUp =()=> {
    const { data, renderFormElements, submitHandler } = useForm([
        {
            labelName: 'First Name',
            labelClassName: 'label',
            keyName: 'firstName',
            state: '',
            inputClassName:'inputField',
            inputErrorClassName:'inputErrorField',
            inputType: 'text', 
            errorClassName: 'error',
            errorText: 'bla bla email', 
            error: '',
            isNecessarily: true,
            wrapperClassName: 'formElementContainer',
        },
        {
            labelName: 'Last Name',
            labelClassName: 'label',
            keyName: 'lastName',
            state: '',
            inputClassName:'inputField',
            inputErrorClassName:'inputField',
            inputType: 'password', 
            errorClassName: 'error',
            errorText: 'bla bla email', 
            error: '',
            isNecessarily: true,
            wrapperClassName: 'formElementContainer',
        },
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
        {
            labelName: 'Confirm password',
            dataComparison: 'password',
            dataComparisonError: 'this passwords no match',
            labelClassName: 'label',
            keyName: 'confirmedPassword',
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