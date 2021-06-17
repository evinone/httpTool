const CHANGE_HTTP_CODE = 'CHANGE_HTTP_CODE';
const SEARCH_HTTP_CODE = 'SEARCH_HTTP_CODE';

function changeHttpCode (httpCode) {
  return {
    type: CHANGE_HTTP_CODE,
    httpCode
  }
}

function searchHttpCode (httpCode) {
  return {
    type: SEARCH_HTTP_CODE,
    httpCode
  }
}
export {
  changeHttpCode,
  searchHttpCode
}