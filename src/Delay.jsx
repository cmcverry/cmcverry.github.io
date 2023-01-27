import {useState, useEffect} from 'react';
import PropTypes from 'prop-types';


function Delay(props) {

    const [hidden, setHidden] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setHidden(false)
        }, props.wait);
    })

     return hidden ? '' : props.children;   
}

Delay.propTypes = {
    wait: PropTypes.number.isRequired
  };


export default Delay;