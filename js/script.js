document.addEventListener("DOMContentLoaded", (event) => {
  const circles = document.querySelectorAll(".circle");

  circles.forEach((circle) => {
    const value = circle.getAttribute("data-value");
    const circleFill = circle.querySelector(".circle-fill");
    const radius = 15.9155; // Rayon de votre chemin
    const circumference = 2 * Math.PI * radius;
    const progressValue = value * circumference; // La longueur de la barre de progression

    circleFill.style.strokeDasharray = `${progressValue} ${circumference}`;
    circleFill.style.animation = `progress-animation 1s ease-out forwards`;
  });
});
