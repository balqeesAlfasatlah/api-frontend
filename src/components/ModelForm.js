import React, { Component } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

export class ModelForm extends Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModel} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.props.update}>
                        <Form.Control type="text" placeholder="Normal text" name="strDrinkThumb" defaultValue={this.props.strDrinkThumb}/>
                        <Form.Control type="text" placeholder="Normal text" name="strDrink" defaultValue={this.props.strDrink} />
                        <Form.Control type="text" placeholder="Normal text" name="idDrink" defaultValue={this.props.idDrink} />
                        <Button onClick={this.props.handleClose} type="submit" variant="primary">
                            Save Changes
                        </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>
                        
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModelForm
