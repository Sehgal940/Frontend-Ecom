import React from 'react'
import {Grid,styled} from '@mui/material'
import {imageURL} from '../../consts/midBanner'
function MidBanner() {
  return (
    <>
        <Grid container style={{marginTop:'10px'}} >
        {
            imageURL.map((val)=><Grid key={val} item lg={4} md={4} sm={12} > 
            <img style={{width:'100%'}}  src={val} alt='na'/></Grid>
            )
        }
        </Grid>
    </>
  )
}

export default MidBanner