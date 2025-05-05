function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}

export { formatDate };

import { parse } from 'bibtex-parse';
import { CiteProc } from 'citeproc';
import fs from 'fs';

// 1. Load your BibTeX file
const bibtex = fs.readFileSync('./public/assets/publications.bib', 'utf-8');

// 2. Parse BibTeX to CSL-JSON
export function getCitations() {
  const entries = parse(bibtex);
  return Object.values(entries);
}

// 3. Initialize Citeproc
export function formatCitations(style = 'apa-cv') {
  const citations = getCitations();
  const styleFile = fs.readFileSync(`./public/csl/${style}.csl`, 'utf-8');
  
  const citeproc = new CiteProc({
    retrieveLocale: () => '',
    retrieveItem: (id) => citations.find(item => item.id === id)
  });

  citeproc.updateItems(citations.map(item => item.id));
  citeproc.setStyle(styleFile);

  return citations.map(item => ({
    id: item.id,
    citation: citeproc.makeBibliography()[1].join('')
  }));
}