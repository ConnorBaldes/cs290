/*
 * Add your JavaScript to this file to complete the assignment.
 */

 var twit_container = {

    number_of_twits: 0,
    twit_array: []
 };



function create_twit(content, author) {

    var twit = document.createElement('article');
    twit.classList.add('twit');
    
    var twit_icon = document.createElement('div');
    twit_icon.classList.add('twit-icon')
    twit.appendChild(twit_icon);

    var i = document.createElement('i');
    i.classList.add("fas");
    i.classList.add("fa-bullhorm");
    twit_icon.appendChild(i);

    var twit_content = document.createElement('div');
    twit_content.classList.add('twit-content');
    twit.appendChild(twit_content);

    var twit_text = document.createElement('p');
    twit_text.classList.add('twit-text');
    twit_text.textContent = content;
    twit_content.appendChild(twit_text);

    var twit_author = document.createElement('p');
    twit_author.classList.add('twit-author');
    twit_content.appendChild(twit_author);

    var a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = author;
    twit_author.appendChild(a);


    return twit;

}

function initialize_twit_container() {

    var twits = document.getElementsByClassName('twit')
 
    for(i = 0; i < 8; i++) {

        twit_container.twit_array.push(twits[i]);
        twit_container.number_of_twits += 1;
    }
    
}

    


initialize_twit_container();

var twit_button = document.getElementById('create-twit-button');

twit_button.addEventListener('click', function(event){

    var modal_back = document.getElementById('modal-backdrop');
    
    modal_back.classList.toggle('hidden');

    var modal_twit = document.getElementById('create-twit-modal');
    
    modal_twit.classList.toggle('hidden');

    //var close_modal = twit_button.getElementsByClassName('modal-close-button');

    //close_modal.addEventListener()

 

});

var close_modal = document.querySelector('.modal-close-button');

close_modal.addEventListener('click', function(event) {

    var modal_back = document.getElementById('modal-backdrop');
    
    modal_back.classList.toggle('hidden');

    var modal_twit = document.getElementById('create-twit-modal');
    
    modal_twit.classList.toggle('hidden');

    var twit_input_text = document.getElementById('twit-text-input');
    twit_input_text.value = '';
    var twit_input_name = document.getElementById('twit-attribution-input');
    twit_input_name.value = '';

    

});

var cancel_modal = document.querySelector('.modal-cancel-button');

cancel_modal.addEventListener('click', function(event) {

    var modal_back = document.getElementById('modal-backdrop');
    
    modal_back.classList.toggle('hidden');

    var modal_twit = document.getElementById('create-twit-modal');
    
    modal_twit.classList.toggle('hidden');

    var twit_input_text = document.getElementById('twit-text-input');
    twit_input_text.value = '';
    var twit_input_name = document.getElementById('twit-attribution-input');
    twit_input_name.value = '';

});

var accept_twit = document.querySelector('.modal-accept-button');

var user_content = '';
var user_name = '';
function twit_content_text(event) {

    var text = event.currentTarget.value;

    user_content = text;


    
}
function twit_content_author(event) {

    var text = event.currentTarget.value;

    user_name = text;


    
}

var twit_input_text = document.getElementById('twit-text-input');
twit_input_text.addEventListener('change', twit_content_text);

var twit_input_name = document.getElementById('twit-attribution-input');
twit_input_name.addEventListener('change', twit_content_author);



accept_twit.addEventListener('click', function(event){

    


    if( user_content === "" ) {
        
        alert("You didn't enter any twit content! ");

    }
    else if(user_name === "") {
        alert("You didn't enter your name!");
    }

    else {

        var new_twit = create_twit(user_content, user_name);
        twit_container.twit_array.push(new_twit);
        twit_container.number_of_twits += 1;

        var main = document.querySelector('.twit-container');

        main.appendChild(new_twit);


        var modal_back = document.getElementById('modal-backdrop');
    
        modal_back.classList.toggle('hidden');
    
        var modal_twit = document.getElementById('create-twit-modal');
        
        modal_twit.classList.toggle('hidden');

        var twit_input_text = document.getElementById('twit-text-input');
        twit_input_text.value = '';
        var twit_input_name = document.getElementById('twit-attribution-input');
        twit_input_name.value = '';






    }

});


function twit_search(event) {

        var user_search = event.currentTarget.value;

        var twits_main = document.getElementsByClassName('twit')
        console.log(user_search);
        var i = 0;
        while( i < twit_container.number_of_twits) {

            var twits = twit_container.twit_array[i];


            var twit_text = twits.querySelector('.twit-text').textContent;

 
            
            if(twit_text.indexOf(user_search) == -1) {

                console.log(twit_text.indexOf(user_search),);
                twits_main[i].remove();

            }
            else{
                i++;
            }

            //if(text.indexOf(user_search));
                
                
            
        }

}

var search_input = document.getElementById('navbar-search-input');

search_input.addEventListener('input', twit_search);




//var remove_modal = document.querySelector('modal-close-button');

//remove_modal.addEventListener('click', modal_activation); 



