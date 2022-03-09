import './style.css';
import { createsToDoItem } from './dom';
import { format, parseISO } from 'date-fns';


const Item = (title, dueDate, description) => {
    return { title, dueDate, description };
};

const newArray = (() => {
    const newArr = [];
    return { newArr }

    module.exports = function () {
        return new newArray();
    }
})();

const defaultList = (() => {
    let list = [];

    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form');

    // function displayItems(arr) {
    //     createsToDoItem.createCard();
    //     const cards = document.querySelectorAll('.card');
    //     arr.forEach((item, index) => {
    //         cards[index].setAttribute('cardCount', index);
    //         cards[index].querySelector('.title').textContent = 'Title: ' + `${item.title}`;
    //         cards[index].querySelector('.dueDate').textContent = 'Due Date: ' + format(new Date(`${item.dueDate}`), "MM/dd/yy HH:mm");
    //         cards[index].querySelector('.priority').textContent = 'Priority: ' + `${item.priority}`;
    //         cards[index].querySelector('.description').textContent = `${item.description}`;
    //         addRemoveFunction(index);
    //         completeItem(index);
    //         editFunction(index);
    //         submitEdit(index);
    //     });
    // }


    //add an error message when due date & priority are left empty: in progress
    addToList();
    function addToList() {
        submit.addEventListener('click', () => {
            const newItem = getItemFromInput();
            createsToDoItem.createCard(newItem, list);
            list.push(newItem);
            form.reset();
            closeForm();
        })
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
        document.querySelector('#newItem').addEventListener('click', openForm);
        document.querySelector('#close').addEventListener('click', () => {
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
        console.log(card);
        if (card.style.opacity === '1') {
            card.style.opacity = '.3';
        } else {
        card.style.opacity = '1';
        }
    }
    return { list }
})();

const projectList = (() => {

    displayProject();
    function displayProject() {
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
