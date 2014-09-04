/// <reference path="jquery.d.ts" />
/// <reference path="kendo.all.d.ts" />

$(function () {

	var data = [
	    "Angular",
	    "Kendo UI",
	    "TypeScript"
	];

	var input = document.createElement("input");
	input.id = "technologies";
	var technologies = document.body.appendChild(input);

	<kendo.ui.AutoComplete>$(technologies).kendoAutoComplete({
        dataSource: data,
        filter: "startswith",
        placeholder: "Select technology...",
        separator: ", "
    }).data("kendoAutoComplete");
});