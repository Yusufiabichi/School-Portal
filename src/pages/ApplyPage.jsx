export default function ApplicationPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      {/* School Header */}
      <div className="text-center my-6">
        <img src="/school-logo.png" alt="School Logo" className="w-24 h-24 mx-auto" />
        <h1 className="text-3xl font-bold text-gray-800 mt-2">X College</h1>
        <p className="text-lg text-gray-600 mt-1">Welcome to our Online Application Portal</p>
      </div>
      
      {/* Application Information */}
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800">Application Information</h2>
        <p className="text-gray-600 mt-2">
          Apply now to join our institution and gain access to quality education.
          Fill out the application form to get started.
        </p>
        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
          Apply
        </button>
      </div>
      
      {/* Contact Information */}
      <div className="mt-10 text-center text-gray-700">
        <p className="text-lg font-semibold">For enquiries and more information:</p>
        <p>📍 School Address, City, Country</p>
        <p>📞 +123 456 7890</p>
        <p>✉️ info@school.com</p>
      </div>
    </div>
  );
}
