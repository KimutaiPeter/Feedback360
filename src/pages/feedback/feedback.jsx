import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Feedback(){
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }

    if(isMobile){
        return (
            <div>
                <h1>Dashboard not available for mobile</h1>
            </div>
        )
    }else{
    return (
        <div className="body center_top_vertical" style={{"padding-top":"10px"}}>
        <div className="content_container left_top_vertical">

            <div className="actions_container left_center_horizontal">
                <h1>Ladies Toilet</h1>
            </div>

            <div className="indicator_container left_center_horizontal" style={{gap:'10px'}}>
                <div className="indicator_content left_center_vertical">
                    <span className="indicator_label">Issues</span>
                    <span className="indicator_value">100</span>
                </div>
                <div className="indicator_content left_center_vertical">
                    <span className="indicator_label">Archived</span>
                    <span className="indicator_value">100</span>
                </div>
            </div>
            
            <div className="options_container center_center_horizontal">
                <div className="options_content center_center_horizontal"  style={{'gap':'5px'}} >
                    <button>archive</button>
                    <button>delete</button>
                </div>
            </div>

            <div className="table_container">
                <table cellpadding="0" cellspacing="0" >
                    <tr className="header_row">
                        <th><input type="checkbox" name="" id=""/></th>
                        <th>Comment</th>
                        <th>Date</th>
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""/></td>
                        <td>Its never clean</td>
                        <td>12/12/12 12:12</td>
                        <td>
                            <span>View</span>
                        </td>
                        <td>
                            <span>Archive</span>
                        </td>
                        <td>
                            <span>Delete</span>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )}
}