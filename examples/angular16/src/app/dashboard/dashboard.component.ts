import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

interface Dashboard {
  render: (config: any) => void;
}
declare var dashboard: Dashboard;

@Component({
  selector: 'app-dashboard',
  standalone: true,
  template: `<vizzly-dashboard id="dashboard"></vizzly-dashboard>`,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VizzlyDashboard implements OnInit {
  ngOnInit() {
    dashboard.render({
      queryEngineEndpoint:
        '<< Your query engine endpoint - e.g http://0.0.0.0:8000 >>',
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
      },
    });
  }
}
