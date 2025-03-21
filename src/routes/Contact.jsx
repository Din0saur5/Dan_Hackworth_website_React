import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    title: "New Contact Request",
    botField: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [captchaToken, setCaptchaToken] = useState(null);
  const [shakeButton, setShakeButton] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    if (!captchaToken) newErrors.captcha = "Please complete the reCAPTCHA.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.botField) {
      console.warn("Spam detected! Form not submitted.");
      return;
    }

    if (!validateForm()) {
      setShakeButton(true);
      setTimeout(() => setShakeButton(false), 500);
      return;
    }

    const emailData = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: formData.title,
      "g-recaptcha-response": captchaToken,
    };

    if (formData.phone.trim()) {
      emailData.phone = formData.phone;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID_ADMIN,
        emailData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setSubmitted(true);

          emailjs
            .send(
              import.meta.env.VITE_EMAILJS_SERVICE_ID,
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
              emailData,
              import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .catch((err) => console.error("User confirmation email failed", err));
        },
        (err) => {
          setStatus("Failed to send message. Try again later.");
          console.error("Email sending error:", err);
          setShakeButton(true);
          setTimeout(() => setShakeButton(false), 500);
        }
      );

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      title: "New Contact Request",
      botField: "",
    });
    setCaptchaToken(null);
  };

  return (
    <Container className="mt-4 mb-4">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <AnimatePresence>
            {!submitted ? (
              <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
                <h2 className="text-center mb-4">Contact Me</h2>

                {status && <Alert variant={status.includes("successfully") ? "success" : "danger"}>{status}</Alert>}

                <Form onSubmit={handleSubmit}>
                  {["name", "email", "phone", "message"].map((field, index) => (
                    <motion.div key={field} initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: index * 0.1 }}>
                      <Form.Group controlId={field} className="mt-3">
                        <Form.Label>
                          {field.charAt(0).toUpperCase() + field.slice(1)} {field === "phone" ? "(Optional)" : ""}
                        </Form.Label>
                        <Form.Control
                          as={field === "message" ? "textarea" : "input"}
                          name={field}
                          rows={field === "message" ? 4 : undefined}
                          placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                          value={formData[field]}
                          onChange={handleChange}
                          isInvalid={!!errors[field]}
                        />
                        <Form.Control.Feedback type="invalid">{errors[field]}</Form.Control.Feedback>
                      </Form.Group>
                    </motion.div>
                  ))}

                  {/* reCAPTCHA + Submit Button */}
                  <Form.Group className="captcha-container mt-3">
                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.4 }}>
                      <ReCAPTCHA
                        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        theme="dark"
                        onChange={(value) => setCaptchaToken(value)}
                      />
                    </motion.div>

                    <motion.div initial="hidden" animate="visible" variants={fadeInUp} transition={{ delay: 0.5 }}>
                      <Button variant="primary" type="submit" className={`submit-button ${shakeButton ? "shake" : ""}`}>
                        Send Message
                      </Button>
                    </motion.div>
                  </Form.Group>
                </Form>
              </motion.div>
            ) : (
              // ✅ Success Message with Animated GIF
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.5 } }}>
                <Card className="text-center p-4">
                  <motion.img
                    src="/checkmark.gif"
                    alt="Success"
                    style={{ width: "80px", marginBottom: "20px" }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, transition: { duration: 0.5 } }}
                  />
                  <h3>Thank You!</h3>
                  <p>Your message has been sent successfully. You will receive a confirmation email shortly.</p>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
