#!/bin/bash

script_directory=`dirname $0`
render_script="$script_directory/render.sh"
$render_script > "$script_directory/../build/index.html"
