// Google Analytics 4 and Core Web Vitals tracking
export const GA_TRACKING_ID = "G-XXXXXXXXXX";

// Google Analytics
export const gtag = (...args: any[]) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag(...args);
  }
};

export const pageview = (url: string) => {
  gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Core Web Vitals
export const reportWebVitals = (metric: any) => {
  // Send to Google Analytics
  gtag("event", metric.name, {
    event_category: "Web Vitals",
    event_label: metric.id,
    value: Math.round(
      metric.name === "CLS" ? metric.value * 1000 : metric.value
    ),
    non_interaction: true,
  });

  // Send to custom analytics endpoint
  if (
    typeof window !== "undefined" &&
    window.location.hostname !== "localhost"
  ) {
    fetch("/api/analytics/web-vitals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metric),
    }).catch(console.error);
  }
};

// SEO Performance tracking
export const trackSEOPerformance = (
  page: string,
  metrics: {
    loadTime: number;
    domContentLoaded: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    cumulativeLayoutShift: number;
    firstInputDelay: number;
  }
) => {
  gtag("event", "seo_performance", {
    event_category: "Performance",
    event_label: page,
    custom_parameter_1: metrics.loadTime,
    custom_parameter_2: metrics.domContentLoaded,
    custom_parameter_3: metrics.firstContentfulPaint,
    custom_parameter_4: metrics.largestContentfulPaint,
    custom_parameter_5: metrics.cumulativeLayoutShift,
    custom_parameter_6: metrics.firstInputDelay,
  });
};

// User engagement tracking
export const trackEngagement = (
  action: string,
  section: string,
  value?: string
) => {
  gtag("event", action, {
    event_category: "User Engagement",
    event_label: section,
    value: value,
  });
};

// Form submission tracking
export const trackFormSubmission = (formName: string, success: boolean) => {
  gtag("event", success ? "form_submit_success" : "form_submit_error", {
    event_category: "Form",
    event_label: formName,
  });
};

// Donation tracking
export const trackDonation = (amount: number, method: string) => {
  gtag("event", "purchase", {
    transaction_id: `donation_${Date.now()}`,
    value: amount,
    currency: "USD",
    event_category: "Donation",
    event_label: method,
  });
};

// Volunteer signup tracking
export const trackVolunteerSignup = (program: string) => {
  gtag("event", "sign_up", {
    event_category: "Volunteer",
    event_label: program,
  });
};
