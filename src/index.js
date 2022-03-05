import './style.css';
import { createsToDoItem } from './dom.js';
import { format } from 'date-fns'
import { parseISO } from 'date-fns'



const Item = (title, dueDate, priority, description ) => {
    return { title, dueDate, priority, description };
};

const projectList = (() => {
    const listArray = [];
    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form')

    function displayItems(arr) {
        createsToDoItem.createCard();
        const cards = document.querySelectorAll('.card');
        arr.forEach((item, index) => {
            document.querySelectorAll('.title')[index].textContent = 'Title: ' + `${item.title}`;
            document.querySelectorAll('.dueDate')[index].textContent = 'Due Date: ' + `${item.dueDate}`;
            document.querySelectorAll('.priority')[index].textContent = 'Priority: ' + `${item.priority}`;
            document.querySelectorAll('.description')[index].textContent = `${item.description}`;
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
            console.table(listArray);
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
    return {listArray}
})();



// creates new projects for user to select from
const projects = (() => {
    const newArray = [];


})()

