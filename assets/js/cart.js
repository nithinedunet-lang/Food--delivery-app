// Example Cart logic
document.addEventListener('DOMContentLoaded', function() {
  const cartItems = [
    { name: 'Margherita Pizza', restaurant: 'Pizza Palace', price: 8.99 },
    { name: 'Vegan Burger', restaurant: 'Burger Hub', price: 7.50 }
  ];
  let html = '<ul class="list-group">';
  cartItems.forEach(item => {
    html += `<li class="list-group-item d-flex justify-content-between align-items-center">
      ${item.name} <span class="badge badge-primary badge-pill">$${item.price}</span>
    </li>`;
  });
  html += '</ul>';
  document.getElementById('cart-items').innerHTML = html;
});

function placeOrder() {
  alert('Order placed! Redirecting to order status...');
  window.location.href = 'order-status.html';
}
