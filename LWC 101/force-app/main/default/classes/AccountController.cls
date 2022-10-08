public with sharing class AccountController {
    //If performing a get operation where youre just getting some data, always add cachable
   @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        return [SELECT Id, Name, Type, Industry from Account WHERE Type!=Null LIMIT 5];
    }

    //With parameter demo
    // @AuraEnabled(cacheable=true)
    // public static List<Account> filterAccountTypeType(String type){
    //     return [SELECT Id, Name, Type, Industry from Account where Type=:type LIMIT 5];
    // }
}