#!/usr/bin/env bash

. config.sh

echo "-----------------------------------------------------------"
echo "[$name] Installing dependencies"
echo "-----------------------------------------------------------"
cd ../
npm install
echo "[$name] NPM dependencies installed"
bower install
echo "[$name] Bower dependencies installed"
echo "[$name] Complete"
