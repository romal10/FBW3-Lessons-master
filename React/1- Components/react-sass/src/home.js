import React from 'react'
import { Button ,ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
        <div>
            <ButtonToolbar>

                <Button variant="danger" >Red Button</Button>
                <Button variant="info" >info Button</Button>
                <Button variant="success" >info Button</Button>

            </ButtonToolbar>
        </div>
    )
}
