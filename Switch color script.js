let box = document.querySelector('.box');
function changeColor(color){
	box.style.background = color;
	box.style.boxShadow = `0 0 50px ${color}`;
	document.querySelectorAll('span').forEach(function(item){
		item.classList.remove('active');
	});
	event.target.classList.add('active');
}