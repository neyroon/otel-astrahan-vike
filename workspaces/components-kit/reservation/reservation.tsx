import { Loader, Typography } from "@foundation";
import { lazy, Suspense } from "preact/compat";
import { useEffect, useState } from "preact/hooks";
import { ReservationBox, StyledButton, TextBlock } from "./reservation.styles";

export const DatePickerBlock = () => {
  const [Component, setComponent] = useState(() => Loader);

  useEffect(() => {
    setComponent(() => lazy(() => import("./date-picker-block")));
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Component />
    </Suspense>
  );
};

export const Reservation = () => {
  return (
    <ReservationBox>
      <TextBlock>
        <Typography size="32">Бронирование номеров</Typography>
        <DatePickerBlock />
      </TextBlock>
      <StyledButton>Найти номер</StyledButton>
    </ReservationBox>
  );
};
