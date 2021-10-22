// Create a variable of the right kind and in the right place such that each new bug that is added can increment that number
console.log(`Fired.`)
const UserName = `Micah.Ross`;
/* class Bug {
    constructor() {
        // This constructor should be set up to accept the four user-input values from index.html: 
        // reportedBy, system, subSystem, and bugDesc
    console.log(`Constructor.`);
    console.log(data);
    
    for (var i = 0; i < data.length; i++) // Loop all data
        {
        console.log(`ID is ${data[i]._id}`); // Log ID
        fBuildDiv(data[i]); // Build a Division for data
        }
    }
*/
    const addBug = (ListData) => {
        // Create a div element that displays the bug information input by the user within the "listWrapper" DOM element. 
        // It should also contain buttons whose onClick events will call the deleteBug() and resolveBug() methods (see below). 
        console.log(`Add.`);

        if(ListData == '')
            {ListData = `Error: Data not Found`;}
        console.log(`This is inside the Build Function: ${ListData.name}, ${ListData.description}, ${ListData._id}, ${ListData.isComplete}`); // Log log, and check data
                
        var TDA = document.getElementById("listWrapper");
        var eBool = ListData.isComplete;

        var eDiv = document.createElement("div");
        eDiv.id = `${ListData._id}-and-Division`;
        eDiv.className = "logError";
        
        var eH3 = document.createElement("h3");
        eH3.id = `${ListData._id}-and-H3`;
        eH3.textContent = `Reported by: `+ListData.name;
        
        var eP1 = document.createElement("p");
        eP1.id = `${ListData._id}-and-P1`;
        eP1.textContent = `${ListData.system} / ${ListData.subsystem}`;

        var eP2 = document.createElement("p");
        eP2.id = `${ListData._id}-and-P2`;
        eP2.textContent = description;
        
        var eCheck = document.createElement("input");
        eCheck.id = `${ListData._id}`;
        eCheck.type = "checkbox";
        eCheck.addEventListener("click", (e) => {resolveBug(e.target)});
        
        var eButton = document.createElement("button");
        eButton.id = `${ListData._id}`;
        eButton.textContent = "Delete";
        eButton.addEventListener("click", (e) => {deleteBug(e.target)});
        
            if(eBool.checked){
                eDiv.className = "logFix";}
            else{eDiv.style = "logError";}

            eDiv.appendChild(eH3);
            eDiv.appendChild(eP1)
            eDiv.appendChild(eP2);
            eDiv.appendChild(eButton);
            eDiv.appendChild(eCheck);
            TDA.appendChild(eDiv);
    }

    function deleteBug() {
        // Create code that will remove the appropriate bug from the DOM. 
        // You may need to Google how to remove an element from the DOM.
    console.log(`Delete.`);
    var sAPI = `http://api.bryanuniversity.edu/${UserName}/list/${eEvent.id}`;

    axios.delete(sAPI) // Post data to sight
    .then(function (responce){
        console.log(responce);
    })
    .catch(error => console.log(`Error Responce: ${error}`)) // log any error
    
    // Get all the parts of the list
    var eDiv = document.getElementById(`${eEvent.id}-and-Division`);
    var eH3 = document.getElementById(`${eEvent.id}-and-H3`);
    var eP1 = document.getElementById(`${eEvent.id}-and-P1`);
    var eP2 = document.getElementById(`${eEvent.id}-and-P2`);
    var eButton = document.getElementById(`${eEvent.id}`); // -and-button}`);
    var eCheck = document.getElementById(`${eEvent.id}-and-Check`);

    // And delete them
    eCheck.remove();
    eButton.remove();
    eP1.remove();
    eP2.remove();
    eH3.remove();
    eDiv.remove();
    }

    function resolveBug() {
        // Create code that changes the appropriate bug report to a darker color
    console.log(`Resolve.`);
    var eDiv = document.getElementById(`${eEvent.id}-and-Division`);
        
    if(eEvent.checked){
        eDiv.className = "logFix";}
    else{eDiv.style = "logError";}
  
    let data = {isComplete: eEvent.checked};
        
    //fPut(data, eEvent.id);
    }
// }

function reportBug() {
    // Create code that instantiates the Bug class with the data input by the 
    // user in the index.html form. Then call the method to add the new bug report.
    var ItemId = ``;
    var eName = document.getElementById(`reportedBy`);
    var eSystem = document.getElementById(`system`);
    var eSubSystem = document.getElementById(`subSystem`);
    var eDescription = document.getElementById(`bugDesc`);
    
    console.log(`Report.`);

    let data = { // make data be data
        name: eName.value,
        description: eDescription.value,
        system: eSystem,
        subsystem: eSubSystem
        // isComplete: TaskChecked.checked
        };
        var sAPI = `http://api.bryanuniversity.edu/${UserName}/list/${ItemId}`;
        axios.post(sAPI, data)
        .then(function (responce){
            console.log(responce);
            //fBuildDiv(responce.data);
        })
}