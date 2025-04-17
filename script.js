function exitTaskInfo(){
    let taskInfo=document.getElementById("taskInfo");
    taskInfo.style.display="none";
    document.getElementById("bigContainer").style.opacity="1";

}
function displayTaskInfo() {
    let taskInfo =document.getElementById("taskInfo");
    taskInfo.style.display ="block";  
    document.getElementById("bigContainer").style.opacity="0.6";
}

function createTask(){
    let taskName=document.getElementById("TaskName").value;
    let DateTask=document.getElementById("DateTask").value;
    let statusSelect=document.getElementById("statusSelect").value;
    let prioritySelect=document.getElementById("prioritySelect").value;
    if(taskName!=""&& DateTask!="" && statusSelect!="" && prioritySelect!=""){
        const taskInfoContainer=document.createElement("div"); //create div
        	
        let list=document.createElement("ul"); //create l ul
    
        
            let listItem1=document.createElement("li"); //create li
            listItem1.textContent=taskName;
            
            let listItem2=document.createElement("li"); //create li
            listItem2.textContent=DateTask;
    
            let listItem3=document.createElement("li"); //create li
            listItem3.textContent=statusSelect;

            let listItem4=document.createElement("li"); //create li
            listItem4.textContent=prioritySelect;
            //add li to ul:
            list.appendChild(listItem1);
            list.appendChild(listItem2);
            list.appendChild(listItem3);
            list.appendChild(listItem4);

    
            // console.log(listItem1);
            // console.log(listItem2);
            // console.log(listItem3);
    
            taskInfoContainer.appendChild(list);
            // console.log(taskInfoContainer);
    
        const removeBtn=document.createElement("button"); //create button
        const remoeBtnIcon=document.createElement("i");
        
        remoeBtnIcon.classList.add("fa");
        remoeBtnIcon.classList.add("fa-close");
    
        remoeBtnIcon.classList.add("removeBtn");
    
        removeBtn.appendChild(remoeBtnIcon);
      
    
        taskInfoContainer.appendChild(removeBtn);  //add the button to the div
    
            //make remove button remove the div:
            removeBtn.addEventListener("click",function(){
            taskInfoContainer.remove();
            });
    
            taskInfoContainer.classList.add("removeBtnAndlistDiv");
            document.getElementById("tasksWrapper").appendChild(taskInfoContainer);
            document.getElementById("TaskName").value="";
       document.getElementById("DateTask").value="";
       document.getElementById("statusSelect").value="";
       document.getElementById("prioritySelect").value="";

            alert("task added successfully");
   
    }
    else {
        alert("Check if there are any empty details for the task.");
    }
}