import './style.css';

const toDoObj = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const projectList = (() => {
    const listArray = [];
    const submit = document.querySelector('#submit');
    const form = document.querySelector('')

    function addToList() {
        submit.addEventListener('click', () => {
            const itemObj = new toDoObj();
            addObjToArray(itemObj);

        })
    }
    function addObjToArray(obj) {
        obj.title = document.querySelector('#title').value;
        obj.description = document.querySelector('#description').value;
        obj.dueDate = document.querySelector('#dueDate').value;
        obj.priority = document.querySelector('#priority');
        projectList.listArray.push(obj);
    }

    return {listArray}
})();



// creates new projects for user to select from
const projects = (() => {
    const newArray = [];


})()


export {projectList, toDoObj}