#!/bin/bash

ansible-playbook -i ansible/inventories/vagrant -vv --private-key=~/.vagrant.d/insecure_private_key -u vagrant ansible/vagrant_deploy.yml
