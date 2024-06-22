import React, { useState } from "react";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import { useNavigate } from "react-router-dom";

import './css/poster.css'


export default function Share() {
    const [share_mode,set_share_mode]=useState('QR_code')

    function printer() {
        window.print()
    }
    const navigate = useNavigate()
    function nav(url) {
        navigate(url);
    }


    if (isMobile) {
        return (
            <div>
                <h1>Dashboard not available for mobile</h1>
            </div>
        )
    } else {
        return (
            <div class="center_center_vertical" style={{ padding: '50px 0px', gap: "30px" }}>
                <div class="poster_buttons_container center_center_horizontal">
                    <button onClick={e=>{set_share_mode('QR_code')}} >QR code poster</button>
                    <button onClick={(e)=>{set_share_mode('link'); e.style=""}}
                        style={{ color: 'black', border: "3px solid black", "background-color": "white" }}>Link</button>
                </div>

                <div class="poster_container center_top_vertical">
                    {(() => {
                        if (share_mode==='QR_code') {
                            return (
                                <>
                                    <div id="poster_container">

                                        <div class="poster_content center_top_vertical">
                                            <h1>XYZ Hospital</h1>
                                            <h2>Report a problem/Commend us</h2>
                                            <span>We are adaptive, How can we serve you better?</span>
                                            <img onClick={e=>{nav('/submit')}} src="https://api.qrserver.com/v1/create-qr-code/?size=550x550&data=https://www.google.com/"
                                                alt="" />
                                            <span>Scan me to comment</span>
                                        </div>

                                    </div>

                                    <div class="poster_buttons_container center_center_horizontal">
                                        <button>Download</button>
                                        <button onClick={e => { printer(); }}>Print</button>
                                    </div>
                                </>
                            )
                        } else {
                            return (
                                <div class="link_container center_center_horizontal">
                                    <input type="text"
                                        value="https://api.qrserver.com/v1/create-qr-code/?size=550x550&data=https://www.google.com/" />
                                    <button>copy</button>
                                </div>
                            )
                        }
                    })()}



                </div>




            </div>
        )
    }
}