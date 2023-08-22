// @ts-nocheck

import "@vizzly/dashboard-webcomponent";
import type { VizzlyDashboard } from "@vizzly/dashboard-webcomponent";
import { Component, ElementRef, AfterViewInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
 
@Component({
  selector: "app-dashboard",
  standalone: true,
  template: `
   <vizzly-dashboard ngModel #dashboard>
  `,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class VizzlyDashboard implements AfterViewInit {
  @ViewChild("dashboard") dashboardRef: ElementRef<VizzlyDashboard>;

  ngAfterViewInit() {
    this.dashboardRef.nativeElement.render({
      // Pass your props here
      queryEngineEndpoint: '<< Your query engine endpoint - e.g http://0.0.0.0:8000 >>',
      identity: async () => {

        /*
        Implement the Vizzly identity logic, or use the CLI to generate test access tokens.

        https://docs.vizzly.co/cli#access-tokens
        https://docs.vizzly.co/dashboard/properties/identity
        https://docs.vizzly.co/concepts/identity-config

        return {
            "dashboardAccessToken": "...",
            "dataAccessToken": "...",
            "queryEngineAccessToken": "..."
          };
        */

        return null;
      }
    });
  }
}