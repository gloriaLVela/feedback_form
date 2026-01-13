import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: ''
      });

    // The function takes an event parameter, representing the event triggered by the user's interaction with an input element.
    const handleChange = (event) => {
        // This line extracts the name and value properties from the event object's target property. 
        const { name, value } = event.target;

        // The setFormData function is a state updater function provided by React's useState hook to update the state variable formData. It spreads the existing formData object and then updates the property specified by the 'name' variable with the new value. 
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // This template constructs a confirmation message using the data from the formData object. It includes the name, email, and feedback fields the user enters.
    const handleSubmit = (event) => {
        event.preventDefault();
        const confirmationMessage = `
          Name: ${formData.name}
          Email: ${formData.email}
          Feedback: ${formData.feedback}
        `;

        // This line displays a confirmation dialog using the window.confirm(), presenting the confirmationMessage to the user.
        const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMessage}`);
        // 
        if (isConfirmed) {
          console.log('Submitting feedback:', formData);
          // The setFormData function is called to reset the formData state to empty values, clearing the form fields after submission.
          setFormData({
            name: '',
            email: '',
            feedback: ''
          });
          alert('Thank you for your valuable feedback!');
        }
      };
      
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="feedback"
          placeholder="Your Feedback"
          value={formData.feedback}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
