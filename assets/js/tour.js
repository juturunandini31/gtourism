 document.addEventListener("DOMContentLoaded", () => {
      const tourData = {
       "Kerala": [
      { title:"Munnar / Thekkady", img:"https://www.thekkadyhomestays.com/wp-content/uploads/2018/05/2.jpg", rating:4.8, days:"4 Nights 5 Days", people:"20+", price:"$399.00" },
      { title:"Alleppey / Kumarakom", img:"https://www.indianholiday.com/wordpress/wp-content/uploads/2025/07/Alleppey-vs-Kumarakom.jpg", rating:4.7, days:"3 Nights 4 Days", people:"15+", price:"$349.00" },
      { title:"Kochi / Fort Kochi", img:"https://c.ndtvimg.com/2025-03/qi8ql9j_fort-kochi_625x300_23_March_25.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738", rating:4.6, days:"2 Nights 3 Days", people:"10+", price:"$299.00" },
      { title:"Wayanad / Meenmutty Falls", img:"https://wayanadfort.com/images/meenmutty-water-falls-wayanad.jpg", rating:4.8, days:"3 Nights 4 Days", people:"15+", price:"$359.00" },
      { title:"Kovalam / Varkala", img:"https://www.indianholiday.com/wordpress/wp-content/uploads/2025/07/Kovalam-vs-Varkala-Which-Beach-Town-Is-Right-for-You.jpg", rating:4.7, days:"3 Nights 4 Days", people:"15+", price:"$369.00" },
      { title:"Thekkady / Periyar", img:"https://woodnotethekkady.com/wp-content/uploads/2019/05/boating-thekkady.jpg", rating:4.8, days:"4 Nights 5 Days", people:"20+", price:"$399.00" }
    ],
        "Tamil Nadu": [
          { title:"Ooty / Kodaikanal", img:"https://traveleasystorage.s3.eu-north-1.amazonaws.com/Districts/Nilgiri.jpg", rating:4.6, days:"3 Nights 4 Days", people:"15+", price:"$399.00" },
          { title:"Mahabalipuram / Pondicherry", img:"https://travelogyindia.b-cdn.net/storage/app/itinerary/467/mahabalipuram-temple.jpg", rating:4.5, days:"2 Nights 3 Days", people:"10+", price:"$299.00" }
        ],
        "Karnataka": [
          { title:"Coorg / Bangalore", img:"https://oneday.travel/wp-content/uploads/up-tours-1-day-coorg-with-talacauvery-local-sightseeing-tour-package-private-car-header.jpg", rating:4.7, days:"3 Nights 4 Days", people:"15+", price:"$399.00" },
          { title:"Mysore / Kabini", img:"https://www.sotc.in/blog/wp-content/uploads/2024/07/Mysore-Palace.jpg", rating:4.6, days:"2 Nights 3 Days", people:"10+", price:"$299.00" }
        ]
      };

      // Get URL parameter
      const params = new URLSearchParams(window.location.search);
      let location = params.get("location");

      if(location){
        // Normalize first letter capitalization for each word
        location = location.trim().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      }

      const container = document.getElementById("tour-cards");
      if(!container){
        return;
      }

      if(location && tourData[location]){
        tourData[location].forEach(tour => {
          container.innerHTML += `
            <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp">
              <div class="destination-card-items mt-0">
                <div class="destination-image">
                  <img src="${tour.img}" alt="${tour.title}">
                  <div class="heart-icon"><i class="fa-regular fa-heart"></i></div>
                </div>
                <div class="destination-content">
                  <ul class="meta">
                    <li><i class="fa-thin fa-location-dot"></i>${location}</li>
                    <li class="rating"><div class="star"><i class="fa-solid fa-star"></i></div><p>${tour.rating}</p></li>
                  </ul>
                  <h5><a href="tour-details.html">${tour.title}</a></h5>
                  <ul class="info">
                    <li><i class="fa-regular fa-clock"></i>${tour.days}</li>
                    <li><i class="fa-thin fa-users"></i>${tour.people}</li>
                  </ul>
                  <div class="price">
                    <h6>${tour.price}<span>/Per person</span></h6>
                    <a href="tour-details.html" class="theme-btn style-2">Book Now<i class="fa-sharp fa-regular fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          `;
        });
      } else {
        container.innerHTML = "<p>No tours found for this location.</p>";
      }
    });