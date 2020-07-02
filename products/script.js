
(function(){
    var text = document.getElementsByClassName("collapse");
    var i;

        for(i = 0; i < text.length; i++){
            text[i].addEventListener("click",function(){
                this.classList.toggle("active");
                var content = this.nextElementSibling;
                if(content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        }
    }) ();