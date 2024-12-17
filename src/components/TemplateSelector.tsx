import { useState } from 'react';
import './TemplateSelector.css';

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  mappings: {
    from: string;
    to: string;
  }[];
}

const PRESET_TEMPLATES: Template[] = [
  {
    id: 'sports-retail',
    name: 'Sports Retail',
    description: 'Optimized for athletic and sports equipment stores',
    category: 'Retail',
    mappings: [
      { from: 'Products', to: 'Gear' },
      { from: 'Customer', to: 'Athlete' },
      { from: 'Store', to: 'Pro Shop' },
    ]
  },
  {
    id: 'tech-b2b',
    name: 'Tech B2B',
    description: 'Tailored for technology and SaaS companies',
    category: 'Technology',
    mappings: [
      { from: 'Product', to: 'Solution' },
      { from: 'Features', to: 'Capabilities' },
      { from: 'Price', to: 'Investment' },
    ]
  },
  // Add more templates as needed
];

export function TemplateSelector() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    // TODO: Implement template application logic
  };

  return (
    <div className="template-selector">
      <div className="template-grid">
        {PRESET_TEMPLATES.map((template) => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <h3>{template.name}</h3>
            <p className="template-description">{template.description}</p>
            <span className="template-category">{template.category}</span>
            
            <div className="template-preview">
              <h4>Sample Mappings:</h4>
              <ul>
                {template.mappings.slice(0, 3).map((mapping, index) => (
                  <li key={index}>
                    {mapping.from} → {mapping.to}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 