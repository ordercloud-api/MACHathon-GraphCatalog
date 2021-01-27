import React, { Fragment, useState }  from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client'
import { LaunchTile, Header, Button, Loading } from '../components';

export const PRODUCT_TITLE_DATA = gql`
    fragment ProductTitle on Product{
        __typename
        id
        name
        description
        images{
            url
        }
    }
    `;


export const GET_PRODUCTS = gql`
  query GetProductList{
    products{
        ...ProductTitle
    }
  }
  ${PRODUCT_TITLE_DATA}
`;


interface ProductProps extends RouteComponentProps {}

const Products: React.FC<ProductProps> = ()=>{
    const {
        data,
        loading,
        error,
        fetchMore,
      } = useQuery<
       any,
        any
      >(GET_PRODUCTS);

      if (!data) return <p>Not found</p>;
    return(
        <Fragment>
            {/* <Header/> */}
            {data.products && data.products.map( (product:any) =>(
                <pre>{JSON.stringify(product)}</pre>
    )) }
        </Fragment>
    )
}


export default Products;