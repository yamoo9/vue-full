cd docs
rm -rf _book
gitbook build
cd _book
git init
git add -A
git commit -m 'Book 업데이트'
git push -f git@github.com:yamoo9/git-full.git master:gh-pages
