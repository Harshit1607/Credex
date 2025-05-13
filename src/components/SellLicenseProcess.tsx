import React, { useState } from 'react';
import type { ChangeEvent } from 'react';
import { Upload, Check, X, ArrowRight, ArrowLeft } from 'lucide-react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

type FormDataType = {
  softwareName: string;
  licenseType: string;
  expiryDate: string;
  seats: string;
  contactEmail: string;
  contactPhone: string;
  additionalInfo: string;
  fileName: string;
};

const SellLicenseProcess: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormDataType>({
    softwareName: '',
    licenseType: '',
    expiryDate: '',
    seats: '',
    contactEmail: '',
    contactPhone: '',
    additionalInfo: '',
    fileName: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileSelection = () => {
    setFormData(prev => ({ ...prev, fileName: 'license-document.pdf' }));
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Form Submitted:', formData);
      setStep(4);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleClose = () => {
    setStep(1);
    setFormData({
      softwareName: '',
      licenseType: '',
      expiryDate: '',
      seats: '',
      contactEmail: '',
      contactPhone: '',
      additionalInfo: '',
      fileName: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  const darkMode = false; // Toggle this to `true` if you want background #BE4564 and white text
  const containerClasses = darkMode
    ? 'bg-[#BE4564] text-white'
    : 'bg-white text-black';

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className={`w-full max-w-2xl p-6 rounded-lg shadow-lg relative ${containerClasses}`}>
        <button onClick={handleClose} className="absolute top-3 right-3 hover:text-black text-gray-600">
          <X />
        </button>

        {/* Step Title */}
        <div className="mb-4">
          {step === 1 && <span className="text-xl font-semibold">Step 1: License Details</span>}
          {step === 2 && <span className="text-xl font-semibold">Step 2: Upload Documents</span>}
          {step === 3 && <span className="text-xl font-semibold">Step 3: Contact Info</span>}
          {step === 4 && <span className="text-xl font-semibold text-green-300">Success! License Listed.</span>}
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInput label="Software Name" name="softwareName" value={formData.softwareName} onChange={handleChange} />
            <div>
              <span className="text-sm block mb-1">License Type</span>
              <select
                name="licenseType"
                value={formData.licenseType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              >
                <option value="">Select</option>
                <option value="Perpetual">Perpetual</option>
                <option value="Subscription">Subscription</option>
                <option value="Floating">Floating</option>
                <option value="Volume">Volume</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <LabelInput label="Expiry Date" name="expiryDate" type="date" value={formData.expiryDate} onChange={handleChange} />
            <LabelInput label="Seats/Users" name="seats" type="number" value={formData.seats} onChange={handleChange} />
          </div>
        )}

        {step === 2 && (
          <div className="text-center border-2 border-dashed border-gray-300 p-10 rounded-md">
            <Upload className="mx-auto text-gray-500 mb-2" size={36} />
            <span className="block mb-2 text-gray-600">Drag and drop or click to upload</span>
            <button
              onClick={handleFileSelection}
              className="px-4 py-2 border border-white text-white bg-[#BE4564] rounded hover:bg-[#a83955]"
            >
              <span>Select File</span>
            </button>
            {formData.fileName && <span className="block mt-2 text-sm text-gray-700">{formData.fileName}</span>}
          </div>
        )}

        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <LabelInput label="Email" name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
            <LabelInput label="Phone Number" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />
            <div className="md:col-span-2">
              <span className="text-sm block mb-1">Additional Info</span>
              <textarea
                name="additionalInfo"
                rows={3}
                value={formData.additionalInfo}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-3 py-2 text-black"
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col items-center justify-center py-10">
            <Check className="text-green-400 mb-2" size={40} />
            <span className="text-lg">Your license has been successfully listed!</span>
          </div>
        )}

        {/* Navigation Buttons */}
        {step < 4 && (
          <div className="mt-6 flex justify-between">
            <button
              onClick={handleBack}
              className={`flex items-center px-4 py-2 border rounded ${
                step === 1 ? 'opacity-0' : 'text-gray-600 border-gray-400'
              }`}
              disabled={step === 1}
            >
              <ArrowLeft size={16} className="mr-2" />
              <span>Back</span>
            </button>
            <button
              onClick={handleNext}
              className="flex items-center px-4 py-2 bg-[#BE4564] text-white rounded hover:bg-[#a83955]"
            >
              <span>{step === 3 ? 'Submit' : 'Next'}</span>
              <ArrowRight size={16} className="ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

type LabelInputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LabelInput: React.FC<LabelInputProps> = ({ label, name, type = 'text', value, onChange }) => (
  <div>
    <span className="text-sm block mb-1">{label}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-gray-300 rounded px-3 py-2 text-black"
    />
  </div>
);

export default SellLicenseProcess;
