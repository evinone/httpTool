const CHANGE_HTTP_CODE = 'CHANGE_HTTP_CODE';

function changeHttpCode (httpCode) {
  return {
    type: CHANGE_HTTP_CODE,
    httpCode
  }
}

export {
  changeHttpCode
}