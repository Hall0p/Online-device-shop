const defaultState = [
  {id: 1, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '42 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '1 ГБ'},
    ]
  },
  {id: 2, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '128 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 3, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 4, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 5, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 6, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '12 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 7, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '12 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 8, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 9, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '41 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 10, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 11, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 12, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 13, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 14, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 15, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 16, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 17, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 18, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 19, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
  {id: 20, options: [
    {feature: 'Оперативная память', value: '5 ГБ'},
    {feature: 'Камера', value: '48 МП'},
    {feature: 'Процессор', value: 'пентиум 5'},
    {feature: 'Объём памяти', value: '128 ГБ'},
    ]
  },
]
const ADD_FEATURE = 'ADD_FEATURE'
const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const featureReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_FEATURE:
      return [...state, action.payload]
    case REMOVE_FEATURE:
      return [state.filter(device => device.id !== action.payload)]
    default:
      return state
  }
}

export const addFeatureAction = (payload) => ({type: ADD_FEATURE, payload})
export const removeFeatureAction = (payload) => ({type: REMOVE_FEATURE, payload})