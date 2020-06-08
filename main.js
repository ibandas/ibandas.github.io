function showVideo1() {
    var x = document.getElementById("myDIV1");
    var elem = document.getElementById("mybtn1");
    if (x.style.display === "block") {
      x.style.display = "none";
      elem.innerHTML= "Show More";
    } else {
      x.style.display = "block";
      elem.innerHTML= "Hide";
    }
}

function showVideo2() {
    var x = document.getElementById("myDIV2");
    var elem = document.getElementById("mybtn2");
    if (x.style.display === "block") {
      x.style.display = "none";
      elem.innerHTML= "Show More";
    } else {
      x.style.display = "block";
      elem.innerHTML= "Hide";
    }
}