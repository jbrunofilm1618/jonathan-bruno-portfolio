#!/bin/bash
# Downloads promotional images for portfolio credit cards.
# Run: bash download-images.sh
#
# Uses Wikipedia REST API (no API key needed) to get official cover art.
# Images are saved to images/credits/ and referenced by the HTML.

set -e
mkdir -p images/credits

echo "Downloading credit card images..."

# The Last of Us Part II - Wikipedia page image
echo "  [1/7] The Last of Us Part II..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/The_Last_of_Us_Part_II" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/tlou2.jpg
echo "         Done."

# God of War (2018)
echo "  [2/7] God of War..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/God_of_War_(2018_video_game)" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/god-of-war.jpg
echo "         Done."

# Uncharted 4
echo "  [3/7] Uncharted 4..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/Uncharted_4:_A_Thief%27s_End" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/uncharted4.jpg
echo "         Done."

# Carne y Arena
echo "  [4/7] Carne y Arena..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/Flesh_and_Sand" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/carne-y-arena.jpg
echo "         Done."

# Counterpart (TV series)
echo "  [5/7] Counterpart..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/Counterpart_(TV_series)" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/counterpart.jpg
echo "         Done."

# Bone Tomahawk
echo "  [6/7] Bone Tomahawk..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/Bone_Tomahawk" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/bone-tomahawk.jpg
echo "         Done."

# Love (TV series)
echo "  [7/7] Love..."
curl -sL "https://en.wikipedia.org/api/rest_v1/page/summary/Love_(TV_series)" \
  | python3 -c "import sys,json; d=json.load(sys.stdin); print(d.get('originalimage',{}).get('source',''))" \
  | xargs -I{} curl -sL "{}" -o images/credits/love.jpg
echo "         Done."

echo ""
echo "All images downloaded to images/credits/"
echo ""
echo "Note: Wikipedia provides cover art (typically portrait). For landscape"
echo "promotional images, you may want to replace individual files with"
echo "screenshots or key art from official press kits. The CSS will crop"
echo "any aspect ratio to fit the card using background-size: cover."
