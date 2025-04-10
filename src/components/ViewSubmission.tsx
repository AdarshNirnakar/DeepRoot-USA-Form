import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function ViewSubmission() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const submissionData = localStorage.getItem(`${type}_${id}`);
  const data = submissionData ? JSON.parse(submissionData) : null;
  const today = new Date().toLocaleDateString();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === 'PrintScreen') ||
        ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S'))
      ) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-xl text-gray-800">Submission not found</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 flex items-center text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const calculateMonthlyAmount = () => {
    const amount = type === 'eor' ? 
      parseFloat(data.annualCTC) : 
      parseFloat(data.budget);
    return (amount / 12).toFixed(2);
  };

  const calculatePlatformFee = () => {
    const baseRate = 649;
    const employeeMultiplier = Math.max(1, data.employeeCount - 1) * 100;
    return baseRate + employeeMultiplier;
  };

  const calculateRecurringFee = () => {
    const monthlyAmount = parseFloat(calculateMonthlyAmount());
    return (monthlyAmount * 0.20).toFixed(2); // 20% of monthly CTC
  };

  const calculateTotalMonthly = () => {
    const monthlyAmount = parseFloat(calculateMonthlyAmount());
    const platformFee = calculatePlatformFee();
    const recurringFee = parseFloat(calculateRecurringFee());
    return (monthlyAmount + platformFee + recurringFee).toFixed(2);
  };

  const calculateFeeDeposit = () => {
    const platformFee = calculatePlatformFee();
    return (platformFee * 2).toFixed(2); // 2 months of platform fee
  };

  return (
    <div 
      className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      <div className="max-w-[1000px] mx-auto">
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center text-purple-600 hover:text-purple-700"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Home
        </button>

        <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 lg:p-12 shadow-sm">
          <div className="text-right mb-6">
            <p className="text-gray-600">Date: {today}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">To,</h2>
            <p className="text-gray-800">{data.companyName}</p>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mb-8">
            {type === 'eor' ? 'Employer of Record' : 'Remote Onboarding'} Service Order
          </h1>

          <table className="w-full mb-8">
            <tbody>
              <tr className="border-b">
                <td className="py-4 text-gray-600 w-1/3">Service Order #</td>
                <td className="py-4">{id}</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-gray-600"># of {type.toUpperCase()} Employees</td>
                <td className="py-4">{data.employeeCount}</td>
              </tr>
              <tr className="border-b">
                <td className="py-4 text-gray-600">Minimum Service Period</td>
                <td className="py-4">
                  {type === 'eor' ? 
                    `${data.contractDuration} Months` : 
                    '3 Months'}
                </td>
              </tr>
            </tbody>
          </table>

          <h2 className="text-xl md:text-2xl font-semibold mb-6">Monthly Invoice Structure (Approximate)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left text-gray-600">Item</th>
                  <th className="py-4 text-left text-gray-600">Description</th>
                  <th className="py-4 text-right text-gray-600">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">Consolidated {type.toUpperCase()} Employment(s)</td>
                  <td className="py-4">Monthly compensation of the {type.toUpperCase()} employee(s)</td>
                  <td className="py-4 text-right">${calculateMonthlyAmount()}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Platform Fee</td>
                  <td className="py-4">Base fee + additional employee fee</td>
                  <td className="py-4 text-right">${calculatePlatformFee()}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Health Insurance</td>
                  <td className="py-4">Billed monthly or as mutually agreed</td>
                  <td className="py-4 text-right">As applicable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Laptop</td>
                  <td className="py-4">Billed monthly or as mutually agreed</td>
                  <td className="py-4 text-right">As applicable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Recurring Fee</td>
                  <td className="py-4">20% of monthly compensation</td>
                  <td className="py-4 text-right">${calculateRecurringFee()}</td>
                </tr>
                <tr className="border-b font-semibold">
                  <td className="py-4">Total Monthly</td>
                  <td className="py-4">Sum of the above recurring costs</td>
                  <td className="py-4 text-right">${calculateTotalMonthly()}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold mb-6">One-Time Charges (First Invoice Only)</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full mb-8">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left text-gray-600">Item</th>
                  <th className="py-4 text-left text-gray-600">Description</th>
                  <th className="py-4 text-right text-gray-600">Amount (USD)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-4">Fee Deposit</td>
                  <td className="py-4">Refundable deposit covering 2 months of platform fee</td>
                  <td className="py-4 text-right">${calculateFeeDeposit()}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Due Diligence Fee</td>
                  <td className="py-4">One-time fee based on location and complexity</td>
                  <td className="py-4 text-right">As Applicable</td>
                </tr>
                <tr className="border-b">
                  <td className="py-4">Additional Fee</td>
                  <td className="py-4">Other fees, if applicable</td>
                  <td className="py-4 text-right">As Applicable</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-sm text-gray-500 mt-8">
            <p className="mb-2">Disclaimer: The calculations provided are based on the information provided to us and have been prepared with transparency and accuracy. All tax calculations shown are only applicable within the United States and are subject to change.</p>
            <p>Reference ID: {id}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewSubmission;