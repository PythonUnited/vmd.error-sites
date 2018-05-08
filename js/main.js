var searchableText = document.getElementById("searchableText");
var searchInput = document.getElementById("searchInput");
var searchForm = document.getElementById("searchForm");

adjustFormAction = function() {
    var keywords = searchInput.value.split(' ');
    searchableText.value = keywords.join('+');
};

adjustFormSubmit = function(e) {
    e.preventDefault();
    window.location.href = searchForm.action + "?SearchableText=" + searchableText.value;
};

// Non-obtrusive JavaScript
searchInput.addEventListener('keyup', adjustFormAction, false);
searchForm.addEventListener('submit', adjustFormSubmit, false);
