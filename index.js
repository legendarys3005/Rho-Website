function downloadInstaller(fileName, downloaded) {
  const link = document.createElement('a');
  link.href = fileName;  // URL to your installer
  link.download = downloaded;  // Suggested file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function animateSvgArrow() {
  const body = document.getElementById('Body');
  body.classList.add('slide-up');
  localStorage.setItem('pageHidden', 'true');
  const nextSection = document.getElementById("next-page");

  body.classList.add("hidden");

  setTimeout(() => {
    body.style.display = "none";
    nextSection.classList.add("show");
  }, 1000);
}

// On page load check localStorage
// window.addEventListener('load', () => {
// if (localStorage.getItem('pageHidden') === 'true') {
// const body = document.getElementById('Body');
// body.classList.add('slide-up');
// }
// });


window.addEventListener("wheel", (e) => {
  const bodyDiv = document.getElementById("Body");
  if (bodyDiv && !bodyDiv.classList.contains("hidden") && e.deltaY > 5) {
    animateSvgArrow();
  }
});


