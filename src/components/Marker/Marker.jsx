import React from 'react';
import './Marker.css';
import {Link} from 'react-router-dom';

const Marker = (props) => {
    const { color, name, id} = props;
    return (
        <Link to={`/activity/${id}`}>
            <div className="pin bounce"
            style={{ backgroundColor: color, cursor: 'pointer'}}
            title={name}
            />
        </Link>
      
    );
  };

  export default Marker;