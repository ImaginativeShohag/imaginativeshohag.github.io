#!/bin/sh

# ----------------------------------------------------------------
# This script will create tags if not already exists.
#
# Usage:
# cd <to-current-directory>
# sh create_tags tag1 tag2 tag3
#
# Copyright (c) 2021 Md. Mahmudul Hasan Shohag (github.com/imaginativeshohag)
# This free software comes with ABSOLUTELY NO WARRANTY.
# ----------------------------------------------------------------

# Stop the script if anything goes wrong.
set -e

createCount=0
alreadyExistCount=0

# Loop on the arguments
for item in "$@"; do
  # check if the folder exist
  TARGET_DIRECTORY="../tag/$item"
  if [ ! -d $TARGET_DIRECTORY ]; then
    createCount=$((createCount + 1))

    # Create the directory
    mkdir -p $TARGET_DIRECTORY

    # Create the index file
    cat >"$TARGET_DIRECTORY/index.html" <<EOF
---
layout: tag.liquid
tag: $item
---
EOF
    echo "$item created."

  else
    alreadyExistCount=$((alreadyExistCount + 1))
    echo "$item already exist!"
  fi

done

echo "Total $createCount tag(s) created and $alreadyExistCount tag(s) already existed."
