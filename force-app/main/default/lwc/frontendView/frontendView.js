import { LightningElement } from 'lwc';

export default class FrontendView extends LightningElement {

    jsonData = "{\"conditions\":\"Account_Type__c <> 'Owner'\",\"entityId\":\"a0r3J000000jfQsQAI\",\"hideSection\":false,\"objectName\":\"AA360__KPI2__c\",\"order\":0,\"relatedEntities\":[{\"entityId\":\"a0r3J000000jfR1QAI\",\"hideSection\":true,\"objectName\":\"AA360__KPI2__c\",\"order\":0,\"relatedEntities\":[{\"entityId\":\"a0r3J000000jfRBQAY\"},{\"entityId\":\"a0r3J000000jfRGQAY\"}],\"relationshipName\":\"AA360__KPI2s__r\",\"sectionName\":\"Location\",\"ariaExpanded\":\"true\",\"ariaSectionLevel\":3,\"ariaRecordLevel\":4,\"records\":[{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001in2wQAA\"},\"AA360__KPI_Accounts_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001in2wQAA\",\"Name\":\"JM Cuban Cafe\"}],\"recordIds\":[\"a0b3J000001in2wQAA\"],\"isRecords\":true,\"isRelatedEntities\":true},{\"entityId\":\"a0r3J000000jfQwQAI\",\"hideSection\":false,\"objectName\":\"AA360__KPI2__c\",\"order\":1,\"relatedEntities\":[],\"relationshipName\":\"AA360__KPI2s3__r\",\"sectionName\":\"Service\",\"ariaExpanded\":\"true\",\"ariaSectionLevel\":3,\"ariaRecordLevel\":4,\"records\":[{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001ilnpQAA\"},\"AA360__KPI_Services_List_of__c\":\"a0b3J000001iltjQAA\",\"Id\":\"a0b3J000001ilnpQAA\",\"Name\":\"JHS North EVS\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001iltmQAA\"},\"AA360__KPI_Services_List_of__c\":\"a0b3J000001iltjQAA\",\"Id\":\"a0b3J000001iltmQAA\",\"Name\":\"JHS North FS\"}],\"recordIds\":[\"a0b3J000001ilnpQAA\",\"a0b3J000001iltmQAA\"],\"isRecords\":true,\"isRelatedEntities\":false},{\"entityId\":\"a0r3J000000jfR6QAI\",\"hideSection\":false,\"objectName\":\"AA360__KPI2__c\",\"order\":2,\"relatedEntities\":[],\"relationshipName\":\"AA360__KPI2s2__r\",\"sectionName\":\"Category\",\"ariaExpanded\":\"true\",\"ariaSectionLevel\":3,\"ariaRecordLevel\":4,\"records\":[{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAoQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAoQAI\",\"Name\":\"JHS Mem - Labor\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imApQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imApQAI\",\"Name\":\"JHS Mem - Other I\/P and O\/P Meals\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAqQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAqQAI\",\"Name\":\"JHS Mem - Other Sales\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imArQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imArQAI\",\"Name\":\"JHS Mem - Retail Outlet\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAsQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAsQAI\",\"Name\":\"JHS Mem - Satisfaction\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAtQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAtQAI\",\"Name\":\"JHS Mem - SDX Meal Equivalents\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAuQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAuQAI\",\"Name\":\"JHS Mem - SDX Financials\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imAvQAI\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imAvQAI\",\"Name\":\"JHS Mem - Surveys & Audits\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imBGQAY\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imBGQAY\",\"Name\":\"JHS Mem - Client Volume\/Patient Dining\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imBHQAY\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imBHQAY\",\"Name\":\"JHS Mem - Clinical Nutrition\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imBIQAY\"},\"AA360__KPI_RT_Child_List_of__c\":\"a0b3J000001ilthQAA\",\"Id\":\"a0b3J000001imBIQAY\",\"Name\":\"JHS Mem - Department Costs\"}],\"recordIds\":[\"a0b3J000001imAoQAI\",\"a0b3J000001imApQAI\",\"a0b3J000001imAqQAI\",\"a0b3J000001imArQAI\",\"a0b3J000001imAsQAI\",\"a0b3J000001imAtQAI\",\"a0b3J000001imAuQAI\",\"a0b3J000001imAvQAI\",\"a0b3J000001imBGQAY\",\"a0b3J000001imBHQAY\",\"a0b3J000001imBIQAY\"],\"isRecords\":true,\"isRelatedEntities\":false}],\"relationshipName\":\"AA360__Scorecards__r\",\"sectionName\":\"Accounts\",\"ariaExpanded\":\"true\",\"ariaSectionLevel\":1,\"ariaRecordLevel\":2,\"records\":[{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001ilthQAA\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001ilthQAA\",\"Name\":\"JHS Mem\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001iltjQAA\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001iltjQAA\",\"Name\":\"JHS North\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001iltkQAA\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001iltkQAA\",\"Name\":\"JHS West\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001iltlQAA\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001iltlQAA\",\"Name\":\"JHS South\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001imvNQAQ\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001imvNQAQ\",\"Name\":\"JHS\",\"ariaExpanded\":\"true\"},{\"attributes\":{\"type\":\"AA360__KPI2__c\",\"url\":\"\/services\/data\/v56.0\/sobjects\/AA360__KPI2__c\/a0b3J000001in2wQAA\"},\"AA360__Team_List_of__c\":\"a0b3J000001imj5QAA\",\"Id\":\"a0b3J000001in2wQAA\",\"Name\":\"JM Cuban Cafe\"}],\"recordIds\":[\"a0b3J000001ilthQAA\",\"a0b3J000001iltjQAA\",\"a0b3J000001iltkQAA\",\"a0b3J000001iltlQAA\",\"a0b3J000001imvNQAQ\",\"a0b3J000001in2wQAA\"],\"isRecords\":true,\"isRelatedEntities\":true}";
    pasredData = JSON.parse(this.jsonData);

