var tabs = document.getElementsByClassName("js-tabs__tab");

window.addEventListener("load", function() {

	for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(event) {
            changeActiveState(event.target);
        });
    };

    // Makes a tab appear "active" when clicked.
    //
    // tab - Node representing tab that was clicked.
    function changeActiveState(tab) {
        for (x = 0; x < tabs.length; x++) {
            tabs[x].classList.remove("tabs__tab--active");
        };

        tab.classList.add("tabs__tab--active");
        tab.dataset.content;

    };

});