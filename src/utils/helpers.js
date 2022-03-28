export const sendRequest = async (requestConfig) => {
    const requestOptions = {
       method: requestConfig.method || 'GET',
       headers: requestConfig.headers
    }
 
    if (requestConfig.method !== 'GET' && requestConfig.body) {
       requestOptions.body = JSON.stringify(requestConfig.body)
    }
    
    const response = await fetch(requestConfig.url, requestOptions)
    if (!response.ok) {
       throw new Error(response.message)
    }
 
    const contentType = response.headers.get('content-type')
 
    if (contentType.includes('text/plain')) {
       return response.text()
    }
 
    if (contentType.includes('application/json')) {
       return response.json()
    }
 
    return {}
}

export const regexpHandler =(regexPattern,regexData)=> {
   // console.log(regexPattern.test('admin@gmail.com'), 'here')
   // console.log(regexPattern.test(regexData), '-->', regexData)
   if(regexPattern !== '' && regexPattern.test(regexData) === true){
      return 'sucsess'
   }
   if(regexPattern !== '' && regexPattern.test(regexData) === false){
      return 'failed'
   }
   // return regexPattern.test(regexData)
} 
