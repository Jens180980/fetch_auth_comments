//Helpers import
import {
  apiResult
} from './helpers.js'

//Listening for sendbutton click to fire main function
// sendBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   getData(usernameInput.value, passwordInput.value)
// })

//Main datahandling function
const getData = async () => {
  let tokenData
  // Get token to acces api
  async function getToken() {
    const formData = new FormData()
    formData.append('username', 'admin')
    formData.append('password', '1234')

    const options = {
      method: 'POST',
      body: formData
    }

    tokenData = await apiResult('https://api.mediehuset.net/token', options)
    sessionStorage.setItem('authInfo', JSON.stringify(tokenData))

  } // End of getToken
  getToken()

  // Accessing and retrieving data
  async function getAccess() {
    const loginData = JSON.parse(sessionStorage.getItem('authInfo'));

    const options = {

      method: 'GET',
      headers: {
        'Authorization': `Bearer ${loginData.access_token}`
      }
    }

    const apiData = await apiResult('https://api.mediehuset.net/sdg/comments', options);
    console.log(apiData);
  } // End of getAccess

  getAccess()

} // End of getData
getData()