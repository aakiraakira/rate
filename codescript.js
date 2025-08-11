document.getElementById('linkForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const instagramLink = document.getElementById('instagramLink').value;
    const whatsappLink = document.getElementById('whatsappLink').value;
    const googleReviewLink = document.getElementById('googleReviewLink').value;

    const generatedHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap");

:root {
  --primary-colour: #0B111E;
  --secondary-colour: hsl(233 80% 70%);
  --body-color: hsl(var(--second-hue), 100%, 99%);
  --star-colour: hsl(38 90% 55%);
}

* {
  margin: 0;
  padding: 0;
  transition: 0.3s;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  overflow: hidden; /* Prevent scrolling */
}

body {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: var(--primary-colour);
  font-family: 'Poppins', sans-serif;
  color: #fff;
  text-align: center;
}

.rating-container {
  margin-top: 30px; /* Adjusted margin to move it higher */
  margin-bottom: 10px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center vertically */
  align-items: center; /* Center horizontally */
  height: 100%; /* Take full height */
}

.container__items {
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}

.container__items input {
  display: none;
}

.container__items label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.star-stroke {
  display: grid;
  place-items: center;
  width: 3em;
  height: 3em;
  background: var(--secondary-colour);
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.star-fill {
  width: 80%;
  height: 80%;
  background: var(--primary-colour);
  clip-path: inherit;
}

input:hover ~ label .star-stroke,
input:checked ~ label .star-stroke {
  background: var(--star-colour);
}

input:checked ~ label .star-stroke .star-fill {
  background: var(--star-colour);
}

.label-description::after {
  content: attr(data-content);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5em;
  color: #fff;
  text-align: center;
  font-size: 1rem;
  display: none;
}

label:hover .label-description::after {
  display: block;
}

.wrapper {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
  gap: 1em;
  margin-top: 20px;
}

.wrapper .icon {
  background: black;
  border: 2px solid var(--primary-colour); /* Adding border with primary color */
  border-radius: 15px;
  padding: 15px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background:black;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background: #1877F2;
  color: #ffffff;
}

.wrapper .whatsapp:hover,
.wrapper .whatsapp:hover .tooltip,
.wrapper .whatsapp:hover .tooltip::before {
  background: #25D366;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background: #7a21b6;
  color: #ffffff;
}

.wrapper .shopping-cart:hover,
.wrapper .shopping-cart:hover .tooltip,
.wrapper .shopping-cart:hover .tooltip::before {
  background: #FF9900;
  color: #ffffff;
}


</style>
  <title>How did we do?</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="icon" type="image/x-icon" href="/favicon_io/favicon.ico">

  <!-- PNG versions -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png">

  <!-- Apple Touch Icon -->
  <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png">

  <!-- Manifest (for progressive web apps) -->
  <link rel="manifest" href="/favicon_io/site.webmanifest">
</head>
<body>
  <div class="container">
    <div class="rating-container">
      <h1>How did we do today?</h1>
    </div>
    <div class="container__items">
      <input type="radio" name="stars" id="st5">
      <label for="st5">
        <div class="star-stroke">
          <div class="star-fill"></div>
        </div>
        <div class="label-description" data-content="Excellent"></div>
      </label>
      <input type="radio" name="stars" id="st4">
      <label for="st4">
        <div class="star-stroke">
          <div class="star-fill"></div>
        </div>
        <div class="label-description" data-content="Good"></div>
      </label>
      <input type="radio" name="stars" id="st3">
      <label for="st3">
        <div class="star-stroke">
          <div class="star-fill"></div>
        </div>
        <div class="label-description" data-content="OK"></div>
      </label>
      <input type="radio" name="stars" id="st2">
      <label for="st2">
        <div class="star-stroke">
          <div class="star-fill"></div>
        </div>
        <div class="label-description" data-content="Bad"></div>
      </label>
      <input type="radio" name="stars" id="st1">
      <label for="st1">
        <div class="star-stroke">
          <div class="star-fill"></div>
        </div>
        <div class="label-description" data-content="Terrible"></div>
      </label>
    </div>
  </div>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const starInputs = document.querySelectorAll('input[name="stars"]');
      const icons = document.querySelectorAll('.icon');

      starInputs.forEach(star => {
        star.addEventListener('change', (event) => {
          const selectedStar = event.target.id;
          setTimeout(() => {
            if (selectedStar === 'st1' || selectedStar === 'st2' || selectedStar === 'st3') {
              window.location.href = 'feedback';
            } else if (selectedStar === 'st4' || selectedStar === 'st5') {
              window.location.href = '${googleReviewLink}';
            }
          }, 500);
        });
      });

      icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
          const url = icon.getAttribute('data-url');
          if (icon.classList.contains('shopping-cart')) {
            setTimeout(() => {
              window.location.href = url;
            }, 700); // 0.7 second pause for shopping cart redirection
          } else {
            setTimeout(() => {
              window.open(url, '_blank');
            }, 700); // 0.7 second pause
          }
        });
      });
    });
  </script>
</body>
</html>
`;

    document.getElementById('generatedCode').textContent = generatedHTML;
});

document.getElementById('copyButton').addEventListener('click', function() {
    const generatedCode = document.getElementById('generatedCode');
    generatedCode.select();
    document.execCommand('copy');
    alert('HTML code copied to clipboard');
});

