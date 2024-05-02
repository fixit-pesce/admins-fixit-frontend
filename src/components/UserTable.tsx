import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  TableContainer,
  Heading,
} from "@chakra-ui/react"

import {
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { useMemo, useState } from "react"
import { useGetUsersQuery } from "../api/users.api"
import LoadingSpinner from "./LoadingSpinner"
import ErrorMessage from "./ErrorMessage"

const defaultColumns = [
  {
    accessorKey: "username",
    header: "username",
  },
  {
    accessorKey: "email",
    header: "email",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
]

export default function UserTable() {
  const columns = useMemo(() => [...defaultColumns], [])

  const { isLoading, error, data } = useGetUsersQuery()

  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  })

  const table = useReactTable({
    data: data || [],
    columns,
    state: {
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  return (
    <TableContainer bg="white" borderRadius="md">
      {isLoading && <LoadingSpinner />}
      {error && <ErrorMessage error={error.message} />}
      <Heading my={2} textAlign="center">
        Users
      </Heading>
      <Table variant="striped">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
