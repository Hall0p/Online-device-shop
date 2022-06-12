const defaultState = [
  'Холодильники',
  'Смартфоны',
  'Стиральные машины',
  'Ноутбуки',
  'Планшеты',
]

const ADD_CATEGORY = 'ADD_CATEGORY'
const REMOVE_CATEGORY = 'REMOVE_CATEGORY'

export const categoryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, action.payload]
    case REMOVE_CATEGORY:
      return state.filter(category => category.category !== action.payload)
    default:
      return state
  }
}

export const addCategoryAction = (payload) => ({type: ADD_CATEGORY, payload})
export const removeCategoryAction = (payload) => ({type: REMOVE_CATEGORY, payload})