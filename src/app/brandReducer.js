const defaultState = [
  'Samsung', 'Apple', 'HAIER', 'BOSCH', 'Prestigio', 'ASUS', 'Xiaomi', 'Honor', 'LG', 'POZIS', 'Atlant', 'Lenovo'
]

const ADD_BRAND = 'ADD_BRAND'
const REMOVE_BRAND = 'REMOVE_BRAND'

export const brandReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_BRAND:
      return [...state, action.payload]
    case REMOVE_BRAND:
      return state.filter(brand => action.payload !== brand)
    default:
      return state
  }
}

export const addBrandAction = (payload) => ({type: ADD_BRAND, payload})
export const removeBrandAction = (payload) => ({type: REMOVE_BRAND, payload})