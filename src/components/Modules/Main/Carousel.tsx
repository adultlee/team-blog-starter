import Image from 'next/image';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import meta from '@meta';
import Link from 'next/link';

import { Pagination, Navigation, Autoplay, EffectCards } from 'swiper';
import Arrow from '../../../../public/arrow.svg';

const Container = styled.div`
  width: 25vw;
  height: 70vh;
  max-width: 370px;
  @media (max-width: 70em) {
    height: 60vh;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }
  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }
  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${({theme}) => theme.color.background};
    border-radius: 20px;
    box-shadow: ${(props) => props.theme.color.shadow};
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      display: block;
      width: 100%;
      height: 500px;
      object-fit: cover;
    }
  }

  .swiper-button-next {
    color: ${(props) => props.theme.color.primary};
    right: -10%;
    width: 4rem;
    top: 55%;

    background-image: url(${Arrow.src});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }

    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${({theme}) => theme.color.primary};
    left: -10%;
    top: 55%;
    width: 4rem;
    transform: rotate(180deg);
    background-image: url(${Arrow.src});
    background-position: center;
    background-size: cover;

    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;
 const Carousel = () => {
  const members = [...meta.members];
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          type: 'fraction',
        }}
        scrollbar={{
          draggable: true,
        }}
        modules={[EffectCards, Pagination, Navigation, Autoplay]}
        navigation={true}
        effect={'cards'}
        grabCursor={true}
        className="mySwiper"
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <Link href={`/members/${member.name}`}>
              <Image
                width={500}
                height={400}
                src={`/profile/${member.name}.png`}
                alt="The Weirdos"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;