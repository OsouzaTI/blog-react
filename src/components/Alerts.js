import React, { useState } from 'react'
import {Alert} from "react-bootstrap";
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
export default AlertDismissibleExample;