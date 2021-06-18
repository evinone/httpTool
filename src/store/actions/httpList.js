import httpState,{HTTP_MSGS} from '../states/httpList';


const CHANGE_HTTP_CODE = 'CHANGE_HTTP_CODE';
const SEARCH_HTTP_CODE = 'SEARCH_HTTP_CODE';

function changeHttpCode (httpCode) {
  return {
    type: CHANGE_HTTP_CODE,
    httpCode
  }
};

function searchHttpCode (httpCode) {
  
  let httpReturn = HTTP_MSGS
  if(httpCode !== ' '){
    httpReturn = HTTP_MSGS.filter(val => {
      return val.id.match(httpCode)
    })
  } else {
    httpReturn = HTTP_MSGS
  }

  return {
    type: SEARCH_HTTP_CODE,
    httpReturn
  }
};
export {
  changeHttpCode,
  searchHttpCode,
}