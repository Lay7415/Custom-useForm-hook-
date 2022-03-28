import { useReducer, useState } from "react"
import { UseFormHookInput } from "./UseFormHookInput"
import { regexpHandler } from "../../utils/helpers"

export const useForm =(someData)=> {
    const inintialState = someData || []
    const [formStates,  dispatchFormStates] = useReducer(reducerFormStates,inintialState)
    const [data, setData] = useState({})

    function reducerFormStates (states,action) {
        if(action.type === 'UPDATEVALUE') {
            return states.map((item)=> {
                if(item.keyName === action.keyName) {
                    return {...item, state: action.eventValue, error: ''}
                }
                return item
            })
        }
        if(action.type === 'ERROR' ) {
            return states.map((item) => {
                if(item.isNecessarily && item.state === '') {
                    return {...item, error: 'this field have to not will be empty'}
                }
                if(item.validate && regexpHandler(item.validate, item.state) === 'failed') {
                    return {...item, error: item.errorText}
                }
                if(item.dataComparison && item.state !== '') {
                    let foundElement = states.find((foundElement)=> item.dataComparison === foundElement.keyName)
                    if(foundElement.state !== item.state) {
                        return {...item, error: item.dataComparisonError}
                    }
                }
                return {...item, error: ''}
            })
        }
        return states
    }
    
    const submitHandler =(event)=> {
        event.preventDefault()
        dispatchFormStates({type: 'ERROR'})
        let dataForQuares = {}
        formStates.map((item)=> {
            return dataForQuares[item.keyName] = item.state
        })
        setData(dataForQuares)
    }
    
    
    const renderFormElements =()=> {
        return formStates?.map((item, index) => {
            return <UseFormHookInput
            inputType={item.inputType}
            inputContainerClassName={item.inputContainerClassName}
            inputErrorClassName={item.inputErrorClassName}
            inputClassName={item.inputClassName}
            eyeImgClose={item.eyeImgClose}
            error={item.error}
            errorClassName={item.errorClassName}
            eyeClassName={item.eyeClassName}
            activeEyeImage={item.activeEyeImage}
            isActiveEye={item.isActiveEye}
            labelClassName={item.labelClassName}
            labelName={item.labelName}
            dispatchFormStates={dispatchFormStates}
            closeEyeImage={item.closeEyeImage}
            wrapperClassName={item.wrapperClassName}
            keyName={item.keyName}
            key={index}
            />
        })
    }

    return {
        submitHandler,
        renderFormElements,
        data,
    }
}