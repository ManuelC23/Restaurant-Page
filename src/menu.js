export function menu() {
  const linkSelector = document.querySelectorAll('li');
  linkSelector[1].style.textDecoration = 'underline';
  linkSelector[1].style.textUnderlineOffset = '8px';
  linkSelector[0].style.textDecoration = 'none';
  linkSelector[2].style.textDecoration = 'none';

  const contentSelector = document.getElementById('content').children[1];
  contentSelector.setAttribute('id', 'menu-content');
  contentSelector.innerHTML = '';

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-info');
  contentSelector.appendChild(menuInfo);

  const menuTitle = document.createElement('h2');
  menuTitle.innerText = 'Menu';

  const menuText = document.createElement('p');
  menuText.innerText = `Margherita Pizza: $22
    Pepperoni Pizza: $24
    Hawaiian Pizza: $26
    Four Cheese Pizza: $28
    Veggie Supreme Pizza: $25
    BBQ Chicken Pizza: $30
    Prosciutto and Arugula Pizza: $32
    Mediterranean Pizza: $23
    Caprese Pizza: $27
    Spicy Sausage Pizza: $29`;
  menuInfo.appendChild(menuTitle);
  menuInfo.appendChild(menuText);
}
