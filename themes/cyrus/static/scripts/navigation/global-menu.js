        // ------------------------------------------
        // Hide and Show Hidden Menu (Toggle)
        // ------------------------------------------
        (function(){
            var mobileMenuIcon = document.querySelector('#hiddenNavBttn'),
                mainTopMenu = document.querySelector("#body");
        
            mobileMenuIcon.onclick = function() {
                mainTopMenu.classList.toggle('hidden-menu-active');
        
            }
        }());