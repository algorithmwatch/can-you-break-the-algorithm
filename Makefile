run:
		cat src/components/game/partials/*.json > src/components/game/game.json
		./node_modules/.bin/webpack-dashboard -p 3030 -- ./node_modules/.bin/gulp serve

build:
		node_modules/.bin/gulp build

deploy:
		node_modules/.bin/gulp deploy

install:
		yarn || npm install

test:
		npm run test:auto
