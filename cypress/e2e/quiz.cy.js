
describe('Quiz Component', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('program displays first question', () => {
      cy.get('button').contains('Start Quiz').click();
      });
  
    it('complete quiz by answering questions', () => {
      cy.get('button').contains('Start Quiz').click();

      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click();
      }
      cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
    });
  
    it('does quiz restart once complete', () => {
      cy.get('button').contains('Start Quiz').click();
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click();
      }
      cy.get('button').contains('Take New Quiz').click();
    });
  });

