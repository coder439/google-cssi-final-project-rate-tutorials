let params = (new URL(document.location)).searchParams;
let courseNameValue = params.get("courseName");
courseNameh2 = document.querySelector('#courseName')
courseNameh2.innerHTML = courseNameValue

const findPlaceToPutReview = () => {
    const reviewDescription = document.querySelector('#reviewDescription')
    let params = (new URL(document.location)).searchParams;
    let courseNameValue = params.get("courseName");

   const courseRef = firebase.database().ref(`courses/${courseNameValue}`)
   courseRef.get().then((snapshot) => {
     const value = snapshot.val()
     const classKey = Object.keys(value)[0]
     reviewDescriptionCopy = reviewDescription.value
     console.log(reviewDescriptionCopy)
     reviewDescription.value =""
     actuallyPublishReview(courseNameValue, classKey, reviewDescriptionCopy)
     reviewDescription.value ="";
   })
    .then(() => {
        reviewDescription.value = "";
     });
   //courseRef.on('value',(snapshot) =>
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
   }

function actuallyPublishReview(courseNameValue, classKey, reviewDescription){

        // reviewRef = firebase.database().ref(`courses/${courseNameValue}/${classKey}/reviews`)
        // reviewRef.get().then((snapshot) => {
        // const value = snapshot.val()
        // console.log("trying to find array of reviews")
        // console.log(value)
        // } )

         firebase.database().ref(`courses/${courseNameValue}/${classKey}/reviews`).push({
         courseName: courseNameValue,
         reviewBody: reviewDescription
     })
    }

        