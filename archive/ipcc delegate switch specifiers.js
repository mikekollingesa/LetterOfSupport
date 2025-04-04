function hideQuickForm(executionContext) {
	var formContext = executionContext.getFormContext();

	var Value = formContext.getAttribute(“esamk_ipcdelegate”).getValue();

	if (Value == 1) {
		//get the quick view control
		var quickViewControl = formContext.ui.quickForms.get("QuickviewControlSpecifiers");

		//hide the quick view
		quickViewControl.setVisible(false);
	}

	if (Value == 0) {
		//get the quick view control
		var quickViewControl = formContext.ui.quickForms.get("QuickviewControlSpecifiers");

		//hide the quick view
		quickViewControl.setVisible(true);
	}
