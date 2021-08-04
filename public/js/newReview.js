
console.log("new review")
console.log(document.cookie)
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
function filterByLabel() {
  const findLabel = document.querySelector("#findLabel");
  const findLabelVal = "." + findLabel.value;
  const notes = document.querySelectorAll(findLabelVal);

  let cards = ``;
  for (var i = 0; i < notes.length; i++) {
    cards += '<div class="column is-one-quarter">';
    cards += notes[i].outerHTML;
    cards += "</div>";
  }

  document.querySelector("#app").innerHTML = cards;
  findLabel.value = "";
}
