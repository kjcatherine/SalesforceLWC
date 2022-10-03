public with sharing class AccountController {
    //If performing a get operation where youre just getting some data, always add cachable
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }
}