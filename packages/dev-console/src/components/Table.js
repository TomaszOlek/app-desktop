import React from "react";
import styled from "styled-components";
import { useTable, usePagination } from "react-table";

import { Box, Text, useTheme } from "@blend-ui/core";

import { i18n } from "@prifina-apps/utils";

import PropTypes from "prop-types";

import { BlendIcon } from "@blend-ui/icons";

import feDropRight from "@iconify/icons-fe/drop-right";
import feDropLeft from "@iconify/icons-fe/drop-left";
import feArrowRight from "@iconify/icons-fe/arrow-right";
import feArrowLeft from "@iconify/icons-fe/arrow-left";

i18n.init();

const Styles = styled(Box)`
/* This is required to make the table full-width */
display: block;
// max-width: 100%;
width:100%;
color: ${props => props.theme.colors.textPrimary};
font-size: 12px;

/* This will make the table scrollable when it gets too small */
.tableWrap {
  display: block;
  max-width: 100%;
  overflow-x: scroll;
  overflow-y: scroll;
}

table {
  width:100%;
  border-spacing: 0;
  // border: 1px solid white;
  padding-left: 15px;
  tr {
    padding-left: 15px;

    :last-child {
      td {
        border-bottom: 0;
      }
    }
  cursor: pointer;
    
  }
  th {
    padding-left: 16px;
    padding-right: 16px;
    text-align: center;
    height: 55px;
    border-bottom: ${props => props.theme.componentStyles.textarea.base.border};

  }
  td {
    height:40px;
    margin: 0;
    //   padding: 0.5rem;
    border-bottom:${props => props.theme.componentStyles.textarea.base.border};
    text-align: center;


    :last-child {
      border-right: 0;
    }
  }
}

table td.status,table td.date,table td.version,table td.appType {
  text-align: center;

  .pagination {
    background: #231d35; //toadd
    padding-top: 36px;
    padding-left: 16px;
    font-size: 12px;
    color: ${props => props.theme.colors.lightGray};
  }
}
`;

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 8 },
    },
    usePagination,
  );

  const { colors } = useTheme();

  // Render the UI for your table
  return (
    <>
      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
        <div
          className="pagination"
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Text fontSize="xs">
              {i18n.__("showing")}
              <strong>
                {pageIndex + 1} - {pageOptions.length}
              </strong>
            </Text>
            <Text fontSize="xs">
              {data.length} {i18n.__("itemsTotal")}
            </Text>
          </div>
          <div>
            <BlendIcon
              style={{
                cursor: "pointer",
              }}
              iconify={feDropLeft}
              onClick={() => gotoPage(0)}
              color={!canPreviousPage ? colors.textSecondary : "white"}
            />
            <BlendIcon
              style={{
                cursor: "pointer",
              }}
              iconify={feArrowLeft}
              onClick={() => previousPage()}
              color={!canPreviousPage ? colors.textSecondary : "white"}
            />
            <BlendIcon
              style={{
                cursor: "pointer",
              }}
              iconify={feArrowRight}
              onClick={() => nextPage()}
              color={!canNextPage ? colors.textSecondary : "white"}
            />
            <BlendIcon
              style={{
                cursor: "pointer",
              }}
              iconify={feDropRight}
              onClick={() => gotoPage(pageCount - 1)}
              color={!canNextPage ? colors.textSecondary : "white"}
            />
          </div>
        </div>
      </Styles>
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.instanceOf(Array),
  data: PropTypes.instanceOf(Array),
};

export default Table;
