// @ts-nocheck

import "@vizzly/dashboard-webcomponent";
import type { VizzlyDashboard } from "@vizzly/dashboard-webcomponent";
import { Component, ElementRef, AfterViewInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-dashboard",
  template: `
   <vizzly-dashboard ngModel #dashboard>
  `,
})

export class VizzlyDashboard implements AfterViewInit {
  @ViewChild("dashboard") dashboardRef: ElementRef<VizzlyDashboard>;

  ngAfterViewInit() {
    this.dashboardRef.nativeElement.render({
      // Pass your props here
      parentDashboardId: "dsh_9cbe8abaa11b4f839ca1018bd4aabb01",
      queryEngineEndpoint:"https://example.vizzly.co/query-engine",
      identity: getIdentity(),
  })}
}

export function getIdentity() {
  return async () => {
    const response = await fetch(
      'https://app.vizzly.co/api/doc-examples-identity-callback'
    );
    if (response.ok) {
      const responseBody = await response.json();
      return responseBody.accessTokens;
    }
    return null;
  };
}
