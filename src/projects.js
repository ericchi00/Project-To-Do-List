const projects = (() => {
    const projectsList = [];

    class Project {
        constructor(title) {
            this.title = title;
            this.items = [];
        }
    }

    //projectsList[0] will always be the default Project
    const defaultProject = new Project('defaultProject');
    projectsList.push(defaultProject);
    
    function addProject(title) {
        const project = new Project(title);
        projectsList.push(project);

        localStorage.setItem(title, JSON.stringify(projectsList[projectsList.length-1]));
    }


    //pushes projects to projectList without replacing local storage data
    function pushProject(title) {
        const project = new Project(title);
        projectsList.push(project);
    }

    return {
        projectsList,
        addProject,
        pushProject,
    };


})();

export { projects }