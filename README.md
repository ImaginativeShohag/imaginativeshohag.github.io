#  imaginativeshohag.github.io

My another personal weblog.

## Technologies

- Jekyll
- Tailwind CSS

## Development

```shell
npm install
bundle install
bundle update github-pages

# Compile CSS
cd src/tailwindcss
sh build.sh # Compile CSS
sh watch.sh # Compile CSS & Watch for changes to recompile

# Build Site
cd <site-root-folder>
bundle exec jekyll build --drafts # Build site
bundle exec jekyll serve --drafts # Build site & Watch
```

### Utilities

* `utils/create_categories.sh` : Create categories with one command. Check the file for usage.
* `utils/create_tags.sh` : Create tags with one command. Check the file for usage.

## Note

All the files with front matter are prefixed with `.liquid.html`, `.liquid.xml` or `.liquid.json` etc. I also set those file types as Liquid in the IDE. So that the IDE can give the right syntax highlighting and code formatting.

## Licence

```
Copyright 2021 Md. Mahmudul Hasan Shohag

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
