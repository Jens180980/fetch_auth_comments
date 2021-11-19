// Fetch API data
export const apiResult = async (url, options) => {
  try {
    const response = await fetch(url, options)
    const result = await response.json()
    return result
  } catch (err) {
    errMsg.innerText = (`Error: ${err}`)
    console.log(`Error: ${err}`);
  }
}