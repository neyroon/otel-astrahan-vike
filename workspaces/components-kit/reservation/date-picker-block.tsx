import {
  CalendarIcon,
  CircleBottomIcon,
  CircleLeftIcon,
  CircleRightIcon,
  CircleTopIcon,
  MinusIcon,
  PlusIcon,
  Typography,
} from "@foundation";
import { useOnClickOutside } from "@hooks";
import { ru } from "date-fns/locale/ru";
import { useRef, useState } from "preact/hooks";
import DatePicker, { registerLocale } from "react-datepicker";
import {
  DatePickerBox,
  DatePickerHeader,
  DatePickerHeaderButton,
  DatePickerHeaderCurrentMonth,
  DatePickerInput,
  DatePickerInputBox,
  GuestPicker,
  GuestPickerBox,
  GuestPickerInput,
  GuestPickerInputBox,
  GuestPickerText,
  InputIconBox,
  StyledButton,
} from "./date-picker.styles";

registerLocale("ru", ru);

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];

export default () => {
  const [isDatePickerFirstOpen, setIsDatePickerFirstOpen] = useState(false);
  const [isDatePickerSecondOpen, setIsDatePickerSecondOpen] = useState(false);
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState(null);
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);
  const [guestPickerState, setGuestPickerState] = useState<null | {
    adultCount: number;
    childrenCount: number;
  }>(null);
  const guestPickerRef = useRef(null);
  useOnClickOutside(guestPickerRef, () => setIsGuestPickerOpen(false));
  const renderCustomHeader = ({ decreaseMonth, monthDate, increaseMonth }) => (
    <DatePickerHeader>
      <DatePickerHeaderButton
        aria-label="Previous Month"
        className="react-datepicker__navigation react-datepicker__navigation--previous"
        onClick={decreaseMonth}
      >
        <CircleLeftIcon />
      </DatePickerHeaderButton>
      <DatePickerHeaderCurrentMonth className="react-datepicker__current-month">
        {monthDate.toLocaleString("ru", {
          month: "long",
          year: "numeric",
        })}
      </DatePickerHeaderCurrentMonth>
      <DatePickerHeaderButton
        aria-label="Next Month"
        className="react-datepicker__navigation react-datepicker__navigation--next"
        onClick={increaseMonth}
      >
        <CircleRightIcon />
      </DatePickerHeaderButton>
    </DatePickerHeader>
  );

  const onDatePickerFirstClick = () => {
    setIsDatePickerFirstOpen(true);
  };

  const onDatePickerFirstClose = () => {
    setIsDatePickerFirstOpen(false);
  };

  const onDatePickerSecondClose = () => {
    setIsDatePickerSecondOpen(false);
  };

  return (
    <DatePickerBox>
      <DatePickerInputBox>
        <DatePickerInput
          isOpen={isDatePickerFirstOpen}
          onClick={onDatePickerFirstClick}
        >
          <Typography size="15" color="date-input">
            {startDate
              ? `${startDate.getDate()} ${months[startDate.getMonth()]}, ${
                  daysOfWeek[startDate.getDay()]
                }`
              : "Дата заезда"}
          </Typography>
          <CalendarIcon />
        </DatePickerInput>
        <DatePicker
          selected={startDate ? startDate : ""}
          open={isDatePickerFirstOpen}
          renderCustomHeader={renderCustomHeader}
          onClickOutside={onDatePickerFirstClose}
          onCalendarClose={onDatePickerFirstClose}
          onChange={(date) => {
            setIsDatePickerSecondOpen(true);
            setIsDatePickerFirstOpen(false);
            setStartDate(date);
          }}
          renderMonthContent={(month) => <span>dsds</span>}
          locale="ru"
        />
      </DatePickerInputBox>
      <DatePickerInputBox>
        <DatePickerInput isOpen={isDatePickerSecondOpen}>
          <Typography size="15" color="date-input">
            {endDate
              ? `${endDate.getDate()} ${months[endDate.getMonth()]}, ${
                  daysOfWeek[endDate.getDay()]
                }`
              : "Дата выезда"}
          </Typography>
          <CalendarIcon />
          <DatePicker
            startDate={startDate}
            open={isDatePickerSecondOpen}
            renderCustomHeader={renderCustomHeader}
            selected={startDate}
            selectsEnd
            selectsRange
            onChange={(dates) => {
              setEndDate(dates[1]);
              setIsDatePickerSecondOpen(false);
            }}
            onClickOutside={onDatePickerSecondClose}
            onCalendarClose={onDatePickerSecondClose}
            locale="ru"
          />
        </DatePickerInput>
      </DatePickerInputBox>
      <DatePickerInputBox>
        <DatePickerInput
          isOpen={isGuestPickerOpen}
          onClick={() => {
            if (guestPickerState) {
              setAdultCount(guestPickerState.adultCount);
              setChildrenCount(guestPickerState.childrenCount);
            }
            setIsGuestPickerOpen(true);
          }}
        >
          <Typography size="15" color="date-input">
            {guestPickerState
              ? `${guestPickerState.adultCount} Взрослых, ${guestPickerState.childrenCount} детей`
              : "Кол-во гостей"}
          </Typography>
          {isGuestPickerOpen ? <CircleTopIcon /> : <CircleBottomIcon />}
        </DatePickerInput>
        <GuestPickerBox ref={guestPickerRef} isOpen={isGuestPickerOpen}>
          <GuestPicker>
            <GuestPickerText>
              <Typography size="16">Взрослые</Typography>
              <Typography size="15" opacity={40}>
                И дети старше 4 лет
              </Typography>
            </GuestPickerText>
            <GuestPickerInputBox>
              <InputIconBox
                onClick={() =>
                  setAdultCount((prev) => (prev > 0 ? prev - 1 : 0))
                }
              >
                <MinusIcon />
              </InputIconBox>
              <GuestPickerInput>
                <Typography size="15">{adultCount}</Typography>
              </GuestPickerInput>
              <InputIconBox onClick={() => setAdultCount((prev) => prev + 1)}>
                <PlusIcon />
              </InputIconBox>
            </GuestPickerInputBox>
          </GuestPicker>
          <GuestPicker>
            <GuestPickerText>
              <Typography size="16">Дети</Typography>
              <Typography size="16" opacity={40}>
                До 4 лет
              </Typography>
            </GuestPickerText>
            <GuestPickerInputBox>
              <InputIconBox
                onClick={() =>
                  setChildrenCount((prev) => (prev > 0 ? prev - 1 : 0))
                }
              >
                <MinusIcon />
              </InputIconBox>
              <GuestPickerInput>
                <Typography size="15">{childrenCount}</Typography>
              </GuestPickerInput>
              <InputIconBox
                onClick={() => setChildrenCount((prev) => prev + 1)}
              >
                <PlusIcon />
              </InputIconBox>
            </GuestPickerInputBox>
          </GuestPicker>
          <StyledButton
            size="s"
            onClick={() => {
              setGuestPickerState({ adultCount, childrenCount });
              setIsGuestPickerOpen(false);
            }}
          >
            Выбрать
          </StyledButton>
        </GuestPickerBox>
      </DatePickerInputBox>
    </DatePickerBox>
  );
};
