import { Button, FormGroup, styled, Paper } from "@mui/material";

export const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

export const CustomButton = styled(Button)`
  width: 30%;
  margin: 10px auto;
`;

export const FormContainer = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 50vh;
  margin-top: 30px;
  padding-inline: 10px;
`;
