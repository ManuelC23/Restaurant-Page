export function homepage() {
  const contentSelector = document.getElementById('content');
  const linkSelector = document.querySelectorAll('li');
  linkSelector[0].style.textDecoration = 'underline';
  linkSelector[0].style.textUnderlineOffset = '8px';
  linkSelector[1].style.textDecoration = 'none';
  linkSelector[2].style.textDecoration = 'none';

  if (contentSelector.childElementCount <= 1) {
    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'main-content');

    contentSelector.append(mainContent);

    const mainInfo = document.createElement('div');
    mainInfo.classList.add('main-info');
    mainContent.appendChild(mainInfo);

    const restaurantName = document.createElement('h2');
    restaurantName.innerText = "Manuel's Pizza House";

    const restaurantInfo = document.createElement('p');
    restaurantInfo.innerText = `Welcome to Manuel's Pizza House, where quality and taste come together to create the perfect dining experience! Our restaurant prides itself on using only the freshest ingredients in our pizzas, with a variety of toppings to suit every palate. Our recipes have been carefully crafted to satisfy even the most discerning pizza connoisseur, and our chefs take great pride in ensuring that each and every pizza is made to perfection. From classic margherita to bold and spicy pepperoni, there's something for everyone at Manuel's Pizza House. Come visit us and taste the difference for yourself! 
                
                In addition to our mouth-watering pizzas, we also offer a range of sides, salads, and desserts to complete your meal. And with our welcoming atmosphere and friendly staff, Manuel's Pizza House is the perfect place to enjoy a delicious and satisfying meal with friends and family. Come visit us today and experience the best pizza in town!`;

    mainInfo.appendChild(restaurantName);
    mainInfo.appendChild(restaurantInfo);
  } else {
    const mainContent = contentSelector.children[1];
    mainContent.setAttribute('id', 'main-content');
    mainContent.innerHTML = '';

    const mainInfo = document.createElement('div');
    mainInfo.classList.add('main-info');
    mainContent.appendChild(mainInfo);

    const restaurantName = document.createElement('h2');
    restaurantName.innerText = "Manuel's Pizza House";

    const restaurantInfo = document.createElement('p');
    restaurantInfo.innerText = `Welcome to Manuel's Pizza House, where quality and taste come together to create the perfect dining experience! Our restaurant prides itself on using only the freshest ingredients in our pizzas, with a variety of toppings to suit every palate. Our recipes have been carefully crafted to satisfy even the most discerning pizza connoisseur, and our chefs take great pride in ensuring that each and every pizza is made to perfection. From classic margherita to bold and spicy pepperoni, there's something for everyone at Manuel's Pizza House. Come visit us and taste the difference for yourself! 
                
                In addition to our mouth-watering pizzas, we also offer a range of sides, salads, and desserts to complete your meal. And with our welcoming atmosphere and friendly staff, Manuel's Pizza House is the perfect place to enjoy a delicious and satisfying meal with friends and family. Come visit us today and experience the best pizza in town!`;

    mainInfo.appendChild(restaurantName);
    mainInfo.appendChild(restaurantInfo);
  }
}
