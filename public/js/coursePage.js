document.querySelector("#name").innerHTML = "DSA"
document.querySelector("#courseDescription").innerHTML = "learning "
console.log("hello")
console.log("test")
const courseName = document.querySelector("#name")
document.cookie = `${courseName.innerHTML};path=/newReview.html`;
console.log(document.cookie)
