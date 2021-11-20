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
  let data
  // Get token to acces api
  async function getToken() {
    const formData = new FormData()
    formData.append('username', 'admin')
    formData.append('password', '1234')

    const options = {
      method: 'POST',
      body: formData
    }

    data = await apiResult('https://api.mediehuset.net/token', options)
    sessionStorage.setItem('authInfo', JSON.stringify(data))

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

    const data = await apiResult('https://api.mediehuset.net/sdg/comments', options);
  } // End of getAccess

  getAccess()

} // End of getData
getData()