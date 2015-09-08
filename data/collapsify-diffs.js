// Helper function for looping over collections returned by
// getElementsByClassName etc
var forEach = function (array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
	callback.call(scope, i, array[i]);
    }
};

// Find the container element for each file and modify each one...
forEach(document.getElementsByClassName("file"), function(index, fileEl) {
    // Find the file-actions element which contains the existing control like
    // "open in GitHub desktop"
    var actionsEl = fileEl.getElementsByClassName("file-actions").item(0);

    // Insert this blob of HTML to add the collapse and expand buttons
    actionsEl.innerHTML += '<a class="octicon-btn tooltipped tooltipped-nw collapse-diffs-collapse" aria-label="Collapse this file" href="#" rel="nofollow"><span class="octicon octicon-fold"></span></a><a class="octicon-btn tooltipped tooltipped-nw collapse-diffs-expand" aria-label="Expand this file" href="#" rel="nofollow"><span class="octicon octicon-unfold"></span></a>';

    // Make the new buttons show/hide the file contents and each other
    var dataEl = fileEl.getElementsByClassName("data").item(0);
    var collapseButton = actionsEl.getElementsByClassName("collapse-diffs-collapse").item(0);
    var expandButton = actionsEl.getElementsByClassName("collapse-diffs-expand").item(0);
    
    collapseButton.onclick = function() {
	dataEl.style.display = "none";
	collapseButton.style.display = "none";
	expandButton.style.display = "inline-block";
	return false;
    };

    expandButton.onclick = function() {
	dataEl.style.display = "block";
	collapseButton.style.display = "inline-block";
	expandButton.style.display = "none";
	return false;
    };

    // Hide expand buttons to start with
    expandButton.style.display = "none";
});
