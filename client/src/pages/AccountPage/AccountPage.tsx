import { Table } from "@radix-ui/themes";
import { useEffect } from "react";
import { getStats } from "../../redux/thunkActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ListItem from "../../components/ListItem/ListItem";
import { IStats } from "../../redux/types/stateTypes";

export default function AccountPage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  const { stats } = useAppSelector((state) => state.statsSlice);

  console.log(1, stats);

  return (
    <Table.Root size="3" variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Место</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Имя</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Очки</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {stats.map((item: IStats, index) => (
          <ListItem item={item} index={index} key={item.id} />
        ))}
      </Table.Body>
    </Table.Root>
  );
}
