var tabs = document.getElementsByClassName("js-tabs__tab");

var contents = document.getElementsByClassName("js-content");

window.addEventListener("load", function() {

	for (i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", function(event) {
            changeActiveState(event.target);
            goToTab(event.target);
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

    // Matches content with appropriate tab. Hides content from previous tab and shows content from active tab.
    //
    // tab - Node representing tab that was clicked.
    function goToTab(tab) {
        var content = document.querySelector("[data-content-for=" + tab.dataset.content + "]");

        for (var n = contents.length - 1; n >= 0; n--) {
            contents[n].classList.remove("content--active");
        }

        content.classList.add("content--active");	

    };

});