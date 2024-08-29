import React from 'react';

const ContactForm = () => {
  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" required />
      </div>
      <div>
        <label>Message</label>
        <textarea required></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
