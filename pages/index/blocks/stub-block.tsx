import { Section } from "@components/section";
import { Stub } from "@components/stub";

export const StubBlock = () => {
  return (
    <Section align="center" backgroundColor="stub">
      <Stub
        title="Сайт временно недоступен и находится в процессе обновления"
        subtitle="Приносим извинения за неудобства"
        phone="+7 (920) 895-30-30"
        description="Наши администраторы готовы ответить на любые ваши вопросы"
      />
    </Section>
  );
};
