import { useState } from 'react';

interface Mapping {
  id: string;
  from: string;
  to: string;
  enabled: boolean;
}

export function MappingEditor() {
  const [mappings, setMappings] = useState<Mapping[]>([
    // Example mappings matching the screenshot
    { id: '1', from: 'Cotton Drawstring', to: 'Cotton Comfort Drawstring', enabled: true },
    { id: '2', from: 'Customer', to: 'Athlete', enabled: true },
    { id: '3', from: 'Drawstring', to: 'Comfort Drawstring', enabled: true },
    { id: '4', from: 'Hat', to: 'Performance Cap', enabled: true },
    { id: '5', from: 'Inventory', to: 'Athletic Gear', enabled: true },
    { id: '6', from: 'Joggers', to: 'Performance Joggers', enabled: true },
  ]);

  const deleteMapping = (id: string) => {
    setMappings(mappings.filter(mapping => mapping.id !== id));
  };

  return (
    <div className="mapping-list">
      {mappings.map(mapping => (
        <div key={mapping.id} className="mapping-item">
          <div className="mapping-text">
            <span className="mapping-from">{mapping.from}</span>
            <span className="mapping-arrow">→</span>
            <span className="mapping-to">{mapping.to}</span>
          </div>
          <button
            onClick={() => deleteMapping(mapping.id)}
            className="mapping-delete"
            aria-label="Delete mapping"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
} 