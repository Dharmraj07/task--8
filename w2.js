var itemList=document.getElementById('items');

var form=document.getElementById('addForm');
form.addEventListener('submit',addItem);

function addItem(e){
  e.preventDefault();
  var newitem=document.getElementById('item').value;

  // create new list
  var li=document.createElement('li');
  //add class
  li.className='list-group-item';
  // link to child node
  li.appendChild(document.createTextNode(newitem));
  // crteate delete button
  var deleteBtn=document.createElement('button');
  deleteBtn.className='btn btn-danger btn-sm float-right delete';
  //create textnode
  var x=document.createTextNode('X');
  deleteBtn.appendChild(x);
  // create edit button
  var editBtn=document.createElement('button');
  editBtn.className='btn btn-danger btn-sm float-right delete';
  // create a textnode for edit
  var ed=document.createTextNode('Edit');
  editBtn.appendChild(ed);
  li.appendChild(editBtn);
  
  li.appendChild(deleteBtn);
 itemList.append(li);
  
}

/// delete Event
itemList.addEventListener('click',removeItem);

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}