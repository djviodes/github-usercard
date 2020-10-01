import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/djviodes
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/djviodes')
  .then(res => {
    const githubObject = res.data
    const githubProfile = githubCardMaker(githubObject)
    entryPoint.appendChild(githubProfile)
  })
  .catch(error => {
    debugger
  })

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.push('tetondan')
followersArray.push('dustinmyers')
followersArray.push('justsml')
followersArray.push('luishrd')
followersArray.push('bigknell')

followersArray.forEach(username => {
  axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      const githubObject = res.data
      const githubProfile = githubCardMaker(githubObject)
      entryPoint.appendChild(githubProfile)
    })
    .catch(error => {
      debugger
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const entryPoint = document.querySelector('.cards')

function githubCardMaker (githubObject) {

  const profileCard = document.createElement('div')
  const profileImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const profileName = document.createElement('h3')
  const profileUsername = document.createElement('p')
  const profileLocation = document.createElement('p')
  const profile = document.createElement('p')
  const profileAddress = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  profileImg.src = githubObject.avatar_url
  profileName.textContent = githubObject.name
  profileUsername.textContent = githubObject.login
  profileLocation.textContent = `Location ${githubObject.location}`
  profile.textContent = 'Profile:'
  profileAddress.href = githubObject.html_url
  profileAddress.textContent = githubObject.html_url
  followers.textContent = `Followers: ${githubObject.followers}`
  following.textContent = `Following: ${githubObject.following}`
  bio.textContent = `Bio: ${githubObject.bio}`

  profileCard.classList.add('card')
  cardInfo.classList.add('card-info')
  profileName.classList.add('name')
  profileUsername.classList.add('username')

  profileCard.appendChild(profileImg)
  profileCard.appendChild(cardInfo)
  cardInfo.appendChild(profileName)
  cardInfo.appendChild(profileUsername)
  cardInfo.appendChild(profileLocation)
  cardInfo.appendChild(profile)
  profile.appendChild(profileAddress)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  return profileCard
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
