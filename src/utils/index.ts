export const deepcopy = function <T>(params:T):T {
  if(typeof params === 'object'){
    return JSON.parse(JSON.stringify(params))
  }else{
    return params
  }
}