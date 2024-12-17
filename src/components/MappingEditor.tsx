import { useState, useEffect } from 'react';
import './MappingEditor.css';

interface Mapping {
  id: string;
  from: string;
  to: string;
  enabled: boolean;
}

export function MappingEditor() {
  const [mappings, setMappings] = useState<Mapping[]>([
    { id: '1', from: 'Cotton Drawstring', to: 'Cotton Comfort Drawstring', enabled: true },
    { id: '2', from: 'Customer', to: 'Athlete', enabled: true },
    { id: '3', from: 'Drawstring', to: 'Comfort Drawstring', enabled: true },
    { id: '4', from: 'Hat', to: 'Performance Cap', enabled: true },
    { id: '5', from: 'Inventory', to: 'Athletic Gear', enabled: true },
    { id: '6', from: 'Joggers', to: 'Performance Joggers', enabled: true },
  ]);
  const [newFrom, setNewFrom] = useState('');
  const [newTo, setNewTo] = useState('');

  const deleteMapping = (id: string) => {
    setMappings(mappings.filter(mapping => mapping.id !== id));
  };

  const updateMapping = (id: string, field: 'from' | 'to', value: string) => {
    setMappings(mappings.map(mapping => 
      mapping.id === id ? { ...mapping, [field]: value } : mapping
    ));
  };

  // Auto-add mapping when both fields have content
  useEffect(() => {
    if (newFrom && newTo) {
      const timer = setTimeout(() => {
        setMappings(prev => [
          ...prev,
          {
            id: Date.now().toString(),
            from: newFrom,
            to: newTo,
            enabled: true,
          },
        ]);
        setNewFrom('');
        setNewTo('');
      }, 500); // Small delay to prevent rapid additions

      return () => clearTimeout(timer);
    }
  }, [newFrom, newTo]);

  return (
    <div className="mapping-editor">
      <div className="mapping-form">
        <input
          type="text"
          value={newFrom}
          onChange={(e) => setNewFrom(e.target.value)}
          placeholder="Enter original text"
          className="mapping-input"
        />
        <span className="mapping-arrow">→</span>
        <input
          type="text"
          value={newTo}
          onChange={(e) => setNewTo(e.target.value)}
          placeholder="Enter replacement"
          className="mapping-input"
        />
      </div>

      <div className="mapping-list">
        {mappings.map(mapping => (
          <div key={mapping.id} className="mapping-item">
            <div className="mapping-text">
              <input
                type="text"
                value={mapping.from}
                onChange={(e) => updateMapping(mapping.id, 'from', e.target.value)}
                className="mapping-field"
              />
              <span className="mapping-arrow">→</span>
              <input
                type="text"
                value={mapping.to}
                onChange={(e) => updateMapping(mapping.id, 'to', e.target.value)}
                className="mapping-field"
              />
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
    </div>
  );
} 