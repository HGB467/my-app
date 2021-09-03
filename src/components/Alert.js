import React from 'react'

export default function Alert(props) {
    return (
       props.Alert && <div>
            <div class={`alert alert-${props.Alert.typ} alert-dismissible fade show`} role="alert">
  {props.Alert.msg}
</div>
        </div>
    )
}
