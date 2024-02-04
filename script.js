function showCategory(category) {
  const products = document.querySelectorAll('.product');
  products.forEach(product => {
    if (product.classList.contains(category) || category === 'todo') {
      product.style.display = 'flex';
    } else {
      product.style.display = 'none';
    }
  });
}