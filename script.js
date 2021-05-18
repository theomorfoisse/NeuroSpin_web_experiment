

// Generate a random subject ID and add it to jsPsych's data to be saved
var subjectID = jsPsych.randomization.randomID(10000);
jsPsych.data.addProperties({'ID': subjectID});

// 1) Create timeline 
var timeline = [];
console.log("1");

// // // FIRST PART OF THE EXPERIMENT : INTRODUCTION

// 2) The consent block, which points to the consent page
var consent = {
    type : "external-html",
    url: "external-consent.html",
    cont_btn: "start"
}
timeline.push(consent)
console.log("2");

// 3) Declare the demographic questionaire block. 
var survey = {
    type : "survey-dropdown",
    preamble:" Veuillez prendre le temps de répondre à ces quelques questions démographiques supplémentaires, nécessaire pour connaître l\'échantillon étudié:",
    button_label : "Instructions",
    questions: [{prompt: "Age:",
        options: [ "18-25 ans", "25-40 ans", "40-60 ans", "> 60 ans"],
        labels: ["18-25","25-40","40-60","60-more"]},
        {prompt: "Sexe:",
        options: ["Homme", "Femme"],
        labels: ["M", "F"]}]
};
timeline.push(survey)
console.log("3");

// 4) Instructions -- text declared in another file
var instrutions = {
    type:'instructions',
    show_clickable_nav: true,
    button_label_next: "Suivant",
    button_label_previous:" Précédedent",
    pages: [instruction_text_p1,instruction_text_p2]
}
timeline.push(instrutions)        

// // // SECOND PART OF THE EXPERIMENT : RECOGNIZING SHAPES

/* 5) Define the minimalist stimuli for test trials */
var test_stimuli_minimalist = [
    {stimulus : 'images/minimalist_new/images55.png'},
    {stimulus : 'images/minimalist_new/images56.png'},
    {stimulus : 'images/minimalist_new/images57.png'},
    {stimulus : 'images/minimalist_new/images58.png'},
    {stimulus : 'images/minimalist_new/images59.png'},
    {stimulus : 'images/minimalist_new/images60.png'},
    {stimulus : 'images/minimalist_new/images61.png'},
    {stimulus : 'images/minimalist_new/images62.png'},
    {stimulus : 'images/minimalist_new/images63.png'},
    {stimulus : 'images/minimalist_new/images64.png'},
    {stimulus : 'images/minimalist_new/images65.png'},
    {stimulus : 'images/minimalist_new/images66.png'},
    {stimulus : 'images/minimalist_new/images67.png'},
    {stimulus : 'images/minimalist_new/images68.png'},
    {stimulus : 'images/minimalist_new/images69.png'},
    {stimulus : 'images/minimalist_new/images70.png'},
    {stimulus : 'images/minimalist_new/images71.png'},
    {stimulus : 'images/minimalist_new/images72.png'},
    {stimulus : 'images/minimalist_new/images73.png'},
    {stimulus : 'images/minimalist_new/images74.png'},
    {stimulus : 'images/minimalist_new/images75.png'},
    {stimulus : 'images/minimalist_new/images76.png'},
    {stimulus : 'images/minimalist_new/images77.png'},
    {stimulus : 'images/minimalist_new/images78.png'},
    {stimulus : 'images/minimalist_new/images79.png'},
    {stimulus : 'images/minimalist_new/images80.png'},
    {stimulus : 'images/minimalist_new/images81.png'},
    {stimulus : 'images/minimalist_new/images82.png'},
    {stimulus : 'images/minimalist_new/images83.png'},
    {stimulus : 'images/minimalist_new/images84.png'},
    {stimulus : 'images/minimalist_new/images85.png'},
    {stimulus : 'images/minimalist_new/images86.png'},
    {stimulus : 'images/minimalist_new/images87.png'},
    {stimulus : 'images/minimalist_new/images88.png'},
    {stimulus : 'images/minimalist_new/images89.png'},
    {stimulus : 'images/minimalist_new/images90.png'},
    {stimulus : 'images/minimalist_new/images91.png'},
    {stimulus : 'images/minimalist_new/images92.png'},
    {stimulus : 'images/minimalist_new/images93.png'},
    {stimulus : 'images/minimalist_new/images94.png'},
    {stimulus : 'images/minimalist_new/images95.png'},
    {stimulus : 'images/minimalist_new/images96.png'},
    {stimulus : 'images/minimalist_new/images97.png'},
    {stimulus : 'images/minimalist_new/images98.png'},
    {stimulus : 'images/minimalist_new/images99.png'},
    {stimulus : 'images/minimalist_new/images100.png'},
    {stimulus : 'images/minimalist_new/images101.png'},
    {stimulus : 'images/minimalist_new/images102.png'},
    {stimulus : 'images/minimalist_new/images103.png'},
    {stimulus : 'images/minimalist_new/images104.png'},
    {stimulus : 'images/minimalist_new/images105.png'},
    {stimulus : 'images/minimalist_new/images106.png'},
    {stimulus : 'images/minimalist_new/images107.png'},
    {stimulus : 'images/minimalist_new/images108.png'},
    {stimulus : 'images/minimalist_new/images109.png'},
    {stimulus : 'images/minimalist_new/images110.png'},
    {stimulus : 'images/minimalist_new/images111.png'},
    {stimulus : 'images/minimalist_new/images112.png'},
    {stimulus : 'images/minimalist_new/images113.png'},
    {stimulus : 'images/minimalist_new/images114.png'},
    {stimulus : 'images/minimalist_new/images115.png'},
    {stimulus : 'images/minimalist_new/images116.png'},
    {stimulus : 'images/minimalist_new/images117.png'},
    {stimulus : 'images/minimalist_new/images118.png'},
    {stimulus : 'images/minimalist_new/images119.png'},
    {stimulus : 'images/minimalist_new/images120.png'},
    {stimulus : 'images/minimalist_new/images121.png'},
    {stimulus : 'images/minimalist_new/images122.png'}
]

