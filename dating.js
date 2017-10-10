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

    //Profiles: 
    let people = [{ name: 'Tom', age: 25, pic: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: 'Jerry', age: 53, pic: "https://randomuser.me/api/portraits/men/20.jpg" },
    { name: 'Ron', age: 42, pic: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: 'Chris', age: 45, pic: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: 'Andy', age: 29, pic: "https://randomuser.me/api/portraits/men/58.jpg" },
    { name: 'Ben', age: 36, pic: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: 'Jean-Ralphio', age: 25, pic: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Perd', age: 38, pic: "https://randomuser.me/api/portraits/men/0.jpg" },
    { name: 'Kyle', age: 45, pic: "https://randomuser.me/api/portraits/men/26.jpg" },

    { name: 'Leslie', age: 35, pic: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Ann', age: 33, pic: "https://randomuser.me/api/portraits/women/72.jpg" },
    { name: 'April', age: 19, pic: "https://randomuser.me/api/portraits/women/82.jpg" },
    { name: 'Mona-Lisa', age: 23, pic: "https://randomuser.me/api/portraits/women/92.jpg" },
    { name: 'Donna', age: 33, pic: "https://randomuser.me/api/portraits/women/38.jpg" },
    { name: 'Joan', age: 42, pic: "https://randomuser.me/api/portraits/women/84.jpg" },
    { name: 'Tammy I', age: 42, pic: "https://randomuser.me/api/portraits/women/85.jpg" },
    { name: 'Millicent', age: 28, pic: "https://randomuser.me/api/portraits/women/40.jpg" },
    { name: 'Ethel', age: 74, pic: "https://randomuser.me/api/portraits/women/52.jpg" },
    { name: 'Gayle', age: 48, pic: "https://randomuser.me/api/portraits/women/9.jpg" },
    ];

    // Trying to make a random number generator between 0 and people.length
    let rando = Math.floor((Math.random() * (people.length + 1)));

    /** Use Math.random to generate a random number btw 0-1, multiply that by
     * the amount of people in the array, plus one (because otherwise, you 
     * can never return the actual highest number) and then use Math.floor to
     * round down to the nearest whole number. Makes sense, I think. */
    
    console.log(rando);

    let profile = document.querySelector('ul');

    let no = document.querySelector('#pass');
    no.addEventListener('click', function () {
        console.log("I'll pass...");

        profile.classList.add('faded');
        
        //newProfile()

    });

    let yes = document.querySelector('#good');
    yes.addEventListener('click', function () {
        console.log("Seems promising...");

        profile.classList.add('faded');

        //newProfile()
    });

    function newProfile() {
        
    }

    console.log(people.length);
}

window.addEventListener('load', init);