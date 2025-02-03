import { Form, Button, FormGroup, FormLabel, FormControl } from "react-bootstrap"

function ReviewForm({handleSubmit, revText, labelText, defaultValue}) {
  return (
    <Form>
        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
            <FormLabel>{labelText}</FormLabel>
            <FormControl ref={revText} as="textarea" rows={3} defaultValue={defaultValue}/>
        </FormGroup>
        <Button variant="outline-info" onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default ReviewForm