export function contact() {
  const linkSelector = document.querySelectorAll('li');
  linkSelector[2].style.textDecoration = 'underline';
  linkSelector[2].style.textUnderlineOffset = '8px';
  linkSelector[0].style.textDecoration = 'none';
  linkSelector[1].style.textDecoration = 'none';

  const contentSelector = document.getElementById('content').children[1];
  contentSelector.setAttribute('id', 'contact-content');
  contentSelector.innerHTML = '';

  const contactInfo = document.createElement('div');
  contactInfo.classList.add('contact-info');
  contentSelector.appendChild(contactInfo);

  const contactTitle = document.createElement('h2');
  contactTitle.innerText = 'Contact';

  const contactText = document.createElement('p');
  contactText.innerText = `Address: 123 Pizza Street, Los Angeles, CA, 12345
Phone: +1 555-123-4567
Email: info@manuelspizzahouse.com

Please feel free to reach out to us for any inquiries, reservations, or to satisfy your pizza cravings. We look forward to serving you the best pizza experience in Los Angeles!`;
  contactInfo.appendChild(contactTitle);
  contactInfo.appendChild(contactText);
}
