/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


function createMenu (x) {



  let menu = document.createElement('div');

  let ul = document.createElement('ul');

  let li1 = document.createElement('li');

  let li2 = document.createElement('li');

  let li3 = document.createElement('li');

  let li4 = document.createElement('li');

  let li5 = document.createElement('li');

  let li6 = document.createElement('li');

 console.log(menuItems);

 menuItems.forEach(function (item){
   console.log(item);
 })

 li1.textContent = 'Students';
 li2.textContent = 'Falculty';
 li3.textContent = 'Whats New';
 li4.textContent = 'Tech Trends';
 li5.textContent = 'Music';
 li6.textContent = 'Log Out';
 

  menu.append(ul);
  ul.append(li1);
  ul.append(li3);
  ul.append(li4);
  ul.append(li5);
  ul.append(li6);

  menu.classList.add('menu');
 li1.classList.add('li');
 li2.classList.add('li');
 li3.classList.add('li');
 li4.classList.add('li');
 li5.classList.add('li');
 li6.classList.add('li');
 
 let menuButton = document.querySelector('.menu-button');

 menuButton.addEventListener('click', event => {
   menu.classList.toggle('menu--open');
   return menu;
 })

return menu

 };
let menuButton2 = document.querySelector('.header');
 menuButton2.append(createMenu(menuItems));



