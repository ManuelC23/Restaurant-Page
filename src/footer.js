export function footer() {
  const contentSelector = document.getElementById('content');
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');

  footer.innerText = `Website made as part of The Odin Project curriculum.`;
  contentSelector.appendChild(footer);
}
