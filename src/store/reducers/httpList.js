import httpState from '../states/httpList';

export default function (state = httpState, action) {
  // console.log("action___________________________",action)
  switch (action.type) {
    case 'CHANGE_HTTP_CODE':
      return {
        ...state,
        httpCode: action.httpCode
      };
    case 'SEARCH_HTTP_CODE':
      return {
        ...state,
        httpReturn: action.httpReturn
      }
    default: 
    return state;
  }
}