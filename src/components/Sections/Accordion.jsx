import React, { useState } from 'react';
import styled from 'styled-components';

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <AccordionWrapper>
      <Title>Поширені запитання</Title>
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Item key={index}>
            <QuestionRow onClick={() => toggle(index)}>
              <QuestionText>{item.question}</QuestionText>
              <IconButton $isOpen={isOpen}>{isOpen ? '✕' : '+'}</IconButton>
            </QuestionRow>
            <Answer $isOpen={isOpen}>{item.answer}</Answer>
          </Item>
        );
      })}
    </AccordionWrapper>
  );
}

const AccordionWrapper = styled.div`
  max-width: 1391px;
  margin: 40px auto;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h2`
  width: 656px;
  margin: 0 auto 60px auto;
  font-weight: 600;
  font-size: 64px;
  color: #000;
`;

const Item = styled.div`
  border-bottom: 1px solid #ccc;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
  transition: background 0.3s;

  &:hover {
    background: #f5f5f5;
  }
`;

const QuestionText = styled.span`
  font-weight: 600;
  font-size: 48px;
  line-height: 120%;
  color: #000;
`;

const IconButton = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({ $isOpen }) => ($isOpen ? '#000' : '#ccc')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isOpen }) => (isOpen ? '#fff' : '#000')};
  font-size: ${({ $isOpen }) => ($isOpen ? '10px' : '20px')};
  padding-bottom: ${({ isOpen }) => (isOpen ? '0' : '5px')};

`;

const Answer = styled.div`
  max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  padding: ${({ $isOpen }) => ($isOpen ? '16px' : '0 16px')};
  background-color: #fafafa;
  font-weight: 400;
  font-size: 24px;
  line-height: 140%;
  color: #333;
  letter-spacing: 1px;
`;

const faqData = [
  {
    question: 'Скільки часу займає монтаж будинку?',
    answer: 'Будинок встановлюється від 3 до 7 днів залежно від ділянки. Моделі Family та Premium — від 7 до 14 днів.',
  },
  {
    question: 'Чи можна жити у такому будинку взимку?',
    answer: 'Так, будинки мають утеплення та системи опалення, що дозволяє комфортно жити навіть у холодну пору року.',
  },
  {
    question: 'Чи є гарантія?',
    answer: 'Так, ми надаємо гарантію на конструкцію та основні системи будинку. Деталі уточнюйте у менеджера.',
  },
  {
    question: 'Чи можна підключити сонячні панелі?',
    answer: 'Так, наші моделі підтримують інтеграцію з сонячними панелями для автономного живлення.',
  },
];
