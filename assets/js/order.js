// Example Order Status logic
document.addEventListener('DOMContentLoaded', function() {
  const orderStatus = [
    { step: 'Order Placed', time: '12:01 PM' },
    { step: 'Preparing Food', time: '12:10 PM' },
    { step: 'Out for Delivery', time: '12:30 PM' }
  ];
  let html = '<ul class="list-group">';
  orderStatus.forEach(status => {
    html += `<li class="list-group-item">
      <strong>${status.step}</strong> <span class="text-muted">(${status.time})</span>
    </li>`;
  });
  html += '</ul>';
  document.getElementById('order-status-tracking').innerHTML = html;
});
                          
