#!/usr/bin/env bash

. config.sh

echo "$separator"
echo "[$name] Deleting scripts folder"
echo "$separator"
cd ../
rm -rf "scripts"
echo "[$name] Complete"
