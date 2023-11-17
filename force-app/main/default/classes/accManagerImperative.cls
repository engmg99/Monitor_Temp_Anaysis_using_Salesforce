public with sharing class accManagerImperative {
    @AuraEnabled
    public static List<Account> getAccount(Integer numberOfAccount){
        try {
            return [Select Id,Name,Phone from Account Limit :numberOfAccount];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}