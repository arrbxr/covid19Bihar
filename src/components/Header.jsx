import React from 'react';
import {
    formatDate,
  formatDateAbsolute
} from '../utils/common-function';

const Header = ({data}) => {
    return ( 
        <React.Fragment>
            <div style={{margin: '25px auto 0', fontFamily: "'Teko', sans-serif", fontSize: '44px'}}>
                <h1 className="text-info mb-0">Covid19Bihar</h1>
            </div>
            <div className="text-warning" style={{fontSize: '14px'}}>
                <p className="m-0">Last Update</p>
                <span className="">
                {isNaN(Date.parse(formatDate(data)))
                  ? ''
                  : formatDateAbsolute(data)}
                </span>
            </div>
        </React.Fragment>

     );
}
 
export default Header;