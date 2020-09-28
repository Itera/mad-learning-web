const STYLING_OPTIONS = {
  animations: [
    {
      name: 'fade-in',
      parameters: '0.3s ease-in',
      definition: `
        0% {
          opacity: 0;
        }
        100% {
          opacity: 100%;
        }
      `,
    },
  ],
};

export type StylingOptions = typeof STYLING_OPTIONS;

export default STYLING_OPTIONS;
