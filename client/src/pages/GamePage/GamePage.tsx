import React, { useEffect } from 'react';
import style from './gamepage.module.css';
import * as Separator from '@radix-ui/react-separator';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getEntries } from '../../redux/thunkActions';
export default function GamePage(): JSX.Element {
  const { entries } = useAppSelector((state) => state.entriesSlice);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getEntries());
  }, [dispatch]);
console.log(entries)
  const Mock = (): JSX.Element => (
    <div>
      <div className={style.flex}>
        <span>боковая панель</span>
      </div>
      <Separator.Root
        className={style.separator}
        decorative
        orientation="horizontal"
      />
    </div>
  );

  const Mock2 = (): JSX.Element => (
    <div className={style.flex}>
      <button>100</button>
      <button>200</button>
      <button>300</button>
      <button>400</button>
      <button>500</button>
    </div>
  );

  const arr = [];
  const arr2 = [];
  for (let i = 0; i < 5; i += 1) {
    arr.push(Mock());
    arr2.push(Mock2());
  }
  return (
    <div className={style.field}>
      <div className={style.sidepanel}>{arr}</div>
      <div className={style.mainpanel}>{arr2}</div>
    </div>
  );
}
