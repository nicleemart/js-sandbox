window.addEventListener("load", function() {
    var tab = document.getElementsByClassName("js-tabs");
    var activeElem = document.getElementsByClassName("tabs__tab--active");
    var inactiveElem = document.getElementsByClassName("tabs__tab--inactive");

    for (i = 0; i < tab.length; i++) {
        tab[i].addEventListener("click", changeActiveState.bind(null, i));
        // Loop through like class when clicked, use bind to attach function and param to click event
    };

    function changeActiveState(index) {
        // Use index variable to indicate position in array

        if (tab[index].className === "tabs__tab--inactive") {
            tab[index].className = "tabs__tab--active";

        } else {
            tab[index].className = "tabs__tab--inactive";
        }
    }

});