public with sharing class AccountContact {
    @AuraEnabled(cacheable=true)
    public static List<Account> allAccountsWithContact(){
        return [SELECT Id, Name, Phone, Website, (SELECT Id, Name, Phone, Email FROM Contacts) FROM Account WHERE Id IN (SELECT AccountId FROM Contact) LIMIT 5];
    }
}

