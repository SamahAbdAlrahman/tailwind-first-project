/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#7E3AF2', 
        secondaryText: '#6B7280',  
        mainText: '#111928', 
        greybg: '#E5E7EB',
        secBg:'#F9FAFB',
        
      },
      // fontFamily: {
      //   Inter: ['Inter', 'sans-serif'],
      // },
      
    },
  },
  plugins: [],
}

