this.InputsPage = $page("Inputs", {
    inputsField: "#inputs",
    inputsAdd: "#addInput",
    inputsButton: "#nxt2",
    addInput: function (input) {
        this.inputsField.typeText(input);
        this.inputsAdd.click();
    },
    next: function () {
        this.inputsButton.click();
    }
});
