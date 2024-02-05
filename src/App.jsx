import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {

  const [selectedTopic, setSelectedTopic] = useState();
  


  function handleSelect(selectedButton){
    // selectedButton => 'Component', 'JSX', 'Props', or 'State'
    setSelectedTopic(selectedButton);
}

  return (
    <div>
    <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
          {CORE_CONCEPTS.map((conceptItem, index) => (
            <CoreConcept key={index} {...conceptItem} />
          ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            onSelect={() => handleSelect('components')}
            isSelected={selectedTopic === 'components'}
            >Component</TabButton>
            <TabButton 
            onSelect={() => handleSelect('jsx')}
            isSelected={selectedTopic === 'jsx'}
            >JSX</TabButton>
            <TabButton 
            onSelect={() => handleSelect('props')}
            isSelected={selectedTopic === 'props'}
            >Props</TabButton>
            <TabButton 
            onSelect={() => handleSelect('state')}
            isSelected={selectedTopic === 'state'}
            >State</TabButton>
          </menu>
          {!selectedTopic ? <p>Click on a tab to see an example</p> : (
           <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )}
        </section>
      </main>
    </div>
  );
}

export default App;
