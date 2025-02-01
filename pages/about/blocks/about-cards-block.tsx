import { AttendanceCards } from "@components/attendance-cards";
import { CardAttendance } from "@components/card-attendance";
import { Section } from "@components/section";
import cardAttendanceImage1 from "../assets/attendance-image-1.webp";
import cardAttendanceImage2 from "../assets/attendance-image-2.webp";
import cardAttendanceImage3 from "../assets/attendance-image-3.webp";
import cardAttendanceImage4 from "../assets/attendance-image-4.webp";
import cardAttendanceImage5 from "../assets/attendance-image-5.webp";

export const AboutCardsBlock = () => {
  return (
    <Section align="center" backgroundColor="dark-gray">
      <AttendanceCards>
        <CardAttendance
          imageLink1x={cardAttendanceImage1}
          imageLink2x={cardAttendanceImage1}
          title="Рыбалка"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями... "
          linkHref="/fishing"
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage2}
          imageLink2x={cardAttendanceImage2}
          title="Охота"
          align="right"
          description="Погрузитесь в мир охоты в живописной Астрахани, остановившись в нашем эко-отеле. Под руководством потомственного егеря Михаила вы сможете поохотиться на фазанов, уток, гусей, косуль и кабанов."
          linkHref="/hunting"
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage5}
          imageLink2x={cardAttendanceImage5}
          title="Ресторан & Бар"
          description="Ресторан Щепа – это лучшие русские традиции, помноженные на современные технологии и авторский подход. Каждый гость, пришедший к нам отведать наваристой костровой ухи или томленого мяса, может быть уверен, что мы с заботой подобрали каждый ингредиент и специю, чтобы раскрыть натуральный и аутентичный вкус местных блюд."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage3}
          imageLink2x={cardAttendanceImage3}
          title="Подводная охота"
          align="right"
          description="Одним из популярных видов отдыха среди наших гостей осается подводная охота, во время которой вы сможете открыть красотами подводного мира и посмотреть на рыбалку под новым углом."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage4}
          imageLink2x={cardAttendanceImage4}
          title="Семейный отдых"
          description="Мы знаем на сколько ценны моменты вместе с самыми близкими. Команда нашего отеля сделает все возможное, чтобы ничего не отвлекало вас от общения, приключений и отдыха."
        />
      </AttendanceCards>
    </Section>
  );
};
