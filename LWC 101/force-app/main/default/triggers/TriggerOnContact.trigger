trigger TriggerOnContact on Contact (after insert, after update) {
    List<Contact> ContactList = new List<Contact>();
    try{
        ContactList = [SELECT ID, NAME, PHONE, MobilePhone, HomePhone, OtherPhone FROM CONTACT where ID IN :Trigger.New];
        switch on trigger.operationType{
            when AFTER_INSERT, AFTER_UPDATE{
                if(ContactPhNoFormatter.isFirstTime){
                    ContactPhNoFormatter.isFirstTime = false;
                    ContactPhNoFormatter.mobilevalidation(ContactList);                    
                }
            }
        }        
    } catch (Exception e){
        System.debug(e.getMessage());
    }
 }