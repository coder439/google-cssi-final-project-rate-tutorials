console.log("hello")

function publishCourse(){
    console.log("hihihi")
    console.log("test")

    const courseName = document.querySelector('#courseName')
    const courseDescription = document.querySelector('#courseDescription')
    const courseImage = document.querySelector("#courseImage")
    console.log(courseName.value)
    console.log(courseDescription.value)
    console.log(courseImage.value)
    firebase.database().ref(`courses/${courseName.value}`).push({
        courseName: courseName.value,
        courseDescription: courseDescription.value 
        courseImage: courseImage.value
    })
      .then(() => {
    courseName.value = "";
    courseDescription.value = "";
    courseImage.value = "";
  });


}
