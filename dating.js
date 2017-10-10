function init() {
    console.log('JS Connected.');

    /** Steps:
    Profiles need to be created. This can be done by appending to the DOM.
    How do we make this random? Am I misunderstanding the assignment?
    1. Let's start with functionality; when the app starts, a profile is 
    generated
    2. Pressing either yes or no returns a new profile and "fades" the previous
        a. button event listener that console logs and
        b. adds a class of "faded" or some such and
        c. appends a new profile
    **/

    let no = document.querySelector('#pass');
    no.addEventListener('click', function() {
        console.log("I'll pass...");

        
    });

    let yes = document.querySelector('#good');
    yes.addEventListener('click', function() {
        console.log("Seems promising...");
    });

}

window.addEventListener('load', init);