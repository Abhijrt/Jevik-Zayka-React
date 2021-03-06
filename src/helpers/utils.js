// generating form body on the basis of different value
export function getFormBody(params) {
  let formBody = [];

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //user-name = user%20name
    let encodedValue = encodeURIComponent(params[property]); //dheeraj 123 = dheeraj%20123
    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&');
}

// generating form body for multipart form data
export function getFormBodyMultipart(params) {
  let formData = new FormData();

  for (let property in params) {
    formData.append(property, params[property]);
  }
  console.log(formData, 'dd');
  return formData;
}
// function to save token to local storage
export function setToken(token) {
  localStorage.setItem('jaivik_token', token);
  return;
}

//function to get token from local storage
export function getToken() {
  return localStorage.getItem('jaivik_token');
}

export function removeToken() {
  localStorage.removeItem('jaivik_token');
  return;
}
