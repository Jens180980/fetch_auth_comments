//Helpers import
import {
  apiResult
} from './helpers.js'

//Main datahandling function
const getData = async () => {
  const formData = new FormData()
  formData.append('username', 'hans')
  formData.append('password', 'hans')

  const options = {
    method: 'POST',
    body: formData
  }

  const data = await apiResult('https://api.mediehuset.net/token', options)
  sessionStorage.setItem('token', JSON.Stringify(data))
  const token = JSON.Parse(sessionStorage.getItem('token'))

  console.log(token);

} // End of getData

// Calling getData
getData()