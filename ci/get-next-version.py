import sys, json

latest_version = sys.argv[1].split('.')[:3]
latest_version = "{}.{}.{}".format(*latest_version)

with open('sfdx-project.json', 'r') as f:
    project_dict = json.load(f)

set_version = project_dict['packageDirectories'][0]['versionNumber'].strip('.NEXT')

if set_version == latest_version:
    version_numbers = set_version.split('.')
    next_version = "{}.{}.{}".format(version_numbers[0], version_numbers[1], int(version_numbers[2]) + 1)
    
else:
    next_version = set_version

with open('sfdx-project.json', 'w') as f:
    project_dict['packageDirectories'][0]['versionNumber'] = next_version + '.NEXT'
    project_dict['packageDirectories'][0]['versionName'] = next_version 
    json.dump(project_dict, f)

print(next_version + '.1')