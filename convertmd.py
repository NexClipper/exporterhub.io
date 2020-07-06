import requests, json, base64
import parsecontent


def convert_markdown(githubUrl):

    # Parse Github Repository URL
    exporterReadme = parsecontent.getReadme(githubUrl)

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
    return res
