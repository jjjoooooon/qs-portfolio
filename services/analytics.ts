// Simple privacy-friendly analytics stub
// In a real app, this might connect to plausible.io or Google Analytics

const analyticsService = {
  trackPageView: (path: string) => {
    console.log(`[Analytics] Page View: ${path}`);
    // Real implementation would go here
  },
  
  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    console.log(`[Analytics] Event: ${eventName}`, properties);
    // Real implementation would go here
  }
};

export default analyticsService;