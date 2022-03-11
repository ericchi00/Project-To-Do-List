import { projectColumn, } from "./dom";
import { projects } from "./projects";
const localStorageFunctions = (() => {

    checkStorage();
    function checkStorage() {
        //if length > 0, they used the site
        if (localStorage.length > 0) {
            Object.keys(localStorage).forEach(key => {
                //skips over defaultProject so that it doesn't make another one of it
                if (key === 'defaultProject') {
                    return;
                }
                //displays the projects in the DOM column
                projectColumn.displayProjects(key);
            });


            //sets items from the localStorage to the acutal array in projectList even if localStorage auto sorts the keys
            Object.keys(localStorage).forEach((key, index) => {
                const retrievedData = localStorage.getItem(key);
                const itemArray = JSON.parse(retrievedData).items;
                if (JSON.stringify(key) === projects.projectsList[index].title) {
                    for (let i = 0; i < itemArray.length; i++) {
                        projects.projectsList[index].items.push(itemArray[i]);
                    }
                }
            });

            //sets index of project buttons and only runs if there is a projectButton
            const projectButtons = document.querySelectorAll('.projectButton');
            if (projectButtons.length > 0) {
                for (let i = 1; i <= projectButtons.length; i++) {
                    projectButtons[i - 1].setAttribute('index', i);
                }
            }
            //always display defaultProject items
            projectColumn.displayItems(projects.projectsList[0].items);
        } else if (localStorage.length === '0') return;

    }
})();

export { localStorageFunctions }