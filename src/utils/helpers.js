export const regexpHandler =(regexPattern,regexData)=> {
   if(regexPattern !== '' && regexPattern.test(regexData) === true){
      return 'sucsess'
   }
   if(regexPattern !== '' && regexPattern.test(regexData) === false){
      return 'failed'
   }
} 
