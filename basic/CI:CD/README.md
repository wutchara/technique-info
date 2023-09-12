# GitLab CI/CD

ref: https://lseg.udemy.com/course/gitlab-ci-pipelines-ci-cd-and-devops-for-beginners/learn/

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

< br />

## My GitLab CI pipeline is not running

### Make sure that:

- You have named your file .gitlab-ci.yml (and not gitlab-ci.yml or .gitlab-ci.yaml)

- the pipeline file is in the root of the project and not inside a directory

- Auto DevOps is NOT enabled
