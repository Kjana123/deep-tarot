// Tarot Card Functionality
function revealCard(cardNumber) {
    const messages = {
        1: "The Star: Shine bright, your energy’s electric!",
        2: "The Tower: Boom! Change sparks a new vibe!",
        3: "The Lovers: Love zaps your cosmic core!"
    };
    const result = document.getElementById('tarot-result');
    result.innerText = messages[cardNumber];
    result.classList.add('reveal-animation');
    setTimeout(() => result.classList.remove('reveal-animation'), 1000);
}

function showFreeReading() {
    document.getElementById("free-reading").classList.remove("hidden");
    document.getElementById("free-reading").scrollIntoView({ behavior: "smooth" });
}

// Numerology Calculator
function calculateLifePath() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    if (!birthdate || birthdate > new Date()) {
        const result = document.getElementById('numerology-result');
        result.innerText = "Whoa! Drop a valid birthdate, cosmic traveler!";
        result.classList.add('reveal-animation');
        setTimeout(() => result.classList.remove('reveal-animation'), 1000);
        return;
    }

    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;
    let year = birthdate.getFullYear();

    let sum = String(day + month + year).split('').reduce((acc, digit) => acc + Number(digit), 0);
    while (sum > 9 && sum !== 11 && sum !== 22) {
        sum = String(sum).split('').reduce((acc, digit) => acc + Number(digit), 0);
    }

    const meanings = {
        1: "1: Lead the charge, you cosmic dynamo!",
        2: "2: Harmony vibes keep you buzzing!",
        3: "3: Creativity’s your power surge!",
        4: "4: Solid ground fuels your spark!",
        5: "5: Adventure’s your high-voltage thrill!",
        6: "6: Love powers up your universe!",
        7: "7: Wisdom’s your electric edge!",
        8: "8: Ambition’s your cosmic fuel!",
        9: "9: Compassion lights up the galaxy!",
        11: "11: Intuition’s your supernova!",
        22: "22: Vision’s your cosmic blast!"
    };

    const result = document.getElementById('numerology-result');
    result.innerText = meanings[sum];
    result.classList.add('reveal-animation');
    setTimeout(() => result.classList.remove('reveal-animation'), 1000);
}

// Contact Form
function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    

    const result = document.getElementById('form-response');
    result.innerText = `Boom, ${name}! Your cosmic pulse is live!`;
    result.classList.add('reveal-animation');
    document.getElementById('contact-form').reset();
    setTimeout(() => result.classList.remove('reveal-animation'), 1000);
}

// Page Load Effect
window.onload = () => {
    document.body.classList.add('energetic-load');
    setTimeout(() => document.body.classList.remove('energetic-load'), 1500);
};

// Pricing Plan Redirection
function goToPayment(planName, price) {
    localStorage.setItem('selectedPlan', JSON.stringify({ name: planName, price: price }));
    window.location.href = 'payment.html';
}

// Payment Page Load
function loadPaymentDetails() {
    if (window.location.pathname.includes('payment.html')) {
        const selectedPlan = JSON.parse(localStorage.getItem('selectedPlan'));
        if (selectedPlan) {
            document.getElementById('plan-details').innerText = `Charging up: ${selectedPlan.name} - ${selectedPlan.price}`;
        }
    }
}

// Payment Processing
function processPayment(event) {
    event.preventDefault();
    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Basic validation (for demo purposes)
    if (cardNumber.length < 16 || expiryDate.length < 5 || cvv.length < 3) {
        const response = document.getElementById('payment-response');
        response.innerText = "Zap! Check your card details, cosmic traveler!";
        response.classList.add('reveal-animation');
        setTimeout(() => response.classList.remove('reveal-animation'), 1000);
        return;
    }

    const response = document.getElementById('payment-response');
    response.innerText = `Payment charged, ${cardholderName}! Your cosmic journey begins!`;
    response.classList.add('reveal-animation');
    document.getElementById('payment-form').reset();
    setTimeout(() => response.classList.remove('reveal-animation'), 1000);
}

// Update window.onload to include payment details loading
window.onload = () => {
    document.body.classList.add('energetic-load');
    setTimeout(() => document.body.classList.remove('energetic-load'), 1500);
    loadPaymentDetails();
};

// Add event listeners to pricing buttons (call this in pricing.html context)
if (window.location.pathname.includes('pricing.html')) {
    document.querySelectorAll('.cta-small').forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.parentElement;
            const planName = plan.querySelector('h3').innerText;
            const price = plan.querySelector('p:nth-child(2)').innerText;
            goToPayment(planName, price);
        });
    });
}

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
  }
  
  // Close menu after clicking any link (for mobile)
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const navList = document.getElementById("navLinks");
  
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        if (navList.classList.contains("show")) {
          navList.classList.remove("show");
        }
      });
    });
  });

    function showTarotCards() {
        document.getElementById("tarotIntro").classList.add("hidden");
        document.getElementById("tarotCards").classList.remove("hidden");
    }

    const tarotMeanings = [
        "The Fool – New beginnings await you.",
        "The Magician – Manifest your desires.",
        "The High Priestess – Trust your intuition.",
        "The Empress – Embrace creativity and nurture.",
        "The Emperor – Step into your power.",
        "The Lovers – A choice from the heart is coming.",
        "The Chariot – Stay focused and charge forward.",
        "Strength – Inner courage will guide you.",
        "The Hermit – Seek wisdom within.",
        "Wheel of Fortune – Big changes are ahead."
    ];

    function revealCard(cardElement) {
        const index = Array.from(cardElement.parentNode.children).indexOf(cardElement);
        const message = tarotMeanings[index];
        cardElement.innerHTML = `<span>${message.split("–")[0]}</span>`;
        cardElement.classList.add("revealed");

        document.getElementById("tarotMessage").classList.remove("hidden");
        document.getElementById("cardResult").innerText = message;

        // Optional: Disable further clicks
        Array.from(document.querySelectorAll(".tarot-card")).forEach(card => {
            card.onclick = null;
        });
    }

    

