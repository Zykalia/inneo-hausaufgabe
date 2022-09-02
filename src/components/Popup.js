import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}><i class="bi bi-x"></i></button>
            {props.children}
        </div>
    </div>
  ) : "";
}

export default Popup