import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://c8.alamy.com/comp/HTC3WJ/happy-asian-elementary-school-student-studying-in-classroom-looking-HTC3WJ.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Student skills
          </Typography>
          <Typography variant="body2" color="text.secondary">
          students' academic strengths, interests, and perspectives. Formative assessments, thinking styles inventories, and surveys help to construct lessons and scaffolds that strategically meet needs. Often we gather data about the content and skill areas where a student struggles.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

