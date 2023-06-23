//your code here!
let list = document.querySelector('#infi-list');
list.addEventListener('scroll', () => {
  let rect = list.getBoundingClientRect();
  //console.log(list.children.length);
  if (rect.bottom <= window.innerHeight) {
    let newItem1 = document.createElement('li');
    newItem1.textContent = `${list.lastElementChild.textContent.substring(0,4)} ${list.children.length +1}`;
    list.appendChild(newItem1);
    let newItem2 = document.createElement('li');
    newItem2.textContent = `${list.lastElementChild.textContent.substring(0,4)} ${list.children.length +1}`;
    list.appendChild(newItem2);
  }
});
