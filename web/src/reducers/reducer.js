export default function reducer(state = { criptxo: [], "loading": true }, action) {
  switch (action.type) {
    case "LOAD":
      return { ...state, loading: true };
    case "AWESOME":
      return { ...state, loading: false, criptxo: action.payload.data };
    case "OH_NO":
      return {
        ...state,
        loading: false,
        error: 'No se pudo obtener los datos del API'
      };
    default:
      return state;
  }
}

export function criptomonedas() {
  return {
    "types": ['LOAD','AWESOME','OH_NO'],
    "payload": {
      "request":{url:'/ticker/?limit=10'}
    }
  }
}