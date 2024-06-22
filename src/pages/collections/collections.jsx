import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

export default function Collections(){
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
                <h4>XYZ Hospital</h4>
                <button className="left_center_horizontal">
                    <img src="./imgs/add.svg" alt=""/>
                    <span>Add collection point</span>
                </button>
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
                    <input type="text" value="XYZ Hospital"/>
                    <button>rename</button>
                    <button>archive</button>
                    <button>delete</button>
                </div>
            </div>

            <div className="table_container">
                <table cellpadding="0" cellspacing="0" >
                    <tr className="header_row">
                        <th><input type="checkbox" name="" id=""/></th>
                        <th>Collection point</th>
                        <th>Issues</th>
                        <th></th>
                        <th> </th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""/></td>
                        <td>Ladies Toilet</td>
                        <td>100</td>
                        <td>
                            <span onClick={e=>{nav('/share')}}>Share</span>
                        </td>
                        <td>
                            <span onClick={e=>{nav('/feedback')}}>View</span>
                        </td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="" id=""/></td>
                        <td>Mens Toilet</td>
                        <td>100</td>
                        <td>Poster</td>
                        <td>View</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
    )}
}