        // For the mobile menu bro!!!
        // FIXME Cannot unction inside of the master JS file for some strange reason.
        var coll = document.getElementsByClassName("secondary__expand-bttn");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("expand");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
        
        function myFunction() {
          var element = document.getElementById("localExpandChevron");
          element.classList.toggle("mystyle");
        }