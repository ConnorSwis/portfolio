import json
import os


images = []
files = os.listdir('./src/assets')
for i in range(len(files)):
    if not files[i].endswith(('.jpg', 'png')): continue
    images.append(
        {
            "id": i,
            "name": files[i][:-4],
            "src": f"../assets/{files[i]}",
            "description": ""
        }
    )

print(os.getcwd())

with open("./src/assets/gallery.json", 'w') as f:
    json.dump(
        images, f, indent=2
    )