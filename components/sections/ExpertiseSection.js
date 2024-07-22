import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function ExpertiseSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const expertiseItems = [
    {
      img: '/assets/img/section-3-icon-1.png',
      title: 'PHP E-Commerce Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
    {
      img: '/assets/img/section-3-icon-2.png',
      title: 'PHP Application Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
    {
      img: '/assets/img/section-3-icon-3.png',
      title: 'PHP Application Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
    {
      img: '/assets/img/section-3-icon-4.png',
      title: 'PHP Migration Services',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
    {
      img: '/assets/img/section-3-icon-5.png',
      title: 'PHP Database Integration',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
    {
      img: '/assets/img/section-3-icon-6.png',
      title: 'Full Stack PHP Development',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, error, iusto pariatur saepe modi porro quis maxime eaque quaerat reprehenderit fugiat sequi quae odio tempore.',
    },
  ];

  return (
    <section className="section-3">
      <div className="container">
        <h3>We Have Expertise In</h3>
        {isMobile ? (
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {expertiseItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="expertise-div active">
                  <div className="expertise-icon-div">
                    <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="row">
            {expertiseItems.map((item, index) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={index}>
                <div className="expertise-div active">
                  <div className="expertise-icon-div">
                    <img loading="lazy" src={item.img} alt="image" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                  <div>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
