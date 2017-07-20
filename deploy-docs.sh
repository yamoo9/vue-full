cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m '북 업데이트'
git push -f git@github.com:vuejs-templates/webpack.git master:gh-pages
