import React, {useState} from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.licenseType.trim()) newErrors.licenseType = 'Select a license type';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      alert('We will contact you shortly!');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      })
     }
  };

  return (
    <div className="w-[100vw] h-[100dvh] flex flex-col justify-start gap-10 items-center py-10">
      <div className="w-[90%] h-[20%] flex justify-start items-center text-[5vw] font-bold">Ask A Question</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-[80%]">
        {/* Row 1: Name + Email */}
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="name">Name</label>
            <input
              placeholder="Name..."
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="email">Email</label>
            <input
              placeholder='Email...'
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
        </div>

        {/* Row 2: Company + License Type */}
        <div className="flex gap-5">
          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="company">Company</label>
            <input
              placeholder='Company...'
              id="company"
              name="company"
              type="text"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.company}
              onChange={handleChange}
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>

          <div className="flex-1">
            <label className="block font-medium mb-1" htmlFor="licenseType">License Type</label>
            <select
              id="licenseType"
              name="licenseType"
              className="w-full border border-gray-300 p-2 rounded"
              value={formData.licenseType}
              onChange={handleChange}
            >
              <option value=""  className='bg-[#BE4564]  text-white'>-- Select License Type --</option>
              <option value="Personal" className='bg-[#BE4564]  text-white'>Personal</option>
              <option value="Business" className='bg-[#BE4564]  text-white'>Business</option>
              <option value="Enterprise" className='bg-[#BE4564]  text-white'>Enterprise</option>
            </select>
            {errors.licenseType && <p className="text-red-500 text-sm">{errors.licenseType}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block font-medium mb-1" htmlFor="message">Message</label>
          <textarea
            placeholder='Message...'
            id="message"
            name="message"
            rows={4}
            className="w-full border border-gray-300 p-2 rounded"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            type="submit"
            className=" font-bold border border-[#BE4564] bg-transparent text-[#BE4564] w-[60%] py-4 rounded hover:bg-[#BE4564] hover:text-white text-2xl  transition"
          >
            Submit
          </button>
        </div>
      </form>

    </div>
  )
}

export default Contact