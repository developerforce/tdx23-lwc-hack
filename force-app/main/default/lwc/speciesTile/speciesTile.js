import { LightningElement, api } from "lwc";
import { NavigationMixin } from "lightning/navigation";
import SPECIES_IMAGES from "@salesforce/resourceUrl/species";

export default class SpeciesTile extends NavigationMixin(LightningElement) {
  @api singleSpecies;

  get showIndoorsIcon() {
    return this.singleSpecies.Location__c?.includes("Indoors");
  }

  get showOutdoorsIcon() {
    return this.singleSpecies.Location__c?.includes("Outdoors");
  }

  get imageURL() {
    return `${SPECIES_IMAGES}/images/${this.singleSpecies.Image_Name__c}`;
  }

  handleViewDetails() {
    this[NavigationMixin.Navigate]({
      type: "standard__recordPage",
      attributes: {
        recordId: this.singleSpecies.Id,
        actionName: "view"
      }
    });
  }
}
