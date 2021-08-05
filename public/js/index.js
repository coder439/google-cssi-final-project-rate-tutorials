console.log("index.js running")
function dummyMethod(){
    console.log("dummy method")
    const courseName = document.querySelector('#myInput');
    console.log(courseName.value)
    location.href = `coursePage.html?courseName=${courseName.value}`
}