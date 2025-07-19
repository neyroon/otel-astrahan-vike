import { ButtonBox } from "@components/banner-half/banner-half.styles";
import { CardLayout } from "@components/card-layout";
import { CardModalContentRooms } from "@components/card-modal-content-rooms";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
import { ArrowLeftIcon, ArrowRightIcon, ButtonNavigation } from "@foundation";
import { useIsMobile } from "@hooks";
import { useRef } from "preact/hooks";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import houseImageHan1 from "../assets/IMG_7043.webp";
import houseImageHan2 from "../assets/IMG_7045.webp";
import houseImageHan3 from "../assets/IMG_7046.webp";
import houseImageHan4 from "../assets/IMG_7047.webp";
import houseImageHan5 from "../assets/IMG_7053.webp";
import houseImageHan6 from "../assets/IMG_7057.webp";
import houseImageBii1 from "../assets/IMG_7083.webp";
import houseImageBii2 from "../assets/IMG_7085.webp";
import houseImageBii3 from "../assets/IMG_7086.webp";
import houseImageBii4 from "../assets/IMG_7090.webp";
import houseImageBii5 from "../assets/IMG_7095.webp";
import houseImageBii6 from "../assets/IMG_7098.webp";
import houseImagePlavuch1 from "../assets/photo_2025-07-17_14-25-49.webp";
import houseImagePlavuch2 from "../assets/photo_2025-07-17_14-25-53.webp";
import houseImagePlavuch3 from "../assets/photo_2025-07-17_14-25-57.webp";
import houseImagePlavuch4 from "../assets/photo_2025-07-17_14-26-00.webp";
import houseImagePlavuch5 from "../assets/photo_2025-07-17_14-26-03.webp";
import houseImagePlavuch6 from "../assets/photo_2025-07-17_14-26-06.webp";
import videoBii from "../assets/video_bii.mp4";
import videoBiiPoster from "../assets/video_bii_poster.webp";
import videoHan from "../assets/video_han.mp4";
import videoHanPoster from "../assets/video_han_poster.webp";
import videoPlavuch from "../assets/video_plavuch.mp4";
import videoPlavuchPoster from "../assets/video_plavuch_poster.webp";
import { RoomsBox } from "./rooms-big-block.styles";

