#!/bin/bash

script_directory=`dirname $0`
jade_file="$script_directory/../index.jade"
cat $jade_file | jade --pretty --path $jade_file
