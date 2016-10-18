window.addEventListener("load", function() {
var tab = document.querySelector(".js-tabs");

    function changeTabClass() {

        if (tab.contains("tabs__tab--inactive")) {

            tab.remove("tabs__tab--inactive");

        } else {

            tab.add("tabs__tab--active");

        }
    } 
    {
        for (i = 0; i < tab.length; i++) {
            tab[i].addEventListener("click", changeTabClass);
        };
    }
});