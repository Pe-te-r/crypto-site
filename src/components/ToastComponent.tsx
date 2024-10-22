import React from 'react';
import { ToastProvider, useToast } from '../context_fi/ToastContext'

const TestComponent = () => {
  const { showToast } = useToast();

  return (
    <div>
      <button onClick={() => showToast('Success! Operation completed.', 'success')}>
        Show Success Toast
      </button>
      <button onClick={() => showToast('Error! Something went wrong.', 'error')}>
        Show Error Toast
      </button>
      <button onClick={() => showToast('Info! This is a notification.', 'info')}>
        Show Info Toast
      </button>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ToastProvider>
      <TestComponent />
    </ToastProvider>
  );
};

export default App;
