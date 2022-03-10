import './style.css';
import { createsToDoItem } from './dom';
import { projects } from './projects';

const itemList = (() => {
    const body = document.querySelector('body');
    //sets id to 0 so that projectsList index knows which project we currently are on
    setPageToDefaultProject();
    function setPageToDefaultProject() {
        body.setAttribute('index', 0);
    }
    let index = body.getAttribute('index');
    let list = projects.projectsList[index].items;

    updateIndex();
    //updates index and list after a change is detected 
    function updateIndex() {
        const body = document.querySelector('body');
        const callBack = (mutationsList) => {
            for (const mutation of mutationsList) {
                index = body.getAttribute('index');
                list = projects.projectsList[index].items;
            }
        }
        const observer = new MutationObserver(callBack);
        observer.observe(body, { attributes: true })
    }



    const Item = (title, dueDate, description) => {
        return { title, dueDate, description };
    };

    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form');

    // add an error message when due date & priority are left empty: in progress
    addToList();
    function addToList() {
        submit.addEventListener('click', () => {
            const newItem = getItemFromInput();
            createsToDoItem.createCard(newItem, list);
            list.push(newItem);
            console.table(list);
            form.reset();
            closeForm();
        })
    }

    function displayItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            createsToDoItem.createCard(arr[i], arr);
        }
    }

    function getItemFromInput() {
        const title = document.querySelector('#title').value;
        const dueDate = document.querySelector('#dueDate').value;
        const description = document.querySelector('#description').value;
        return Item(title, dueDate, description);
    }

    closeOpenForm();
    function closeOpenForm() {
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

    //using MutationObserver to update the cards nodelist as it throws errors when it's called before any card is made
    function resetID() {
        const content = document.querySelector('.content');
        const config = { attributes: true, childList: true, subtree: true };

        const callBack = function (mutationsList, observer) {
            if (mutationsList > 0) {
                let cards = Array.from(document.querySelectorAll('.card'));
                if (cards.length > 0) {
                    for (let i = 0; i <= cards.length; i++) {
                        cards[i].setAttribute('id', `${i}`)
                    }
                }
            }
        }
        const observer = new MutationObserver(callBack);
        observer.observe(content, config);
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
            console.table(list);
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
        const content = document.querySelector('.content');
        column.addEventListener('click', (e) => {
            const id = e.target.getAttribute('index');
            body.setAttribute('index', id);
            while (content.firstChild) {
                content.removeChild(content.lastChild)
            }
            displayItems(projects.projectsList[id].items);
            console.log(projects.projectsList);

        });
    }
    return { list, index, displayItems }
})();

const projectList = (() => {

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
})();
