import { homepage } from './homepage';
import { header } from './header';
import { footer } from './footer';
import { menu } from './menu';
import { contact } from './contact';

export function loadPage() {
  header();
  homepage();
  footer();
}

export function updatePage(num) {
  if (num === 0) {
    return homepage();
  }
  if (num === 1) {
    return menu();
  }
  if (num === 2) {
    return contact();
  }
}
