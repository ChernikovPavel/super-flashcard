import React, { useEffect } from 'react';
import style from './gamepage.module.css';
import * as Separator from '@radix-ui/react-separator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEntries } from '../../redux/thunkActions';
import { IQuestion, ITopic } from '../../redux/types/stateTypes';
export default function GamePage(): JSX.Element {

  const { entries } = useAppSelector((state) => state.entriesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);

  console.log(entries);   //! delete me

  const TitleElement = ({el:{title}}: {el:ITopic}): JSX.Element => (
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

  const questionHandler = (question: IQuestion) => {
    console.log(question.content)
  }


  const ButtonsElement = ({el:{Questions}}: {el:ITopic}): JSX.Element => (
    <div className={style.flex}>
      <button onClick={() => {questionHandler((Questions as IQuestion[])[0])}}>100</button>
      <button onClick={() => {questionHandler((Questions as IQuestion[])[1])}}>200</button>
      <button onClick={() => {questionHandler((Questions as IQuestion[])[2])}}>300</button>
      <button onClick={() => {questionHandler((Questions as IQuestion[])[3])}}>400</button>
      <button onClick={() => {questionHandler((Questions as IQuestion[])[4])}}>500</button>
    </div>
  );



  return (
    <div className={style.field}>
      <div className={style.sidepanel}>
        {entries.map((el) => <TitleElement key={el.id} el={el}/>)}
      </div>
      <div className={style.mainpanel}>{entries.map(el => <ButtonsElement key={el.id} el={el} />)}</div>
    </div>
  );
}
