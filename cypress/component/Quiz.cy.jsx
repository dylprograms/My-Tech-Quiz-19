import Quiz from "../../client/src/components/Quiz"

describe('Quiz Component Tests', () => {
  beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
    });

  it('program displays first question', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    });

  it('complete quiz by answering questions', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('does quiz restart once complete', () => {
    cy.mount(<Quiz />);
    cy.get('button').contains('Start Quiz').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('Take New Quiz').click();
  });
});