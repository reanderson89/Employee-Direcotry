import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import API from "../../utils/API"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


// const getEmployees = () => {
//     API.search()
//       .then(res => {
//           console.log(res.data.results);
//       })
//       .catch(err => console.log(err));
//   };

//   getEmployees();
  

const Cards = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.picture}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.firstName} {props.lastName}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Email: {props.email}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Cell: {props.cell}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            {/* <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button> */}
          </CardActions>
        </Card>
      );
};

export default Cards;