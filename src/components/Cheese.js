import { Card, CardHeader, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import '../App.css'


const Cheese = ({title, date, image,description}) => {
  return (
    
   <Card className="cheeseCard" sx={{ maxWidth: 345 }}>
       <CardHeader
        title={title}
        subheader={date}
        />
     <CardMedia
        component="img"
        height="194"
        image={image}
        alt={title}
      />

      <CardContent>
          <Typography variant="body2" color="text.secondary">
              {description}
          </Typography>  
      </CardContent>

   </Card>
  )
}

export default Cheese