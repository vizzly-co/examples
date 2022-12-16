from http.server import HTTPServer, BaseHTTPRequestHandler
import vizzly
import json

port=8007

# DO NOT STORE PRIVATE KEYS LIKE THIS IN YOUR APP!
# This is for example purposes only.
# Instead, you should store this securely.
# Generate it using https://docs.vizzly.co/security
PRIVATE_KEY = """
-----BEGIN EC PRIVATE KEY-----
MHcCAQEEIMd64JFtp7nbYIsws03dy6fBirhpio4aLwPdW/6Xg1WRoAoGCCqGSM49
AwEHoUQDQgAERbmqmGHbjlNMXjHZMJsoFsDnQDT7k4aV5wBdlXIKe0GH+FWSwawt
c8XAMURwSA7iAY2QzmzJ4RQ6ZKp1UVkpLA==
-----END EC PRIVATE KEY-----
"""

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_HEAD(self):
      self.send_response(200)
      self.send_header("Content-Type", "application/json")
      self.send_header("Access-Control-Allow-Origin", "*")
      self.end_headers()
      self.wfile.write(b"{}")

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()

        expiry_ttl_in_minutes=60
        access_type = 'editor'
        organisation_id = 'org_9817c013a80944cea5890df34ab792cd'
        dashboard_id='dsh_c0ef7773f0d249e49365ae535d02860b'
        user_reference = 'usr-123'
        data_set_ids = '*'
        secure_filters = {}

        dashboard_access_token = vizzly.sign_dashboard_access_token(expiry_ttl_in_minutes, access_type, organisation_id, dashboard_id, user_reference, PRIVATE_KEY)
        data_access_token = vizzly.sign_data_access_token(expiry_ttl_in_minutes, data_set_ids, secure_filters, PRIVATE_KEY)

        response_body = json.dumps({
          "dashboardAccessToken": dashboard_access_token,
          "dataAccessToken": data_access_token
        }).encode('gbk')

        self.wfile.write(response_body)

# DO NOT SERVE FROM HTTP!
# The tokens generated should never be sent over HTTP protocol.
# HTTPS must be used. This is just done for example purposes.
httpd = HTTPServer(('localhost', port), SimpleHTTPRequestHandler)
print(f'Listening on http://localhost:{port}!')
httpd.serve_forever()