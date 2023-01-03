module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      lightHeaderColor: '#130c2b',
      lightHeaderBgColor: '#3f8cd9',
      darkHeaderColor: '#EDF5E1',
      darkHeaderBgColor: '#05386B',
      landingPageButton: '#221e6f'
    },
    extend: {
      backgroundImage: {
        'landing-page':
          "url('https://raw.githubusercontent.com/frontend-joe/es6-parallax/main/parallax-2/bg.webp')"
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive']
      },
      animation: {
        wiggle: 'run ease 3s'
      }
    }
  },
  plugins: []
};
