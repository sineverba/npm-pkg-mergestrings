SONARSCANNER_VERSION=12.1.0.3233_8.0.1
NPM_VERSION=11.17.0

sonar:
	docker run \
		--rm \
		-it \
		--name sonarscanner \
		-v $(PWD):/usr/src \
		-e SONAR_HOST_URL="https://sonarcloud.io" \
		-e SONAR_TOKEN=$(SONAR_TOKEN) \
		-e SONAR_SCANNER_OPTS="-Xmx1024m" \
		sonarsource/sonar-scanner-cli:$(SONARSCANNER_VERSION)

upgrade:
	npx ncu -u
	npm install
	npm audit fix
