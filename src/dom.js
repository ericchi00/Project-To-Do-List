import { projects } from './projects';

const createsToDoItem = (() => {

    //creates card elements for obj to be put into
    function createCard(item, num) {
        const content = document.querySelector('.content');
        const card = document.createElement('div');
        card.classList.add('card');
        content.appendChild(card);

        const list = document.createElement('ul');
        card.appendChild(list);
        const title = document.createElement('li');
        const dueDate = document.createElement('p');
        const description = document.createElement('li');
        title.classList.add('title');
        dueDate.classList.add('dueDate');
        description.classList.add('description');

        title.textContent = `${item.title}`;
        dueDate.textContent = `${item.dueDate}`;
        description.textContent = `${item.description}`;

        list.appendChild(title);
        list.appendChild(description);
        // list.appendChild(dueDate);

        card.appendChild(dueDate);
        const buttonWrapper = document.createElement('div')
        buttonWrapper.classList.add('buttonWrapper')
        const complete = document.createElement('button');
        complete.classList.add('complete');
        const remove = document.createElement('button');
        remove.classList.add('remove');
        const edit = document.createElement('button');
        edit.classList.add('edit');
        buttonWrapper.appendChild(complete);
        buttonWrapper.appendChild(edit);
        buttonWrapper.appendChild(remove);
        card.appendChild(buttonWrapper);

        card.setAttribute('id', num);
        card.style.opacity = '1';
    }
    return { createCard }
})();



const projectColumn = (() => {

    //adds a new project item to the column
    function projectHandler() {
        const projectWrapper = document.querySelector('.projectWrapper');
        const form = document.querySelector('#projectForm');
        const ul = document.querySelector('.leftColumn').querySelector('ul');
        const newProjectname = document.querySelector('#project').value;
        if (newProjectname === null || newProjectname === "") return;
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');
        const projectButton = document.createElement('button');
        const projectRemove = document.createElement('button');
        projectRemove.classList.add('projectRemove');
        projectButton.classList.add('projectButton');
        projectRemove.textContent = 'X';
        projectButton.textContent = document.querySelector('#project').value;

        projectContainer.appendChild(projectRemove);
        projectContainer.appendChild(projectButton);

        ul.appendChild(projectContainer);

        projectWrapper.style.display = 'none'; //closes form
        form.reset();
        projects.addProject(newProjectname);
        projectButton.setAttribute('index', projects.projectsList.length - 1);
    }

    //adds event listener to enter button
    addProjectHandler();
    function addProjectHandler() {
        const enter = document.querySelector('#enter');
        enter.addEventListener('click', projectHandler, false);
    }

    //removes previous projects items and displays the next project items
    function displayItems(arr) {
        const content = document.querySelector('.content');
        while (content.firstChild) {
            content.removeChild(content.lastChild)
        }
        for (let i = 0; i < arr.length; i++) {
            createsToDoItem.createCard(arr[i], i);
        }
    }

    return { displayItems }
})();

const forms = (() => {

    displayProjectInput();
    function displayProjectInput() {
        const projectButton = document.querySelector('.createProjects');
        projectButton.addEventListener('click', () => {
            if (document.querySelector('.projectWrapper').style.display === 'flex') {
                document.querySelector('.projectWrapper').style.display = 'none';
            } else {
                document.querySelector('.projectWrapper').style.display = 'flex';
            }
        })
    }

    closeOpenForm();
    function closeOpenForm() {
        const form = document.querySelector('#form');
        const submitEdit = document.querySelector('#submitEdit');
        const submit = document.querySelector('#submit');
        const newItem = document.querySelector('#newItem');
        const closeButton = document.querySelector('#close')
        newItem.addEventListener('click', openForm);
        closeButton.addEventListener('click', () => {
            closeForm();
            form.reset();
            submitEdit.style.display = 'none';
            submit.style.display = 'block';
        });
    }


    function openForm() {
        document.querySelector('.formWrapper').style.display = 'flex';
    }

    function closeForm() {
        document.querySelector('.formWrapper').style.display = 'none';
    }

    return { closeForm }
})();


export { createsToDoItem, projectColumn, forms }
