import React, { useEffect, useState } from 'react';
import style from './gamepage.module.css';
import * as Separator from '@radix-ui/react-separator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEntries } from '../../redux/thunkActions';
import { IQuestion, ITopic } from '../../redux/types/stateTypes';
import * as Dialog from '@radix-ui/react-dialog';
import { disable } from '../../redux/slices/entriesSlice';
// import {Button, Dialog, Flex, Text, TextField} from '@radix-ui/themes'

const rmap = (arr: Array<unknown>, cb: CallableFunction) => {
  const result = [];
  const salt = Math.floor(Math.random() * 10);
  const max = salt + arr.length;
  for (let i = salt; i < max; i += 1) {
    result.push(cb(arr[i % arr.length]));
  }
  return result;
};

export default function GamePage(): JSX.Element {
  const initAsker = { open: false, question: { Answers: [], content: '' }, indexes: [] };
  const [asker, changeAsker] = useState(initAsker);
  const [gameMaster, changeGameMaster] = useState(0);
  const { entries } = useAppSelector((state) => state.entriesSlice);
  const dispatch = useAppDispatch();
  console.log(entries);
  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

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

  const questionHandler = (el: ITopic, questionIndex: number) => {
    const question = el.Questions[questionIndex];
    console.log(question);
    changeAsker((p) => ({ question, open: true, indexes: [el.topicIndex, questionIndex] }));
  };

  const TopicButtons = ({ el }: { el: ITopic }): JSX.Element => (
    <div className={style.flex}>
      <button
        onClick={() => {
          questionHandler(el, 0);
        }}
      >
        100
      </button>
      <button
        onClick={() => {
          questionHandler(el, 1);
        }}
      >
        200
      </button>
      <button
        onClick={() => {
          questionHandler(el, 2);
        }}
      >
        300
      </button>
      <button
        onClick={() => {
          questionHandler(el, 3);
        }}
      >
        400
      </button>
      <button
        onClick={() => {
          questionHandler(el, 4);
        }}
      >
        500
      </button>
    </div>
  );

  const AnswerButton = ({ el }) => {
    console.log(asker.indexes)
    return <button onClick={() => {
      dispatch(disable(asker.indexes))
    }}>{el.content}</button>;
  };

  return (
    <>
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
              <AnswerButton el={el} />
            ))}
          </div>
          {/* prettier-ignore */}
          <button className={style.closemodalbtn} onClick={() => changeAsker(initAsker)}> x </button>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
