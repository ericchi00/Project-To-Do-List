import { newArray, defaultList, projectList } from './index';
import { format, parseISO } from 'date-fns';

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
    function addProjectList() {
        const enter = document.querySelector('#enter');
        const projectWrapper = document.querySelector('.projectWrapper');
        const form = document.querySelector('#projectForm');
        enter.addEventListener('click', () => {
            const li = document.createElement('button');
            li.textContent = document.querySelector('#project').value;
            document.querySelector('ul').appendChild(li);
            projectWrapper.style.display = 'none';
            form.reset();
        });
    }

    defaultProject();
    function defaultProject() {
        const defaultButton = document.querySelector('#defaultProject');
        defaultButton.addEventListener('click', () => {
            const content = document.querySelector('.content');
            while (typeof content.querySelector('.newItemWrapper').nextSibling === 'undefined') {
                content.removeChild(content.lastChild);
            }
            defaultList.displayItems(defaultList.listArray);
        });
    }
    return {};
})();

export { createsToDoItem, createProjectList }