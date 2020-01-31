import { createElement } from "lwc";
import HelloWorld from "c/helloWorld";

const CONTACT_INPUT = {
  Id: "0031700000pJRRSAA4",
  Name: "Chris Hall",
  Title: "Developer",
  Phone: "07477411282"
};

describe("c-hello-world", () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });

  it("renders name, title, and phone number based on public property input", () => {
    // Create initial element
    const element = createElement("c-hello-world", {
      is: HelloWorld
    });
    // Set public property
    element.contact = CONTACT_INPUT;
    document.body.appendChild(element);

    // Select elements for validation
    const detailEls = element.shadowRoot.querySelectorAll("p");
    expect(detailEls[0].textContent).toBe(CONTACT_INPUT.Name);
    expect(detailEls[1].textContent).toBe(CONTACT_INPUT.Title);

    const phoneEl = element.shadowRoot.querySelector(
      "lightning-formatted-phone"
    );
    expect(phoneEl.value).toBe(CONTACT_INPUT.Phone);
  });
});
