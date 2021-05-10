(async function getProjectsFromApi() {
    try {
        const response = await fetch("/api/projects");
        const result = await response.json();
        
        const projectsDiv = document.getElementById("projects");
        
        result.projects.map(project => {
        const projectDiv = document.createElement("div");
        
        
        const projectTitle = document.createElement("h3");
        projectTitle.classList.add("projectTitle");
        projectTitle.innerText = project.projectTitle;
        
        const projectDescription = document.createElement("p");
        projectDescription.classList.add("projectDescription");
        projectDescription.innerText = project.projectDescription;
        
        const projectType = document.createElement("p");
        projectType.classList.add("projectType");
        projectType.innerText = project.projectType;
        
        
        
        const projectStartDate = document.createElement('p');
        projectStartDate.classList.add("projectStartDate");
        const startDate = new Date(project.projectStartDate).toDateString();
        projectStartDate.innerText = startDate;
        
        const projectTech = document.createElement('p');
        projectTech.classList.add('projectTech');
        
        let lengthForTech = 0;
        for (tech in project.projectTech) {
        lengthForTech++;
        }
        
        let techUsed = "";
        for (tech in project.projectTech) {
        techUsed += project.projectTech[tech];
        lengthForTech--;
        
            if (lengthForTech > 0) {
            techUsed += " , ";
            }
        }
        projectTech.innerText = techUsed;
        
        const projectLanguages = document.createElement('p');
        projectLanguages.classList.add('projectLanguages');
        
        let lengthForLanguages = 0;
        for (lang in project.projectLanguages) {
        lengthForLanguages++;
        }
        
        let languagesUsed = "";
        for (lang in project.projectLanguages) {
        languagesUsed += project.projectLanguages[lang];
        lengthForLanguages--;
        
        if (lengthForLanguages > 0) {
        languagesUsed += ", ";
        }
        }
        projectLanguages.innerText = languagesUsed;
    
    
        
        const projectEndDate = document.createElement("p");
        projectEndDate.classList.add("projectEndDate");
        const endDate = new Date(project.projectEndDate).toDateString();
        projectEndDate.innerText = endDate;
        
        const projectGitLink = document.createElement('a');
        projectGitLink.classList.add("projectGitLink");
        const linkText = document.createTextNode("GitHub Link");
        projectGitLink.appendChild(linkText);
        projectGitLink.title = "Github Link";
        projectGitLink.href = project.projectGitLink;
        
        
        projectsDiv.appendChild(projectTitle);
        projectsDiv.appendChild(projectDescription);
        projectsDiv.appendChild(projectType);
        projectsDiv.appendChild(projectTech);
        projectsDiv.appendChild(projectLanguages);
        projectsDiv.appendChild(projectStartDate);
        projectsDiv.appendChild(projectEndDate);
        projectsDiv.appendChild(projectGitLink);
        projectsDiv.appendChild(projectDiv);
        });
    
    
    } catch (error) {
    console.log(error);
    }
   })();