const rl = require('readline-sync');

const containers = [

    {type: "color", max_specific_capacity: 5, current_capacity: 0, program: { rpm: 800, degrees: 40, length_in_minuets: 60 }},
    {type: "white", max_specific_capacity: 7, current_capacity: 0, program: { rpm: 1000, degrees: 60, length_in_minuets: 100 }},
    {type: "delicate", max_specific_capacity: 4, current_capacity: 0, program: { rpm: 500, degrees: 30, length_in_minuets: 40 }},

    // print_details: function(){
    //     return `Laundry type: ${this.type}, max capacity: ${this.max_specific_capacity} kg, 
    //     current capacity: ${this.current_capacity} kg, ${this.program.print_details()}`
    // }

]

// const add_container = () => {

//     const type = rl.question(`What type of laundry?`);
//     const max_specific_capacity = rl.question(`What would be the maximum capacity?`);
//     const rpm = rl.question(`How many RPM would you like to set?`);
//     const degrees = rl.question(`How many degrees would you like to set?`);
//     const length_in_minuets = rl.question(`Set length time for the program:`);
    
//     containers.push({type: type, max_specific_capacity: max_specific_capacity, current_capacity: 0, 
//         program: { rpm: rpm, degrees: degrees, length_in_minuets: length_in_minuets }});

// }

// const answer = rl.question(`Do you want to add a new container?`);

// if (answer.toLowerCase() == "yes") {
//     add_container();
// }
// else if (answer.toLowerCase == "no") {
//     console.log("OK");
// }
// else {
//     console.log("Say WHAT???");
// }




function makeRequest(location){
    return new Promise((resolve, reject) =>{
        console.log(`making request to ${location}`);
        if(location === 'Google'){
            resolve('Google says Hi');
        }else{
            reject('We can only talk to Google');
        }
    })
}

function prossessRequest(respones){
    return new Promise((resolve, reject) =>{
        console.log('Processing response');
        resolve(`Extra information + ${respones}`);
    })
}

// makeRequest('FaceBook').then(respones => {
//     console.log('response recieved');
//     return prossessRequest(respones);
// }).then(processedResponse => {
//     console.log(processedResponse);
// }).catch(err =>{
//     console.log(err);
// })


async function doWork(){
    try{
        const response = await makeRequest('Facebook');
        console.log('Respones Recieved');
        const processedResponse = await prossessRequest(response);
        console.log(processedResponse);
    }
    catch(err){
        console.log(err);
    }
}


doWork();