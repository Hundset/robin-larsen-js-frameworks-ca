import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";

var schema = yup.object().shape({
    firstName: yup.string()
    .required("First name is missing")
    .min(2, "Name must be a minimum of 2 letters"),
    lastName: yup.string()
    .required("Last name is missing")
    .min(2, "Name must be a minimum of 2 letters"),
    email: yup.string()
    .email("Please enter a valid email")
    .required("Email is missing"),
    userMessage: yup.string()
    .required("You have not written a message")
    .min(10, "Message must be a minimum of 10 characters long")
});

function ContactForm() {
    var { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    const [message, setMessage] = useState('')

    function onSubmit() {
        console.log("Thanks for getting in touch!")
        setMessage('Thank you for getting in touch!');
    }

    return (  
    <>
        <span className="validationSpan">{message}</span>
        <Form className="myForm" onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstName" placeholder="Your first name" ref={register}/>
            </Form.Group>
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <Form.Group>
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastName" placeholder="Your last name" ref={register}/>
            </Form.Group>
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <Form.Group>
                <Form.Label>E-mail</Form.Label>
                <Form.Control name="email" placeholder="Your e-mail" ref={register}/>
            </Form.Group>
            {errors.email && <p>{errors.email.message}</p>}

            <Form.Group>
                <Form.Label>Your message</Form.Label>
                <Form.Control name="userMessage" placeholder="Please write your message here" ref={register}/>
            </Form.Group>
            {errors.userMessage && <p>{errors.userMessage.message}</p>}

            <Button type="submit">Send</Button>
        </Form>
    </>
    );

}

export default ContactForm;