# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "chef/centos-6.5"

  config.ssh.forward_agent = true

  config.ssh.private_key_path = [
    '~/.vagrant.d/insecure_private_key',
    '~/.ssh/id_rsa'
  ]

  # Main Server Entry Point via Haproxy
  config.vm.network 'forwarded_port', guest: 80, host: 8080

  # Rails Server 1
  config.vm.network 'forwarded_port', guest: 4000, host: 4000

  # Rails Server 2
  config.vm.network 'forwarded_port', guest: 4001, host: 4001

  # MySQL
  config.vm.network 'forwarded_port', guest: 3306, host: 4444

  # Haproxy Admin Stats
  config.vm.network 'forwarded_port', guest: 9001, host: 9001

  config.vm.network 'private_network', ip: '10.10.10.10'
  config.vm.synced_folder '.', '/app', type: 'nfs'

  config.vm.provider 'virtualbox' do |vb|
    vb.name = 'hyperion-vagrant'
    vb.customize ['modifyvm', :id, '--vram', '10']
    vb.customize ['modifyvm', :id, '--memory', '1024']
    vb.customize ['modifyvm', :id, '--cpus', '2']
    vb.customize ['modifyvm', :id, '--cpuexecutioncap', '80']
  end

 config.vm.define 'hyperion', primary: true do
    config.vm.provision 'ansible' do |ansible|
      ansible.limit = 'all'
      ansible.inventory_path = 'ansible/inventories/vagrant'
      ansible.playbook = 'ansible/vagrant_provision.yml'
      ansible.verbose = 'vv'
    end
  end

  if Vagrant.has_plugin?('vagrant-vbguest')
    config.vbguest.auto_update = true
  end

  if Vagrant.has_plugin?('vagrant-exec')
    config.exec.commands '*', directory: '/app'
    config.exec.commands 'bundle'
    config.exec.commands %w[spring], prepend: 'bundle exec'
    config.exec.commands %w[rails rake guard], prepend: 'bundle exec', env: { 'RAILS_ENV' => 'vagrant_development' }
    config.exec.commands %w[foreman], env: { 'RAILS_ENV' => 'vagrant_development' }
    config.exec.commands %w[rspec], prepend: 'bundle exec', env: { 'RAILS_ENV' => 'vagrant_test' }
  end
end
