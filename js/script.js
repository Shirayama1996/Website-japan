function openAndClose() {
	var nav = document.getElementById("nav-item");
	var w = window.innerWidth;

	if (nav.style.display == "none" && w >= 601) {
		nav.style.display = "flex";
	}

	else if(nav.style.display == "none" && w < 600) {
		nav.style.display = "block";
	}

	else {
		nav.style.display = "none";
	}
}

window.onresize = function(){ location.reload(); }

var lists = document.getElementsByClassName("list-item");
for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", function() {
  var current = document.getElementById("active");
  current.id = current.id.replace("active", "");
  this.id += "active";
  });
}

var navLists = document.getElementsByClassName("nav-list-item");
for (let i = 0; i < navLists.length; i++) {
  navLists[i].addEventListener("click", function() {
  var object = document.getElementById("nav-active");
  object.id = object.id.replace("nav-active", "");
  this.id += "nav-active";
  });
}