document.getElementById('blockMenu').style.opacity=0;
window.addEventListener('scroll', function() {
    var scrollValue = window.scrollY; 
    console.log(scrollValue);
    if (scrollValue >= 200)
    {
      document.getElementById('blockMenu').style.opacity=1;
      document.getElementById('blockMenu').style.transition = 'opacity 2s';

    }
     else { 
       document.getElementById('blockMenu').style.opacity=0;
     }
}
)