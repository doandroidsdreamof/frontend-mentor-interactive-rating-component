const buttons = document.querySelectorAll('.container__ratebuttons ');
const submit = document.querySelector('.container__submitbutton')
const card = document.querySelector('.container');
const card2 = document.querySelector('.container2')
const select = document.getElementById('select');

submit.disabled = true;

buttons.forEach(get =>{
    get.addEventListener('click', (e)=>{
        const target = e.target;
        deleteClass();
        get.classList.add('active');
        submit.disabled = false;
        select.innerText =  `You selected ${target.value}  out of 5`
        if(!target.matches('button')){
            "false " +  submit.disabled
        }              
    });
    submit.disabled
   
});
function deleteClass(){
    buttons.forEach(element => {
        element.classList.remove("active")
    })
}
function submitFunc(){
        card.classList.remove("container");
        card.innerHTML = ""; 
        card.classList.add("container2");
        card2.style.display = "flex";
      
                
}

