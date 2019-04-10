function main(metadataService, dataService, cacheService, $q) {
    let workspaceInitialization = function(appMetadata) {
        metadataService.configureLookup(
            "Create-new-customer-1",
            "DynamicDetail_CustGroup", 
            {
                lookupPage: "All-customer-groups",
                valueField: "Grid_CustGroup",
                displayField: "Grid_Name",
                showLookupPage: true
            }
        );

        metadataService.hideNavigation("All-customer-groups");
    };

    let pageInitialization = function(pageMetadata, context) {

    };

    let actionInitialization = function(taskMetadata, context, taskData) {

    };

    return {
        appInit: workspaceInitialization,
        pageInit: pageInitialization,
        taskInit: actionInitialization
    };
}