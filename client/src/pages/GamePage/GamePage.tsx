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

/*
      {(Questions as IQuestion[])[0].content}
      {(Questions as IQuestion[])[1].content}
      {(Questions as IQuestion[])[2].content}
      {(Questions as IQuestion[])[3].content}
      {(Questions as IQuestion[])[4].content}
*/

  const ButtonsElement = ({el:{Questions}}: {el:ITopic}): JSX.Element => (
    <div className={style.flex}>
      <button>100</button>
      <button>200</button>
      <button>300</button>
      <button>400</button>
      <button>500</button>
    </div>
  );

  const mockArr = [];
  const mockArr2 = [];
  for (let i = 0; i < 5; i += 1) {
    // mockArr2.push(TopicElement());
  }

  return (
    <div className={style.field}>
      <div className={style.sidepanel}>
        {entries.map((el) => <TitleElement key={el.id} el={el}/>)}
      </div>
      <div className={style.mainpanel}>{entries.map(el => <ButtonsElement key={el.id} el={el} />)}</div>
    </div>
  );
}
