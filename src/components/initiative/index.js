import React from "react";

import { Container } from "./styles/initiative";

export default function Initiative({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
