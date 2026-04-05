'use client';

import { useState } from 'react';
import styles from "./WaitlistForm.module.css";

const WaitlistForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>Full Name</label>
          <input
            id="name"
            className={styles.input}
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            autoComplete="name"
          />
        </div>
        
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email Address</label>
          <input
            id="email"
            className={styles.input}
            type="email"
            placeholder="john@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
        </div>

        <button className={styles.button} type="submit" disabled={loading}>
          {loading ? (
            <>
              <span>Securing your spot...</span>
            </>
          ) : (
            'Join the waitlist'
          )}
        </button>
      </form>

      {showModal && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.modalClose} onClick={() => setShowModal(false)} aria-label="Close modal">
              ✕
            </button>
            <div className={styles.successIcon}>
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className={styles.modalTitle}>You&apos;re on the list!</h2>
            <p className={styles.modalSub}>
              Thanks for joining AlphaX. We&apos;ll notify you when we launch.
            </p>
            <div className={styles.userEmail}>{email}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WaitlistForm;
