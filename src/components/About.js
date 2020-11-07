import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import img from '/home/uki/Desktop/tastycashew/src/components/padam/item1.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: 60,
    marginRight:100,
    marginLeft:100,

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    
  },
  cover: {
    width: '30%',
    height:500,
    marginRight:0,
    marginBottom:50
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
 
}));

export default function About() {
  const classes = useStyles();
  const theme = useTheme();

  return (


    <Card style={{margin:100, border:"2px 5px 8px",boxShadow:"10px 20px 25px gray"}}>
    <Card className={classes.root}>
      
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h2" variant="h2">
        About us
<hr></hr>
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          TastyCashew to sell our homemade delicious Cashew with good quality from our local farms from Northern Province! <br/>Striving to delight its customers, we ensure that its cashew nuts meet good quality standards. <br/>We tend to bring our local cashew farmers especially the women to the international stage and give them work opportunities.<br/>

Cultivated using the best of eco-friendly methods and processed under strict quality conditions, the cashew nuts are rich and succulent in flavor with a simple click. &nbsp;&nbsp;<br/>Who would not love the tasty cashew nuts as snacks? here you go.. visit us online and enjoy the natural taste! 
          </Typography>
        </CardContent>
      </div> 
      <CardMedia
        className={classes.cover}
        image={img}
        title="Live from space album cover"
      />
    </Card>
    </Card>
  );
}