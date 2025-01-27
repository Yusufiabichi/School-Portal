import React, { useState } from 'react';

const PersonalInformation = ({ formData, handleChange }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold">Personal Information</h2>
    <div>
      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
        Full Name
      </label>
      <input
        type="text"
        name="fullName"
        id="fullName"
        value={formData.fullName}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
        Phone Number
      </label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    
    
  </div>
);

const AcademicRecords = ({ formData, handleChange }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold">Academic Records</h2>
    <div>
      <label htmlFor="highSchoolName" className="block text-sm font-medium text-gray-700">
        High School Name
      </label>
      <input
        type="text"
        name="highSchoolName"
        id="highSchoolName"
        value={formData.highSchoolName}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700">
        Graduation Year
      </label>
      <input
        type="number"
        name="graduationYear"
        id="graduationYear"
        value={formData.graduationYear}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="gpa" className="block text-sm font-medium text-gray-700">
        GPA
      </label>
      <input
        type="text"
        name="gpa"
        id="gpa"
        value={formData.gpa}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

const GuardianInformation = ({ formData, handleChange }) => (
  <div className="space-y-6">
    <h2 className="text-xl font-bold">Parent/Guardian Information</h2>
    <div>
      <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">
        Guardian's Name
      </label>
      <input
        type="text"
        name="guardianName"
        id="guardianName"
        value={formData.guardianName}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">
        Guardian's Phone Number
      </label>
      <input
        type="tel"
        name="guardianPhone"
        id="guardianPhone"
        value={formData.guardianPhone}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none 
        focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label htmlFor="guardianRelation" className="block text-sm font-medium text-gray-700">
        Relationship to Candidate
      </label>
      <input
        type="text"
        name="guardianRelation"
        id="guardianRelation"
        value={formData.guardianRelation}
        onChange={handleChange}
        required
        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  </div>
);

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    highSchoolName: '',
    graduationYear: '',
    gpa: '',
    guardianName: '',
    guardianPhone: '',
    guardianRelation: '',
  });

  const [currentSection, setCurrentSection] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNext = () => {
    if (currentSection < 3) setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    if (currentSection > 1) setCurrentSection(currentSection - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Add form submission logic here (e.g., API call to backend)
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl w-full bg-white p-8 shadow-xl rounded-2xl">
        <h1 className="text-2xl font-bold text-center mb-6">School Admission Form</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {currentSection === 1 && <PersonalInformation formData={formData} handleChange={handleChange} />}
          {currentSection === 2 && <AcademicRecords formData={formData} handleChange={handleChange} />}
          {currentSection === 3 && <GuardianInformation formData={formData} handleChange={handleChange} />}

          <div className="flex justify-between items-center mt-6">
            {currentSection > 1 && (
              <button
                type="button"
                onClick={handlePrevious}
                className="py-2 px-4 bg-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                Previous
              </button>
            )}

            {currentSection < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                Submit Application
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
