export const REQ_INIT = 'REQ_INIT'
export const REQ_ONBOARDED = 'REQ_ONBOARDED'

export function reqInitiated(){
  return{
      type: REQ_INIT,
      payload: true
  }
}

export function reqSuccess(){
  return{
      type: REQ_ONBOARDED,
      payload: false
  }
}