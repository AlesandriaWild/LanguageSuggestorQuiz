$(document).ready(function() {

  $("form#quiz-questions").submit(function(e){
    e.preventDefault();
    const userWorkType=$("#input:radio[name=work-type]:checked").val();
    const userDifficulty=$("#input:radio[name=difficulty]:checked").val();
    const userCreativityLevel=$("#input:radio[name=creativity-level]:checked").val();
    const userProjectSize=$("#input:radio[name=project-size]:checked").val();
    const userDreamJob=$("#input:radio[name=dream-job]:checked").val();
    const userWorkLife=$("#input:radio[name=work-life]:checked").val();

    let result;
    if (userWorkType === "big-biz"){
      result = "C# (see sharp)";
    } else if (userDifficulty === "med-diff"){
      result = "Go";
    } else if (userCreativityLevel === "least"){
      result = "Python";
    } else if (userProjectSize === "mid"){
      result = "JavaScript";
    } else if (userDreamJob === "twitch"){
      result = "Ruby";
    } else if (userWorkLife === "pto"){
      result = "Rust";
    } else {
      result = "Swift";
    }

    $("#results").text(result);
    $("#quiz-results").show();
  });
});