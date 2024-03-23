import { getHeaderTextContent } from '../../../src/custom-elements/custom-header/custom-header.utils';

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500');
  });

  it('should show the header text', () => {
    cy.get('custom-header')
      .should('exist')
      .shadow()
      .find('h1')
      .should('contain.text', getHeaderTextContent());
  });
});
