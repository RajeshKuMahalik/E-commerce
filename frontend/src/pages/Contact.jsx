import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
    // const [formData, setFormData] = useState({
    //   name: "",
    //   email: "",
    //   message: "",
    // });
    // const [error, setError] = useState("");
    // const [success, setSuccess] = useState("");
  
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.name]: e.target.value });
    // };
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (!formData.name || !formData.email || !formData.message) {
    //     setError("All fields are required");
    //     return;
    //   }
    //   setError("");
    //   setSuccess("Message sent successfully!");
    //   setFormData({ name: "", email: "", message: "" });
    // };

  return (
    <div>

    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={'US'} />
    </div>

    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
      <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt=''/>
      <div className='flex flex-col justify-center items-start gap-6'>
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>54709 Willsm Station <br /> Suite 350, Washington, USA </p>
        <p className='font-semibold'>Tel: (415) 555-0123 <br/>Email: ecommer@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Ecommeres</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
      </div>
    </div>
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
           
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
           
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
  )
}

export default Contact
