#!/usr/bin/env bash

. config.sh

echo "-----------------------------------------------------------"
echo "[$name] Cleaning repository"
echo "-----------------------------------------------------------"
cd ../
rm -rf ".git"
echo "[$name] Complete"
