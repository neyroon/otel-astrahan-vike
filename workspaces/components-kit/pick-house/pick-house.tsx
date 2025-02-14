import { ArrowsIcon, Modal, Typography } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import imageBath from "./assets/bath-image.webp";
import imageHouse from "./assets/house-image.webp";
import imageHouseboat from "./assets/houseboat-image.webp";
import playgroundImage from "./assets/playground-image.webp";
import alcoveImage from "./assets/alcove-image.webp";
import alcoveBigImage from "./assets/alcove-image-big.webp";
import imagePool from "./assets/pool-image.webp";
import imageRestaurant from "./assets/restaurant-image.webp";
import { CardHouse } from "./card-house";
import {
  Background,
  GuideBox,
  GuideIcon,
  GuideText,
  PickHouseBox,
  StyledButton,
  StyledSvg,
} from "./pick-house.styles";
interface PickHouseProps {
  imageLink: string;
}

export const PickHouse: FunctionalComponent<PickHouseProps> = ({
  imageLink,
}) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isGuideBoxOpen, setIsGuideBoxOpen] = useState(true);
  const [isHouseHovered, setIsHouseHovered] = useState(false);
  const [isHouseClicked, setIsHouseClicked] = useState(false);
  const [cardContent, setCardContent] = useState({
    title: "",
    description: "",
    imagelink: "",
    square: "",
    ishouse: true,
  });
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    scrollLeft: 1500,
    scrollTop: 300,
  });
  const isMobile = useIsMobile();

  const mouseCoordsHouse = useRef({
    pageX: 0,
    pageY: 0,
  });

  useEffect(() => {
    if (!isGuideBoxOpen) {
      containerRef.current.style.overflow = "scroll";
      if (isMobile) {
        containerRef.current.scrollTop = 100;
        containerRef.current.scrollLeft = 900;
      } else {
        containerRef.current.scrollTop = 300;
        containerRef.current.scrollLeft = 1500;
      }
    }
  }, [isGuideBoxOpen]);

  const handleMouseDown = (e: MouseEvent) => {
    if (!isGuideBoxOpen) {
      document.body.style.cursor = "grabbing";
      const startX = e.pageX - containerRef.current.offsetLeft;
      const startY = e.pageY - containerRef.current.offsetTop;
      const scrollLeft = containerRef.current.scrollLeft;
      const scrollTop = containerRef.current.scrollTop;
      mouseCoords.current = { startX, startY, scrollLeft, scrollTop };
      setIsMouseDown(true);
    }
  };

  const handleMouseUp = () => {
    if (!isGuideBoxOpen) {
      document.body.style.cursor = "default";
      setIsMouseDown(false);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isMouseDown && !isGuideBoxOpen) {
      const x = e.pageX - containerRef.current.offsetLeft;
      const y = e.pageY - containerRef.current.offsetTop;
      const walkX = (x - mouseCoords.current.startX) * 1.5;
      const walkY = (y - mouseCoords.current.startY) * 1.5;
      containerRef.current.scrollLeft = mouseCoords.current.scrollLeft - walkX;
      containerRef.current.scrollTop = mouseCoords.current.scrollTop - walkY;
    }
  };

  const handleAcceptButtonClick = () => {
    setIsGuideBoxOpen(false);
  };

  const handleHouseMouseOver = (e: MouseEvent) => {
    if (
      !isGuideBoxOpen &&
      e.target.parentElement.tagName === "g" &&
      !isHouseHovered
    ) {
      setCardContent(e.target.parentElement.dataset);
      setIsHouseHovered(true);

      let x = e.clientX + 100;
      let y = e.clientY - mouseCoords.current.scrollTop;
      if (x > containerRef.current.offsetWidth / 2) {
        x -= 592;
      }
      if (y < containerRef.current.offsetHeight / 2) {
        y += 150;
      }
      if (y > containerRef.current.offsetHeight / 2) {
        y -= 150;
      }

      mouseCoordsHouse.current.pageX = x;
      mouseCoordsHouse.current.pageY = y;
    }
  };

  const handleHouseMouseOut = (e: MouseEvent) => {
    if (!isGuideBoxOpen && e.target.parentElement.tagName === "g") {
      setIsHouseHovered(false);
    }
  };

  const handleHouseClick = (e: MouseEvent) => {
    if (!isGuideBoxOpen && e.target.parentElement.tagName === "g") {
      setIsHouseClicked(true);
      setCardContent(e.target.parentElement.dataset);
    }
  };

  const handleModalClose = (e: MouseEvent) => {
    setIsHouseClicked(false);
  };

  return (
    <>
      <PickHouseBox
        ref={containerRef}
        onMouseDown={!isMobile && handleMouseDown}
        onMouseUp={!isMobile && handleMouseUp}
        onMouseMove={!isMobile && handleMouseMove}
        onMouseOver={!isMobile && handleHouseMouseOver}
        onMouseOut={!isMobile && handleHouseMouseOut}
        onClick={handleHouseClick}
      >
        <Background sources={[imageLink, imageLink]} />

        <StyledSvg
          width="2348"
          height="1304"
          viewBox="0 0 2348 1304"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            data-title="Юрта-Бий"
            data-description="Дом 36 кв.м"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="36"
          >
            <path
              d="M1721.26 471.709V475.035L1791.1 504.635L1792.1 493.66L1821.37 490.334L1821.03 487.341L1815.05 483.35L1795.76 435.458L1752.52 418.829L1721.26 471.709Z"
              fill="white"
            />
            <circle
              cx="1789.44"
              cy="464.06"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Бий"
            data-description="Дом 36 кв.м"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="36"
          >
            <path
              d="M1497.77 474.702V477.696L1556.96 507.628L1557.63 496.32L1593.88 492.329L1592.88 489.669L1588.56 486.675L1565.28 438.118L1528.7 420.824L1497.77 474.702Z"
              fill="white"
            />
            <circle
              cx="1559.17"
              cy="462.397"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Бий"
            data-description="Дом 36 кв.м"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="36"
          >
            <path
              d="M1281 477.546V480.872L1329.89 511.469V500.826L1372.13 495.838L1371.46 493.177L1367.47 490.184L1340.86 440.962L1310.93 424L1281 477.546Z"
              fill="white"
            />
            <circle
              cx="1327.03"
              cy="467.718"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Бий"
            data-description="Дом 36 кв.м"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="36"
          >
            <path
              d="M1054 478.546V481.539L1090.92 512.136V502.159L1138.81 496.838V494.51L1136.48 491.849L1106.88 444.29L1106.22 442.294L1082.93 425L1054 478.546Z"
              fill="white"
            />
            <circle
              cx="1090.9"
              cy="470.379"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Хан"
            data-description="Дом 48 кв.м с отдельной спальней"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="48"
          >
            <path
              d="M1638.45 389.561V397.876L1695.32 420.824L1695.98 411.844L1724.25 409.849L1723.59 406.523L1719.26 404.528V397.211L1701.31 354.973L1666.05 343L1638.45 389.561Z"
              fill="white"
            />
            <circle
              cx="1694.32"
              cy="383.575"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Хан"
            data-description="Дом 48 кв.м с отдельной спальней"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="48"
          >
            <path
              d="M1449 392.561V401.541L1497.89 424.157V416.175L1530.48 412.516V410.188L1526.82 407.86V400.543L1506.2 357.973L1475.61 346L1449 392.561Z"
              fill="white"
            />
            <circle
              cx="1495.32"
              cy="381.912"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Хан"
            data-description="Дом 48 кв.м с отдельной спальней"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="48"
          >
            <path
              d="M1255 394.894V404.206L1295.57 426.489L1296.24 418.507L1333.49 415.182L1332.49 412.853L1329.83 410.525V403.209L1306.88 362.634L1305.89 360.638L1281.27 348L1255 394.894Z"
              fill="white"
            />
            <circle
              cx="1294.44"
              cy="383.908"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Юрта-Хан"
            data-description="Дом 48 кв.м с отдельной спальней"
            data-imagelink={imageHouse}
            data-ishouse="true"
            data-square="48"
          >
            <path
              d="M1063 394.894V403.874L1094.93 426.489V419.173L1137.17 415.182L1136.5 412.853L1134.17 410.525V403.874L1107.9 360.306L1087.94 348L1063 394.894Z"
              fill="white"
            />
            <circle
              cx="1102.58"
              cy="387.577"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Плавучий дом Белян "
            data-description="Почувствуйте настоящее единение с водой, остановившись в плавучем доме прямо на реке. Зона отдыха на крыше с шезлонгами и грилем, возможность рыбачить прямо с пристани подарят вам впечатления и комфорт."
            data-imagelink={imageHouseboat}
          >
            <path
              d="M1954.37 946.272L2043.84 1004.14L2063.13 1000.82L2061.46 1005.47L2064.46 1007.13H2067.78L2069.11 998.82L2148.27 979.863L2146.94 985.517H2152.59L2154.25 978.2L2230.08 960.24L2229.08 964.897L2232.41 965.894L2235.4 964.897L2236.4 957.912L2262.34 952.259L2263.34 947.602L2261.34 945.274L2266 920.663L2225.42 898.713L2226.76 894.057L2255.02 888.07L2258.68 872.106L2254.03 869.446L2260.01 845.832L2183.85 807.918L2130.31 818.893L2126.65 841.509L1993.62 873.437L1991.95 885.077L2021.88 904.034L1960.69 918.003L1956.7 941.616H1954.37V946.272Z"
              fill="white"
              stroke="white"
            />
            <circle
              cx="2110.35"
              cy="873.769"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Банный комплекс "
            data-description="Ощутите настоящее расслабление и перезагрузку благодаря нашим программам парения с маестерами пара и зоне отдыха с сеновалом, расположенном под открытым небом. "
            data-imagelink={imageBath}
          >
            <path
              d="M97 864.775V867.435H193.449L239.345 811.561L231.363 765L137.575 766.663L113.629 788.613L115.625 790.609L118.285 801.917L110.303 816.883V818.878H113.629L118.285 842.159L97 864.775Z"
              fill="white"
              stroke="white"
            />
            <circle
              cx="168.321"
              cy="810.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Банный комплекс "
            data-description="Ощутите настоящее расслабление и перезагрузку благодаря нашим программам парения с маестерами пара и зоне отдыха с сеновалом, расположенном под открытым небом. "
            data-imagelink={imageBath}
          >
            <path
              d="M269 867.1L361.79 862.777L401.368 809.896L394.716 766.328H395.714V764L302.591 765.33L283.301 787.946L286.294 798.256L284.299 814.22V817.213H286.294L290.285 836.835L269 862.777V867.1Z"
              fill="white"
              stroke="white"
            />
            <circle
              cx="335.321"
              cy="804.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Ресторан Щепа"
            data-description="Это лучшие русские традиции, помноженные на современные технологии и авторский подход."
            data-imagelink={imageRestaurant}
          >
            <path
              d="M913.467 662H977.517L999 545.75H959.217V537.568H938.53V527L843.052 528.023L816 595.182L818.387 618.705L816 627.909L913.467 662Z"
              fill="white"
              stroke="white"
            />
            <circle
              cx="892.437"
              cy="575.111"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Детская площадка"
            data-description=""
            data-imagelink={playgroundImage}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M644 739C704.5 764.5 675.5 753 741 775C803 726 831 734.5 827.5 696C796.5 671.2 775.151 670.614 720.867 672.2C673.215 672.872 646.366 678.555 598.144 702.133C568.74 723.682 606.365 718.832 644 739Z"
              fill="white"
              stroke="white"
            />
            <circle
              cx="714.173"
              cy="718.121"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Беседка"
            data-description=""
            data-imagelink={alcoveImage}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M621 802.5L669 801L678.54 783L675 760V759H669L627 760L623 767.5L617.5 778.5L618 782.5L618 785.516L618.5 790L618.5 795.5L620.5 800.5L621 802.5Z"
              fill="white"
              stroke="white"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="648.321"
              cy="780.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Беседка"
            data-description=""
            data-imagelink={alcoveImage}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M772.5 798.5L820.5 797L830.04 779L826.5 756V755H820.5L778.5 756L774.5 763.5L769 774.5L769.5 778.5L769.5 781.516L770 786L770 791.5L772 796.5L772.5 798.5Z"
              fill="white"
              stroke="white"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="800.321"
              cy="777.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Беседка"
            data-description=""
            data-imagelink={alcoveImage}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M1893.5 695.5L1945.5 688.5L1947 677L1948.5 669L1938.5 662L1923.5 655L1903.5 657L1887.5 660.5V665.5L1885 680.5L1889.5 682.5L1891 683L1891 688.5L1893 693.5L1893.5 695.5Z"
              fill="white"
              stroke="white"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="1917.32"
              cy="674.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Беседка большая"
            data-description=""
            data-imagelink={alcoveBigImage}
          >
            <path
              xmlns="http://www.w3.org/2000/svg"
              d="M899 1069L965.5 1014.5L968 983V936.5V931H945.65L833.2 933.46L827.343 957L825 978.966L826.171 988.805L826.171 996.224L818.5 1018L821 1040.5V1069H899Z"
              fill="white"
              stroke="white"
            />
            <circle
              xmlns="http://www.w3.org/2000/svg"
              cx="892.321"
              cy="1000.32"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g
            data-title="Бассейн"
            data-description="Это идеальное место для всей семьи, где взрослые оценят возможность заплыва в бассейне глубиной 2 метра, в то время как маленькие гости будут в восторге от специально оборудованной детской безопасной зоны для игр. "
            data-imagelink={imagePool}
          >
            <path
              d="M1322 599.923L1386.85 659.456V661.451L1576.43 640.166L1583.08 645.487L1612.34 642.161V640.166L1597.38 629.191L1641.94 624.534V622.539L1613.67 602.251L1641.28 600.256L1641.94 597.928L1615 579.968L1527.54 566L1338.96 583.627L1351.27 595.932L1322 599.923Z"
              fill="white"
              stroke="white"
            />

            <circle
              cx="1493.32"
              cy="608.321"
              r="4.32131"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
        </StyledSvg>
        {isGuideBoxOpen && (
          <GuideBox>
            <GuideText>
              <GuideIcon>
                <ArrowsIcon />
              </GuideIcon>
              <Typography size="28" color="white">
                Для перемещения листайте влево или вправо, вверх или вниз
              </Typography>
            </GuideText>
            <StyledButton
              design="secondary"
              elementAs="button"
              onClick={handleAcceptButtonClick}
            >
              Понятно
            </StyledButton>
          </GuideBox>
        )}
      </PickHouseBox>
      <>
        <CardHouse
          {...cardContent}
          isHovered={isHouseHovered}
          mouseCoordsHouse={mouseCoordsHouse.current}
        />

        <Modal isOpen={isMobile && isHouseClicked} onClose={handleModalClose}>
          <CardHouse
            {...cardContent}
            isHovered={isHouseClicked}
            mouseCoordsHouse={mouseCoordsHouse.current}
            onClose={handleModalClose}
          />
        </Modal>
      </>
    </>
  );
};
