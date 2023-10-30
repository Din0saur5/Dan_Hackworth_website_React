import { Grid } from react-visual-grid;
import photoData from '../photoData';
import React from 'react'

const PhotoGallery = () => {
  return (
    <div>
      <Grid images={photoData} width={900} height={1200} />;
    </div>
  )
}

export default PhotoGallery
