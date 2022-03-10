import { projects } from './projects';

const createsToDoItem = (() => {

    //creates card elements for obj to be put into
    function createCard(item, arr) {
        const content = document.querySelector('.content');
        const card = document.createElement('div');
        card.classList.add('card');
        content.appendChild(card);

        const list = document.createElement('ul');
        card.appendChild(list);
        const title = document.createElement('li');
        const dueDate = document.createElement('li');
        const description = document.createElement('li');
        title.classList.add('title');
        dueDate.classList.add('dueDate');
        description.classList.add('description');

        title.textContent = `${item.title}`;
        dueDate.textContent = `${item.dueDate}`;
        description.textContent = `${item.description}`;

        list.appendChild(title);
        list.appendChild(dueDate);
        list.appendChild(description);

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

        card.setAttribute('id', arr.length);
        card.style.opacity = '1';
    }
    return { createCard }
})();



const createProjectList = (() => {
    addProjectList();
    //creates new project item and adds it to the projectList array
    function addProjectList() {
        const enter = document.querySelector('#enter');
        const projectWrapper = document.querySelector('.projectWrapper');
        const form = document.querySelector('#projectForm');

        enter.addEventListener('click', () => {
            const newProjectname = document.querySelector('#project').value;
            if (newProjectname === null || newProjectname === "") return;
            const li = document.createElement('button');
            li.textContent = document.querySelector('#project').value;
            document.querySelector('ul').appendChild(li);
            li.classList.add(`${document.querySelector('#project').value}`);
            projectWrapper.style.display = 'none'; //closes form
            form.reset();
            projects.addProject(newProjectname);
            console.log(projects.projectsList);
            li.setAttribute('index', projects.projectsList.length-1);
        });
    }

})();


export { createsToDoItem }
