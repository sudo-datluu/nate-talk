'use client'

import { 
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell
} from "@nextui-org/react";

import {columns, renderCell} from "../users/columns";
import { UserData } from "../users/types/User";

export default function UserTable({users} : {users: UserData[]}) {

  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users} emptyContent={'No users to display.'}>
        {(user) => (
          <TableRow key={user.id}>
            {(columnKey) => <TableCell>{renderCell(user, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
