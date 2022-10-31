public with sharing class pdfPageController {
    public String pdfText{get;set;}
    public pdfPageController() {
        pdftext = String.escapeSingleQuotes(
            Apexpages.currentPage().getParameters().get('pdfText')
        )

    }
}