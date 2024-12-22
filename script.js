const titleSelector = document.querySelector(".titleH3");
const titleDiv = document.querySelector(".inputJs");
const addBtn = document.querySelector('.btn-create');
const doFather = document.querySelector('.to-do');
const descriptionInput = document.querySelector('.descriptionINPUT');
const checkBoxDiv = document.querySelector('.subTask-check');





// title
var inputTitle;

titleSelector.addEventListener("click" , function () {
    inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.className = "jsStyle";
    inputTitle.setAttribute("value" , "");
    titleDiv.appendChild(inputTitle);
});







// description value
var descValue ;


const getValueOfDesc = (e)=> {
    descValue = e;
}


// checkbox 

var inputCheckbox  ;
let checkboxArrayValue = [];

const checkBoxCreatorInp = ()=> {
    inputCheckbox = document.createElement("input");
    inputCheckbox.type = "text";
    inputCheckbox.className = "jsStyle";
    inputCheckbox.setAttribute("value" , "");
    checkBoxDiv.appendChild(inputCheckbox);
}

// var checkbox;

// const checkBoxCreator = ()=> {
//     checkboxArrayValue.push(inputCheckbox.value);
//     checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     checkbox.setAttribute('value' , "");
//     checkbox
// }


  
const checkBoxCreator = ()=> {
    checkboxArrayValue.push(inputCheckbox.value);

    for (let i = 0 ; i < checkboxArrayValue.length ; i++) {
        checkBoxDiv.innerHTML = `<label>
        <input type="checkbox" name="business" />
        `+ checkboxArrayValue[i] +`
      </label>`
    }

}


// btns


var btnCreator ;
let btnClass = [];
let btnValue = [];

const btnFinder = (e)=> {
    

let btnFather = document.querySelector('.do-lable');

    btnClass.push(e.className);
    btnValue.push(e.id);

    for (let i = 0 ; i<btnClass.length ; i++) {
        btnCreator = document.createElement('button');
        btnCreator.className = btnClass[i];
        btnCreator.innerHTML = btnValue[i];
    } 
    btnFather.appendChild(btnCreator);
}



// render a card



addBtn.addEventListener('click',()=>{
    doFather.innerHTML += `            
    <div class="do-content">
                <div class="do-title">
                    <h4>`+ inputTitle.value +`</h4>
                </div>
                <div class="do-info">
                    <p>12th june</p>
                    <img src="images/Ellipse 125.png" alt="seperator">
                    <p>Assigned to <span>Taha</span></p>
                </div>
                <div class="do-description">
                    <p>`+descValue+`</p>
                </div>
                <div class="do-subtask subTask-check">
                        <label>
                            <input type="checkbox" name="business" />
                          </label>
                          
                          <label>
                            <input type="checkbox" name="economy" checked />
                            Checkbox
                          </label>
                </div>
                <div class="do-lable">

                </div>
            </div>`
} )



const card = document.querySelector('.do-content');
card.addEventListener('')