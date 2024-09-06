import React, { useEffect, useState } from 'react';
import style from './gamepage.module.css';
import * as Separator from '@radix-ui/react-separator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEntries } from '../../redux/thunkActions';
import { IQuestion, ITopic } from '../../redux/types/stateTypes';
import * as Dialog from '@radix-ui/react-dialog';
import { disable } from '../../redux/slices/entriesSlice';
import axiosInstance from '../../../axiosInstance';

// перемешивает элементы (аналогичен map())
const rmap = (arr: Array<unknown>, cb: CallableFunction) => {
  const result = [];
  const salt = Math.floor(Math.random() * 10);
  const max = salt + arr.length;
  for (let i = salt; i < max; i += 1) {
    result.push(cb(arr[i % arr.length]));
  }
  return result;
};

// отправка поинтов
const sendPoints = (body: object): void => {
  console.log('sended!', body)
  axiosInstance.post('/api/game/rating', body);
};

export default function GamePage(): JSX.Element {
  const initAsker = {
    open: false,
    question: { Answers: [], content: '' },
    indexes: [],
  };
  const [asker, changeAsker] = useState(initAsker);
  const [points, changePoints] = useState(0);
  const [betweenpoints, changeBetweenPoints] = useState(points);
  const { entries } = useAppSelector((state) => state.entriesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntries());
    return () => {
      if (points === betweenpoints) {
        console.log('sended!');
        sendPoints({ UserId: 6, score: points });
      } else {
        changeBetweenPoints(points);
        console.log('betweenpoints', betweenpoints)
      }
    };
  }, [dispatch, points, betweenpoints]);

  // название топика
  const TitleElement = ({ el: { title } }: { el: ITopic }): JSX.Element => (
    <div>
      <div className={style.flex}>
        <span>{title}</span>
      </div>
      <Separator.Root
        className={style.separator}
        decorative
        orientation="horizontal"
      />
    </div>
  );

  // кнопка ответа
  const AnswerButton = ({ el }) => {
    return (
      <button
        onClick={() => {
          changePoints((p) =>
            el.trueness ? p + asker.question.score : p - asker.question.score
          );
          dispatch(disable(asker.indexes));
          changeAsker((p) => ({ ...p, open: false }));
        }}
      >
        {el.content}
      </button>
    );
  };
  //обновляется после каждого нажатия на AnswerButton
  console.log(points);

  // хэндлер для кнопкок вопросов
  const questionHandler = (el: ITopic, questionIndex: number) => {
    const question = el.Questions[questionIndex];
    changeAsker({
      question,
      open: true,
      indexes: [el.topicIndex, questionIndex],
    });
  };

  // группа кнопок вопросов (100,200...)
  const TopicButtons = ({ el }: { el: ITopic }): JSX.Element => (
    <div className={style.flex}>
      <button
        disabled={!el.Questions[0].avaible}
        onClick={() => {
          questionHandler(el, 0);
        }}
      >
        100
      </button>
      <button
        disabled={!el.Questions[1].avaible}
        onClick={() => {
          questionHandler(el, 1);
        }}
      >
        200
      </button>
      <button
        disabled={!el.Questions[2].avaible}
        onClick={() => {
          questionHandler(el, 2);
        }}
      >
        300
      </button>
      <button
        disabled={!el.Questions[3].avaible}
        onClick={() => {
          questionHandler(el, 3);
        }}
      >
        400
      </button>
      <button
        disabled={!el.Questions[4].avaible}
        onClick={() => {
          questionHandler(el, 4);
        }}
      >
        500
      </button>
    </div>
  );

  // главный компонент
  return (
    <>
      <div>
        <p className={points > 0 ? style.countergreen : points < 0 ? style.counterred : style.counter}>{Math.abs(points)}</p>
      </div>
      <div className={style.field}>
        <div className={style.sidepanel}>
          {entries.map((el) => (
            <TitleElement key={el.id} el={el} />
          ))}
        </div>
        <div className={style.mainpanel}>
          {entries.map((el) => (
            <TopicButtons key={el.id} el={el} />
          ))}
        </div>
      </div>

      <Dialog.Root open={asker.open}>
        <Dialog.Content className={style.modal}>
          <Dialog.Title></Dialog.Title>
          <Dialog.Description>{asker.question.content}</Dialog.Description>
          <div className={style.grid}>
            {rmap(asker.question.Answers, (el) => (
              <AnswerButton el={el} key={el.id} />
            ))}
          </div>
          {/* prettier-ignore */}
          <button className={style.closemodalbtn} onClick={() => changeAsker(initAsker)}> x </button>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
