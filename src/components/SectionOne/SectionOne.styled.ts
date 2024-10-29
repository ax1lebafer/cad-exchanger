import styled from "styled-components";
import { Box, Typography } from "@mui/material";

export const Section = styled(Box).attrs({ as: "section" })`
  display: flex;
  justify-content: space-between;
`;

export const TextContent = styled(Box)`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled(Typography)`
  width: 400px;
  font-weight: 700;
  font-size: 46px;
`;

export const Text = styled(Typography)``;
