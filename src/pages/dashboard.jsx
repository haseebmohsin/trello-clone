import ModalBody from '@/components/ModalBody';
import React from 'react';

export default function Dashboard() {
  return (
    <div style={{ marginLeft: '20px' }}>
      <div
        style={{
          textAlign: 'justify',
          display: 'flex',
          alignItems: 'center',
          height: '80px',
          fontSize: '20px',
          fontFamily: 'monospace',
        }}>
        This is a Figma design converted to <strong style={{ margin: '0 10px', fontSize: '25px' }}> Next.js </strong> and
        <strong style={{ margin: '0 10px', fontSize: '25px' }}>Pure CSS</strong> code.
      </div>
      <div>Go to Workflow tab and play with cards.</div>
    </div>
  );
}
