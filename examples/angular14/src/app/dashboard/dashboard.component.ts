import "@vizzly/dashboard-webcomponent";

// @ts-ignore
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

// @ts-ignore
export class VizzlyDashboard implements AfterViewInit {
  // @ts-ignore
  @ViewChild("dashboard") dashboardRef: ElementRef<VizzlyDashboard>;
 
  ngAfterViewInit() {
    this.dashboardRef.nativeElement.render({
      // Pass your props here
      queryEngineEndpoint: 'http://0.0.0.0:8000',
      vizzlyApiHost: 'http://0.0.0.0:7080',
      identity: async () => {
        return {
          "dashboardAccessToken": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ijh5eFpjeUQzRTZBWm1TYUVSWi1kblE4TnQtbTJ2LWhJQktrbTJ2eDQyd0kifQ.eyJhY2Nlc3NUeXBlIjoic3RhbmRhcmQiLCJvcmdhbmlzYXRpb25JZCI6Im9yZ183ZTU4ZjU2Y2VmZjg0ZjgwYmM1MjliNTdmODAyZDYzOCIsInVzZXJSZWZlcmVuY2UiOiJ1c2VyX2VkaXRvciAtIHNlbGYtaG9zdGVkIiwiZXhwaXJlcyI6IjIwMjMtMDgtMjJUMTc6NTc6MDcuMzYzWiJ9.DTo-FCZ-spbT4eT9Ux4pj0gy-Xyz8O_x7xxt44RiQtEL8rzL82jzxIGDYelmRx-TGSsA2b684aDVNi54e-i-2g",
          "dataAccessToken": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ijh5eFpjeUQzRTZBWm1TYUVSWi1kblE4TnQtbTJ2LWhJQktrbTJ2eDQyd0kifQ.eyJkYXRhU2V0SWRzIjoiKiIsInNlY3VyZUZpbHRlcnMiOnsic2YiOlt7ImZpZWxkIjoic2Rmc2Rmc2RmIiwib3AiOiI9IiwidmFsdWUiOjN9XX0sImV4cGlyZXMiOiIyMDIzLTA4LTIyVDE3OjU3OjA3LjM1M1oifQ.QXEaqycRm8gxrBh1byF0SZlRoMhIVjIjZFsXEnQbJQrtzlUQS1y9om6VFzIbbkOB778k8yGSuC3d7kdkTtKiiQ",
          "queryEngineAccessToken": "eyJhbGciOiJFUzI1NiIsImtpZCI6Ijh5eFpjeUQzRTZBWm1TYUVSWi1kblE4TnQtbTJ2LWhJQktrbTJ2eDQyd0kifQ.eyJhbGxvd0RhdGFiYXNlU2NoZW1hQWNjZXNzIjp0cnVlLCJhbGxvd0RhdGFQcmV2aWV3QWNjZXNzIjpmYWxzZSwiZXhwaXJlcyI6IjIwMjMtMDgtMjJUMTc6NTc6MDcuMzY0WiJ9.nnIeyNOAw35epVj0vT1fHneim9oyTUxqHsnf4ThhKt55R5uCNw3jsCptAeGbkH3kygJJ1AxZRoL0Xh0AE18sYQ"
        };
      }
    });
  }
}