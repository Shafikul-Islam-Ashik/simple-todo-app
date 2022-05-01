
//select items and assign to variables


let input_field = document.querySelector('#input_field');
let input_btn = document.querySelector('.input_btn');
let incomplete_ul = document.querySelector('.incomplete_list #items');
let incomplete_li = document.querySelector('.incomplete_list .item');
let incomplete_li_label = document.querySelector('.incomplete_list label');
let incomplete_checkbox = document.querySelector('.incomplete_list input[type="checkbox"]');
let completed_ul = document.querySelector('.completed_list #items');
let completed_li = document.querySelector('.completed_list .item');
let delete_btn = document.querySelector('.completed_list .delete');
let form = document.querySelector('form');




//functions

form.onsubmit = function(event) {
  event.preventDefault();
  let list_item = document.createElement('li');
  let checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  let label = document.createElement('label');
  label.innerHTML = input_field.value;
  
  
  list_item.appendChild(checkbox);
  list_item.appendChild(label);
  list_item.classList.add('item');
  
  
  incomplete_ul.appendChild(list_item);
  input_field.value = '';  
  
  
  
  
  //incomplete to complete task


 let icb  = list_item.querySelector('input[type="checkbox"]');
  
  icb.onchange  = function() {
  let c_del_btn = document.createElement('button');
  c_del_btn.innerText = 'Delete';
  c_del_btn.className = 'delete';
 let li  = icb.parentNode;
/* li.removeChild(icb);
 li.appendChild(c_del_btn);
 completed_ul.appendChild(li);*/
 list_item.removeChild(icb);
 list_item.appendChild(c_del_btn);
 completed_ul.appendChild(list_item);
 
 
 
 //delete task

 bind(list_item, deleteTask);

 }
  


let deleteTask = function(){
  let list_item = this.parentNode;
  let ul = list_item.parentNode;
  ul.removeChild(list_item);
}


let bind = function(ami, tmi){
 let dltButton = ami.querySelector('.delete');
 dltButton.onclick = tmi;
}





}//onsubmit ends here!





//incomplete to complete task default

for(let i=0; i<incomplete_ul.children.length; i++){
 let icb  = incomplete_ul.children[i].querySelector('input[type="checkbox"]');
  
  icb.onchange  = function() {
  let c_del_btn = document.createElement('button');
  c_del_btn.innerText = 'Delete';
  c_del_btn.className = 'delete';
 let li  = icb.parentNode;
 li.removeChild(icb);
 li.appendChild(c_del_btn);
 completed_ul.appendChild(li);
 
 
 bind(li, deleteTask);
  }
}



// delete task default


for(let i=0; i<completed_ul.children.length; i++){
 let cd_btn = completed_ul.children[i].querySelector('.delete');
  
  cd_btn.onclick  = function() {
  
 let c_li  = cd_btn.parentNode;
 let uul = c_li.parentNode;
 uul.removeChild(c_li);
 
}
 }
 
 
 
 
let bind = function(ami, tmi){
 let dltButton = ami.querySelector('.delete');
 dltButton.onclick = tmi;
}
let deleteTask = function(){
    let list_item = this.parentNode;
    let ul = list_item.parentNode;
    ul.removeChild(list_item);
  
  
}



