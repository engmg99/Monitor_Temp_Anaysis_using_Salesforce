public with sharing class ExpenseTrackerClass {
  @AuraEnabled(cacheable=true)
  public static List<String> getQuantityPicklist() {
    List<String> listObj = new List<String>();
    try {
      Schema.DescribeFieldResult objFieldDescribe = Expense_Item__c.Quantity_Unit__c.getDescribe();
      List<Schema.PicklistEntry> lstPickListValues = objFieldDescribe.getPickListValues();
      for (Schema.PicklistEntry objPickList : lstPickListValues) {
        listObj.add(objPickList.getValue());
        System.debug(
          'Value = ' +
          objPickList.getValue() +
          ' , Label = ' +
          objPickList.getLabel()
        );
      }
    } catch (Exception e) {
        listObj = null;
      throw new AuraHandledException(e.getMessage());
    }
    return listObj;
  }
}