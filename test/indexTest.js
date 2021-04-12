describe("index.html", () => {
  describe("after index.js is processed", () => {
    it("no longer has DOM node 'main#main'", () => {
      expect(document.querySelector('main'), "Make sure you remove the <main> with id 'main'").to.not.exist
    });

    it("has a 'newHeader' variable that points to node 'h1'", () => {
      expect(newHeader.nodeName, "Make sure you create an <h1>").eql('H1')
    });

    it("has a 'newHeader' variable that points to node 'h1#victory'", () => {
      expect(newHeader.id, "Make sure you add an id 'victory' to your <h1> tag").eql('victory')
    });

    it("has a 'newHeader' variable that points to node 'h1#victory' with \"YOUR-NAME is the champion\" inside", () => {
      expect(newHeader.innerHTML, "Make sure you create an <h1> with id 'victory' with a sweet message in it").to.include("is the champion");
    });

  });
})
