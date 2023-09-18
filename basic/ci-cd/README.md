# GitLab CI/CD

course: https://lseg.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/learn/

Repo: https://gitlab.com/wutchara/ci-cd

Tools: https://gitlab.com/gitlab-course-public/my-static-website-no-pipeline


<br />

## Pipeline
- Create repository
- create '.gitlab-ci.yml'
```
# 'stages' use to ordering each stage
# If you missing 'stages', they will execute pararelly
stages:
    - build
    - test

build the car:
    stage: build
    script:
        - echo "Building"
        - mkdir build
        - cd build
        - touch car.txt
        - echo "chassis" >> car.txt
        - echo "engine" >> car.txt
        - echo "wheels" >> car.txt
    # 'artifacts' need 'paths'
    # 'artifacts' use to share file between stages
    artifacts:
        paths:
            - build/

test the car:
    stage: test
    script:
        - echo "Testing"
        - ls
        - test -f "build/car.txt"
        - cd build
        - cat "car.txt"
        - grep "chassis" car.txt
        - grep "engine" car.txt
        - grep "wheels" car.txt
```

<br />

<br />

```
stages:
    - build
    - test

build:
    stage: build
    script:
        - echo "Building"
        - mkdir build
        - touch build/info.txt
    artifacts:
        paths:
            - build/

test:
    stage: test
    script:
        - echo "Testing"
        - test -f "build/info.txt"
```

---

---

<br />

## My GitLab CI pipeline is not running

### Make sure that:

- You have named your file .gitlab-ci.yml (and not gitlab-ci.yml or .gitlab-ci.yaml)

- the pipeline file is in the root of the project and not inside a directory

- Auto DevOps is NOT enabled

---

---

<br />

## Deploy static website

Example: https://gitlab.com/wutchara/test-gatsby-cicd/-/blob/main/README-deploy.md?ref_type=heads

Deployment: https://surge.sh/help/getting-started-with-surge

url: http://delirious-writing.surge.sh/

domain: https://www.dotomator.com/web20.html

### Test pipeline after service has deployed

```
image: node:18.17.1-bullseye

stages:
  - build
  - test

build website:
  stage: build
  script:
    - cd my-gatsby-site
    - npm install
    - npm install -g gatsby-cli
    - gatsby build
  artifacts:
    paths:
      - ./my-gatsby-site/public

# Parallel
test artifact:
  stage: test
  image: alpine
  script:
    - grep "Gatsby" ./my-gatsby-site/public/index.html
    # - grep "XXXXXXXX" ./my-gatsby-site/public/index.html
    - grep "HAM - TEST" ./my-gatsby-site/public/index.html

# Parallel
test website:
  stage: test
  script:
    - ls
    - cd my-gatsby-site
    - ls
    - npm install
    - npm install -g gatsby-cli
    - gatsby build
    # '&' to run job in background
    - gatsby serve &
    # Waiting for job has started
    - sleep 3
    - curl "http://localhost:9000" | tac | tac | grep -q "Gatsby"
```

## Deploy static website via pipeline

- add variable SURGE_LOGIN: xxx@gmail.com
- add variable SURGE_TOKEN: xxxxxx
- generate domain via 'https://www.dotomator.com/web20.html'
- add stage deploy

```
image: node:18.17.1-bullseye

stages:
  - build
  - test
  - deploy

build website:
  stage: build
  script:
    - cd my-gatsby-site
    - npm install
    - npm install -g gatsby-cli
    - gatsby build
  artifacts:
    paths:
      - ./my-gatsby-site/public

# Parallel
test artifact:
  stage: test
  image: alpine
  script:
    - grep "Gatsby" ./my-gatsby-site/public/index.html
    # - grep "XXXXXXXX" ./my-gatsby-site/public/index.html
    - grep "HAM - TEST" ./my-gatsby-site/public/index.html

# Parallel
test website:
  stage: test
  script:
    - ls
    - cd my-gatsby-site
    - ls
    - npm install
    - npm install -g gatsby-cli
    - gatsby build
    # '&' to run job in background
    - gatsby serve &
    # Waiting for job has started
    - sleep 3
    - curl "http://localhost:9000" | tac | tac | grep -q "Gatsby"

deploy to surge:
  stage: deploy
  script:
    - ls
    - cd my-gatsby-site
    - ls
    - npm i -g surge
    # 'fivecast' is domain that I use 'https://www.dotomator.com/web20.html' to generate
    - surge --project ./public --domain fivecast.surge.sh

```

<br />

---

---

<br />

## Pre-Definded Environment variable and replace string
```
image: node:18.17.1-bullseye

stages:
  - build
  - test
  - deploy

build website:
  stage: build
  script:
    - cd my-gatsby-site
    # '$CI_COMMIT_SHORT_SHA' is pre-defined environment variable
    - echo $CI_COMMIT_SHORT_SHA
    - npm install
    - npm install -g gatsby-cli
    - gatsby build

    # sed - stream editor
    # will replace '%%VERSION%%' with '$CI_COMMIT_SHORT_SHA'
    #
    # sed -i 's/word1/word2/g' input-file
    # -i for edit in place
    # s for substitute
    # g for global replacement
    - sed -i "s/%%VERSION%%/$CI_COMMIT_SHORT_SHA/" ./public/index.html
  artifacts:
    paths:
      - ./my-gatsby-site/public

# Parallel
test artifact:
  stage: test
  image: alpine
  script:
    - grep "Gatsby" ./my-gatsby-site/public/index.html
    # - grep "XXXXXXXX" ./my-gatsby-site/public/index.html
    - grep "HAM - TEST" ./my-gatsby-site/public/index.html

# Parallel
test website:
  stage: test
  script:
    - ls
    - cd my-gatsby-site
    - ls
    - npm install
    - npm install -g gatsby-cli
    - gatsby build
    # '&' to run job in background
    - gatsby serve &
    # Waiting for job has started
    - sleep 3
    - curl "http://localhost:9000" | tac | tac | grep -q "Gatsby"

deploy to surge:
  stage: deploy
  script:
    - ls
    - cd my-gatsby-site
    - ls
    - npm i -g surge
    # 'delirious-writing' is domain that I use 'https://www.dotomator.com/web20.html' to generate
    - surge --project ./public --domain "delirious-writing.surge.sh"

```
---

---

<br />

