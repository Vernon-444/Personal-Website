import React, { useState } from 'react';

const Contact = () => {
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const initialFormData = {
        name: '',
        email: '',
        subject: '',
        message: '',
        access_key: '65941f8c-f968-4106-b21c-e18cd9898510',
      };

    const [formData, setFormData] = useState(initialFormData);

    const reset = () => setFormData(initialFormData);

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.id]: event.target.value,
        });
      };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData, null, 2),
        })
            .then(async (response) => {
            let json = await response.json();
            if (json.success) {
                setIsSuccess(true);
                setMessage("Thank you! Your message has been successfully submitted.");
                event.target.reset();
                reset();
            } else {
                setIsSuccess(false);
                setMessage(json.message);
            }
            })
            .catch((error) => {
            setIsSuccess(false);
            setMessage("Client Error. Please check the console.log for more info");
            console.log(error);
            });
    };

  return (
    <form className="w-full max-w-lg mx-auto mt-5" onSubmit={handleSubmit}>
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
            <input type="hidden" name="access_key" value="65941f8c-f968-4106-b21c-e18cd9898510" />
            <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" htmlFor="name">
            Name
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" required onChange={handleChange} />
        </div>
        <div className="w-full px-3 mt-6">
        <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" htmlFor="email">
            Email
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="email" type="email" required onChange={handleChange} />
        </div>

        <div className="w-full px-3 mt-6">
        <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" htmlFor="subject">
            Subject
        </label>
        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="subject" type="text" required onChange={handleChange} />
        </div>
        <div className="w-full px-3 mt-6">
        <label className="block uppercase tracking-wide text-blue-500 text-xs font-bold mb-2" htmlFor="message">
            Message
        </label>
        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="message" required onChange={handleChange} />
        </div>
        <div className="w-full px-3 mt-6">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
            Send
          </button>
        </div>
      </div>

      {message && <div className="w-full px-3 mt-6 text-blue-500">{message}</div>}
    </form>
  );
};

export default Contact;
