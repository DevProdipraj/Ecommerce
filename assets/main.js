  // this is for slider 
  // ==================
      var cont = 0;
      function loopSlider() {
        var xx = setInterval(function () {
          switch (cont) {
            case 0: {
              $("#slider-1").fadeOut(400);
              $("#slider-2").delay(400).fadeIn(400);
              $("#sButton1").removeClass("bg-gray-800");
              $("#sButton2").addClass("bg-gray-400");
              cont = 1;

              break;
            }
            case 1:
              {

                $("#slider-2").fadeOut(400);
                $("#slider-1").delay(400).fadeIn(400);
                $("#sButton2").removeClass("bg-gray-800");
                $("#sButton1").addClass("bg-gray-400");

                cont = 0;

                break;
              }


          }
        }, 8000);

      }

      function reinitLoop(time) {
        clearInterval(xx);
        setTimeout(loopSlider(), time);
      }



      function sliderButton1() {

        $("#slider-2").fadeOut(400);
        $("#slider-1").delay(400).fadeIn(400);
        $("#sButton2").removeClass("bg-gray-800");
        $("#sButton1").addClass("bg-gray-800");
        reinitLoop(4000);
        cont = 0

      }

      function sliderButton2() {
        $("#slider-1").fadeOut(400);
        $("#slider-2").delay(400).fadeIn(400);
        $("#sButton1").removeClass("bg-purple-800");
        $("#sButton2").addClass("bg-purple-800");
        reinitLoop(4000);
        cont = 1

      }

      $(window).ready(function () {
        $("#slider-2").hide();
        $("#sButton1").addClass("bg-purple-800");


        loopSlider();






      });




      // this is for timer counter 
      // ==========================
      (function () {
        const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
      
        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            nextYear = yyyy + 1,
            dayMonth = "09/30/",
            birthday = dayMonth + yyyy;
        
        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
          birthday = dayMonth + nextYear;
        }
        //end
        
        const countDown = new Date(birthday).getTime(),
            x = setInterval(function() {    
      
              const now = new Date().getTime(),
                    distance = countDown - now;
      
              document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
      
              //do something later when date is reached
              if (distance < 0) {
                document.getElementById("headline").innerText = "It's my birthday!";
                document.getElementById("countdown").style.display = "none";
                document.getElementById("content").style.display = "block";
                clearInterval(x);
              }
              //seconds
            }, 0)
        }());




        // use for blog carusel 
        // ===================
          // set the default active slide to the first one
          let slideIndex = 1;
          showSlide(slideIndex);
  
          // change slide with the prev/next button
          function moveSlide(moveStep) {
              showSlide(slideIndex += moveStep);
          }
  
          // change slide with the dots
          function currentSlide(n) {
              showSlide(slideIndex = n);
          }
  
          function showSlide(n) {
              let i;
              const slides = document.getElementsByClassName("slide");
              const dots = document.getElementsByClassName('dot');
              
              if (n > slides.length) { slideIndex = 1 }
              if (n < 1) { slideIndex = slides.length }
  
              // hide all slides
              for (i = 0; i < slides.length; i++) {
                  slides[i].classList.add('hidden');
              }
  
              // remove active status from all dots
              for (i = 0; i < dots.length; i++) {
                  dots[i].classList.remove('bg-yellow-500');
                  dots[i].classList.add('bg-green-600');
              }
  
              // show the active slide
              slides[slideIndex - 1].classList.remove('hidden');
  
          }