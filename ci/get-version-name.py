import sys, json

latest_version= sys.argv[1].split('.')[:3]
latest_version_name = "{}.{}.{}".format(*latest_version)
print(latest_version_name)