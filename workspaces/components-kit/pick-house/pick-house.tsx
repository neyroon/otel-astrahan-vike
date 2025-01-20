import { ArrowsIcon, Modal, Typography } from "@foundation";
import { useIsMobile } from "@hooks";
import { FunctionalComponent } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
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
      setIsHouseHovered(true);

      let x = e.clientX + 100;
      let y = e.clientY - mouseCoords.current.scrollTop;
      if (x + 392 > containerRef.current.offsetWidth) {
        x = containerRef.current.clientWidth - 392;
        y = y - 170;
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
          xmlns="http://www.w3.org/2000/svg"
          width="3600"
          height="2000"
          viewBox="0 0 3600 2000"
          fill="none"
        >
          <g>
            <path
              d="M2636.5 724.5V729.5L2741.5 774L2743 757.5L2787 752.5L2786.5 748L2777.5 742L2748.5 670L2683.5 645L2636.5 724.5Z"
              fill="white"
            />
            <circle
              cx="2739"
              cy="713"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M2300.5 729V733.5L2389.5 778.5L2390.5 761.5L2445 755.5L2443.5 751.5L2437 747L2402 674L2347 648L2300.5 729Z"
              fill="white"
            />
            <circle
              cx="2393"
              cy="713"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M1962 732V737L2035.5 783V767L2099 759.5L2098 755.5L2092 751L2052 677L2007 651.5L1962 732Z"
              fill="white"
            />
            <circle
              cx="2044"
              cy="721"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M1621.5 736V740.5L1677 786.5V771.5L1749 763.5V760L1745.5 756L1701 684.5L1700 681.5L1665 655.5L1621.5 736Z"
              fill="white"
            />
            <circle
              cx="1689"
              cy="725"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M2512 601V613.5L2597.5 648L2598.5 634.5L2641 631.5L2640 626.5L2633.5 623.5V612.5L2606.5 549L2553.5 531L2512 601Z"
              fill="white"
            />
            <circle
              cx="2596"
              cy="592"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M2220 603.5V617L2293.5 651V639L2342.5 633.5V630L2337 626.5V615.5L2306 551.5L2260 533.5L2220 603.5Z"
              fill="white"
            />
            <circle
              cx="2297"
              cy="592"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M1925.5 606V620L1986.5 653.5L1987.5 641.5L2043.5 636.5L2042 633L2038 629.5V618.5L2003.5 557.5L2002 554.5L1965 535.5L1925.5 606Z"
              fill="white"
            />
            <circle
              cx="1995"
              cy="595"
              r="7"
              fill="#636A25"
              stroke="white"
              stroke-width="2"
            />
          </g>
          <g>
            <path
              d="M1629.5 610V623.5L1677.5 657.5V646.5L1741 640.5L1740 637L1736.5 633.5V623.5L1697 558L1667 539.5L1629.5 610Z"
              fill="white"
            />
            <circle
              cx="1689"
              cy="599"
              r="7"
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
          isHouseHovered={isHouseHovered}
          mouseCoordsHouse={mouseCoordsHouse.current}
        />

        <Modal isOpen={isMobile && isHouseClicked} onClose={handleModalClose}>
          <CardHouse
            isHouseHovered={isHouseClicked}
            mouseCoordsHouse={mouseCoordsHouse.current}
            onClose={handleModalClose}
          />
        </Modal>
      </>
    </>
  );
};
