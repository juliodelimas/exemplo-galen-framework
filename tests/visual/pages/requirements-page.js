this.RequirementsPage = $page("Requirements", {
    requirementField: "#requirement",
    requirementButton: "#nxt1",
    fillRequirements: function (requirement) {
        this.requirementField.typeText(requirement);
        this.requirementButton.click();
        GalenPages.sleep(800); // Tempo fixo de transição
    }
});
