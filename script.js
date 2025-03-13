
  document.querySelectorAll(".skill-logo").forEach(logo => {
    logo.addEventListener("click", function() {
      // Récupère l'élément texte associé dans le même bloc
      const textElement = this.parentElement.querySelector(".skill-text");
      // Bascule l'affichage du texte
      textElement.classList.toggle("visible");
      // Bascule la classe "active" sur le logo pour activer l'effet CSS
      this.classList.toggle("active");
    });
  });