/**
 * Fetch is a method for asynchronous AJAX requests. Use this function to unify all the request/response to a JSON Web API
 * Always remember! Fetch return a Promise object!
 * 
 * Usage example:
 * fetchData('https://dog.ceo/api/breeds/image/random', undefined)
 *      .then(data => generateImage(data.message))
 * 
 * Config example:
 *  const config = {
 *      method: 'POST',
 *      headers: {
 *          'Content-type': 'application/json'
 *      },
 *      body: JSON.stringify({ name, comment }) // IN ES2015 if property and value has the same name could be writte only one time.
 *  }
 */

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function parseJSON(response) {
    return response.json();
}

function fetchData(url, config = undefined) {
    return fetch(url, config)
            .then(checkStatus) // Check HTTP is OK
            .then(parseJSON) // Parse to JS object
            .catch(error => cconsole.error('Looks like there was a problem!', error))
}

/**
 * If you have to do multiple request you can use Promise.all() like this:
 * 
 * Promise.all([
 *  fetch('/profile/45'), // Or fetchData('/profile/45')
 *  fetch('/posts/user/45') // Or fetchData('/posts/user/45')
 * ])
 *  .then(data => {
 *      const profile = data[0]; // data[0] contains the result of the first Promise
 *      const posts = data[1]; // data[1] contains the result of the second Promise
 *      
 *      showProfile(profile);
 *      showProfilePosts(posts)
 *  })
 * 
 * N.B. Promise.all() will fail if only one of the promises fail. So use only for really concatenated process.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
 */