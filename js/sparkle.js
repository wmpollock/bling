
/* 

Starshine glitter effect https://codepen.io/kucsatax/pen/vyWevX
Kurucz Csaba

*/


$(function() {
    var xody = $('.jumbotron'),
        template = $('.template.shine'),
        stars =  250,
        sparkle = 5;
    
      
    var size = 'small';
    var createStar = function() {
      template.clone().removeAttr('id').css({
        top: (Math.random() * 90) + '%',
        left: (Math.random() * 95) + '%',
        webkitAnimationDelay: (Math.random() * sparkle) + 's',
        mozAnimationDelay: (Math.random() * sparkle) + 's'
      }).addClass(size).appendTo(xody);
    };
   
    for(var i = 0; i < stars; i++) {
      if(i % 2 === 0) {
        size = 'small';
      } else if(i % 3 === 0) {
        size = 'medium';
      } else {
        size = 'large';
      }
      
      createStar();
    }
  });