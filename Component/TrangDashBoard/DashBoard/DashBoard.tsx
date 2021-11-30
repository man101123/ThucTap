import React from 'react'
import DashBoardContent from '../DashBoardContent/DashBoardContent';
import DashBroadHeader from '../DashBroadHeader/DashBoardHeader';
import DashBoardFooter from '../DashBoardFooter/DashBoardFooter';

import './DashBoard.css';

export default function Dashboard() {
    return (
        <div className="DashBoard">
            <DashBroadHeader/>
            <DashBoardContent/>
            <DashBoardFooter/>
        </div> 
    )
}
