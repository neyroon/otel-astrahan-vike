import { AttendanceCards } from "@components/attendance-cards";
import { CardAttendance } from "@components/card-attendance";
import { Section } from "@components/section";
import cardAttendanceImage1 from "../assets/attendance-image-1.png";
import cardAttendanceImage2 from "../assets/attendance-image-2.jpeg";
import cardAttendanceImage3 from "../assets/attendance-image-3.png";
import cardAttendanceImage4 from "../assets/attendance-image-4.png";
import cardAttendanceImage5 from "../assets/attendance-image-5.png";

export const AboutCardsBlock = () => {
  return (
    <Section align="center" backgroundColor="dark-gray">
      <AttendanceCards>
        <CardAttendance
          imageLink1x={cardAttendanceImage1}
          imageLink2x={cardAttendanceImage1}
          title="Рыбалка"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями..."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage2}
          imageLink2x={cardAttendanceImage2}
          title="Охота"
          align="right"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями..."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage3}
          imageLink2x={cardAttendanceImage3}
          title="Подводная охота"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями..."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage4}
          imageLink2x={cardAttendanceImage4}
          title="Семейный отдых"
          align="right"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями..."
        />
        <CardAttendance
          imageLink1x={cardAttendanceImage5}
          imageLink2x={cardAttendanceImage5}
          title="Ресторан & Бар"
          description="4 сезона в году рыбалка на Белинском банке с профессиональными рыболовными гидами будет радовать вас не только частотой поклёвок, но и трофеями..."
        />
      </AttendanceCards>
    </Section>
  );
};
