var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
	callback.call(scope, i, array[i]);
    }
};

window.alert("Collapsify those diffs!");

var fileHeaders = document.getElementsByClassName("file-header");

forEach(fileHeaders, function(index, element) {
    var fileActions = element.getElementsByClassName("file-actions").item(0);
    fileActions.innerHTML += '<a class="octicon-btn tooltipped tooltipped-nw collapse-diffs-collapse" aria-label="Collapse this file" href="#" rel="nofollow"><span class="octicon octicon-fold"></span></a><a class="octicon-btn tooltipped tooltipped-nw collapse-diffs-expand" aria-label="Expand this file" href="#" rel="nofollow"><span class="octicon octicon-unfold"></span></a>';
});

var collapseButtons = document.getElementsByClassName("collapse-diffs-collapse");

forEach(collapseButtons, function(index, element) {
    
});
