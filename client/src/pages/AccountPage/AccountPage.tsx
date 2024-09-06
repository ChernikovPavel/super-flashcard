import { Table } from '@radix-ui/themes'
import React, { useEffect } from 'react'
import { getStats } from '../../redux/thunkActions'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'

export default function AccountPage() {
const { stats: data } = useAppSelector((state) => state.statsSlice)
const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getStats())
  }, [dispatch])


  console.log('1',data);
  
  return (
    <Table.Root size="3" variant="surface">
  <Table.Header>
    <Table.Row>
      <Table.ColumnHeaderCell>Place</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
      <Table.ColumnHeaderCell>Score</Table.ColumnHeaderCell>
    </Table.Row>
  </Table.Header>

  <Table.Body>
    <Table.Row>
      <Table.RowHeaderCell>1</Table.RowHeaderCell>
      <Table.Cell>{data[0]?.User.name}</Table.Cell>
      <Table.Cell>{data[0]?.score}</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>2</Table.RowHeaderCell>
      <Table.Cell>{data[1]?.User.name}</Table.Cell>
      <Table.Cell>{data[1]?.score}</Table.Cell>
    </Table.Row>

    <Table.Row>
      <Table.RowHeaderCell>3</Table.RowHeaderCell>
      <Table.Cell>{data[2]?.User.name}</Table.Cell>
      <Table.Cell>{data[2]?.score}</Table.Cell>
    </Table.Row>
    
    <Table.Row>
      <Table.RowHeaderCell>4</Table.RowHeaderCell>
      <Table.Cell>{data[3]?.User.name}</Table.Cell>
      <Table.Cell>{data[3]?.score}</Table.Cell>
    </Table.Row>
    
    <Table.Row>
      <Table.RowHeaderCell>5</Table.RowHeaderCell>
      <Table.Cell>{data[4]?.User.name}</Table.Cell>
      <Table.Cell>{data[4]?.score}</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table.Root>
)
}
