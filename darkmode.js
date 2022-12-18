function toggle() {
   var element = document.body;
   element.classList.toggle("dark-mode");
  // extra security - I had made a silly mistake and the text's colour wouldn't change. i've fixed that but...!! IDK!!
   if (element.style.backgroundColor == "white") {
      document.getElementById("h1").style.color = "black";
   } 
   else {
      document.getElementById("h1").style.color = "white";
   }
}
