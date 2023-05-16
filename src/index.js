import { loadPage, updatePage } from './loadpage';

loadPage();
export let num = 0;

function clickHeader() {
  const headerLinks = document.querySelectorAll('.link');
  headerLinks.forEach((element, index) =>
    element.addEventListener('click', () => {
      if (num === index) return;
      num = index;
      updatePage(index);
    })
  );
}

clickHeader();
