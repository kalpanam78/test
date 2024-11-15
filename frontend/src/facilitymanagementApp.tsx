import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ResidentTable } from './components/ResidentTable';
import { ResidentForm } from './components/ResidentForm';
import { ResidenceStatusModal } from './components/ResidenceStatusModal';
import { ResidentDetails } from './components/ResidentDetails';
import { DeleteConfirmationModal } from './components/DeleteConfirmationModal';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResident, setSelectedResident] = useState<any>(null);
  const [residentType, setResidentType] = useState<'owner' | 'tenant'>('owner');

  const handleAddNew = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log('Form submitted:', data);
    setShowForm(false);
  };

  const handleStatusSave = (data: { wing: string; unit: string; status: string }) => {
    console.log('Status updated:', data);
    setShowStatusModal(false);
  };

  const handleDeleteConfirm = () => {
    console.log('Resident deleted');
    setShowDeleteModal(false);
  };

  const handleResidentClick = (resident: any) => {
    setSelectedResident(resident);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header title="Resident Management" />
        <main className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Resident Tenant and Owner Details</h1>
            <button
              onClick={handleAddNew}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 flex items-center space-x-2"
            >
              <span>Add New Resident details</span>
            </button>
          </div>
          
          {showForm ? (
            <ResidentForm
              type={residentType}
              onSubmit={handleFormSubmit}
              onCancel={() => setShowForm(false)}
              onTypeChange={setResidentType}
            />
          ) : (
            <ResidentTable
              onResidentClick={handleResidentClick}
              onStatusChange={() => setShowStatusModal(true)}
              onDelete={() => setShowDeleteModal(true)}
            />
          )}
        </main>
      </div>

      <ResidenceStatusModal
        isOpen={showStatusModal}
        onClose={() => setShowStatusModal(false)}
        onSave={handleStatusSave}
      />

      <DeleteConfirmationModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDeleteConfirm}
        unitNumber={selectedResident?.unitNumber}
      />

      {selectedResident && (
        <ResidentDetails
          type={selectedResident.type}
          resident={selectedResident}
          onClose={() => setSelectedResident(null)}
        />
      )}
    </div>
  );
}

export default App;