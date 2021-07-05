import React from 'react';
import {useHistory, useParams, Link} from 'react-router-dom';

export const About:React.FC = () => {
    const history = useHistory();
    const {sectionId} = useParams<{sectionId:string}>();

    return(
        <div>
            <p>About!</p>.
            {history.location.pathname}
            <p>Param: {sectionId}</p>

            <button>
                <Link to="/contact">
                    Contact me
                </Link>
            </button>
        </div>
        
    )
}