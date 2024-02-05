import { useState } from 'react';
import {CORE_CONCEPTS, EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';

function App() {

  const [selectedTopic, setSelectedTopic] = useState('components');
  


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
            <CoreConcept {...CORE_CONCEPTS[0] }/>
            <CoreConcept {...CORE_CONCEPTS[1] }/>
            <CoreConcept {...CORE_CONCEPTS[2] } />
            <CoreConcept {...CORE_CONCEPTS[3] }/>
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
