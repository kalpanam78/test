import React from 'react';

interface ProfileViewProps {
  onEditClick: () => void;
  profileData: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    society: string;
    country: string;
    state: string;
    city: string;
  };
}

export default function ProfileView({ onEditClick, profileData }: ProfileViewProps) {
  const profileImage = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";

  return (
    <div className="flex-1 bg-[#F5F7FF] min-h-screen">
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-blue-600">Edit Profile</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200"></div>
          <div>
            <div className="text-sm font-medium">Moni Roy</div>
            <div className="text-xs text-gray-500">Admin</div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-medium">Profile</h2>
          <button
            onClick={onEditClick}
            className="px-4 py-2 bg-[#FF4D15] text-white rounded-lg text-sm hover:bg-[#ff3c00] transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04015C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18821C20.0665 4.44558 20.1213 4.72142 20.1213 5C20.1213 5.27857 20.0665 5.55441 19.9598 5.81179C19.8532 6.06916 19.697 6.30301 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Edit Profile
          </button>
        </div>

        <div className="bg-white rounded-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-medium">{profileData.firstName} {profileData.lastName}</h3>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div>
              <label className="block text-sm text-gray-500 mb-1">First Name</label>
              <div className="text-sm">{profileData.firstName}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Last Name</label>
              <div className="text-sm">{profileData.lastName}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Phone Number</label>
              <div className="text-sm">{profileData.phoneNumber}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Email Address</label>
              <div className="text-sm">{profileData.email}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Select Society</label>
              <div className="text-sm">{profileData.society}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">Country</label>
              <div className="text-sm">{profileData.country}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">State</label>
              <div className="text-sm">{profileData.state}</div>
            </div>
            <div>
              <label className="block text-sm text-gray-500 mb-1">City</label>
              <div className="text-sm">{profileData.city}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}