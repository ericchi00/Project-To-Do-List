const projects = (() => {
    const projectsList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.items = [];
        }
    }

    //projectsList[0] will always be the default Project
    addProject('defaultProject');
    function addProject(title) {
        const project = new Project(title);
        projectsList.push(project);
    }

    return {
        projectsList,
        addProject,
    };


})();

export { projects }