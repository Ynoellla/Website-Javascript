document.addEventListener('DOMContentLoaded', function () {
	function updateDateTime() {
		var currentDate = new Date();
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
		var formattedDate = currentDate.toLocaleDateString('en-US', options);
		document.getElementById('dateAndTime').textContent = formattedDate;
	}
	updateDateTime();
	setInterval(updateDateTime, 1000);
	var navItems = document.querySelectorAll('.right nav ul li');
	navItems.forEach(function (item) {
		item.addEventListener('mouseover', function () {
			showDropdown(item);
			highlightItem(item);
		});
		item.addEventListener('mouseout', function () {
			hideDropdown(item);
			unhighlightItem(item);
		});
	});
	function showDropdown(item) {
		var dropdown = item.querySelector('ul');
		if (dropdown) {
			dropdown.style.display = 'block';
		}
	}
	function hideDropdown(item) {
		var dropdown = item.querySelector('ul');
		if (dropdown) {
			dropdown.style.display = 'none';
		}
	}
	function highlightItem(item) {
		item.style.backgroundColor = '#BFBADE';
	}
	function unhighlightItem(item) {
		item.style.backgroundColor = '';
	}
	var headerImage = document.getElementById('head-img');
	headerImage.addEventListener('mouseenter', function () {
		scaleImage(headerImage, 1.29);
	});
	headerImage.addEventListener('mouseleave', function () {
		scaleImage(headerImage, 1);
	});
	function scaleImage(element, scaleValue) {
		element.style.transform = 'scale(' + scaleValue + ')';
		element.style.transitionDuration = '1s';
	}
});