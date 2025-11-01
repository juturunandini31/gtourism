// Region-aware handler for destination pages
function handleRegion() {
    const params = new URLSearchParams(location.search);
    const region = params.get('region');
    const statsSection = document.querySelector('.stats-sections');
    const sectionTitle = document.querySelector('.section-title h2');
    const cardsRow = document.getElementById('ge-cards-row');

    // Hide stats section by default for non-Asia regions
    if (region && region !== 'Japan') {
        statsSection.style.display = 'none';
    }

    // Update title and cards based on region
    switch(region) {
        case 'Europe':
            sectionTitle.textContent = 'European Wonders';
            showEuropeCards();
            break;
        case 'Africa':
            sectionTitle.textContent = 'African Adventures';
            showAfricaCards();
            break;
        case 'Russia':
            sectionTitle.textContent = 'Russian Treasures';
            showRussiaCards();
            break;
        case 'Australia':
            sectionTitle.textContent = 'Australian Highlights';
            showAustraliaCards();
            break;
        case 'Japan':
            sectionTitle.textContent = 'Japan Top Attractions';
            // Keep existing Japan cards
            break;
        default:
            sectionTitle.textContent = 'All Tour Packages';
            // Show all cards
            break;
    }
}

function createCard(data) {
    return `
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay=".2s">
            <div class="destination-card-items mt-0">
                <div class="destination-image">
                    <a href="destination-details.html">
                        <img src="${data.image}" alt="${data.location}">
                    </a>
                    <div class="heart-icon"><i class="fa-regular fa-heart"></i></div>
                </div>
                <div class="destination-content">
                    <ul class="meta">
                        <li><i class="fa-thin fa-location-dot"></i> ${data.location}</li>
                        <li class="rating"><div class="star"><i class="fa-solid fa-star"></i></div><p>${data.rating}</p></li>
                    </ul>
                    <h5><a href="destination-details.html">${data.title}</a></h5>
                    <ul class="info">
                        <li><i class="fa-regular fa-clock"></i> ${data.days} Days</li>
                        <li><i class="fa-thin fa-users"></i> ${data.visitors}+</li>
                    </ul>
                    <div class="price">
                        <h6>₹${data.price}<span>/Per Person</span></h6>
                        <a href="destination-details.html" class="theme-btn style-2">Book Now <i class="fa-sharp fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function showEuropeCards() {
    const cardsRow = document.getElementById('ge-cards-row');
    cardsRow.innerHTML = '';
    
    const europeanDestinations = [
        {
            image: './assets/img/destination/paris.jpg',
            location: 'France',
            rating: '4.9',
            title: 'Paris & French Riviera Discovery',
            days: '8',
            visitors: '40',
            price: '125,000'
        },
        {
            image: './assets/img/destination/rome.jpg',
            location: 'Italy',
            rating: '4.8',
            title: 'Rome & Tuscany Explorer',
            days: '7',
            visitors: '35',
            price: '115,000'
        },
        {
            image: './assets/img/destination/swiss.jpg',
            location: 'Switzerland',
            rating: '4.9',
            title: 'Swiss Alps Adventure',
            days: '6',
            visitors: '30',
            price: '135,000'
        }
    ];

    europeanDestinations.forEach(dest => {
        cardsRow.innerHTML += createCard(dest);
    });
}

function showAfricaCards() {
    const cardsRow = document.getElementById('ge-cards-row');
    cardsRow.innerHTML = '';
    
    const africanDestinations = [
        {
            image: './assets/img/destination/safari.jpg',
            location: 'Kenya',
            rating: '4.8',
            title: 'Masai Mara Safari Experience',
            days: '7',
            visitors: '25',
            price: '145,000'
        },
        {
            image: './assets/img/destination/capetown.jpg',
            location: 'South Africa',
            rating: '4.7',
            title: 'Cape Town & Garden Route',
            days: '8',
            visitors: '30',
            price: '155,000'
        },
        {
            image: './assets/img/destination/pyramids.jpg',
            location: 'Egypt',
            rating: '4.9',
            title: 'Nile River & Pyramids Tour',
            days: '6',
            visitors: '35',
            price: '125,000'
        }
    ];

    africanDestinations.forEach(dest => {
        cardsRow.innerHTML += createCard(dest);
    });
}

function showRussiaCards() {
    const cardsRow = document.getElementById('ge-cards-row');
    cardsRow.innerHTML = '';
    
    const russianDestinations = [
        {
            image: './assets/img/destination/moscow.jpg',
            location: 'Russia',
            rating: '4.8',
            title: 'Moscow & St. Petersburg Classic',
            days: '7',
            visitors: '30',
            price: '145,000'
        },
        {
            image: './assets/img/destination/baikal.jpg',
            location: 'Russia',
            rating: '4.7',
            title: 'Lake Baikal Adventure',
            days: '6',
            visitors: '25',
            price: '165,000'
        },
        {
            image: './assets/img/destination/golden-ring.jpg',
            location: 'Russia',
            rating: '4.6',
            title: 'Golden Ring Heritage Tour',
            days: '5',
            visitors: '20',
            price: '135,000'
        }
    ];

    russianDestinations.forEach(dest => {
        cardsRow.innerHTML += createCard(dest);
    });
}

function showAustraliaCards() {
    const cardsRow = document.getElementById('ge-cards-row');
    cardsRow.innerHTML = '';
    
    const australianDestinations = [
        {
            image: './assets/img/destination/sydney.jpg',
            location: 'Australia',
            rating: '4.9',
            title: 'Sydney & Great Barrier Reef',
            days: '8',
            visitors: '35',
            price: '175,000'
        },
        {
            image: './assets/img/destination/melbourne.jpg',
            location: 'Australia',
            rating: '4.8',
            title: 'Melbourne & Great Ocean Road',
            days: '7',
            visitors: '30',
            price: '165,000'
        },
        {
            image: './assets/img/destination/uluru.jpg',
            location: 'Australia',
            rating: '4.7',
            title: 'Outback & Uluru Experience',
            days: '6',
            visitors: '25',
            price: '155,000'
        }
    ];

    australianDestinations.forEach(dest => {
        cardsRow.innerHTML += createCard(dest);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', handleRegion);