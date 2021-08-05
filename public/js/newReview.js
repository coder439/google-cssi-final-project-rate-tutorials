const reviewDescription = document.querySelector('#reviewDescription').innerHTML
let params = (new URL(document.location)).searchParams;
let courseNameValue = params.get("courseName");
courseNameh2 = document.querySelector('#courseName')
courseNameh2.innerHTML = courseNameValue

const publishReview = () => {
    const reviewDescription = document.querySelector('#reviewDescription').innerHTML
    let params = (new URL(document.location)).searchParams;
    let courseNameValue = params.get("courseName");
    console.log(courseNameValue)

   const courseRef = firebase.database().ref(`courses/${courseNameValue}`)
   courseRef.on('value',(snapshot) => {
     const value = snapshot.val()
     console.log(value)
     console.log()
     const classKey = Object.keys(value)[0]
     actuallyPublishReview(courseNameValue, classKey, reviewDescription)
     console.log("test")




// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
   })
}
function actuallyPublishReview(courseNameValue, classKey, reviewDescription){

         firebase.database().ref(`courses/${courseNameValue}/${classKey}/reviews`).set({
         courseName: courseNameValue,
         reviewBody: reviewDescription
     })
}