const list =document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
  event.preventDefault();
  const inputValue = input.value;
  input.value
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button2 = document.createElement('button');

  li.appendChild(span);
  li.appendChild(button2);

  span.textContent = inputValue;
  button2.textContent = 'Delete';
  list.appendChild(li);

  button2.addEventListener('click', function() {
    list.removeChild(li);

   
  });
  input.focus();
});

