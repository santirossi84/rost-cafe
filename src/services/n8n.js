const WEBHOOK_BASE_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || ''

/**
 * Sends an event to an n8n webhook. No-ops (and logs) if
 * VITE_N8N_WEBHOOK_URL is not configured, so the UI keeps working
 * before the automation backend is wired up.
 */
export async function triggerWebhook(path, payload = {}) {
  if (!WEBHOOK_BASE_URL) {
    console.info('[n8n] webhook not configured, skipping event:', path, payload)
    return null
  }

  const response = await fetch(`${WEBHOOK_BASE_URL}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`n8n webhook "${path}" failed with status ${response.status}`)
  }

  return response.json().catch(() => null)
}
