import React from 'react';
import styled, { css } from 'react-emotion';
import { Link } from '@reach/router';

import galaxy from '../assets/images/galaxy.jpg';
import iss from '../assets/images/iss.jpg';
import moon from '../assets/images/moon.jpg';
import { unit, colors } from '../styles';
const backgrounds = [galaxy, iss, moon];
export function getBackgroundImage(id: string) {
  return `url(${backgrounds[Number(id) % backgrounds.length]})`;
}

const getRandomInt = (max:number)=>{
return Math.floor(Math.random() * Math.floor(max));
}
const pricedummy = "$19.99"
export default ({ product }: any) => {
  const { id, name, description, price, images } = product;
  return (
    <StyledLink
      to={`/launch/${id}`}
      style={{
        backgroundColor:"white"
        // backgroundImage: getBackgroundImage(id),
      }}
    >
      
      <h3>{name}</h3>
      <h5 style={{paddingBottom: "8px"}}>{description}</h5>
      <div>
        <img src={images[getRandomInt(4)].url}></img>
         {/* <div>{price}</div> */}
      </div>
      <div>
          <div style={ {display:"flex", textAlign:"center"} }>
              <h2 style={{flex: '1 0 0', color:colors.primary}}>{pricedummy}</h2>
          </div>
      </div>
    
    </StyledLink>
  );
};

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

export const cardClassName = css({
  padding: `${unit * 4}px ${unit * 5}px`,
  borderRadius: 7,
  color: 'black',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const padding = unit * 2;
const StyledLink = styled(Link)(cardClassName, {
  display: 'block',
  // height: "350px",
  marginTop: padding,
  textDecoration: 'none',
  ':not(:last-child)': {
    marginBottom: padding * 2,
  },
  "img":{
    width: "100%",
    maxHeight: "50%",
  },
 
});
