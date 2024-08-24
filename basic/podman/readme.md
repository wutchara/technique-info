# Podman

> Tool for GUI => https://podman-desktop.io/

```bash
brew install podman
podman machine start
podman build -t firstpodman .
podman run -d --name first-podman-server -p 3000:3000 firstpodman

podman machine stop
```
