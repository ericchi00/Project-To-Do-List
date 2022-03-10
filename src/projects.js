const projects = (() => {
    const projectsList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.items = [];
        }
    }

    //creates the first project list
    addProject('defaultProject');
    function addProject(title) {
        const project = new Project(title);
        projectsList.push(project);
    }

    function deleteProject() {

    }

    return {
        projectsList,
        addProject,
    };


})();

export { projects }