    recordsNameArr = [];
    recordsNameList = this.getRecordsNameList(this.pasredData);

    getRecordsNameList(dataList) {
        dataList.records.forEach(recObj => {
            this.recordsNameArr.push({
                label: recObj.Name,
                name: recObj.Name,
                expanded: recObj.ariaExpanded,
                items: this.getRelatedEntitiesList(dataList.relatedEntities, recObj.ariaExpanded)
            })
        })
    }

    getRelatedEntitiesList(entityList, isExpand) {
        let relatedEntitiesArr = [];
        entityList.forEach(entityObj => {
            relatedEntitiesArr.push({
                label: entityObj.sectionName,
                name: entityObj.sectionName,
                expanded: isExpand,
                items: this.getEntitiesRecordNameList(entityObj)
            })
        })
        return relatedEntitiesArr;
    }

    getEntitiesRecordNameList(entityRecList, isExpand) {
        let entityRecNameArr = [];
        entityRecList.records.forEach(entityRecObj => {
            let nestedArr = [];
            if (entityRecList.relatedEntities.length > 0 && entityRecList.relatedEntities[0].sectionName!=undefined) {
                nestedArr = this.getRelatedEntitiesList(entityRecList.relatedEntities);
                entityRecNameArr.push({
                    label: entityRecObj.Name,
                    name: entityRecObj.Name,
                    expanded: isExpand,
                    items: nestedArr
                })
            } else {
                entityRecNameArr.push({
                    label: entityRecObj.Name,
                    name: entityRecObj.Name,
                    expanded: isExpand,
                })
            }
        });
        return entityRecNameArr;
    }

    itemsFromJson = [
        {
            label: this.pasredData.sectionName,
            name: this.pasredData.sectionName,
            expanded: this.pasredData.ariaExpanded,
            items: this.recordsNameArr
        },
    ]
}