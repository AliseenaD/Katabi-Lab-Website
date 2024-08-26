import requests
import json
# Define the URL
url = "https://serpapi.com/search.json?engine=google_scholar_author&author_id=nst5fHgAAAAJ&sort=pubdate&api_key=d86b2a87580e82eacab17b965bd7fdd083d6f7b3e42799c66550bcef4c5d5b44"

# Send the request and fetch the data
try:
    response = requests.get(url)
    response.raise_for_status()  # Raise an error if the request was unsuccessful
    data = response.json()

    if data['search_metadata']['status'] != 'Success':
        print('Unsucessful API call')
        assert False
    #"search_metadata": {
    #    "id": "66cd1065f93388be7207eff9",
    #    "status": "Success",    
    # Save the data to a JSON file
    with open("../publications.json", "w") as file:
        json.dump(data, file, indent=4)
    print("Data fetched and saved to publications.json")    
    
    # Save the data to a text file
    #with open("../publications.txt", "w") as file:
    #    file.write(str(data))
    #print("Data fetched and saved to publications.txt")
    
except requests.exceptions.RequestException as e:
    print(f"Error fetching Google Scholar data: {e}")
