#!/bin/bash

if [[ -d node_modules ]];
then
   echo Testing
else
   sudo npm link buster
   sudo ln -s /usr/bin/nodejs /usr/bin/node
fi
buster-test
