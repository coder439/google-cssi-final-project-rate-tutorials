
window.onload = (event) => {
let params = (new URL(document.location)).searchParams;
let courseNameValue = params.get("courseName");
document.querySelector("#name").innerHTML = courseNameValue
setCourseDescriptionName(courseNameValue)
const reviewHTML = loadHTML(courseNameValue)
//window.setTimeout(assignHTML, 3000)
}

function setCourseDescriptionName(courseNameValue){
    const courseRef = firebase.database().ref(`courses/${courseNameValue}`)
    courseRef.get().then((snapshot) => {
        const value = snapshot.val()
        var uniqueKey = Object.keys(value)[0]
        const courseRef1 = firebase.database().ref(`courses/${courseNameValue}/${uniqueKey}`)
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
        var uniqueClassKey = Object.keys(value)[0]
        const courseRef1 = firebase.database().ref(`courses/${courseNameValue}/${uniqueClassKey}/reviews`)
        courseRef1.get().then((snapshot) => {
            const value = snapshot.val()
            for (let i =0; i<Object.keys(value).length; i++){
                var uniqueReviewKey = Object.keys(value)[i]
                const courseRef2 = firebase.database().ref(`courses/${courseNameValue}/${uniqueClassKey}/reviews/${uniqueReviewKey}`)
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
                                    document.querySelector("#reviewContent").innerHTML = itemContent
                })
            }
        })
    })  
}