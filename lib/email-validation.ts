import { EMAIL_BLOCKLIST } from "../constants";

export function isBlockedEmail(email: string): boolean {
  const normalized = email.trim().toLowerCase();
  const atIndex = normalized.lastIndexOf("@");

  if (atIndex <= 0 || atIndex === normalized.length - 1) {
    return true;
  }

  const address = normalized;
  const domain = normalized.slice(atIndex + 1);

  if (EMAIL_BLOCKLIST.addresses.includes(address)) {
    return true;
  }

  return EMAIL_BLOCKLIST.domains.some(
    (blocked) => domain === blocked || domain.endsWith(`.${blocked}`)
  );
}
