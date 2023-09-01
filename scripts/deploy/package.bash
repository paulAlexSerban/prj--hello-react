#!/bin/bash
# makes sure the folder containing the script will be the root folder
cd "$(dirname "$0")" || exit

echo "📦  Package"
mkdir -p ../../package/reactjs
cp -rfv ../../frontend/reactjs/build/* ../../package/reactjs