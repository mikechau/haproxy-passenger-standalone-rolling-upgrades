#!/bin/bash
ansible-playbook -i ansible/inventories/vagrant -vv --private-key=.vagrant/machines/hyperion/virtualbox/private_key -u vagrant ansible/vagrant_deploy.yml
