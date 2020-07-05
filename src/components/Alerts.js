import React from 'react'
import { Alert } from "react-bootstrap";
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

export const alert = (type, message, hookShow, hookMessage) => {
    hookShow(true)
    hookMessage({type: type, message: message})

    setTimeout(() => {
        hookShow(false)
        hookMessage({type:type, message:message})
    }, 5000);

}

export default AlertDismissibleExample;