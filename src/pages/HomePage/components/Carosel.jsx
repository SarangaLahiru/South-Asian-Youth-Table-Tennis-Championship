// src/components/TailwindCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carosel.css';
import { BsFillLightningFill } from 'react-icons/bs';

const Carosel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Replace the following line with your actual content for each carousel item
  const carouselItems = [
    {
      id: 1,
      image: 'https://www3.lta.org.uk/NewWebsite/LTA/Images/Photos/Other/Start%20Competing%20in%20Tennis/2013-start-comp-in-tennis-620x300-jj.jpg',
      description: 'Description for Item 1',
    },
    {
      id: 2,
      image: 'https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/ufqgtgmmdvwrcqavdrhw',
      description: 'Description for Item 2',
    },
    {
      id: 3,
      image: 'https://www.stannstennis.co.uk/wp-content/uploads/2022/07/Mixed-Dubs-St-Anns-Tennis.jpg',
      description: 'Description for Item 3',
    },
    {
      id: 4,
      image: 'https://www.tenniscanada.com/wp-content/uploads/2020/03/iStock_000051214800_Full.jpg',
      description: 'Description for Item 4',
    },
    {
      id: 5,
      image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/08/082823-US-Open-A.jpg',
      description: 'Description for Item 5',
    },
    // Add more items as needed
  ];

  return (
   <div className="container3">
    <h2 className='flex text-6xl justify-center'><BsFillLightningFill className='ficon text-5xl m-3'/>Latest News</h2>
     <div className="relative container2">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id} className="outline-none focus:outline-none">
            <img src={item.image} alt={`Item ${item.id}`} className="w-full h-80 object-cover mb-2 mr-4" />
            <p className="text-sm">{item.description}</p>
          </div>
        ))}
      </Slider>
    </div>
   </div>
  );
};

const PrevArrow = (props) => (
  <div
    {...props}
    className="absolute top-36 -translate-y-1/2 -left-11 cursor-pointer text-5xl text-white z-10 lefticon"
  >
    {'<'}
  </div>
);

const NextArrow = (props) => (
  <div
    {...props}
    className="absolute top-36 -translate-y-1/2 -right-11 cursor-pointer text-5xl text-white z-10 righticon"
  >
    {'>'}
  </div>
);

export default Carosel;
