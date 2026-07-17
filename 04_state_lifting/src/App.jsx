import Panel from './components/Panel';
import { useState } from 'react';

const App = () => {
  // 1. Fixed the variable names to match what you use below
  // 2. Initialized with a number (0) instead of a string ('0')
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Hello World</h2>

      {/* Removed the semicolons from the ends of the props */}
      <Panel
        title="India"
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        <p>India is a large country in South Asia.</p>
      </Panel>
      
      <Panel 
        title="Canada"
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        <p>Canada is a large country in North America.</p>
      </Panel>
    </div>
  );
};

export default App;