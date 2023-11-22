const closeIcon = document.getElementById('close');
const iconMonu= document.getElementById('iconMonu');
const muni =document.getElementById('menu');
const menuLink = document.querySelectorAll('.menu_link');

  menuLink.forEach(link => 
    link.addEventListener('click', () => {
      muni.classList.add('hidden');
    })
  );

closeIcon.addEventListener('click', () => {
    muni.classList.add('hidden');
  });

iconMonu.addEventListener('click', () => {
    muni.classList.remove('hidden');
  });

  const produitmenus = document.querySelectorAll('.produit_menu');
  
 produitmenus.forEach(menu => menu.addEventListener('click', () =>{
   produitmenus.forEach(menu => menu.classList.remove('active'));
          menu.classList.add('active');
 }));

 const scrollUpButton = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function() {
        // Show the button when scrolling down
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollUpButton.style.display = "block";
        } else {
            scrollUpButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollUpButton.addEventListener("click", function() {
       
        document.documentElement.scrollTop = 0; 
    });
    // dark mode 
    const darkbtn = document.getElementById("darkbtn");
    const body = document.querySelector('body')

    const setTheme=(theme)=>{
      body.classList.toggle(theme)
      localStorage.setItem("darkbtn",theme)


    }
    function darkMode() {
      const currentTheme= body.className;
      console.log(currentTheme)
      const newTheme = currentTheme==="dark-mode" ? "light-mode":"dark-mode";
      setTheme(newTheme);

    }
    const savedTheme = localStorage.getItem('darkbtn');
    if (savedTheme) {
      setTheme(savedTheme);
    }

    darkbtn.addEventListener("click",darkMode);

// scroll animation *************
    const sr = ScrollReveal();

    // Simple reveal for all elements with the class 'box'
    sr.reveal('.box', {
      duration: 1000, // animation duration
      origin: 'bottom', // starting direction
      distance: '50px', // distance to reveal
      delay: 200, // delay before animation starts
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)' // easing function
    });






















// function updateBackground(){
  
//     if (localStorage.getItem("btndark")=="dark"){

//       body.style.backgroundColor ='#000000'
//     localStorage.setItem("btndark","light");
     
     
     
//     }else{
//       body.style.backgroundColor ='rgb(253 186 116 / 1)'
//       localStorage.setItem("btndark","dark");
//    }
  
  
// }
// updateBackground()