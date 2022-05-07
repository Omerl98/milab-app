import './Activity.css';
import Map from './components/Map/Map';
import { hobbiePhotos } from './dictionary';
import { Link } from 'react-router-dom';
import chatIcon from './assets/chatIcon.svg';
import returnIcon from './assets/returnIcon.svg';

function Activity(props,params) {
    const id = params.id;
    const type = "Running";
    const time = "09:30AM"
    const date = "1.12.22"
    const desc = "Who enjoys running alone? nobody! I invite you for a jog around the park! I run at a medium pace";
    const participants = [{},{},{}];

    return (
        <div className='activity-container'> 
            <div className='img-div'>
                <img width="500px" src={hobbiePhotos[type]}></img>
            </div>
            <div className='content-div'>
                <div className="content-header">
                    <h2>Running</h2>
                    <div>
                        <img width="40px" src={chatIcon} alt="" />
                        <img width="40px" src={returnIcon} alt="" />
                    </div>
                </div>
                <h4>{time}, {date}</h4>
                <p>{participants.length} Participants</p>
                <h4>Description</h4>
                <p>{desc}</p>
                <h4>Location</h4>
                <div className="map-container">
                    <Map height='20vh' activities={[]}/>
                </div>
            </div>
            <div className='join-button-div'>
                <Link to={{pathname: '/home'}}><button className="join-button" type="button">Join</button></Link>
            </div>
        </div>
    )
}

export default Activity;