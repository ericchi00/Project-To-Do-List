import './style.css';
import { createsToDoItem } from './dom.js';
import { format } from 'date-fns'
import { parseISO } from 'date-fns'

const Item = (title, dueDate, priority, description) => {
    return { title, dueDate, priority, description };
};

const defaultList = (() => {
    let listArray = [];
    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form');

    function displayItems(arr) {
        createsToDoItem.createCard();
        addRemoveFunction();
        const cards = document.querySelectorAll('.card');
        arr.forEach((item, index) => {
            cards[index].querySelector('.title').textContent = 'Title: ' + `${item.title}`;
            cards[index].querySelector('.dueDate').textContent = 'Due Date: ' + `${item.dueDate}`;
            cards[index].querySelector('.priority').textContent = 'Priority: ' + `${item.priority}`;
            cards[index].querySelector('.description').textContent = `${item.description}`;
            cards[index].setAttribute('cardCount', index);
        });
    }

    addToList();
    function addToList() {
        submit.addEventListener('click', () => {
            const itemObj = Item(
                document.querySelector('#title').value,
                format(new Date(parseISO(document.querySelector('#dueDate').value)), 'MM/dd/yyyy hh:mm'),
                document.querySelector('input[name=priority]:checked').value,
                document.querySelector('#description').value,
            );
            listArray.push(itemObj);
            displayItems(listArray);
            form.reset();
            closeForm();
        })
    }

    closeOpenForm();
    function closeOpenForm() {
        document.querySelector('#newItem').addEventListener('click', openForm);
        document.querySelector('#close').addEventListener('click', closeForm);
    }

    function openForm() {
        document.querySelector('.formWrapper').style.display = 'flex';
    }

    function closeForm() {
        document.querySelector('.formWrapper').style.display = 'none';
    }

    function addRemoveFunction() {
        let removeButtons = document.querySelectorAll('.remove');
        removeButtons.forEach(button => {
            button.addEventListener('click', removeItem);
        })
    }

    function removeItem() {
        this.closest('.card').remove();
        listArray.splice(this.closest('.card').getAttribute('cardCount'), 1);
    }
    return { listArray }
})();

// const projectList = (() => {

//     function 


// })()
