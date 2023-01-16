var hideToggle = document.querySelector ('.btn-toggle');
var ContainerList = document.querySelector ('.list-container ul');
const btnCreate = document.getElementById('btn-main');
var removeBtn = document.querySelector('.btn-remove');


hideToggle.addEventListener("click", () => {
	if (hideToggle.textContent == 'Hide List') {
		hideToggle.style.backgroundColor = "#00DA84";
		hideToggle.textContent = hideToggle.TextContent = "Show"
		ContainerList.style.display = 'none'

	  } else if (hideToggle.textContent == 'Show') {
		hideToggle.style.backgroundColor = "#FF4A9E"
		ContainerList.removeAttribute('style');
		hideToggle.textContent = hideToggle.TextContent = "Hide List"
	
	  
	} else {
		
	  }


	});

// input task
btnCreate.addEventListener('click', () => {
	const input = document.querySelector('.input-main');
	const list = document.querySelector('ul');
	list.insertAdjacentHTML( 
	  'afterbegin', 
	  `<li>${input.value}</i>` 
	);
	input.value = '';
  });


removeBtn.addEventListener('click', ()=>{
	const lis = document.querySelector ('li:last-child');
	lis.remove();

})
