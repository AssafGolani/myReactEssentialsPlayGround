import { useState } from 'react';
import { EXAMPLES } from '../data';
import TabButton from './TabButton';

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton){
      // selectedButton => 'Component', 'JSX', 'Props', or 'State'
      setSelectedTopic(selectedButton);
  }

    return (
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
    )
}