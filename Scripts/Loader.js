function initialize() {
    loadTechSkills();
    loadWorkExperience();
}

function loadWorkExperience() {
    if (workExp != undefined && workExp != null && workExp.length > 0) {
        let workExDiv = document.getElementById("workExperinces");
        if (workExDiv != undefined && workExDiv != null) {
            workExp.forEach(function(w, i){
                let controlFor = "workExp" + (i + 1);
                let cardDiv = document.createElement("div"); cardDiv.id = "card_"+ controlFor; cardDiv.className = "card";
                //Header
                let cardHeader = document.createElement("div"); cardHeader.className ="card-header"; cardDiv.id = "cardHeader_"+ controlFor;
                let cardH2 = document.createElement("h2"); cardH2.className ="mb-0";
                let cardButton = document.createElement("button"); 
                cardButton.setAttribute("data-toggle", "collapse"); cardButton.setAttribute("type", "button"); 
                cardButton.setAttribute("data-target", "#collapse_" + controlFor);  cardButton.setAttribute("aria-controls", "collapse_" + controlFor);
                if(i == 0) { cardButton.className ="btn btn-link";  cardButton.setAttribute("aria-expanded", "true"); }
                else { cardButton.className ="btn btn-link collapsed";  cardButton.setAttribute("aria-expanded", "false"); }
                cardButton.innerHTML = "<p style='float: left;color: var(--dark-color);font-size: var(--h6-font-size);margin: 0; font-weight: 500;'>" + w['SectionTitle']+ "</p>" + 
                                        "<p style='float: right;color: var(--dark-color);font-size: var(--h6-font-size);margin: 0; font-weight: 500;'>" + w['Start'] + " - " + w['End'] + "</p>"  ;
                cardH2.appendChild(cardButton); cardHeader.appendChild(cardH2); 
                //Content
                let cardContent = document.createElement("div"); cardContent.className = i > 0 ? "collapse": "collapse show"; cardContent.id = "collapse_"+ controlFor;
                let contentBody = document.createElement("div"); contentBody.className ="card-body"; 
                let pClient = document.createElement("p"); pClient.innerHTML = "<span style='font-weight:bold'>Client: </span>" + w['Client']; contentBody.appendChild(pClient);
                let pTech = document.createElement("p"); pTech.innerHTML = "<span style='font-weight:bold'>Technologies: </span>" + (w['Technologies']).join(", "); contentBody.appendChild(pTech);
                let pEnv = document.createElement("p"); pEnv.innerHTML = "<span style='font-weight:bold'>Environment: </span>" + (w['Environment']).join(", "); contentBody.appendChild(pEnv);
                let pPD = document.createElement("p"); pPD.style = "text-align: justify; text-justify: inter-word;";
                pPD.innerHTML = "<span style='font-weight:bold'>Project Description: </span>" + (w['ProjectDescription']).join("<br/>"); contentBody.appendChild(pPD);
                let pResp = document.createElement("p"); pResp.style = "text-align: justify; text-justify: inter-word;";
                pResp.innerHTML = "<span style='font-weight:bold'>Responsibilities: </span><br/>• " + (w['Responsibilities']).join("<br/> • "); contentBody.appendChild(pResp);
                cardContent.appendChild(contentBody);
                
                cardDiv.appendChild(cardHeader);cardDiv.appendChild(cardContent);
                workExDiv.appendChild(cardDiv);
            });
        }
    }
}

function loadTechSkills(){
    //SkillsDiv
    if (techSkills != undefined && techSkills != null && techSkills.length > 0) {
        let techSkillsDiv = document.getElementById("technicalSkills");
        if (techSkillsDiv != undefined && techSkillsDiv != null) {
            techSkills.forEach(function(t, i){
                let controlFor = "techSkill" + (i + 1);
                let cardDiv = document.createElement("div"); 
                cardDiv.id = "card_"+ controlFor; cardDiv.className = "techSkillSection";

                let cardTech = document.createElement("div"); 
                cardTech.className ="techHeading";  cardTech.style = "style='float: left;'"; cardTech.innerText = t.Type;
                cardDiv.appendChild(cardTech); 

                let cardRating = document.createElement("div"); 
                cardRating.className ="techRating";  cardRating.style = "style='float: right;'"; cardRating.innerHTML = getProficiencyRating(t.Proficiency);
                cardDiv.appendChild(cardRating);

                let cardSkills = document.createElement("div"); 
                cardSkills.innerText = t.Skills; cardSkills.className ="techSkills"; 
                cardDiv.appendChild(cardSkills);

                techSkillsDiv.appendChild(cardDiv);
            });
        }
    }
}

function getProficiencyRating(level){
    let val = 0;
    if(level != undefined && level != null && Number.isInteger(level))
        val = parseInt(level);
    let returnData = "";  //"<div>";
    for(var i = 0; i < 5; i ++){
        returnData += i < val ? "<span class='rating-item' style='color:var(--primary-color)'>• </span>" : "<span class='rating-item'  style='color:var(--dark-color)'>• </span>";
    }
    return returnData;
}