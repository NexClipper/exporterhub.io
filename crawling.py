import requests, json
from urllib.request import urlopen

client_token = 'token 517d413e9c97d986ad0839084d9a2d2cf2dbd0f9'

githup_api = 'https://api.github.com'

header_params = {"Authorization": client_token}

response = requests.get(githup_api, headers=header_params)

if(response.status_code == 200):
    data = response.json()
    print(data['current_user_url'])
else:
    print("Error Code:" + response.status_code)
