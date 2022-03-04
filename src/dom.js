import listArray from './index.js';

const createsToDoItem = (() => {

    //creates card elements for obj to be put into
    function createCard() {
        const content = document.querySelector('.content');
        const card = document.createElement('div');
        card.classList.add('card');
        content.appendChild(card);

        const list = document.createElement('ul');
        card.appendChild(list);
        const cardInfo = [
            title = document.createElement('li'),
            dueDate = docuument.createElement('li'),
            priority = docuument.createElement('li'),
            description = docuument.createElement('li'),
        ]

        for (i = 0; i<=cardInfo.length; i++) {
            card.appendChild(cardInfo[i]);
        }
        const remove = document.createElement('button');
        remove.classList.add('remove');
        const edit = document.createElement('button');
        edit.classList.add('edit');
        card.appendChild(remove);
        card.appendChild(edit);
    }

})();