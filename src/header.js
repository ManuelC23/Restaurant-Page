export function header() {
  const contentSelector = document.getElementById('content');
  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  const linkList = document.createElement('ul');
  const homeLink = document.createElement('li');
  homeLink.innerText = 'Home';
  homeLink.classList.add('link');
  const menuLink = document.createElement('li');
  menuLink.innerText = 'Menu';
  menuLink.classList.add('link');
  const contactLink = document.createElement('li');
  contactLink.innerText = 'Contact';
  contactLink.classList.add('link');

  linkList.append(homeLink, menuLink, contactLink);
  header.append(linkList);

  contentSelector.appendChild(header);
}
