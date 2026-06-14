'use client';

import { useMemo, useState } from 'react';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type SubmissionState = 'idle' | 'loading' | 'success' | 'error';

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('idle');
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const errors = useMemo(() => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim()) nextErrors.name = 'Le nom est requis.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Une adresse email valide est requise.';
    if (!form.company.trim()) nextErrors.company = 'Le nom de l’entreprise est requis.';
    if (form.message.trim().length < 20) nextErrors.message = 'Le message doit contenir au moins 20 caractères.';

    return nextErrors;
  }, [form]);

  const isValid = Object.keys(errors).length === 0;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setHasSubmitted(true);

    if (!isValid) {
      setSubmissionState('error');
      return;
    }

    setSubmissionState('loading');

    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmissionState('success');
    setForm(initialState);
    setHasSubmitted(false);
  }

  function updateField<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [field]: value }));
    if (submissionState !== 'idle') {
      setSubmissionState('idle');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card" style={{ padding: '1.5rem', display: 'grid', gap: '1rem' }} noValidate>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Demander une démo</h3>
        <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7 }}>
          Recevez une réponse sous 24h avec un plan adapté à votre organisation.
        </p>
      </div>

      {submissionState === 'success' ? (
        <p role="status" style={{ margin: 0, color: 'var(--success)', fontWeight: 600 }}>
          Merci, votre demande a bien été envoyée.
        </p>
      ) : null}

      {submissionState === 'error' && hasSubmitted ? (
        <p role="alert" style={{ margin: 0, color: 'var(--danger)', fontWeight: 600 }}>
          Merci de corriger les champs signalés avant l’envoi.
        </p>
      ) : null}

      <label style={{ display: 'grid', gap: '0.4rem' }}>
        <span>Nom</span>
        <input
          value={form.name}
          onChange={(event) => updateField('name', event.target.value)}
          aria-invalid={hasSubmitted && errors.name ? 'true' : 'false'}
          aria-describedby={errors.name ? 'name-error' : undefined}
          style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid var(--border)' }}
        />
        {hasSubmitted && errors.name ? <span id="name-error" style={{ color: 'var(--danger)' }}>{errors.name}</span> : null}
      </label>

      <label style={{ display: 'grid', gap: '0.4rem' }}>
        <span>Email</span>
        <input
          type="email"
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          aria-invalid={hasSubmitted && errors.email ? 'true' : 'false'}
          aria-describedby={errors.email ? 'email-error' : undefined}
          style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid var(--border)' }}
        />
        {hasSubmitted && errors.email ? <span id="email-error" style={{ color: 'var(--danger)' }}>{errors.email}</span> : null}
      </label>

      <label style={{ display: 'grid', gap: '0.4rem' }}>
        <span>Entreprise</span>
        <input
          value={form.company}
          onChange={(event) => updateField('company', event.target.value)}
          aria-invalid={hasSubmitted && errors.company ? 'true' : 'false'}
          aria-describedby={errors.company ? 'company-error' : undefined}
          style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid var(--border)' }}
        />
        {hasSubmitted && errors.company ? <span id="company-error" style={{ color: 'var(--danger)' }}>{errors.company}</span> : null}
      </label>

      <label style={{ display: 'grid', gap: '0.4rem' }}>
        <span>Message</span>
        <textarea
          rows={5}
          value={form.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={hasSubmitted && errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : undefined}
          style={{ padding: '0.85rem 1rem', borderRadius: '0.9rem', border: '1px solid var(--border)', resize: 'vertical' }}
        />
        {hasSubmitted && errors.message ? <span id="message-error" style={{ color: 'var(--danger)' }}>{errors.message}</span> : null}
      </label>

      <button
        type="submit"
        disabled={submissionState === 'loading'}
        style={{
          border: 'none',
          borderRadius: '999px',
          padding: '0.95rem 1.4rem',
          background: submissionState === 'loading' ? '#a5b4fc' : 'var(--primary)',
          color: 'var(--primary-foreground)',
          fontWeight: 700,
          cursor: submissionState === 'loading' ? 'not-allowed' : 'pointer',
        }}
      >
        {submissionState === 'loading' ? 'Envoi en cours…' : 'Recevoir une démo'}
      </button>
    </form>
  );
}
