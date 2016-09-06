;(function($){
    $(document).ready(function() {
       $(".greeting-carusel").owlCarousel({
 
            navigation : true, // Show next and prev buttons
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
            // "singleItem:true" is a shortcut for:
            // items : 1, 
            // itemsDesktop : false,
            // itemsDesktopSmall : false,
            // itemsTablet: false,
            // itemsMobile : false
        });


        $("#owl-example-1").owlCarousel({
 
            // Most important owl features
            items : 3,
            itemsCustom : false,
            itemsDesktop : [1199,4],
            itemsDesktopSmall : [980,3],
            itemsTablet: [768,2],
            itemsTabletSmall: false,
            itemsMobile : [479,1],
            singleItem : false,
            itemsScaleUp : false,
 
            //Basic Speeds
            slideSpeed : 200,
            paginationSpeed : 800,
            rewindSpeed : 1000,
 
            //Autoplay
            autoPlay : false,
            stopOnHover : false,
 
            // Navigation
            navigation : false,
            navigationText : ["prev","next"],
            rewindNav : true,
            scrollPerPage : false,
 
            //Pagination
            pagination: false,
            paginationNumbers: false,
 
            // Responsive 
            responsive: true,
            responsiveRefreshRate : 200,
            responsiveBaseWidth: window,
 
            // CSS Styles
            baseClass : "owl-carousel",
            theme : "owl-theme",
 
            //Lazy load
            lazyLoad : false,
            lazyFollow : true,
            lazyEffect : "fade",
 
            //Auto height
            autoHeight : false,
 
            //JSON 
            jsonPath : false, 
            jsonSuccess : false,
 
            //Mouse Events
            dragBeforeAnimFinish : true,
            mouseDrag : true,
            touchDrag : true,
 
            //Transitions
            transitionStyle : false,
 
            // Other
            addClassActive : false,
 
            //Callbacks
            beforeUpdate : false,
            afterUpdate : false,
            beforeInit: false, 
            afterInit: false, 
            beforeMove: false, 
            afterMove: false,
            afterAction: false,
            startDragging : false,
            afterLazyLoad : false
 
        })
        $("#owl-example-2").owlCarousel({

            // Most important owl features
            items: 2,
            itemsCustom: false,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            singleItem: false,
            itemsScaleUp: false,

            //Basic Speeds
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1000,

            //Autoplay
            autoPlay: true,
            stopOnHover: true,

            // Navigation
            navigation: false,
            navigationText: ["prev", "next"],
            rewindNav: true,
            scrollPerPage: false,

            //Pagination
            pagination: true,
            paginationNumbers: false,

            // Responsive 
            responsive: true,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: window,

            // CSS Styles
            baseClass: "owl-carousel",
            theme: "owl-theme",

            //Lazy load
            lazyLoad: false,
            lazyFollow: true,
            lazyEffect: "fade",

            //Auto height
            autoHeight: false,

            //JSON 
            jsonPath: false,
            jsonSuccess: false,

            //Mouse Events
            dragBeforeAnimFinish: true,
            mouseDrag: true,
            touchDrag: true,

            //Transitions
            transitionStyle: false,

            // Other
            addClassActive: false,

            //Callbacks
            beforeUpdate: false,
            afterUpdate: false,
            beforeInit: false,
            afterInit: false,
            beforeMove: false,
            afterMove: false,
            afterAction: false,
            startDragging: false,
            afterLazyLoad: false

        })
	});
})(jQuery)