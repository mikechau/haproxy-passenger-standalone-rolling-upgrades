#!/bin/bash

ansible-playbook -i ansible/inventories/vagrant -vv --private-key=.vagrant/machines/hyperion/virtualbox/private_key -u vagrant ansible/vagrant_rollback.yml --extra-vars "rails_app_rollback_release=$1"

