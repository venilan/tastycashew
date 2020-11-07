import React from 'react'
import Typography from '@material-ui/core/Typography';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const style = {
    root: {
      minWidth: 275,
      backgroundColor:'#ffffff',
      marginTop: 20,
      height: 200,
      color: '#ffffff'
    },
    title: {
      fontSize: 24,
      textAlign:'center'
    },
}

function Container(props) {
    return (
      <React.Fragment>
        <Grid container>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <Paper>
              {/* <Card style={style.root} variant="outlined">
                <CardContent> */}
                  <Typography variant="overline" display="block" style={style.title} gutterBottom>
                    {props.content}
                  </Typography>
                {/* </CardContent>
              </Card> */}
            </Paper>
          </Grid>
          <Grid item xs={2}/>
        </Grid>
      </React.Fragment>
    )
}

export default Container






// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import MobileStepper from '@material-ui/core/MobileStepper';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';
// import MediaCard from  '../components/Card';


// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const tutorialSteps = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://www.zilikoo.com/blog/en/wp-content/uploads/2018/02/Sagano-Bamboo-Forest-1.jpg',
     
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-HD-1080P-3D-Download.jpg',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://bayutrading.com/wp-content/uploads/2020/01/SET-BIG-BAMBOO-SOFA-ARMCHAIR-AND-RECTANGULAR-COFFEE-TABLE-WITH-COTTON-MATTRESS-AND-PILLOWBALI-BayuTrading.jpg',
//   },
//   {
//     label: 'NeONBRAND Digital Marketing, Las Vegas, United States',
//     imgPath:
//       'https://hddesktopwallpapers.in/wp-content/uploads/2015/09/tropical-resort-nature.jpg',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://wallpaperaccess.com/full/45978.jpg',
//   },
// ];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     maxWidth: '100%',
//     flexGrow: 1,
//   },
//   header: {
//     display: 'flex',
//     alignItems: 'center',
//     height: 100,
//     paddingLeft: theme.spacing(4),
//     backgroundColor: theme.palette.background.default,
//   },
//   img: {
//     height:550,
//     display: 'block',
//     maxWidth: '100%',
//     overflow: 'hidden',
//     width: '100%',
//   },
// }));

// function SwipeableTextMobileStepper() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = tutorialSteps.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <div className={classes.root}>
//       <Paper square elevation={0} className={classes.header}>
//         <Typography>{tutorialSteps[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {tutorialSteps.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <img className={classes.img} src={step.imgPath} alt={step.label} />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         variant="text"
//         activeStep={activeStep}
//         nextButton={
//           <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
//             Next
//             {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
//             Back
//           </Button>
//         }
//       /><br></br><br></br>
//          <MediaCard/>
//     </div>
 

//   );
// }

// export default SwipeableTextMobileStepper;



