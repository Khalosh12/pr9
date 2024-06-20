const newJsonData = {
  "company": {
    "name": "Programator",
    "employees": [
      {
        "name": "Nikolas Francish",
        "position": "Bos",
        "contacts": {
          "email": "nicfran@programator.com",
          "phone": "123-456-7890"
        }
      },
      {
        "name": "Ilka Supersell",
        "position": "Supersell",
        "contacts": {
          "email": "Ilka@programator.com",
          "phone": "144-567-3451"
        }
      }
    ],
    "departments": {
      "development": {
        "teamLead": "Barbos Ivanovich",
        "projects": [
          "Project A",
          "Project B"
        ]
      },
      "marketing": {
        "teamLead": "Nikola Stepanovich",
        "campaigns": [
          "Campaign X",
          "Campaign Y"
        ]
      }
    }
  }
};

function printJson(json, indent = 0) {
  for (let key in json) {
    if (typeof json[key] === 'object' && json[key] !== null) {
      console.log(' '.repeat(indent) + key + ':');
      printJson(json[key], indent + 2);
    } else {
      console.log(' '.repeat(indent) + key + ': ' + json[key]);
    }
  }
}

printJson(newJsonData);
