const addReview = (courseName, reviewTitle, reviewBody) => {
   const courseRef = firebase.database().ref(`courses/${courseName}`)
   courseRef.on('value',(snapshot) => {
     value = snapshot.val()
     console.log(value)
     const classKey = Object.keys(value)[0]
     firebase.database().ref(`courses/${courseName}/{classKey}/reviews`).push({
         reviewTitle: reviewTitle,
         reviewBody: reviewBody
     })
   })
}
