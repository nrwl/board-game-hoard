describe('game review details', () => {
  beforeEach(() => cy.visit('/review/settlers-in-the-can'));

  it('should list reviews', () => {
    cy.contains('Settlers in the Can');
    cy.contains('Help your bug family');
    // Dummy text for reviews
    cy.contains('Lorem ipsum');
  });

  it('should have a form to add a review', () => {
    const reviewText = 'This is a new review at ' + new Date().getTime();
    cy.contains('label', 'Rating')
      .find('input')
      .type('3');
    cy.contains('label', 'Review')
      .find('textarea')
      .type(reviewText);
    cy.contains('button', 'Submit Review').click();

    cy.contains('label', 'Rating')
      .find('input')
      .should('have.value', '0');
    cy.contains('label', 'Review')
      .find('textarea')
      .should('have.value', '');

    cy.contains(reviewText);
  });
});
