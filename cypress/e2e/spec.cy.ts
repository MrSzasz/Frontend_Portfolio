describe("portfolio page test", () => {
  it("should visit and navigate trough the page", () => {
    cy.visit("/");

    // the nav should be in the page
    cy.get("nav").should("be.visible");

    // the nav should redirect to the section
    cy.get("nav > ul > li")
      .contains(/about me/i)
      .click();
    cy.get("#about").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    cy.get("nav > ul > li")
      .contains(/projects/i)
      .click();
    cy.get("#projects").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    cy.get("nav > ul > li")
      .contains(/contact/i)
      .click();
    cy.get("#contact").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    cy.get("nav > ul > li").contains(/hero/i).click();
    cy.get("#hero").should("be.visible");
  });

  it("should open the cv", () => {
    cy.visit("/");

    // it should go to the projects section
    cy.get("nav > ul > li").contains(/about/i).click();
    cy.get("#about").should("be.visible");

    cy.get("a")
      .contains(/download/i)
      .invoke("removeAttr", "target")
      .invoke("attr", "download", "")
      .click();

    cy.readFile("cypress/downloads/TomasLeandroLugoCV.pdf", "utf8");
    cy.task("readPdf", "cypress/downloads/TomasLeandroLugoCV.pdf").should(
      "contain",
      "TomasLugo"
    );
  });

  it("should navigate trough the main projects", () => {
    cy.visit("/");

    // it should go to the projects section
    cy.get("nav > ul > li")
      .contains(/projects/i)
      .click();
    cy.get("#projects").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    // it should open the first project
    cy.get("div[data-state='closed'][data-orientation='vertical']")
      .contains(/pagos/i)
      .click();
    cy.get("p")
      .contains(/demo page/i)
      .should("be.visible");

    cy.get("div[data-state='open'][data-orientation='vertical']")
      .contains(/pagos/i)
      .click();

    // it should open the second project
    cy.get("div[data-state='closed'][data-orientation='vertical']")
      .contains(/job vault/i)
      .click();
    cy.get("p")
      .contains(/Easily manage job applications and statuses/i)
      .should("be.visible");

    cy.get('a[data-interactive="true"]').should("be.visible");
  });

  it("should navigate trough all the projects", () => {
    cy.visit("/");

    // it should go to the projects section
    cy.get("nav > ul > li")
      .contains(/projects/i)
      .click();
    cy.get("#projects").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    // it should open the first project
    cy.get("button")
      .contains(/see all/i)
      .click();
    cy.get("p")
      .contains(/demo page/i)
      .should("be.visible");
  });

  it("should show the buttons for copy and send", () => {
    cy.visit("/");

    // it should go to the contact section
    cy.get("nav > ul > li")
      .contains(/contact/i)
      .click();
    cy.get("#contact").should("be.visible");
    cy.get("nav > ul > li").contains(/hero/i);

    // it should show the buttons
    cy.get("#contact > .flex-col > :nth-child(1)").trigger("mouseover");

    // it should copy the email
    cy.get('svg[data-copy="tomasleandrolugo@gmail.com"]')
      .click()
      .then(() => {
        cy.window().then((win) => {
          win.navigator.clipboard.readText().then((text) => {
            expect(text).to.eq("tomasleandrolugo@gmail.com");
          });
        });
      });

    // it should open LinkedIn page
    cy.get('a[href="https://www.linkedin.com/in/lugotomasleandro/"]')
      .invoke("removeAttr", "target")
      .click();

    cy.location("pathname").should("contain", /linkedin/i);
  });
});
