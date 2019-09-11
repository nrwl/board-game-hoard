import React from 'react';

import styled from '@emotion/styled';

export const TileGrid = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
`;

export const Tile = styled.div`
  border: solid 1px #ccc;
  border-radius: 5px;
  overflow: hidden;
  display: block;
  min-width: 200px;
  color: inherit;
  text-decoration: none;
  margin: 0.5em;
  &:hover {
    border-color: #5159ea;
  }
`;

export const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #ccc;
`;

export const Image = styled.img`
  max-width: 100%;
  min-height: 100%;
`;

export const TileTitle = styled.h2`
  text-align: center;
`;

export const TileLeftCorner = styled.div`
  display: block;
  float: left;
  margin: -0.5em 0 1em 0.5em;
`;

export const TileRightCorner = styled.div`
  display: block;
  float: right;
  margin: -0.5em 0.5em 1em 0;
`;