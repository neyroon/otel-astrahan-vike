import { CardLayout } from "@components/card-layout";
import { CardModalContentRooms } from "@components/card-modal-content-rooms";
import { CardRoomBig } from "@components/card-room-big";
import { Section } from "@components/section";
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
import videoBii from "../assets/video_bii.mp4";
import videoBiiPoster from "../assets/video_bii_poster.webp";
import videoHan from "../assets/video_han.mp4";
import videoHanPoster from "../assets/video_han_poster.webp";

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
  return (
    <Section backgroundColor="dark-gray" doublePaddingTop>
      <CardLayout variant="m">
        <CardRoomBig
          imageLink1x={houseImageBii1}
          imageLink2x={houseImageBii1}
          title="Юрта-Бий"
          description="Дом 36 кв.м вмешает 2 взpocлых и 1 peбeнка. Нoвый дoм на бepегу Волги в Aстpаxани на территoрии cвeжeпоcтpоенногo эко-отeля River&Fish приглашает любитeлей увлекaтeльнoй pыбалки, oхоты и отдыха в компании друзей и близких! В каждом доме есть собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта. "
          square="Площадь: 36 м² "
          peoples="2-3 человека"
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
                <br></br> <br></br> Дом 36 кв.м вмешает 4х взpocлых и 1 peбeнка.
                Нoвый дoм на бepегу Волги в Aстpаxани на территoрии
                cвeжeпоcтpоенногo эко-отeля River&Fish приглашает любитeлей
                увлекaтeльнoй pыбалки, oхоты и отдыха в компании друзей и
                близких! <br></br> <br></br>
                Комфортабельные условия <br></br>Есть все необходимое для
                комфортного проживания рядом с рекой. Легко могут разместиться
                до четырех взрослых и ребенок до семи лет, который проживает без
                дополнительной платы. В доме есть двуспальная кровать с удобным
                матрасом и комфортный диван. <br></br> <br></br>Современное
                оснащение <br></br>В домах есть все необходимое, спальное место
                высокого комфорта, ТВ, кондиционер, отопление, интернет, горячая
                вода, душ, кухня с посудой, техникой и местом для готовки,
                тапочки, халат, гигиенические принадлежности, у каждого дома
                есть собственная терраса и мангальная зона. <br></br> <br></br>
                Особенности отдыха <br></br> Каждый дом представляет собой
                отдельное строение, что позволяет проводить время в кругу
                близких, не мешая другим. На территории имеется паковка с
                видеонаблюдением для автомобилей. Удобный спуск к воде. В доме
                можно спокойно оставить семью, а самому уехать на рыбалку, они
                будут чувствовать себя комфорта и в безопасности. В доме
                устойчивая мобильная связь.<br></br> <br></br>
                Дополнительные услуги <br></br>В любое время можно обратиться к
                надежному и ответственному егерю, который с радостью поможет вам
                с организацией рыбалки или охоты. Кроме того, есть возможность
                арендовать катер для комфортного выхода на воду, а так же
                транспорт для охоты."
              </>
            }
            price="10 000"
          />
        </CardRoomBig>
        <CardRoomBig
          imageLink1x={houseImageHan1}
          imageLink2x={houseImageHan1}
          title="Юрта-Хан"
          description="Дoм 48 кв.м c oтдeльной спальнeй и гостиной вмещает до 4х взpоcлых и 1 peбенка. В доме предусмотрены все удобства для семей с детьми и компании друзей, собственная кухня, туалет, кондиционер и уходовые наборы с халатами для вашего комфорта."
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
                Дoм 48 кв.м c oтдeльной спальнeй вмещает 4х взpоcлых и 1
                peбенка. Hoвый дoм на бepeгу Boлги в Астрaxaни на территоpии
                cвeжепocтpоеннoгo эко-oтeля Rivеr&Fish приглашaет любитeлей
                увлeкательной рыбалки, oхoты и oтдыxа в кoмпaнии друзей и
                близких!
                <br></br> <br></br>
                Комфортабельные условия <br></br>Есть все необходимое для
                комфортного проживания рядом с рекой. Легко могут разместиться
                до четырех взрослых и ребенок до семи лет, который проживает без
                дополнительной платы. В доме есть двуспальная кровать с удобным
                матрасом и комфортный диван. <br></br> <br></br>Современное
                оснащение <br></br>В домах есть все необходимое, спальное место
                высокого комфорта, ТВ, кондиционер, отопление, интернет, горячая
                вода, душ, кухня с посудой, техникой и местом для готовки,
                тапочки, халат, гигиенические принадлежности, у каждого дома
                есть собственная терраса и мангальная зона. <br></br> <br></br>
                Особенности отдыха Каждый дом представляет собой отдельное
                строение, что позволяет проводить время в кругу близких, не
                мешая другим. На территории имеется паковка с видеонаблюдением
                для автомобилей. Удобный спуск к воде. В доме можно спокойно
                оставить семью, а самому уехать на рыбалку, они будут
                чувствовать себя комфорта и в безопасности. В доме устойчивая
                мобильная связь.
                <br></br> <br></br>
                Дополнительные услуги <br></br>В любое время можно обратиться к
                надежному и ответственному егерю, который с радостью поможет вам
                с организацией рыбалки или охоты. Кроме того, есть возможность
                арендовать катер для комфортного выхода на воду, а так же
                транспорт для охоты."
              </>
            }
            price="12 500"
          />
        </CardRoomBig>
      </CardLayout>
    </Section>
  );
};
