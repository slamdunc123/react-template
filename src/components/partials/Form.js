import React from 'react';

import { Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

export default class ContactForm extends React.Component{
    render(){
        return(
            <div>
                <h3>Form Component</h3>
                <Form>
                    <FormGroup> 
                        <Label for="exampleForename">Forename</Label>
                        <Input type="text" name="forename" id="exampleForename" placeholder="exampleForename placeholder" />
                    </FormGroup>
                    <FormGroup> 
                        <Label for="exampleSurname">Surname</Label>
                        <Input type="text" name="surname" id="exampleSurname" placeholder="exampleSurname placeholder" />
                    </FormGroup>
                    <FormGroup> 
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="exampleEmail placeholder" />
                    </FormGroup>
                    <FormGroup> 
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="examplePassword placeholder" />
                    </FormGroup>
                    <FormGroup> 
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup> 
                        <Label for="exampleSelectMulti">Multi Select</Label>
                        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <label for="exampleTextArea">Text Area</label>
                        <Input type="textarea" name="text" id="exampleTextArea" />
                    </FormGroup>
                    <FormGroup>
                        <label for="exampleFile">File</label>
                        <Input type="file" name="file" id="exampleFile"/>
                        <FormText color="muted">
                            This is some placeholder block-level help text for the above input.
                            It's a bit lighter and easily wraps to a new line.
                        </FormText>
                    </FormGroup>
                    <FormGroup tag="fieldset">
                    <legend>Radio Buttons</legend>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option one is this and that—be sure to include why it's great
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="radio" name="radio1" />{' '}
                        Option two can be something else and selecting it will deselect option one
                        </Label>
                    </FormGroup>
                    <FormGroup check disabled>
                        <Label check>
                        <Input type="radio" name="radio1" disabled />{' '}
                        Option three is disabled
                        </Label>
                    </FormGroup>
                    </FormGroup>
                    <FormGroup check>
                    <Label check>
                        <Input type="checkbox" />{' '}
                        Check me out
                    </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
            
        )
    }
}
    
