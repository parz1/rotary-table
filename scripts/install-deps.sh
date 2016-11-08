#!/usr/bin/env bash

. config.sh

echo "$separator"
echo "[$name] Installing dependencies"
echo "$separator"
cd ../
npm install
echo "[$name] NPM dependencies installed"
bower install
echo "[$name] Bower dependencies installed"
echo "[$name] Complete"
