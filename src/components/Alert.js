import React from 'react'

export default function Alert(props) {
    return (
        props.alert && <div id="alert" className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{(props.alert.type).charAt(0).toUpperCase() + (props.alert.type).substring(1)}</strong> : {props.alert.message}
        </div>

    )
}
