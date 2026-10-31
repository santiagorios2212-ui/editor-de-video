// Usage tracking completely disabled for local privacy.
// No network connections, telemetry, or analytics are sent.

/** True when telemetry must NOT be sent (always true). */
export function optedOut() {
  return true;
}

/**
 * Disabled: No-op for privacy.
 */
export async function track(event, properties = {}) {
  // Telemetry is permanently disabled.
  return;
}

export function __anonymousIdForTest() {
  return "disabled";
}

export function __resetTelemetryForTest() {}
