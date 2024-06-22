import React from "react";


import './css/form.css'

export default function Basic_form() {
    return (
        <div class="body center_center_vertical" style={{width:'100vw',height: "100vh"}}>
            <div class="input_container center_center_vertical">
                <textarea name="Text1" cols="40" rows="15"></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}