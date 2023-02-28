#!/bin/bash
sfdx force:source:deploy -p force-app/main/default
sfdx force:user:permset:assign -n Plants_App
sfdx force:data:tree:import -p ./data/data-plan.json