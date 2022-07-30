import { styled, Table, TableRow } from "@mui/material";

export const UsersTable = styled(Table)`
  width: 90%;
  margin: 50px 0 0 50px;
  texta-align: center;
`;

export const StylesHeader = styled(TableRow)`
  & > th {
    font-size: 20px;
    background: #28d4a1;
    color: #ffffff;
  }
`;

export const StyledRow = styled(TableRow)`
  & > td {
    font-size: 18px;
  }
`;
