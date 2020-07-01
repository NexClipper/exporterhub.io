import requests, json, base64
import parsecontent

def convert_markdown():

    # Parse Github Repository URL
    exporterReadme = parsecontent.getReadme('https://github.com/NexClipper/NexClipper')

    # Get Markdown base64 raw text
    # Decode base64 and utf-8
    decoded_text = base64.b64decode(exporterReadme.get('content')).decode('utf8')

    # Github Markdown render API (https://developer.github.com/v3/markdown/)
    readmeURL = 'https://api.github.com/markdown'

    data = {
        "text": decoded_text,
        "mode": "gfm"
        # Github Flavored Markdown Spec (https://github.github.com/gfm/)
    }
    res = requests.post(readmeURL, data=json.dumps(data))

    return res.text

convert_markdown()
