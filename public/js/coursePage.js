
window.onload = (event) => {
let params = (new URL(document.location)).searchParams;
let courseNameValue = params.get("courseName");
document.querySelector("#name").innerHTML = courseNameValue
document.querySelector("#courseDescription").innerHTML = "learning "
setCourseDescriptionName(courseNameValue)
const courseName = document.querySelector("#name").innerHTML
const reviewHTML = loadHTML(courseName)
//window.setTimeout(assignHTML, 3000)
}

function setCourseDescriptionName(courseNameValue){
    const courseRef = firebase.database().ref(`courses/${courseNameValue}`)
   courseRef.get().then((snapshot) => {
        const value = snapshot.val()
        var outsideClassKey = Object.keys(value)[0]
        const courseRef1 = firebase.database().ref(`courses/${courseNameValue}/${outsideClassKey}`)
        courseRef1.get().then((snapshot) => {
            const value = snapshot.val()
            document.querySelector("#courseDescription").innerHTML = value.courseDescription

        })
})
}
function addNewReviewPage(courseNameValue){
    let params = (new URL(document.location)).searchParams;
    let courseNameValue1 = params.get("courseName");
    window.location = `newReview.html?courseName=${courseNameValue1}`

}
function loadHTML(courseNameValue){
    var itemContent =""
const courseRef = firebase.database().ref(`courses/${courseNameValue}`)
   courseRef.get().then((snapshot) => {
        const value = snapshot.val()
        var outsideClassKey = Object.keys(value)[0]
        const courseRef1 = firebase.database().ref(`courses/${courseNameValue}/${outsideClassKey}/reviews`)
        courseRef1.get().then((snapshot) => {
            const value = snapshot.val()
            console.log(Object.keys(value).length)
            for (let i =0; i<Object.keys(value).length; i++){
                var outsideClassKey1 = Object.keys(value)[i]
                const courseRef2 = firebase.database().ref(`courses/${courseNameValue}/${outsideClassKey}/reviews/${outsideClassKey1}`)
                courseRef2.get().then((snapshot)=>{
                    const value1 = snapshot.val()
                      itemContent += ` <div class="card">
                            <div class="card-content">
                            <p class="title is-4">
                            ${value1.reviewBody}
                             </p>

                            </div>
                            <footer class="card-footer">
                             </footer>
                            </div>`;
                            console.log("pringint item content one at a time")
                            console.log(itemContent)
                        document.querySelector("#reviewContent").innerHTML = itemContent

                })
   }
   return itemContent
   })
   


})  
      console.log(itemContent)
     return itemContent
}