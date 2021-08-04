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
     const classKey = Object.keys(value)[0]
     firebase.database().ref(`courses/${coursecourseNameValueName}/${classKey}/reviews`).push({
         courseName: courseNameValue,
         reviewBody: reviewDescription
     })
   })
}