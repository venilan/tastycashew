import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typical from 'react-typical';
import SwiftSlider from 'react-swift-slider';




// function Copyright() {
//   return (
    
//   );
// }
<div class="centered">Centered</div>

const useStyles = makeStyles(theme => ({
  
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(50, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
 
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const data =  [
  {'id':'1','src':'https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
  {'id':'2','src':'https://c.stocksy.com/a/m3nA00/z9/2571870.jpg'},
  {'id':'3','src':'https://c.stocksy.com/a/l3nA00/z9/2571869.jpg'},
  {'id':'4','src':'https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
  {'id':'5','src':'https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
];



export default function SwipeableTextMobileStepper(props) {
  const classes = useStyles();
  const svgNode = (
      <svg width="157px" height="143px" viewBox="0 0 157 143">
        <g id="Ant-Motion" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g id="设计语言--大气空间" transform="translate(-483.000000, -1308.000000)" stroke="#455981" opacity="0.5">
            <g id="Group-5" transform="translate(420.000000, 1174.000000)">
              <g id="Group-12-Copy-7" transform="translate(0.000000, 109.000000)">
                <g id="import-TweenOne-from">
                  <g id="Group-2">
                    <g id="Group-6" transform="translate(83.000000, 40.000000)">
                      <path d="M58.546048,30 C73.2110274,30 86.8344179,32.106261 97.1063916,35.6458256 C109.482662,39.910432 117.092096,46.375008 117.092096,52.2285176 C117.092096,58.3285023 109.027403,65.1958067 95.7371289,69.603373 C85.6889749,72.9356894 72.4670664,74.6749619 58.546048,74.6749619 C44.2734063,74.6749619 30.7580067,73.0422555 20.5990314,69.5665434 C7.74333379,65.1683479 0,58.2119115 0,52.2285176 C0,46.422516 7.26543086,40.0080632 19.4677405,35.7497766 C29.7780335,32.1520256 43.7378067,30 58.546048,30 L58.546048,30 Z" />
                      <path d="M39.5802556,40.6922076 C46.9064313,27.9766239 55.5352463,17.2162779 63.7301385,10.0778728 C73.603896,1.47717988 83.0001861,-1.89131225 88.0661748,1.03282745 C93.3455326,4.08009571 95.2601924,14.503745 92.4352309,28.2292008 C90.2993641,38.6064317 85.1994104,50.9397722 78.2448886,63.0105111 C71.114664,75.3861293 62.9498177,86.2892172 54.8663999,93.3615905 C44.6375354,102.311402 34.748755,105.55001 29.5702032,102.560928 C24.5453641,99.6603243 22.6235194,90.1563255 25.0341532,77.448587 C27.0709559,66.7113413 32.1824489,53.5322275 39.5802556,40.6922076 L39.5802556,40.6922076 Z" />
                      <path d="M39.5686482,62.9240168 C32.2213534,50.2206369 27.2169803,37.3640546 25.1309721,26.6926227 C22.6175729,13.8351687 24.3946315,4.00449783 29.4558303,1.07185899 C34.7299627,-1.98434426 44.7084452,1.56088638 55.1776764,10.8654823 C63.0932294,17.9001544 71.2212805,28.4820184 78.1960506,40.5412072 C85.3469589,52.9048394 90.7066566,65.4303912 92.7913584,75.9721567 C95.4295132,89.3121003 93.2940818,99.5047473 88.1205377,102.502546 C83.1004885,105.411431 73.9143016,102.331692 64.1189245,93.8946618 C55.8426037,86.7660633 46.9880095,75.7516149 39.5686482,62.9240168 L39.5686482,62.9240168 Z" />
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  return (
    
    <React.Fragment>
      <CssBaseline />
      <SwiftSlider data={data} svgNode={svgNode} height={700}/>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent} 
        style={{backgroundColor:"transparent", position:"relative"}}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            Tasty Cashews is ready to melt your mouth!
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            {/* &apos; just give us a call 0765894561 */}
            <Typical

        steps={['welcome',1000, '']}
        loop={Infinity}
        wrapper="p" />
     
             
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={0} justify="center">
                <Grid item>
                  <Button href="/" variant="contained" color="primary">
                   go to store
                  </Button>
               
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </Container>
          {props.children}
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit 
           <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={1} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid> */}
          
        </Container>
      </main>
     
    </React.Fragment>
  );
}


// use jsx to render html, do not modify simple.html

// import BannerAnim from 'rc-banner-anim';
// import QueueAnim from 'rc-queue-anim';
// import TweenOne from 'rc-tween-one';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button } from 'antd';
// import SwiftSlider from 'react-swift-slider'
// // import 'antd/dist/antd.less';
// // import './assets/index.less';
// // import '../assets/index.less';


// const { Element } = BannerAnim;
// const BgElement = Element.BgElement;
// const data =  [
//   {'id':'1','src':'https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
//   {'id':'2','src':'https://media-cdn.tripadvisor.com/media/photo-s/12/b9/ef/11/sticky-roast-honey-chilli.jpg'},
//   {'id':'3','src':'https://www.diet-health.info/images/recipes/1400/cashewnuesse-cashew-nuts-by-luis-echeverri-urrea-fotolia-201435046.jpg'},
//   {'id':'4','src':'https://images.unsplash.com/photo-1601368148279-b3850a20e65e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
//   {'id':'5','src':'https://img.lovepik.com/photo/50048/3605.jpg_wh860.jpg'}
// ];


// const svgNode = (
//   <svg width="157px" height="143px" viewBox="0 0 157 143">
//     <g id="Ant-Motion" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
//       <g id="设计语言--大气空间" transform="translate(-483.000000, -1308.000000)" stroke="#455981" opacity="0.5">
//         <g id="Group-5" transform="translate(420.000000, 1174.000000)">
//           <g id="Group-12-Copy-7" transform="translate(0.000000, 109.000000)">
//             <g id="import-TweenOne-from">
//               <g id="Group-2">
//                 <g id="Group-6" transform="translate(83.000000, 40.000000)">
//                   <path d="M58.546048,30 C73.2110274,30 86.8344179,32.106261 97.1063916,35.6458256 C109.482662,39.910432 117.092096,46.375008 117.092096,52.2285176 C117.092096,58.3285023 109.027403,65.1958067 95.7371289,69.603373 C85.6889749,72.9356894 72.4670664,74.6749619 58.546048,74.6749619 C44.2734063,74.6749619 30.7580067,73.0422555 20.5990314,69.5665434 C7.74333379,65.1683479 0,58.2119115 0,52.2285176 C0,46.422516 7.26543086,40.0080632 19.4677405,35.7497766 C29.7780335,32.1520256 43.7378067,30 58.546048,30 L58.546048,30 Z" />
//                   <path d="M39.5802556,40.6922076 C46.9064313,27.9766239 55.5352463,17.2162779 63.7301385,10.0778728 C73.603896,1.47717988 83.0001861,-1.89131225 88.0661748,1.03282745 C93.3455326,4.08009571 95.2601924,14.503745 92.4352309,28.2292008 C90.2993641,38.6064317 85.1994104,50.9397722 78.2448886,63.0105111 C71.114664,75.3861293 62.9498177,86.2892172 54.8663999,93.3615905 C44.6375354,102.311402 34.748755,105.55001 29.5702032,102.560928 C24.5453641,99.6603243 22.6235194,90.1563255 25.0341532,77.448587 C27.0709559,66.7113413 32.1824489,53.5322275 39.5802556,40.6922076 L39.5802556,40.6922076 Z" />
//                   <path d="M39.5686482,62.9240168 C32.2213534,50.2206369 27.2169803,37.3640546 25.1309721,26.6926227 C22.6175729,13.8351687 24.3946315,4.00449783 29.4558303,1.07185899 C34.7299627,-1.98434426 44.7084452,1.56088638 55.1776764,10.8654823 C63.0932294,17.9001544 71.2212805,28.4820184 78.1960506,40.5412072 C85.3469589,52.9048394 90.7066566,65.4303912 92.7913584,75.9721567 C95.4295132,89.3121003 93.2940818,99.5047473 88.1205377,102.502546 C83.1004885,105.411431 73.9143016,102.331692 64.1189245,93.8946618 C55.8426037,86.7660633 46.9880095,75.7516149 39.5686482,62.9240168 L39.5686482,62.9240168 Z" />
//                 </g>
//               </g>
//             </g>
//           </g>
//         </g>
//       </g>
//     </g>
//   </svg>
// )
 
// export default function SwipeableTextMobileStepper(props) {
//   <SwiftSlider data={data}/>
  
//   return (
    
//     <BannerAnim type="across">
//       <Element key="aaa"
//         prefixCls="banner-user-elem"
//         followParallax={{
//           delay: 1000,
//           data: [
//             { id: 'bg', value: 20, bgPosition: '50%', type: ['backgroundPositionX'] },
//             { id: 'i1', value: 50, type: 'x' },
//             { id: 'i2', value: 55, type: 'x' },
//             { id: 'i3', value: 60, type: 'x' },
//             { id: 'title', value: 80, type: 'x' },
//             { id: 'h2', value: 90, type: 'x' },
//             { id: 'p', value: 100, type: 'x' },
//             { id: 'p2', value: 110, type: 'x' },
//             { id: 'button', value: 120, type: 'x' },
//           ],
//         }}
//       >
//         <BgElement
//           id="bg"
//           key="bg"
//           className="bg"
//           style={{
//             backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
//             backgroundSize: 'cover',
//             backgroundColor: '#364D79',
//             backgroundBlendMode: 'luminosity',
//             backgroundPosition: 'center',
//           }}
//         />
//         <QueueAnim className="icon-wrapper">
//           <div key="svg1" id="i1">
//             {svgNode}
//           </div>
//           <div key="svg2" id="i2">
//             {svgNode}
//           </div>
//           <div key="svg3" id="i3">
//             {svgNode}
//           </div>
//         </QueueAnim>
//         <QueueAnim key="queue" className="text-wrapper">
//           <h1 key="h1" id="title">Motion Design</h1>
//           <h2 key="h2" id="h2">Animation specification and components of Ant Design.</h2>
//           <p key="p" id="p" style={{ marginBottom: 0 }}>hello</p>
//           <p key="p" id="p2"></p>
//           <div key="button" id="button"><Button type="primary">go to store</Button></div>
//         </QueueAnim>
//       </Element>
//       <Element key="bbb"
//         prefixCls="banner-user-elem"
//       >
//         <BgElement
//           key="bg"
//           className="bg"
//           style={{
//             backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <QueueAnim>
//           <h1 key="h1">Ant Motion Demo</h1>
//           <p key="p">Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo</p>
//         </QueueAnim>
//         <TweenOne animation={{ y: 50, opacity: 0, type: 'from', delay: 200 }}>
//           Ant Motion Demo.Ant Motion Demo
//         </TweenOne>
//       </Element>
//     </BannerAnim>
//   );
// }

// // ReactDOM.render(<SwipeableTextMobileStepper/>, document.getElementById('__react-content'));