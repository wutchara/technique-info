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


