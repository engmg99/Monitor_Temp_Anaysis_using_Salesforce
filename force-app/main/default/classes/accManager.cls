public with sharing class accManager {
    /* To make a class available for LWC make sure it is either public or global.
And within that class you need to declare a method with Aura enable annotation so that that method
can be called from Lighting Web Component.*/

/*we are using wire service and we need to make sure that our method is
cacheable because wire service can only make a call to cacheable methods.
Let's make it cacheable = true. */
@AuraEnabled(cacheable=true)
public static List<Account> getAccount(){
    try {
        return [Select Id,Name,Phone from Account Limit 10];
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
}
}