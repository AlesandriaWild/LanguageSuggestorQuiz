function hideResults(){
  document.getElementById("see-sharp").setAttribute("class", "hidden");
  document.getElementById("ruby").setAttribute("class", "hidden");
  document.getElementById("python").setAttribute("class", "hidden");
}

function submitAnswers(e){
  e.preventDefault();
  hideResults();
  const input1 = document.querySelector("input[name='work-type']:checked").value
  const input2 = document.querySelector("input[name='difficulty']:checked").value
  const input3 = document.querySelector("input[name='creativity-level']:checked").value
  const input4 = document.querySelector("input[name='project-size']:checked").value
  const input5 = document.querySelector("input[name='dream-job']:checked").value

  if (input1 === 'big-biz' && (input2 === "very" || input5 === "nasa")) {
    document.getElementById("python").removeAttribute("class");
  } else if (input1 === 'med-biz' && (input3 === "most" || input4 === "med")){
    document.getElementById("ruby").removeAttribute("class");
  } else {
    document.getElementById("see-sharp").removeAttribute("class");
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("quiz-questions");
  form.addEventListener("submit", submitAnswers)
});