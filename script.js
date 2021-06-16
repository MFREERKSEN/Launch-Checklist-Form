window.addEventListener("load", function(){
   let form = document.querySelector("form");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      response.json().then(function(json){
         let missionTarget = document.getElementById("missionTarget");
         // form.addEventListener("submit", function(event){                     
               missionTarget.innerHTML =  `
                <h2>Mission Destination</h2>
                <ol>
                   <li>Name: ${json[2].name}</li>
                   <li>Diameter: ${json[2].diameter}</li>
                   <li>Star: ${json[2].star}</li>
                   <li>Distance from Earth: ${json[2].distance}</li>
                   <li>Number of Moons: ${json[2].moons}</li>
                </ol>
                <img src="${json[2].image}">
               `;
               
           });
      //  });
   });
});







window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
      event.preventDefault();
      let launchPilotName = document.querySelector("input[name=pilotName]");
      let launchCoPilotName = document.querySelector("input[name=copilotName]");
      let launchFuelLevel = document.querySelector("input[name=fuelLevel]");
      let launchCargoMass = document.querySelector("input[name=cargoMass]");
      let launchStatusChecker = document.getElementById("launchStatusCheck");
      let launchStatusStatus = document.getElementById("launchStatus");
      let launchFaultyItems = document.getElementById("faultyItems");
      let launchPilotStatus = document.getElementById("pilotStatus");
      let launchCoPilotStatus = document.getElementById("copilotStatus");
      let launchFuelStatus = document.getElementById("fuelStatus");
      let launchCargoStatus = document.getElementById("cargoStatus");
     
       if (launchPilotName.value === "" || launchCoPilotName.value === "" || launchFuelLevel.value === "" || launchCargoMass.value === ""){
         alert("All fields are required!");
       } else if (isNaN(launchPilotName.value) === false ||isNaN(launchCoPilotName.value) === false || isNaN(launchFuelLevel.value) || isNaN(launchCargoMass.value)) {
         alert("Make sure to add valid information for each field");
       }else{
          launchFaultyItems.style.visibility = "visible";
          launchStatusStatus.style.color = "green";
          launchFaultyItems.innerHTML = `
      <ol>
          <li id="pilotStatus">Pilot ${launchPilotName.value} Ready</li>
          <li id="copilotStatus">Co-pilot ${launchCoPilotName.value} Ready</li>
          <li id="fuelStatus">Fuel level high enough for launch</li>
          <li id="cargoStatus">Cargo mass low enough for launch</li>
      </ol>`
          
            if (launchCargoMass.value >= 10000){
               launchStatusStatus.innerText= "Shuttle is NOT Ready for Launch"
               launchStatusStatus.style.color = "red";
               launchFaultyItems.innerHTML = `
               
           <ol>
               <li id="pilotStatus">Pilot ${launchPilotName.value} Ready</li>
               <li id="copilotStatus">Co-pilot ${launchCoPilotName.value}  Ready</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass is TOO HIGH for launch</li>
           </ol>`
               

            }if (launchFuelStatus.value <= 10000){
               launchStatusStatus.innerText= "Shuttle is NOT Ready for Launch"
               launchStatusStatus.style.color = "red";
               launchFaultyItems.innerHTML = `
              
           <ol>
               <li id="pilotStatus">Pilot ${launchPilotName.value} Ready</li>
               <li id="copilotStatus">Co-pilot ${launchCoPilotName.value}  Ready</li>
               <li id="fuelStatus">Fuel level is TOO LOW for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
           </ol>`

            }if (launchPilotName.value !== "" && launchCoPilotName.value !== "" && 
               launchFuelLevel.value >= 10000 && launchCargoMass.value <=10000){
               launchStatusStatus.innerText= "Shuttle is Ready for Launch"
               launchStatusStatus.style.color = "green";
               launchFaultyItems.innerHTML = `
           <ol>
               <li id="pilotStatus">Pilot ${launchPilotName.value} Ready</li>
               <li id="copilotStatus">Co-pilot ${launchCoPilotName.value}  Ready</li>
               <li id="fuelStatus">Fuel level high enough for launch</li>
               <li id="cargoStatus">Cargo mass low enough for launch</li>
           </ol>`
            }

         };
      });
   });