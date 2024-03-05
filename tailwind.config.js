/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '4rem': '4rem',
        '2rem': '2rem',
        '1rem': '1rem',
        '1.75rem':'1.75rem',
        '0.75rem':'0.75rem',
        '3rem':'3rem',
        '1.5rem':'1.5rem',
        '2.2rem':'2.2rem',
      },

      
      margin:{
        '0.4rem':'0.4rem',
        '0.19rem':'0.19rem',
        '30px':'30px',
      },
      borderRadius: {
         '10px' : '10px',
         '20px':'20px',
      },
      zIndex:{
        '1000':'1000',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        'shadow':'0px 22px 40px 6px rgba(0, 0, 0, 0.86)',
      },

      height:
      {
        '300px':'300px',
        '290px':'290px',
        '450px':'450px',
      },

      width:{
        '85':'85%',
        '300px':'300px',
        '200px':'200px',
        '150px':'150px',
      },
      flexGrow:{
        '0.8':'0.8',
      },
    
      spacing:{
        '120px':'120px',
      }

     

    },
  },
  plugins: [],
}