import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import SecurityProtocolTable from './components/SecurityProtocolTable';
import ProtocolModal from './components/ProtocolModal';
import DeleteModal from './components/DeleteModal';
import ViewModal from './components/ViewModal';

const MOCK_USER = {
  name: 'Moni Roy',
  role: 'Admin',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const INITIAL_PROTOCOLS = [
  {
    id: '1',
    title: 'Physical Security',
    description: 'Implementing surveillance cameras in public spaces.',
    date: '11/01/2024',
    time: '3:45 PM',
  },
  {
    id: '2',
    title: 'Cybersecurity',
    description: 'Securing critical infrastructure, government systems.',
    date: '12/01/2024',
    time: '6:40 AM',
  },
  // ... add more protocols as needed
];

export default function App() {
  const [protocols, setProtocols] = React.useState(INITIAL_PROTOCOLS);
  const [isCreateModalOpen, setIsCreateModalOpen] = React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = React.useState(false);
  const [selectedProtocol, setSelectedProtocol] = React.useState<any>(null);

  const handleCreateProtocol = (data: any) => {
    const newProtocol = {
      id: String(protocols.length + 1),
      ...data,
    };
    setProtocols([...protocols, newProtocol]);
    setIsCreateModalOpen(false);
  };

  const handleEditProtocol = (data: any) => {
    setProtocols(
      protocols.map((p) =>
        p.id === selectedProtocol.id ? { ...p, ...data } : p
      )
    );
    setIsEditModalOpen(false);
    setSelectedProtocol(null);
  };

  const handleDeleteProtocol = () => {
    setProtocols(protocols.filter((p) => p.id !== selectedProtocol.id));
    setIsDeleteModalOpen(false);
    setSelectedProtocol(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header user={MOCK_USER} />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">
              Security Protocols
            </h1>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-4 py-2 text-sm font-medium text-white bg-[#FF5733] hover:bg-[#ff4520] rounded-md"
            >
              Create Protocol
            </button>
          </div>

          <SecurityProtocolTable
            protocols={protocols}
            onEdit={(protocol) => {
              setSelectedProtocol(protocol);
              setIsEditModalOpen(true);
            }}
            onDelete={(id) => {
              setSelectedProtocol(protocols.find((p) => p.id === id));
              setIsDeleteModalOpen(true);
            }}
            onView={(protocol) => {
              setSelectedProtocol(protocol);
              setIsViewModalOpen(true);
            }}
          />
        </main>
      </div>

      <ProtocolModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Security Protocol"
        onSave={handleCreateProtocol}
      />

      <ProtocolModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProtocol(null);
        }}
        title="Edit Security Protocol"
        protocol={selectedProtocol}
        onSave={handleEditProtocol}
      />

      <ViewModal
        isOpen={isViewModalOpen}
        onClose={() => {
          setIsViewModalOpen(false);
          setSelectedProtocol(null);
        }}
        protocol={selectedProtocol}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setSelectedProtocol(null);
        }}
        onConfirm={handleDeleteProtocol}
      />
    </div>
  );
}