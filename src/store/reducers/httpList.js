import httpState from '../states/httpList';

export default function (state = httpState, action) {
  switch (action.type) {
    case 'CHANGE_HTTP_CODE':
      return {
        ...httpState,
        httpCode: action.httpCode
      }
    default: 
    return httpState;
  }
}