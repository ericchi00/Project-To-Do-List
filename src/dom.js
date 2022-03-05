const createsToDoItem = (() => {

    //creates card elements for obj to be put into
    function createCard() {
        const content = document.querySelector('.content');
        const card = document.createElement('div');
        card.classList.add('card');
        content.appendChild(card);

        const list = document.createElement('ul');
        card.appendChild(list);
        const title = document.createElement('li');
        const dueDate = document.createElement('li');
        const priority = document.createElement('li');
        const description = document.createElement('li');
        title.classList.add('title');
        dueDate.classList.add('dueDate');
        priority.classList.add('priority');
        description.classList.add('description');

        list.appendChild(title);
        list.appendChild(dueDate);
        list.appendChild(priority);
        list.appendChild(description);


        const remove = document.createElement('button');
        remove.textContent = 'Remove';
        remove.classList.add('remove');
        const edit = document.createElement('button');
        edit.textContent = 'Edit';
        edit.classList.add('edit');
        card.appendChild(remove);
        card.appendChild(edit);
    }

    return { createCard }
})();


export { createsToDoItem }