import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AnnouncementCard from './components/AnnouncementCard';
import AnnouncementModal from './components/AnnouncementModal';
import ViewAnnouncementModal from './components/ViewAnnouncementModal';
import { Announcement, AnnouncementFormData } from './types/announcement';

const initialAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Community Initiatives',
    description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesh in homes.',
    date: '2024-01-02',
    time: '10:15 AM',
    category: 'Community Initiatives'
  },
  {
    id: '2',
    title: 'Community Initiatives',
    description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesh in homes.',
    date: '2024-01-02',
    time: '10:30 AM',
    category: 'Community Initiatives'
  },
  {
    id: '3',
    title: 'Community Initiatives',
    description: 'The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesh in homes.',
    date: '2024-01-02',
    time: '10:45 AM',
    category: 'Community Initiatives'
  }
];

function App() {
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<Announcement | undefined>();
  const [viewingAnnouncement, setViewingAnnouncement] = useState<Announcement | undefined>();

  const handleCreateOrEdit = (formData: AnnouncementFormData) => {
    if (selectedAnnouncement) {
      // Edit existing announcement
      setAnnouncements(announcements.map(ann => 
        ann.id === selectedAnnouncement.id
          ? { ...ann, ...formData }
          : ann
      ));
    } else {
      // Create new announcement
      const newAnnouncement: Announcement = {
        id: String(Date.now()),
        ...formData,
        category: 'Community Initiatives'
      };
      setAnnouncements([newAnnouncement, ...announcements]);
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedAnnouncement(undefined);
  };

  const handleEdit = (announcement: Announcement) => {
    setSelectedAnnouncement(announcement);
    setIsModalOpen(true);
  };

  const handleView = (announcement: Announcement) => {
    setViewingAnnouncement(announcement);
    setIsViewModalOpen(true);
  };

  const handleCloseViewModal = () => {
    setIsViewModalOpen(false);
    setViewingAnnouncement(undefined);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1">
        <Header onCreateClick={() => setIsModalOpen(true)} />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Announcement</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {announcements.map((announcement) => (
              <AnnouncementCard
                key={announcement.id}
                announcement={announcement}
                onEdit={handleEdit}
                onView={handleView}
              />
            ))}
          </div>
        </main>

        <AnnouncementModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleCreateOrEdit}
          announcement={selectedAnnouncement}
        />

        <ViewAnnouncementModal
          isOpen={isViewModalOpen}
          onClose={handleCloseViewModal}
          announcement={viewingAnnouncement}
        />
      </div>
    </div>
  );
}

export default App;