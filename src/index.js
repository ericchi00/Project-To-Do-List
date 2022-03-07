import './style.css';
import { createsToDoItem } from './dom.js';
import { format, parseISO } from 'date-fns';

const Item = (title, dueDate, priority, description) => {
    return { title, dueDate, priority, description };
};

const defaultList = (() => {
    const listArray = [];
    const submit = document.querySelector('#submit');
    const form = document.querySelector('#form');

    function displayItems(arr) {
        createsToDoItem.createCard();
        const cards = document.querySelectorAll('.card');
        arr.forEach((item, index) => {
            cards[index].setAttribute('cardCount', index);
            cards[index].querySelector('.title').textContent = 'Title: ' + `${item.title}`;
            cards[index].querySelector('.dueDate').textContent = 'Due Date: ' + `${item.dueDate}`;
            cards[index].querySelector('.priority').textContent = 'Priority: ' + `${item.priority}`;
            cards[index].querySelector('.description').textContent = `${item.description}`;
            addRemoveFunction(index);
            editFunction(index);
            completeItem(index);
        });
    }

    addToList();
    function addToList() {
        submit.addEventListener('click', () => {
            const itemObj = Item(
                document.querySelector('#title').value,
                format(new Date(parseISO(document.querySelector('#dueDate').value)), 'MM/dd/yyyy HH:mm'),
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

    function addRemoveFunction(index) {
        const removeButton = document.querySelector(`[cardCount=${CSS.escape(index)}]`).querySelector('.remove');
        removeButton.addEventListener('click', removeItem);
    }

    function removeItem() {
        this.closest('.card').remove();
        // listArray.splice(this.closest('.card').getAttribute('cardCount'), 1);
        for (let i = 0; i < listArray.length; i++) {
            if (!!document.querySelector(`[cardCount=${CSS.escape(i)}]`) === false) {
                listArray.splice(i, 1);
            }
        }
    }

    function editFunction(index) {
        const formTitle = form.querySelector('#title');
        const formDueDate = form.querySelector('#dueDate');
        const formDescription = form.querySelector('#description');
        const edit = document.querySelector(`[cardCount=${CSS.escape(index)}]`).querySelector('.edit');
        edit.addEventListener('click', () => {
            openForm();
            const title = listArray[index].title;
            const dueDate = listArray[index].dueDate;
            const description = listArray[index].description;
            const priority = listArray[index].priority;
            formTitle.value = title;
            formDueDate.value = format(new Date(dueDate), "yyyy-MM-dd'T'HH:mm");
            document.querySelector(`[value=${CSS.escape(priority)}]`).setAttribute('checked', 'checked');
            formDescription.value = description;
        });
        editSubmit(index);
    }



    //IT LOOPS BECAUSE IT'S IN THE FOR EACH LOOP, NEED TO FIGURE OUT HOW TO GRAB .CARD INDEX WITHOUT TH FOR LOOP
    //submit button when editing will edit the current obj instead of adding a new obj
    function editSubmit(index) {
        const submitEdit = document.querySelector('#submitEdit');
        submitEdit.style.display = 'block';
        submit.style.display = 'none';
        const priority = listArray[index].priority;
        submitEdit.addEventListener('click', () => {
            const cardCount = document.querySelector(`[cardCount=${CSS.escape(index)}]`);

            //update item obj
            listArray[index].title = document.querySelector('#title').value;
            console.log(listArray[index].title);
            listArray[index].dueDate = document.querySelector('#dueDate').value;
            listArray[index].priority = document.querySelector('input[name=priority]:checked').value;
            listArray[index].description = document.querySelector('#description').value;

            cardCount.querySelector('.title').textContent = 'Title: ' + `${listArray[index].title}`;
            cardCount.querySelector('.dueDate').textContent = 'Due Date: ' + format(new Date(parseISO(`${listArray[index].dueDate}`)), 'MM/dd/yyyy HH:mm');
            cardCount.querySelector('.priority').textContent = 'Priority: ' + `${listArray[index].priority}`;
            cardCount.querySelector('.description').textContent = `${listArray[index].description}`;
            closeForm();
            document.querySelector(`[value=${CSS.escape(priority)}]`).removeAttribute('checked');
            form.reset();
            submit.style.display = 'block'
            submitEdit.style.display = 'none';
        });
    }

    function completeItem(index) {
        const card = document.querySelector(`[cardCount=${CSS.escape(index)}]`);
        const complete = card.querySelector('.complete');
        complete.addEventListener('click', () => {
            card.style.opacity = '.6';
        });
    }

    return { listArray }
})();

// const projectList = (() => {

//     function 


// })()


export { defaultList }