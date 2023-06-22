const cars = [
    {
      id: 1,
      make: "ford-Taurus",
      rental_type: "يومي",
      rent_value: "300الف",
      year:"2002",
      image: "cars/2002-Ford-Taurus.jpg",
    },
    {
        id: 2,
        make: "Hyundai-Genesis-Coupe",
        rental_type: "شهري",
        rent_value: "2مليون",
        year:"2010",
        image: "cars/2010-Hyundai-Genesis-Coupe.jpg",
      },

      {
        id: 3,
        make: "2012-BMW-3-Series-Wagon ",
        rental_type: "يومي",
        rent_value: "300الف",
        year:"2022",
        image: "cars/2012-BMW-3-Series-Wagon.jpg",
      },

      {
        id: 4,
        make: "2019-Hyundai-Genesis-Coupe-1",
        year:"2019",
        rental_type: "يومي",
        rent_value: "150الف",
        image: "cars/2019-Hyundai-Genesis-Coupe-1.jpg",
      },

      {
        id: 5,
        make: "2019-Mercedes-Benz-G-Class",
        rental_type: "اسبوعي",
        rent_value: "1مليون",
        year:"2019",
        image: "cars/2019-Mercedes-Benz-G-Class.jpg",
      },

      {
        id: 6,
        make: "2019-Toyota-Highlander",
        rental_type: "يومي",
        rent_value: "200الف",
        year:"2019",
        image: "cars/2019-Toyota-Highlander.jpg",
      },

      {
        id: 7,
        make: "BMW",
        rental_type: "شهري",
        rent_value: "2مليون",
        year:"2022",
        image: "cars/Bmw.jpg",
      },

      {
        id: 8,
        make: "chevrolet-silverado-2019",
        rental_type: "يومي",
        rent_value: "250الف",
        year:"2019",
        image: "cars/chevrolet-silverado-2019.jpg",
      },

      {
        id: 9,
        make: "Rang Rover",
        rental_type: "شهري",
        rent_value: "3مليون",
        year:"2022",
        image: "cars/images.jpeg",
      },

      {
        id: 10,
        make: "اند-روفر",
        rental_type: "يومي",
        rent_value: "150الف",
        year:"2021",
        image: "cars/im10.jpg",
      },

    ];

    function calcFinalRent(rent) {
        const fee = (rent * 1) / 100;
        const tax = (rent * 5) / 100;
        const final_rent = parseFloat(rent) + parseFloat(tax) + parseFloat(fee);
        return final_rent;
      }
      
      window.addEventListener("load", () => {
        const navbar = document.querySelector("nav");
        const links = navbar.querySelectorAll("a");
      
        links.forEach((link) => {
          if (link)
            link.addEventListener("click", function () {
              links.forEach((link) => link.classList.remove("active"));
              this.classList.add("active");
            });
        });
      });
      