# haproxy-passenger-standalone-rolling-upgrades

This is repository is an example of how you can do zero downtime rolling upgrades with `Haproxy` using `Phusion Passenger Standalone`, with `Ansible`.

## Getting Started

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
