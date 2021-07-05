import React from 'react';
import {Link} from 'react-router-dom';

export const NavigationOptions = [{
    path:'/',
    label:'home'
},
{
    path:'/about',
    label:'about'
},
{
    path:'/contact',
    label:'contact me'
}
];

export const Navigation:React.FC  = () => {

    return(
        <div>
            <ul>
                {NavigationOptions.map( item => (
                    <li>
                        <Link to={item.path}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}