// Presentation of the stimuli
var test = {
    type : "image-keyboard-response",
    stimulus: jsPsych.timelineVariable('stimulus'),
    stimulus_height : 500,
    stimulus_width : 500,
    choices: jsPsych.NO_KEYS,
    trial_duration: 2000,
}

// Presentation of the response
var response_question = {
type: 'survey-text',
questions: [
    {prompt: ""}
],
button_label: 'Prochaine image'
}

// Block with minimalist representations 
var test_procedure_1 = {
    timeline : [test,response_question],
    timeline_variables: test_stimuli_minimalist,
    randomize_order: true
}
timeline.push(test_procedure_1)

// // // THIRD PART OF THE EXPERIMENT : CHOOSING BEST SHAPES

var end_first = {
    type : "external-html",
    url: "end_of_block.html",
    cont_btn: "start"
}
timeline.push(end_first)

var instrutions = {
    type:'instructions',
    show_clickable_nav: true,
    button_label_next: "Suivant",
    button_label_previous:" Précédedent",
    pages: [instruction_text_p3,instruction_text_p4]
}
timeline.push(instrutions)  

// Define the minimalist stimuli for test trials 
var test_stimuli_minimalist_2 = [
    {stimulus : "<img src='images/stimuli_together/images1.png'/>", name : "Quel est le bonhomme debout que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images2.png'/>", name : "Quel est le bonhomme assis que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images3.png'/>", name : "Quel est le bonhomme qui marche que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images4.png'/>", name : "Quelles sont les jambes que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images5.png'/>", name : "Quel est le poisson que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images6.png'/>", name : "Quel est l'oiseau que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images7.png'/>", name : "Quelle est la giraffe que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images8.png'/>", name : "Quel est le visage que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images9.png'/>", name : "Quels sont les yeux que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images10.png'/>", name : "Quel est le chat que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images11.png'/>", name : "Quel est la feuille que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images12.png'/>", name : "Quel est l'arbre que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images13.png'/>", name : "Quel est le camion que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images14.png'/>", name : "Quelle est la glace que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images15.png'/>", name : "Quelle est la clé que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images16.png'/>", name : "Quelle est la montre que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images17.png'/>", name : "Quel est l'appareil photo que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images18.png'/>", name : "Quelle est la maison que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images19.png'/>", name : "Quel est le soleil que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images20.png'/>", name : "Quelle est la montagne que vous préferez ?"},
    {stimulus : "<img src='images/stimuli_together/images21.png'/>", name : "Quelle est la route que vous préferez ?"}
]

var choosing_trial = {
    type: 'survey-text',
    preamble : jsPsych.timelineVariable('stimulus'),
    questions: [
        {prompt: jsPsych.timelineVariable('name'), placeholder : "1,2,3,4,..."}
    ],
    button_label: 'Prochaine image'
}

// Block organization
var test_procedure_2 = {
    timeline : [choosing_trial],
    timeline_variables: test_stimuli_minimalist_2,
    randomize_order: true
}
timeline.push(test_procedure_2)
console.log("4")





// This forces jsPsych to wait for resources to be loaded before starting the
// experiment. Otherwise unpredictable behaviour ensue.
document.addEventListener("DOMContentLoaded", function(event) {
   
    // This detects touch events and register them
    window.USER_IS_TOUCHING = false;
    window.addEventListener('touchstart', function registerTouch() {
        window.USER_IS_TOUCHING = true;
        window.removeEventListener('touchstart', registerTouch, false);
    }, false);

    // This is required. Check the wiki for more information as to why.
    //sendData(subjectID, "testUser", "testProject", "ping");


    /* start the experiment */
    jsPsych.init({
    timeline: timeline,
    /*on_finish: function(){
        jsPsych.data.get().filter([{trial_type: 'image-keyboard-response'},{trial_type: 'survey-text'}]).ignore(['internal_node_id','time_elapsed','trial_type']).localSave('csv','data_experiment.csv')*/
        on_finish: function(){
            
            final_data = jsPsych.data.get().filter([{trial_type: 'image-keyboard-response'},{trial_type: 'survey-text'}]).ignore(['internal_node_id','time_elapsed','trial_type','ID']).csv()
            //final_data = jsPsych.data.get().csv();
            console.log(final_data);
            //sendData(subjectID,"testUser","testProject",final_data);
            document.getElementById("jspsych-content").innerHTML = "Merci de votre participation !";
            //document.getElementById("jspsych-content").innerHTML += "<br/><br/>data:<br/><pre>" + final_data + "</pre";
        }
    });
}); 
