import "./ActivityCard.css";
import runningImg from '../../assets/activities/running.jpg';
import Card from '@mui/material/Card';
import { Link } from "react-router-dom";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { hobbiePhotos } from "../../dictionary";
import Typography from '@mui/material/Typography';

export default function ActivityCard(props) {

    const {type, location, date, time, id} = props;
  
    return(
            <Card component={Link} to={`/activity/${id}`} sx={{minWidth:200, maxWidth: 180 }}>
            <CardMedia
                component="img"
                alt={`activity-${type}`}
                height="100"
                image={hobbiePhotos[type]}
            />
            <CardContent className="content-container">
                <Typography gutterBottom variant="h6" component="div">
                    {type ? type : "Activity"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {(date && time) ? `${time} ,${date}`: ''}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {location}
                </Typography>
            </CardContent>
            </Card>
    )
}