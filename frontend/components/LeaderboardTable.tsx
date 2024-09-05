import React from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    User
} from "@nextui-org/react";

import { columns, users } from "@/app/constants";

export default function LeaderboardTable() {
    const renderCell = React.useCallback((user, columnKey) => {
        const cellValue = user[columnKey];

        switch (columnKey) {
            case "rank":
                return <span>{user.rank}</span>;

            case "username":
                return (
                    <User
                        avatarProps={{ radius: "full", src: user.avatar }}
                        description={user.email}
                        name={user.username}
                    >
                        {user.email}
                    </User>
                );

            case "points":
                return <span>{user.points}</span>;

            default:
                return cellValue;
        }
    }, []);

    return (
        <Table aria-label="Leaderboard table with rank, username, and points">
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.uid} align="start">
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody items={users}>
                {(item) => (
                    <TableRow key={item.id}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
