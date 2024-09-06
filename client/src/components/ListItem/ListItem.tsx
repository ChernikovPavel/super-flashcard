import { Table } from "@radix-ui/themes";

export default function ListItem({ item, index }) {
  return (
    <>
      <Table.Row>
        <Table.RowHeaderCell>{index + 1}</Table.RowHeaderCell>
        <Table.Cell>{item.User.name}</Table.Cell>
        <Table.Cell>{item.score}</Table.Cell>
      </Table.Row>
    </>
  );
}
