import { useState } from "react"


export const UseFormHookInput =(props)=> {
    const { 
        labelClassName,
        labelName,
        inputContainerClassName,
        inputType,
        inputErrorClassName,
        inputClassName,
        activeEyeImage,
        eyeClassName,
        closeEyeImage,
        isActiveEye,
        dispatchFormStates,
        wrapperClassName,
        errorClassName,
        error,
        keyName,
    } = props

    const [type, setType] = useState(inputType)

    const changeInputType =()=> {
        if(type === 'text') {
            setType('password')
        } else if(type === 'password') {
            setType('text')
        }
    }

    return <div className={wrapperClassName}>
        <label className={labelClassName}>{labelName}</label>
        <div className={inputContainerClassName? inputContainerClassName : ''}>
        <input 
        type={type}  
        className={error !== ''? inputErrorClassName : inputClassName}
        onChange={
            (event)=> dispatchFormStates({type: 'UPDATEVALUE',eventValue: event.target.value, keyName: keyName})
        } 
        />
        {
            isActiveEye && <img 
            role="presentation" 
            src={type === 'text'? activeEyeImage : closeEyeImage} 
            onClick={changeInputType} 
            className={eyeClassName} alt=""
            />
        }
        
        </div>
        {error !== '' && <p className={errorClassName}>{error}</p>}
    </div>
}