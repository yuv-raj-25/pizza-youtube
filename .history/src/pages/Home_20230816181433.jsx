import React from 'react'

const Home = () => {
    return(
        import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
    )
  

}

export default Home