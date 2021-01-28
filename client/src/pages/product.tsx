import React, { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

import { Loading, Header, LaunchDetail } from "../components";
import { ActionButton } from "../containers";
import { RouteComponentProps } from "@reach/router";

interface ProductProps extends RouteComponentProps {
  productID?: any;
}

const Product: React.FC<ProductProps> = ({ productID }) => {
  return <div />;
};

export default Product;
