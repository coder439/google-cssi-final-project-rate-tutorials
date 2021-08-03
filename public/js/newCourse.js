console.log("hello")

function publishCourse(){
    console.log("hihihi")
    console.log("test")

    const courseName = document.querySelector('#courseName')
    const courseDescription = document.querySelector('#courseDescription')
    console.log(courseName.value)
    console.log(courseDescription.value)
    firebase.database().ref(`courses/${courseName.value}`).push({
        courseName: courseName.value,
        courseDescription: courseDescription.value 
    })
      .then(() => {
    courseName.value = "";
    courseDescription.value = "";
  });


}
