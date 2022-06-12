const defaultState = []

const ADD_DEVICE = 'ADD_DEVICE_CART'
const REMOVE_ONE_DEVICE = 'REMOVE_ONE_DEVICE'
const REMOVE_DEVICE = 'REMOVE_DEVICE'

export const cartReducer = (state = defaultState, action) => {

  switch (action.type) {
    case ADD_DEVICE:
      const length = state.filter(device => device.id === action.payload.id).length
      if (length < 1) return [...state, {...action.payload, cartId: Date.now(), amount: 1}]
      return state.map(device => {
        if (device.id === action.payload.id) return {...device, amount: device.amount + 1}
        return device
      })
    case REMOVE_ONE_DEVICE:
      return state.map(device => {
        if (device.id === action.payload.id) return {...device, amount: device.amount - 1}
        return device
      })
    case REMOVE_DEVICE:
      return state.filter((device) => device.id !== action.payload)
    default:
      return state
  }
}

export const addInCartAction = (payload) => ({type: ADD_DEVICE, payload})
export const removeOneFromCartAction = (payload) => ({type: REMOVE_ONE_DEVICE, payload})
export const removeFromCartAction = (payload) => ({type: REMOVE_DEVICE, payload})
