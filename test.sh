#!/bin/bash

if [[ -d node_modules ]];
then
   echo Testing
else
   sudo npm link buster
fi
buster-test
