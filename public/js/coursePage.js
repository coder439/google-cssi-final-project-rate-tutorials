document.querySelector("#name").innerHTML = "DSA"
document.querySelector("#courseDescription").innerHTML = "learning "
console.log("hello")
console.log("test")
const courseName = document.querySelector("#name").innerHTML
console.log(courseName)

function addNewReviewPage(){
    window.location = `newReview.html?courseName=${courseName}`

}