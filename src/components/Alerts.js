<<<<<<< HEAD
import React from 'react'
import { Alert } from "react-bootstrap";
=======
import React, { useState } from 'react'
import {Alert} from "react-bootstrap";
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
import { AlertMessage } from './styles'
function AlertDismissibleExample({ data }) {
    const { type, message } = data;
    return (
        <AlertMessage>
            <Alert variant={type} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>{message}</Alert.Heading>                
            </Alert>
        </AlertMessage>
    );
}
<<<<<<< HEAD

export const alert = (type, message, hookShow, hookMessage) => {
    hookShow(true)
    hookMessage({type: type, message: message})

    setTimeout(() => {
        hookShow(false)
        hookMessage({type:type, message:message})
    }, 5000);

}

=======
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
export default AlertDismissibleExample;