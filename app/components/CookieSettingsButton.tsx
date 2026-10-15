"use client";

export const OPEN_COOKIE_SETTINGS_EVENT = "pmg:open-cookie-settings";

export default function CookieSettingsButton({
  className,
}: {
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Nastavenia cookies
    </button>
  );
}
