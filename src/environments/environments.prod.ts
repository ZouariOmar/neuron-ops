export const environments = {
  production: true,
  emailJsServiceId: process.env["EMAILJS_SERVICE_ID"]?.toString() || '',
  emailJsTemplateId: process.env["EMAILJS_TEMPLATE_ID"]?.toString() || '',
  emailJsPublicKey: process.env["EMAILJS_PUBLIC_KEY"]?.toString() || '',
  calendlyUsername: process.env["CALENDLY_USERNAME"]?.toString() || ''
};
