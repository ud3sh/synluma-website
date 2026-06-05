import type { Analytics } from "firebase/analytics";

let analyticsPromise: Promise<Analytics | null> | null = null;

async function loadAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined") return null;
  try {
    const [{ initializeApp }, { getAnalytics, isSupported }, { firebaseConfig }] = await Promise.all([
      import("firebase/app"),
      import("firebase/analytics"),
      import("./firebase"),
    ]);
    const supported = await isSupported();
    if (!supported) return null;
    const app = initializeApp(firebaseConfig);
    return getAnalytics(app);
  } catch {
    return null;
  }
}

export function initAnalytics() {
  if (!analyticsPromise) analyticsPromise = loadAnalytics();
  return analyticsPromise;
}

export async function trackEvent(eventName: string, params?: Record<string, unknown>) {
  const analytics = await initAnalytics();
  if (!analytics) return;
  try {
    const { logEvent } = await import("firebase/analytics");
    logEvent(analytics, eventName, params as Record<string, string | number | boolean | undefined>);
  } catch {
    // swallow — analytics is fire-and-forget
  }
}

export function trackPageView(path: string, title?: string) {
  return trackEvent("page_view", { page_path: path, page_title: title ?? document.title });
}
