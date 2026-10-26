import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { HomeView } from './views/HomeView';
import { ScheduleView } from './views/ScheduleView';
import { AssignmentsView } from './views/AssignmentsView';
import { GradesView } from './views/GradesView';
import { AttendanceView } from './views/AttendanceView';
import { AnnouncementsView } from './views/AnnouncementsView';
import { SettingsView } from './views/SettingsView';

function AppContent() {
  const { currentView } = useApp();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors selection:bg-indigo-500 selection:text-white">
      {/* Navigation Header */}
      <Header onOpenLogin={() => setIsLoginOpen(true)} />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        {currentView === 'home' && <HomeView onOpenLogin={() => setIsLoginOpen(true)} />}
        {currentView === 'schedule' && <ScheduleView />}
        {currentView === 'assignments' && <AssignmentsView />}
        {currentView === 'grades' && <GradesView />}
        {currentView === 'attendance' && <AttendanceView />}
        {currentView === 'announcements' && <AnnouncementsView />}
        {currentView === 'settings' && <SettingsView onOpenLogin={() => setIsLoginOpen(true)} />}
      </main>

      {/* Student Profile Login Modal */}
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
