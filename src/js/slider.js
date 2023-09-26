// import Swiper from 'swiper';
// import 'swiper/css';


export const slider = () => {
    try {
        const swiper = new Swiper('.comments-swiper', {
            centeredSlides: true,
            initialSlide: 1,
            slideClass: 'comments-swiper-slide',

            navigation: {
                nextEl: '.next',
                prevEl: '.prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 3
                }

            }

        });
    } catch (error) {
        console.log(error)
    }
}