# haproxy-passenger-standalone-rolling-upgrades

This is repository is an example of how you can do zero downtime rolling upgrades with `Haproxy` using `Phusion Passenger Standalone`, with `Ansible`.

## Overview

This zero downtime rolling upgrade, is accomplished by spinning up two seperate Passenger processes that sit behind an HAProxy load balancer. When a deploy is commencing, it will take down 1 process a a time, upgrade it, and reattach it back to the load balancer.

## Getting Started

```
vagrant up
```

### Startup Issues

`Vagrant` will complain about being unable to build guest additions, if you are using `vb-guest`.

After you get the error message, do the following:

```
vagrant ssh
sudo yum install kernel kernel-devel -y
exit

vagrant halt
vagrant up
```

Now `Vagant` should start to provision itself with `Ansible`.

## Commands

```
./deploy.sh - run a deployment

./rollback.sh $rollback_release_version - rollback to a specific version, first argument is a integer.
```

In another terminal window, inside `Vagrant`, run:

```
sudo watch `sudo service haproxyctl show health`
```

To watch your rolling update live!

## Live Demonstration

- `localhost:8080` - Page that will poll an endpoint

## Servers

- `titanium` - Passenger instance 1, runs on port 4000
- `carbon` - Passenger instance 2, runs on port 4001