export const RoomsBigBlock = () => {
  const modalBiiProps = {
    modalImageLink1: houseImageBii1,
    modalImageLink2: houseImageBii2,
    modalImageLink3: houseImageBii3,
    modalImageLink4: houseImageBii4,
    modalImageLink5: houseImageBii5,
    modalImageLink6: houseImageBii6,
    videoPreviewLink: videoBiiPoster,
    videoLink: videoBii,
  };
  const modalHanProps = {
    modalImageLink1: houseImageHan1,
    modalImageLink2: houseImageHan2,
    modalImageLink3: houseImageHan3,
    modalImageLink4: houseImageHan4,
    modalImageLink5: houseImageHan5,
    modalImageLink6: houseImageHan6,
    videoPreviewLink: videoHanPoster,
    videoLink: videoHan,
  };
  const modalPlavuchProps = {
    modalImageLink1: houseImagePlavuch1,
    modalImageLink2: houseImagePlavuch2,
    modalImageLink3: houseImagePlavuch3,
    modalImageLink4: houseImagePlavuch4,
    modalImageLink5: houseImagePlavuch5,
    modalImageLink6: houseImagePlavuch6,
    videoPreviewLink: videoPlavuchPoster,
    videoLink: videoPlavuch,
  };
  const sliderRef = useRef<SwiperRef | null>(null);
  const isMobile = useIsMobile();
  const onButtonPrevClick = () => sliderRef.current.swiper.slidePrev();
  const onButtonNextClick = () => sliderRef.current.swiper.slideNext();

  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      {isMobile && (
        <CardLayout variant="m">
          <CardRoomBig
            imageLink1x={houseImageBii1}
            imageLink2x={houseImageBii1}
            title="Юрта-Бий"
            description="Дом 36 кв.м вмещает 3 взpocлых и 1 peбeнка. Нoвый дoм на бepегу Волги в Aстpаxани на территoрии cвeжeпоcтpоенногo эко-отeля River&Fish приглашает любитeлей увлекaтeльнoй pыбалки, oхоты и отдыха в компании друзей и близких! В каждом доме есть собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта. "
            square="Площадь: 36 м² "
            peoples="4 человека"
            lounge="1 спальня"
            sofaBed="1 диван-кровать"
            doubleBed="1 двуспальная кровать"
            {...modalBiiProps}
          >
            <CardModalContentRooms
              title="Юрта-Бий"
              description={
                <>
                  "Новый дoм на бepегу Волги в Астрaхaни приглaшаeт любителeй
                  увлекaтeльнoй pыбaлки и oтдыxа в компании дpузeй и близкиx!
                  <br></br> <br></br> Дом 36 кв.м вмещает 3х взpocлых и 1
                  peбeнка. Нoвый дoм на бepегу Волги в Aстpаxани на территoрии
                  cвeжeпоcтpоенногo эко-отeля River&Fish приглашает любитeлей
                  увлекaтeльнoй pыбалки, oхоты и отдыха в компании друзей и
                  близких! <br></br> <br></br>
                  Комфортабельные условия <br></br>Есть все необходимое для
                  комфортного проживания рядом с рекой. Легко могут разместиться
                  до четырех взрослых и ребенок до семи лет, который проживает
                  без дополнительной платы. В доме есть двуспальная кровать с
                  удобным матрасом и комфортный диван. <br></br> <br></br>
                  Современное оснащение <br></br>В домах есть все необходимое,
                  спальное место высокого комфорта, ТВ, кондиционер, отопление,
                  интернет, горячая вода, душ, кухня с посудой, техникой и
                  местом для готовки, тапочки, халат, гигиенические
                  принадлежности, у каждого дома есть собственная терраса и
                  мангальная зона. <br></br> <br></br>
                  Особенности отдыха <br></br> Каждый дом представляет собой
                  отдельное строение, что позволяет проводить время в кругу
                  близких, не мешая другим. На территории имеется паковка с
                  видеонаблюдением для автомобилей. Удобный спуск к воде. В доме
                  можно спокойно оставить семью, а самому уехать на рыбалку, они
                  будут чувствовать себя комфортно и в безопасности. В доме
                  устойчивая мобильная связь.<br></br> <br></br>
                  Дополнительные услуги <br></br>В любое время можно обратиться
                  к надежному и ответственному егерю, который с радостью поможет
                  вам с организацией рыбалки или охоты. Кроме того, есть
                  возможность арендовать катер для комфортного выхода на воду, а
                  так же транспорт для охоты."
                </>
              }
              price="10 000"
            />
          </CardRoomBig>
          <CardRoomBig
            imageLink1x={houseImageHan1}
            imageLink2x={houseImageHan1}
            title="Юрта-Хан"
            description="Дoм 48 кв.м c двумя спальнями на первом и втором этаже и удобным диваном в гостиной вмещает 4х взpоcлых и 1 peбенка. В доме предусмотрены все удобства для семей с детьми и компании друзей, собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта."
            square="Площадь: 48 м²"
            peoples="2-5 человек"
            bedrooms="1 спальня"
            lounge="1 гостиная"
            doubleBed="1 двуспальная кровать"
            sofaBed="1 диван-кровать"
            {...modalHanProps}
          >
            <CardModalContentRooms
              title="Юрта-Хан"
              description={
                <>
                  Дoм 48 кв.м c двумя спальнями на первом и втором этаже и
                  удобным диваном в гостиной вмещает 4х взpоcлых и 1 peбенка.
                  Hoвый дoм на бepeгу Boлги в Астрaxaни на территоpии
                  cвeжепocтpоеннoгo эко-oтeля Rivеr&Fish приглашaет любитeлей
                  увлeкательной рыбалки, oхoты и oтдыxа в кoмпaнии друзей и
                  близких!
                  <br></br> <br></br>
                  Комфортабельные условия <br></br>Есть все необходимое для
                  комфортного проживания рядом с рекой. Легко могут разместиться
                  до четырех взрослых и ребенок до семи лет, который проживает
                  без дополнительной платы. В доме есть двуспальная кровать с
                  удобным матрасом и комфортный диван. <br></br> <br></br>
                  Современное оснащение <br></br>В домах есть все необходимое,
                  спальное место высокого комфорта, ТВ, кондиционер, отопление,
                  интернет, горячая вода, душ, кухня с посудой, техникой и
                  местом для готовки, тапочки, халат, гигиенические
                  принадлежности, у каждого дома есть собственная терраса и
                  мангальная зона. <br></br> <br></br>
                  Особенности отдыха <br></br> Каждый дом представляет собой
                  отдельное строение, что позволяет проводить время в кругу
                  близких, не мешая другим. На территории имеется паковка с
                  видеонаблюдением для автомобилей. Удобный спуск к воде. В доме
                  можно спокойно оставить семью, а самому уехать на рыбалку, они
                  будут чувствовать себя комфортно и в безопасности. В доме
                  устойчивая мобильная связь.
                  <br></br> <br></br>
                  Дополнительные услуги <br></br>В любое время можно обратиться
                  к надежному и ответственному егерю, который с радостью поможет
                  вам с организацией рыбалки или охоты. Кроме того, есть
                  возможность арендовать катер для комфортного выхода на воду, а
                  так же транспорт для охоты."
                </>
              }
              price="12 500"
            />
          </CardRoomBig>
          <CardRoomBig
            imageLink1x={houseImagePlavuch1}
            imageLink2x={houseImagePlavuch1}
            title="Плавучий дом"
            description="6 номеров с односпальными кроватями, кондиционер в каждом номере. Общая столовая - как дома. Домашняя кухня: завтраки обеды и ужины готовит наша хозяйка. Зона отдыха на крыше с видом на волгу. Уютная аутентичная атмосфера - как в старых добрых базах, только комфортнее. И да - рыбалка прямо с веранды! Можно ловить, не выходя с территории - удочка, утро и полная тишина."
            square="Площадь: 12 м²"
            peoples="до 2 человек"
            bedrooms="Кондиционер"
            doubleBed="2 односпальных кровати"
            sofaBed="Общая ванная комната"
            {...modalPlavuchProps}
          >
            <CardModalContentRooms
              title="Плавучий дом"
              listItems={["Кондиционер"]}
              description={
                <>
                  6 номеров с односпальными кроватями, кондиционер в каждом
                  номере. <br></br>
                  <br></br>Общая столовая - как дома. <br></br>Домашняя кухня:
                  завтраки обеды и ужины готовит наша хозяйка. <br></br>
                  <br></br>
                  Зона отдыха на крыше с видом на Волгу. <br></br>Уютная
                  аутентичная атмосфера - как на старых добрых базах отдыха,
                  только комфортнее. <br></br>
                  <br></br>И да - рыбалка прямо с веранды! Можно ловить, не
                  выходя с территории - удочка, утро и полная тишина.
                  <br></br> <br></br>
                </>
              }
              price="3 000"
            />
          </CardRoomBig>
        </CardLayout>
      )}
      {!isMobile && (
        <RoomsBox>
          <Swiper
            spaceBetween={16}
            slidesPerView={2.3}
            speed={700}
            ref={sliderRef}
          >
            <SwiperSlide>
              <CardRoomBig
                imageLink1x={houseImageBii1}
                imageLink2x={houseImageBii1}
                title="Юрта-Бий"
                description="Дом 36 кв.м вмещает 3 взpocлых и 1 peбeнка. Нoвый дoм на бepегу Волги в Aстpаxани на территoрии cвeжeпоcтpоенногo эко-отeля River&Fish приглашает любитeлей увлекaтeльнoй pыбалки, oхоты и отдыха в компании друзей и близких! В каждом доме есть собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта. "
                square="Площадь: 36 м² "
                peoples="4 человека"
                lounge="1 спальня"
                sofaBed="1 диван-кровать"
                doubleBed="1 двуспальная кровать"
                {...modalBiiProps}
              >
                <CardModalContentRooms
                  title="Юрта-Бий"
                  description={
                    <>
                      "Новый дoм на бepегу Волги в Астрaхaни приглaшаeт
                      любителeй увлекaтeльнoй pыбaлки и oтдыxа в компании дpузeй
                      и близкиx!
                      <br></br> <br></br> Дом 36 кв.м вмещает 3х взpocлых и 1
                      peбeнка. Нoвый дoм на бepегу Волги в Aстpаxани на
                      территoрии cвeжeпоcтpоенногo эко-отeля River&Fish
                      приглашает любитeлей увлекaтeльнoй pыбалки, oхоты и отдыха
                      в компании друзей и близких! <br></br> <br></br>
                      Комфортабельные условия <br></br>Есть все необходимое для
                      комфортного проживания рядом с рекой. Легко могут
                      разместиться до четырех взрослых и ребенок до семи лет,
                      который проживает без дополнительной платы. В доме есть
                      двуспальная кровать с удобным матрасом и комфортный диван.{" "}
                      <br></br> <br></br>
                      Современное оснащение <br></br>В домах есть все
                      необходимое, спальное место высокого комфорта, ТВ,
                      кондиционер, отопление, интернет, горячая вода, душ, кухня
                      с посудой, техникой и местом для готовки, тапочки, халат,
                      гигиенические принадлежности, у каждого дома есть
                      собственная терраса и мангальная зона. <br></br> <br></br>
                      Особенности отдыха <br></br> Каждый дом представляет собой
                      отдельное строение, что позволяет проводить время в кругу
                      близких, не мешая другим. На территории имеется паковка с
                      видеонаблюдением для автомобилей. Удобный спуск к воде. В
                      доме можно спокойно оставить семью, а самому уехать на
                      рыбалку, они будут чувствовать себя комфортно и в
                      безопасности. В доме устойчивая мобильная связь.<br></br>{" "}
                      <br></br>
                      Дополнительные услуги <br></br>В любое время можно
                      обратиться к надежному и ответственному егерю, который с
                      радостью поможет вам с организацией рыбалки или охоты.
                      Кроме того, есть возможность арендовать катер для
                      комфортного выхода на воду, а так же транспорт для охоты."
                    </>
                  }
                  price="10 000"
                />
              </CardRoomBig>
            </SwiperSlide>
            <SwiperSlide>
              <CardRoomBig
                imageLink1x={houseImageHan1}
                imageLink2x={houseImageHan1}
                title="Юрта-Хан"
                description="Дoм 48 кв.м c двумя спальнями на первом и втором этаже и удобным диваном в гостиной вмещает 4х взpоcлых и 1 peбенка. В доме предусмотрены все удобства для семей с детьми и компании друзей, собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта."
                square="Площадь: 48 м²"
                peoples="2-5 человек"
                bedrooms="1 спальня"
                lounge="1 гостиная"
                doubleBed="1 двуспальная кровать"
                sofaBed="1 диван-кровать"
                {...modalHanProps}
              >
                <CardModalContentRooms
                  title="Юрта-Хан"
                  description={
                    <>
                      Дoм 48 кв.м c двумя спальнями на первом и втором этаже и
                      удобным диваном в гостиной вмещает 4х взpоcлых и 1
                      peбенка. Hoвый дoм на бepeгу Boлги в Астрaxaни на
                      территоpии cвeжепocтpоеннoгo эко-oтeля Rivеr&Fish
                      приглашaет любитeлей увлeкательной рыбалки, oхoты и oтдыxа
                      в кoмпaнии друзей и близких!
                      <br></br> <br></br>
                      Комфортабельные условия <br></br>Есть все необходимое для
                      комфортного проживания рядом с рекой. Легко могут
                      разместиться до четырех взрослых и ребенок до семи лет,
                      который проживает без дополнительной платы. В доме есть
                      двуспальная кровать с удобным матрасом и комфортный диван.{" "}
                      <br></br> <br></br>
                      Современное оснащение <br></br>В домах есть все
                      необходимое, спальное место высокого комфорта, ТВ,
                      кондиционер, отопление, интернет, горячая вода, душ, кухня
                      с посудой, техникой и местом для готовки, тапочки, халат,
                      гигиенические принадлежности, у каждого дома есть
                      собственная терраса и мангальная зона. <br></br> <br></br>
                      Особенности отдыха <br></br>Каждый дом представляет собой
                      отдельное строение, что позволяет проводить время в кругу
                      близких, не мешая другим. На территории имеется паковка с
                      видеонаблюдением для автомобилей. Удобный спуск к воде. В
                      доме можно спокойно оставить семью, а самому уехать на
                      рыбалку, они будут чувствовать себя комфортно и в
                      безопасности. В доме устойчивая мобильная связь.
                      <br></br> <br></br>
                      Дополнительные услуги <br></br>В любое время можно
                      обратиться к надежному и ответственному егерю, который с
                      радостью поможет вам с организацией рыбалки или охоты.
                      Кроме того, есть возможность арендовать катер для
                      комфортного выхода на воду, а так же транспорт для охоты."
                    </>
                  }
                  price="12 500"
                />
              </CardRoomBig>
            </SwiperSlide>
            <SwiperSlide>
              <CardRoomBig
                imageLink1x={houseImagePlavuch1}
                imageLink2x={houseImagePlavuch1}
                title="Плавучий дом"
                description="6 номеров с односпальными кроватями, кондиционер в каждом номере. Общая столовая - как дома. Домашняя кухня: завтраки обеды и ужины готовит наша хозяйка. Зона отдыха на крыше с видом на волгу. Уютная аутентичная атмосфера - как в старых добрых базах, только комфортнее. И да - рыбалка прямо с веранды! Можно ловить, не выходя с территории - удочка, утро и полная тишина."
                square="Площадь: 12 м²"
                peoples="до 2 человек"
                bedrooms="Кондиционер"
                doubleBed="2 односпальных кровати"
                sofaBed="Общая ванная комната"
                {...modalPlavuchProps}
              >
                <CardModalContentRooms
                  title="Плавучий дом"
                  listItems={["Кондиционер"]}
                  description={
                    <>
                      6 номеров с односпальными кроватями, кондиционер в каждом
                      номере. <br></br>
                      <br></br>Общая столовая - как дома. <br></br>Домашняя
                      кухня: завтраки обеды и ужины готовит наша хозяйка.
                      <br></br>
                      <br></br>
                      Зона отдыха на крыше с видом на Волгу. <br></br>Уютная
                      аутентичная атмосфера - как на старых добрых базах отдыха,
                      только комфортнее. <br></br>
                      <br></br>И да - рыбалка прямо с веранды! Можно ловить, не
                      выходя с территории - удочка, утро и полная тишина.
                      <br></br> <br></br>
                    </>
                  }
                  price="3 000"
                />
              </CardRoomBig>
            </SwiperSlide>
          </Swiper>
          <ButtonBox>
            <ButtonNavigation
              aria-label="Навигация влево"
              onClick={onButtonPrevClick}
            >
              <ArrowLeftIcon />
            </ButtonNavigation>
            <ButtonNavigation
              aria-label="Навигация вправо"
              onClick={onButtonNextClick}
            >
              <ArrowRightIcon />
            </ButtonNavigation>
          </ButtonBox>
        </RoomsBox>
      )}
    </Section>
  );
};
