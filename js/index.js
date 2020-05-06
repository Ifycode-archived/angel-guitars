

var logoImage = document.getElementsByClassName('logo-image')[0];
var hero = document.getElementsByClassName('hero')[0];
var container = document.getElementsByClassName('container')[0];
var logoText = document.getElementsByClassName('logo-text')[0];
var header = document.getElementsByTagName('header')[0];

function imagesize() {
    /*============================================================
        1. image's width will occupy 42% or 87% or 96% etc of body
            element's width.
        2. logo image size 506 x 605 is converted to decimal 0.84
    =============================================================*/

    var percentageOfBodyWidth = document.body.clientWidth*0.42;
    var maintainAspectRatioAtAnyWidth = percentageOfBodyWidth*0.84;
        
    var percentageOfBodyWidth2 = document.body.clientWidth*0.87;
    var maintainAspectRatioAtAnyWidth2 = percentageOfBodyWidth2*0.84;
        
    var percentageOfBodyWidth3 = document.body.clientWidth*0.96;
    var maintainAspectRatioAtAnyWidth3 = percentageOfBodyWidth3*0.84;

    var percentageOfBodyWidth4 = document.body.clientWidth*0.6;
    var maintainAspectRatioAtAnyWidth4 = percentageOfBodyWidth4*0.84;

    var percentageOfBodyWidth5 = document.body.clientWidth*0.55;
    var maintainAspectRatioAtAnyWidth5 = percentageOfBodyWidth5*0.84;

    var percentageOfBodyWidth6 = document.body.clientWidth*0.5;
    var maintainAspectRatioAtAnyWidth6 = percentageOfBodyWidth6*0.84;

    var percentageOfBodyWidth7 = document.body.clientWidth*0.8;
    var maintainAspectRatioAtAnyWidth7 = percentageOfBodyWidth7*0.84;

    var percentageOfBodyWidth8 = document.body.clientWidth*0.7;
    var maintainAspectRatioAtAnyWidth8 = percentageOfBodyWidth8*0.84;


    var deviceSizes = [
        window.matchMedia( "(max-width: 1155px)" ),
        window.matchMedia( "(max-width: 889px)" ),
        window.matchMedia( "(max-width: 754px)" ),
        window.matchMedia( "(max-width: 540px)" ),
        window.matchMedia( "(max-width: 400px)" )
    ]
    
    function respondToQuery() {
        if (!deviceSizes[0].matches && !deviceSizes[1].matches && !deviceSizes[2].matches && !deviceSizes[3].matches && !deviceSizes[4].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth6}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth6}px`;
            if (document.documentElement.clientHeight <= 800) {
                logoImage.style.width =  `${maintainAspectRatioAtAnyWidth}px`;
                container.style.width =  `${maintainAspectRatioAtAnyWidth}px`;
            }      
        }

        if (deviceSizes[0].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth4}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth4}px`;
            if (document.documentElement.clientHeight <= 800) {
                logoImage.style.width =  `${maintainAspectRatioAtAnyWidth6}px`;
                container.style.width =  `${maintainAspectRatioAtAnyWidth6}px`;
            }
        }

        if (deviceSizes[1].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth4}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth4}px`;
            if (document.documentElement.clientHeight <= 800) {
                logoImage.style.width =  `${maintainAspectRatioAtAnyWidth5}px`;
                container.style.width =  `${maintainAspectRatioAtAnyWidth5}px`;
            }
        }

        if (deviceSizes[2].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth7}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth7}px`;
            if (document.documentElement.clientHeight <= 800) {
                logoImage.style.width =  `${maintainAspectRatioAtAnyWidth8}px`;
                container.style.width =  `${maintainAspectRatioAtAnyWidth8}px`;
            } 
        }
    
        if (deviceSizes[3].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth2}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth2}px`;
        }
    
        if (deviceSizes[4].matches) {
            logoImage.style.width =  `${maintainAspectRatioAtAnyWidth3}px`;
            container.style.width =  `${maintainAspectRatioAtAnyWidth3}px`;
        }  
    }
    
    for (var i=0; i<deviceSizes.length; i++) {
        respondToQuery(deviceSizes[i]);
        deviceSizes[i].addListener(respondToQuery);
    }


    var heroHeight = logoImage.clientHeight;
    hero.style.height =  `${heroHeight}px`;
    var getHalfWithoutLogoImage = (document.documentElement.clientHeight - logoImage.clientHeight)/2;
    var remove = header.clientHeight * 0.7;
    var result = (getHalfWithoutLogoImage - remove);
    document.body.style.padding = `${result}px 0 95px 0`;
    logoText.style.top = `${heroHeight}px`;

    if (document.documentElement.clientHeight <= 450) {
        document.body.style.padding = '15px 0 95px 0';
        logoImage.style.width =  `${maintainAspectRatioAtAnyWidth5}px`;
        container.style.width =  `${maintainAspectRatioAtAnyWidth5}px`;
        logoText.style.top = `${heroHeight-heroHeight*0.2}px`;
    }

    if (document.documentElement.clientHeight <= 450 && document.documentElement.clientwidth >= 800) {
        logoImage.style.width =  `${maintainAspectRatioAtAnyWidth}px`;
        container.style.width =  `${maintainAspectRatioAtAnyWidth}px`;
    }
}

window.onload = function() {
     imagesize();
}
    
  

//----------------------------------------------------------
var pixels = document.getElementById('displayPixels');
var pixelsWidth = document.getElementById('displayPixelsWidth');
pixels.innerText = document.documentElement.clientHeight + 'px';
pixelsWidth.innerText = document.documentElement.clientWidth + 'px';
window.onresize = function() {
    pixels.innerText = document.documentElement.clientHeight + 'px';
    pixelsWidth.innerText = document.documentElement.clientWidth + 'px';
    imagesize();
}
window.addEventListener('resize', onresize);
//--------------------------------------------------------


/*
var logo = document.getElementsByClassName('logo-container')[0];
var angel = document.getElementsByClassName('angel')[0];
var guitars = document.getElementsByClassName('guitars')[0];

var body = document.getElementsByTagName('body')[0];
var welcome = document.getElementsByClassName('welcome-to-page-border')[0];
*/

/*
function scrolled() {
    
    var scrollTop100AndLess = document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100;
        var scrollTop100To150 = ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
                            && ( document.body.scrollTop <= 150 || document.documentElement.scrollTop <= 150)
        var scrollTop150To200 = (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
                            && ( document.body.scrollTop <= 800 || document.documentElement.scrollTop <= 800)
        var scrollTop200AndAbove = (document.body.scrollTop > 1300
            || document.documentElement.scrollTop > 1300)
            && ( document.body.scrollTop <= 1500
                || document.documentElement.scrollTop <= 1500)

        if (scrollTop100AndLess) { 
       // body.classList.add('body-padding-increase');
        //body.classList.remove('body-padding-decrease');
        header.classList.add('opacity-1');
        header.classList.remove('opacity-0');
        angel.classList.add('translate-logotext-left');
        guitars.classList.add('translate-logotext-right');
        angel.classList.remove('translate-logotext-farther-left');
        guitars.classList.remove('translate-logotext-farther-right');
        angel.classList.remove('translate-logotext-up-left');
        guitars.classList.remove('translate-logotext-up-right');
        logo.classList.add('translate-logo-container');
        logo.classList.remove('translate-logo-container-up');
        welcome.classList.add('translate-welcome-down');
        welcome.classList.remove('translate-welcome-up');

        angel.classList.remove('translate-logotext-in-left');
        guitars.classList.remove('translate-logotext-in-right');
        logo.classList.remove('translate-logo-container-down');

        header.classList.remove('header-margin-decrease');
    }

    if (scrollTop100To150) {
        //body.classList.add('body-padding-decrease');
        //body.classList.remove('body-padding-increase');
        header.classList.add('opacity-0');
        header.classList.remove('opacity-1');
        angel.classList.remove('translate-logotext-left');
        guitars.classList.remove('translate-logotext-right');
        angel.classList.add('translate-logotext-farther-left');
        guitars.classList.add('translate-logotext-farther-right');
        angel.classList.remove('translate-logotext-up-left');
        guitars.classList.remove('translate-logotext-up-right');
        logo.classList.add('translate-logo-container-up');
        logo.classList.remove('translate-logo-container');
        welcome.classList.add('translate-welcome-down');
        welcome.classList.remove('translate-welcome-up');

        angel.classList.remove('translate-logotext-in-left');
        guitars.classList.remove('translate-logotext-in-right');
        logo.classList.remove('translate-logo-container-down');

        header.classList.remove('header-margin-decrease');
    }

    if (scrollTop150To200) {
        angel.classList.remove('translate-logotext-left');
        guitars.classList.remove('translate-logotext-right');
        angel.classList.remove('translate-logotext-farther-left');
        guitars.classList.remove('translate-logotext-father-right');
        angel.classList.add('translate-logotext-up-left');
        guitars.classList.add('translate-logotext-up-right');
        welcome.classList.add('translate-welcome-up');
        welcome.classList.remove('translate-welcome-down');

        angel.classList.remove('translate-logotext-in-left');
        guitars.classList.remove('translate-logotext-in-right');
        logo.classList.remove('translate-logo-container-down');
        
       
        header.classList.add('header-margin-increase');
        header.classList.remove('header-margin-decrease');
    }  
    

    if ( scrollTop200AndAbove ) {
        angel.classList.add('translate-logotext-in-left');
        guitars.classList.add('translate-logotext-in-right');
        angel.classList.remove('translate-logotext-up-left');
        guitars.classList.remove('translate-logotext-up-right');
        welcome.classList.remove('translate-welcome-up');
        welcome.classList.add('translate-welcome-down');
        logo.classList.add('translate-logo-container-down');
        
        header.classList.add('header-margin-decrease');
        header.classList.remove('header-margin-increase');
    }
}


window.addEventListener('scroll', scrolled);


function debounce(func, wait = 10, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if(!immediate) func.apply(context, args);
        }
  
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    }
  }

 // var pixels = document.getElementById('displayPixels');
var sectionAfterLogos = document.querySelectorAll('.sectionAfterLogo');
function scaleAndTransform(e) {
  
   sectionAfterLogos.forEach(sectionAfterLogo => {
   var pointOfChange = (window.scrollY + window.innerHeight)/2 - sectionAfterLogo.height/2;
    var sectionAfterLogoBottom = sectionAfterLogo.offsetTop/2.1 + sectionAfterLogo.height;
    var isHalfShown = pointOfChange < sectionAfterLogo.offsetTop;
    var isNotScrolledPast =  window.scrollY > sectionAfterLogoBottom;
    //pixels.innerHTML = sectionAfterLogo.offsetTop;
    if (isHalfShown && isNotScrolledPast) {
        logo.classList.add('scale-down');
        logo.classList.remove('scale-up');
        //sectionAfterLogo.classList.add('blue');
        //sectionAfterLogo.classList.remove('red'); 
    }
    else {
       // sectionAfterLogo.classList.add('red');
        //sectionAfterLogo.classList.remove('blue');
        logo.classList.add('scale-up');
        logo.classList.remove('scale-down');
    }
  });
}
window.addEventListener('scroll', debounce(scaleAndTransform));

*/
































  /*
    var documentHeight = document.documentElement.clientHeight*0.6;
    var documentWidth = documentHeight*0.84;

    var documentHeight2 = document.documentElement.clientHeight*0.3;
    var documentWidth2 = documentHeight2*1.26;

    var documentHeight3 = document.documentElement.clientHeight*0.2;
    var documentWidth3 = documentHeight3*1.68;
    
    
    var deviceSizes = [
        
        window.matchMedia( "(max-height: 1354px)" ),
        window.matchMedia( "(max-height: 1005px)" )
    ]

    function respondToQuery() {
        if (!deviceSizes[0].matches && !deviceSizes[1].matches) {
            logoImage.style.width =  `${documentWidth3}px`;
            container.style.width =  `${documentWidth3}px`;
        }

        if (deviceSizes[0].matches) {
            logoImage.style.width =  `${documentWidth2}px`;
            container.style.width =  `${documentWidth2}px`;
            
        }

        if (deviceSizes[1].matches) {
            logoImage.style.width =  `${documentWidth}px`;
            container.style.width =  `${documentWidth}px`;
        }

       
    }

    for (var i=0; i<deviceSizes.length; i++) {
        respondToQuery(deviceSizes[i]);
        deviceSizes[i].addListener(respondToQuery);
    }
*/



/*

function scrolled() {
    if ( document.body.scrollTop <= 100
        || document.documentElement.scrollTop <= 100) { 
        header.classList.add('opacity-1');
        header.classList.remove('opacity-0');
        angel.classList.add('translate-logotext-left');
        guitars.classList.add('translate-logotext-right');
        angel.classList.remove('translate-logotext-farther-left');
        guitars.classList.remove('translate-logotext-farther-right');
    }

    if (( document.body.scrollTop > 100
        || document.documentElement.scrollTop > 100) 
        && ( document.body.scrollTop <= 150
            || document.documentElement.scrollTop <= 150) ) {
        header.classList.add('opacity-0');
        header.classList.remove('opacity-1');
        angel.classList.remove('translate-logotext-left');
        guitars.classList.remove('translate-logotext-right');
        angel.classList.add('translate-logotext-farther-left');
        guitars.classList.add('translate-logotext-farther-right');
        angel.classList.remove('translate-logotext-down-left');
        guitars.classList.remove('translate-logotext-down-right');


    }

    if ( (document.body.scrollTop > 150
        || document.documentElement.scrollTop > 150)
        && ( document.body.scrollTop <= 200
            || document.documentElement.scrollTop <= 200) ) {
        angel.classList.remove('translate-logotext-farther-left');
        guitars.classList.remove('translate-logotext-father-right');
        angel.classList.add('translate-logotext-down-left');
        guitars.classList.add('translate-logotext-down-right');
    }  
}

*/
//window.addEventListener('scroll', scrolled);





/*
var t;

    
    t = setTimeout(timeout, 50);
    function timeout() {
        window.onscroll = function() {
            clearTimeout(t);
            scrolled();
        }
    }
*/


/*
pixels.innerText = `${documentWidth}px`;
window.onresize = function() {
    pixels.innerText = `${documentWidth}px`;
}

window.addEventListener('resize', onresize);
*/
//function scrolled() {
    
    

    //function scrolled() {
        /*
        var scrollTop100AndLess = document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100;
        var scrollTop100To150 = ( document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) 
                            && ( document.body.scrollTop <= 150 || document.documentElement.scrollTop <= 150)
        var scrollTop150To200 = (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150)
                            && ( document.body.scrollTop <= 200 || document.documentElement.scrollTop <= 200)
    
    var scrollTop = [scrollTop100AndLess,
                     scrollTop100To150,
                     scrollTop150To200]
        

       function respondToScrollPosition(i) {
        var scrollTop = [document.body.scrollTop <= 100 || document.documentElement.scrollTop <= 100,
            scrollTop100To150,
            scrollTop150To200]

        if (scrollTop[0]) {
            body.style.background = 'pink';
        }


       }

       for (var i=0; i<scrollTop.length; i++) {
         respondToScrollPosition(i);
        
       }

       window.addEventListener('scroll', respondToScrollPosition);

      
      
    //}

//window.addEventListener('scroll', scrolled);
*/
