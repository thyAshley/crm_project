/// <reference types="cypress" />

describe("<LoginForm/>", () => {
  it("Make sure the Login Form Renders the UI correctly", () => {
    cy.visit("/");
    cy.get("h1").contains("Login");
    cy.get("[name='email']").should("have.attr", "placeholder", "Enter Email");
    cy.get("[name='password']").should(
      "have.attr",
      "placeholder",
      "Enter Password"
    );
    cy.get("a")
      .contains(/forget/i)
      .click();
    cy.get("h1").contains("Reset");
    cy.get("[name='email']").should("have.attr", "placeholder", "Enter Email");
    cy.get("[name='password']").should("not.exist");
    cy.get("a").contains(/login/i).click();
    cy.get("h1").contains("Login");
    cy.get("[name='email']").should("have.attr", "placeholder", "Enter Email");
    cy.get("[name='password']").should(
      "have.attr",
      "placeholder",
      "Enter Password"
    );
  });
});
