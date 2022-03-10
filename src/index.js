import './style.css';
import { createsToDoItem, projectColumn, forms } from './dom';
import { projects } from './projects';

const itemList = (() => {

    //item constructor 
    const Item = (title, dueDate, description) => {
        return { title, dueDate, description };
    };

    const header = document.querySelector('header');
    //sets id to 0 so that projectsList index knows which project we currently are on
    setPageToDefaultProject();
    function setPageToDefaultProject() {
        header.setAttribute('index', 0);
    }
    let index = header.getAttribute('index');
    let list = projects.projectsList[index].items;

    updateIndex();
    //updates index and list after a change is detected 
    function updateIndex() {
        const body = document.querySelector('header');
        const callBack = (mutationsList) => {
            for (const mutation of mutationsList) {
                index = header.getAttribute('index');
                list = projects.projectsList[index].items;
            }
        }
        const observer = new MutationObserver(callBack);
        observer.observe(body, { attributes: true })
    }

    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form');

    addToList();
    function addToList() {
        submit.addEventListener('click', () => {
            const newItem = getItemFromInput();
            createsToDoItem.createCard(newItem, list.length);
            list.push(newItem);
            form.reset();
            forms.closeForm();
        })
    }

    //makes item from the input
    function getItemFromInput() {
        const title = document.querySelector('#title').value;
        const dueDate = document.querySelector('#dueDate').value;
        const description = document.querySelector('#description').value;
        return Item(title, dueDate, description);
    }

    eventHandlers();
    function eventHandlers() {
        const content = document.querySelector('.content');
        content.addEventListener('click', (e) => {
            if (e.target.matches('.remove')) {
                removeItem(e);
            }
            if (e.target.matches('.edit')) {
                editItem(e);
            }
            if (e.target.matches('.complete')) {
                completeItem(e);
            }
        })
    }

    function removeItem(e) {
        e.target.parentNode.parentNode.remove();
        list.splice(e.target.parentNode.parentNode.getAttribute('id'), 1);
        resetID();
    }

    //throws error as cards isn't updated till it's deleted but it still works
    function resetID() {
        let cards = document.querySelectorAll('.card');
        for (let i = 0; i <= cards.length; i++) {
            cards[i].setAttribute('id', i);
        }
    }





    function editItem(e) {
        const formTitle = form.querySelector('#title');
        const formDueDate = form.querySelector('#dueDate');
        const formDescription = form.querySelector('#description');
        const submitEdit = document.querySelector('#submitEdit');

        const index = e.target.parentNode.parentNode.getAttribute('id');
        const card = e.target.parentNode.parentNode;
        openForm();
        formTitle.value = list[index].title;
        formDueDate.value = list[index].dueDate;
        formDescription.value = list[index].description;
        submitEdit.style.display = 'block';
        submit.style.display = 'none';

        submitEdit.addEventListener('click', () => {
            //update obj values
            list[index].title = form.querySelector('#title').value;
            list[index].dueDate = form.querySelector('#dueDate').value;
            list[index].description = form.querySelector('#description').value;
            card.querySelector('.title').textContent = `${list[index].title}`;
            card.querySelector('.dueDate').textContent = `${list[index].dueDate}`;
            card.querySelector('.description').textContent = `${list[index].description}`;
            form.reset();
            closeForm();
            submit.style.display = 'block'
            submitEdit.style.display = 'none';
        }, { once: true });
    }

    function completeItem(e) {
        const card = e.target.parentNode.parentNode;
        if (card.style.opacity === '1') {
            card.style.opacity = '.3';
        } else {
            card.style.opacity = '1';
        }
    }

    projectListListeners();
    function projectListListeners() {
        const column = document.querySelector('.leftColumn').querySelector('ul');
        column.addEventListener('click', (e) => {
            if (e.target.matches('.projectButton') || e.target.matches('#defaultProject')) {
                const id = e.target.getAttribute('index');
                header.setAttribute('index', id);
                projectColumn.displayItems(projects.projectsList[id].items);
                //removes the project on dom & array
            } else if (e.target.matches('.projectRemove')) {
                const id = e.target.nextSibling.getAttribute('index');
                e.target.parentNode.remove();
                projects.projectsList.splice(id, 1);
                resetProjectID();
            }
        });
    }

    function resetProjectID() {
        let projectButtons = document.querySelectorAll('.projectButton');
        for (let i = 1; i <= projects.projectsList.length; i++) {
            projectButtons[i-1].setAttribute('index', i);
        }

    }
    return { list, index }
})();
