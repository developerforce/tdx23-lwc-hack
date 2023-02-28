import { LightningElement, wire } from "lwc";
import getSpecies from "@salesforce/apex/SpeciesService.getSpecies";

export default class SpeciesList extends LightningElement {
  @wire(getSpecies)
  species;
}
