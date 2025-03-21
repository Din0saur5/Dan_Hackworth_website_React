import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Form, Button, Alert, Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    title: "New Contact Request", // Default title for the email
    botField: "" // Honeypot for spam protection
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent spam submissions
    if (formData.botField) {
      console.warn("Spam detected! Form not submitted.");
      return;
    }

    // Validate form fields
    if (!validateForm()) return;

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title, 
      "g-recaptcha-response": captchaToken
    };

    // Only include phone if it's not empty
    if (formData.phone.trim()) {
      emailData.phone = formData.phone;
    }

    // Send email to you (admin notification)
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
      emailData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then(
      () => {
        setStatus("Message sent successfully!");

        // Send confirmation email to the user
        emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
          emailData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).catch(err => console.error("User confirmation email failed", err));
      },
      (err) => {
        setStatus("Failed to send message. Try again later.");
        console.error("Email sending error:", err);
      }
    );

    // Clear form after submission
    setFormData({ name: "", email: "", phone: "", message: "", title: "New Contact Request", botField: "" });
  
  };
  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2 className="text-center mb-4">Contact Me</h2>

          {status && <Alert variant={status.includes("successfully") ? "success" : "danger"}>{status}</Alert>}

          <Form onSubmit={handleSubmit}>
            {/* Name Field */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
            </Form.Group>

            {/* Email Field */}
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
            </Form.Group>

            {/* Phone Field (Optional) */}
            <Form.Group controlId="phone" className="mt-3">
              <Form.Label>Phone (Optional)</Form.Label>
              <Form.Control
                type="text"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Message Field */}
            <Form.Group controlId="message" className="mt-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
            </Form.Group>


            <Form.Group className="mt-3">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(value) => setCaptchaValue(value)}
              />
              {errors.captcha && <div className="text-danger mt-2">{errors.captcha}</div>}
            </Form.Group>

            
            <Form.Control type="text" name="botField" style={{ display: "none" }} value={formData.botField} onChange={handleChange} />

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="mt-4 w-100">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact
