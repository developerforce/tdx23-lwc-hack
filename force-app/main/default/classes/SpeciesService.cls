public with sharing class SpeciesService {
  @AuraEnabled(cacheable=true)
  public static List<Species__c> getSpecies() {
    return [
      SELECT Id, Name, Description__c, Image_Name__c, Location__c
      FROM Species__c
      WITH USER_MODE
      ORDER BY Name
    ];
  }

  @AuraEnabled(cacheable=true)
  public static List<Species__c> getFilteredSpecies(String searchText) {
    String likeValue = '%' + searchText + '%';

    return [
      SELECT Id, Name, Description__c, Image_Name__c, Location__c
      FROM Species__c
      WHERE Name LIKE :likeValue
      OR Description__c LIKE :likeValue
      WITH USER_MODE
      ORDER BY Name
    ];
  }
}
