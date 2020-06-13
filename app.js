const form=document.querySelector('#task-form');

const taskList=document.querySelector('.collection');

const clearBtn=document.querySelector('.clear-tasks');

const filter=document.querySelector('#filter');

const taskInput=document.querySelector('#task');

loadEventListeners();

function loadEventListeners(){
	form.addEventListener('submit',addTask);
}

//add task

function addTask(e){


	if(taskInput.value === ''){
		alert('Add a task');
	}
	//create li element
	const li=document.createElement('li');
	//create class in li
	li.className='collection-item';
	//append text to li
	li.appendChild(document.createTextNode(taskInput.value));
	//crate a element
	const link=document.createElement('a');
	//create class to a
	link.className='delete-item secondary-content';
	//add i to a
	link.innerHTML='<i class="fa fa-remove"></i>';
	//append a tag to li
	li.appendChild(link);
	//add li to ul
	taskList.appendChild(li);
	//clear the the text from input after submitting
	taskInput.value='';
	console.log(li);
	e.preventDefault();
}


