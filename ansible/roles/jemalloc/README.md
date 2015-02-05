# Ansible Jemalloc Role

This role installs `Jemalloc`. For `CentOS`, it will install from the repo, for everything else it will compile it.

## Install Example

Assuming the directory looks like this:

```
.
├── ansible
│   └── roles
├── requirements.yml
```
In your `requirements.yml` file:

```yaml
---
- src: https://github.com/mikechau/ansible-jemalloc.git
  path: ansible/roles
  name: jemalloc
```

Install:

```
ansible-galaxy -r requirements.yml
```

Alternatively, clone the repo and do whatever you need to do!

## Configuration

```yaml
# Specify the git repo to clone from.
jemalloc_git_repo: https://github.com/jemalloc/jemalloc.git

# Version of jemalloc, this is actually a git repo tag.
jemalloc_version: 3.6.0

# The source path to download to.
jemalloc_src_path: /usr/local/src/jemalloc

# Valid options:
#   - source
#   - package (CentOS only)
jemalloc_install: source

```

## Usage

In your `playbook`:

```yaml
roles:
  - role: jemalloc
    sudo: yes
```

## LICENSE

MIT