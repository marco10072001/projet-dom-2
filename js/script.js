document.addEventListener("DOMContentLoaded", function() {
    const products = document.querySelectorAll(".card");
    const totalPriceElement = document.querySelector(".total");
  
    let totalPrice = 0;
  
    // Fonction pour mettre à jour le prix total
    function updateTotalPrice() {
      totalPriceElement.textContent = totalPrice + " $";
    }
  
    // Fonction pour ajuster la quantité d'un produit
    function adjustQuantity(card, amount) {
      const unitPriceElement = card.querySelector(".unit-price");
      const quantityElement = card.querySelector(".quantity");
  
      const unitPrice = parseFloat(unitPriceElement.textContent);
      let quantity = parseInt(quantityElement.textContent);
  
      quantity += amount;
  
      if (quantity < 0) {
        quantity = 0;
      }
  
      quantityElement.textContent = quantity;
      totalPrice += unitPrice * amount;
      updateTotalPrice();
    }
  
    // événements pour les boutons + et -
    products.forEach(function(product) {
      const plusButton = product.querySelector(".fa-plus-circle");
      const minusButton = product.querySelector(".fa-minus-circle");
      const trashButton = product.querySelector(".fa-trash-alt");
      const likeButton = product.querySelector(".fa-heart");
  
      plusButton.addEventListener("click", function() {
        adjustQuantity(product.parentNode, 1);
      });
  
      minusButton.addEventListener("click", function() {
        adjustQuantity(product.parentNode, -1);
      });
  
      trashButton.addEventListener("click", function() {
        const quantityElement = product.querySelector(".quantity");
        const unitPriceElement = product.querySelector(".unit-price");
  
        const quantity = parseInt(quantityElement.textContent);
        const unitPrice = parseFloat(unitPriceElement.textContent);
  
        totalPrice -= unitPrice * quantity;
        updateTotalPrice();
  
        product.parentNode.remove();
      });
  
      likeButton.addEventListener("click", function() {
        likeButton.classList.toggle("liked");
      });
    });
  });
  