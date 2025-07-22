import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../components/navigation.jsx';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    salary: '',
    hireDate: '',
    status: 'Active',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post('/api/employees', formData);
      setSuccess('Employee added successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        department: '',
        salary: '',
        hireDate: '',
        status: 'Active',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <>
    <Navigation />
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Add New Employee</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-600 mb-4">{success}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>First Name *</label>
          <input type="text" name="firstName" required value={formData.firstName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Last Name *</label>
          <input type="text" name="lastName" required value={formData.lastName} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Email *</label>
          <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Phone</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Position *</label>
          <input type="text" name="position" required value={formData.position} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Department</label>
          <input type="text" name="department" value={formData.department} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Salary *</label>
          <input type="number" name="salary" required min="0" value={formData.salary} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Hire Date</label>
          <input type="date" name="hireDate" value={formData.hireDate} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange} className="w-full border px-3 py-2 rounded">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="On Leave">On Leave</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Employee
        </button>
      </form>
    </div>
    </>
  );
};

export default AddEmployee;
