'use client'

import { useState } from 'react'
import styles from "./WaitlistForm.module.css";

export default function WaitlistForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [showModal, setShowModal] = useState(false)

    async function handleSubmit() {
        if (!name || !email) return
        setLoading(true)

        // API call will go here later

        setLoading(false)
        setShowModal(true)
    }

    return (
        <div>
            {showModal && (
                <div className={styles.overlay}>
                    <div className={styles.modal}>
                        <button className={styles.modalClose} onClick={() => setShowModal(false)}>✕</button>

                        <div className={styles.modalIcon}>
                            <svg className={styles.modalCheckmark} viewBox="0 0 24 24">
                                <path d="M5 13l4 4L19 7" />
                            </svg>
                        </div>

                        <h2 className={styles.modalTitle}>We've added you to our waiting list!</h2>
                        <p className={styles.modalSub}>We'll let you know when AlphaX is ready.</p>
                        <div className={styles.modalEmail}>{email}</div>
                    </div>
                </div>
            )}

            {/* form */}
            <div className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Full name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    className={styles.input}
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <button className={styles.button} onClick={handleSubmit} disabled={loading}>
                    {loading ? 'Submitting...' : 'Continue'}
                </button>
            </div>
        </div>
    )
}