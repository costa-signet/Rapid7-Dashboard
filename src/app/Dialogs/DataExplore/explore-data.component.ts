import { Component } from '@angular/core';
import { Data } from '@angular/router';

const DATA: Data[] = [
    {name: "Solution", type: "object"},
    {name: "Vulnerability ID", type: "object"},
    {name: "Vulnerability Title", type: "object"},
    {name: "CVSS2 Score", type: "float64"},
    {name: "CVSS3 Score", type: "float64"},
    {name: "Risk Score", type: "int64"},
    {name: "Vulnerability Publish Date", type: "object"},
    {name: "Vulnerability First Discovered Date", type: "object"},
    {name: "Asset Name", type: "object"},
    {name: "IP Address", type: "object"},
    {name: "Asset Type", type: "object"},
    {name: "MAC Address", type: "object"},
    {name: "Containers", type: "int64"},
    {name: "Assessment Data Source", type: "object"},
    {name: "Last Data Collection", type: "object"},
    {name: "Credentials Succeeded", type: "object"},
    {name: "Remediated", type: "bool"},
    {name: "Proof", type: "object"},
    {name: "Key", type: "object"},
    {name: "Port", type: "float64"},
    {name: "Protocol", type: "float64"},
    {name: "Operating System Certainty", type: "float64"},
    {name: "Operating System Vendor", type: "object"},
    {name: "Operating System Product", type: "object"},
    {name: "Operating System Version", type: "object"},
    {name: "Deleted Time", type: "float64"}

  ];
@Component({
  selector: 'app-data-explore-display',
  templateUrl: './explore-data.component.html'
})

export class ExploreDataComponent{ 
    displayedColumns: string[] = ['name', 'type'];
    dataSource = DATA;
}