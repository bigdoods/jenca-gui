# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :private_network, :ip => "172.17.8.150"
  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
  end
  config.vm.provision "docker"
  config.vm.provision "shell", inline: <<-SHELL
    apt-get update
    apt-get install -y g++
    curl -sL https://deb.nodesource.com/setup | sh
    apt-get install -y nodejs
    npm -g install npm@latest webpack
    cd /vagrant
    npm install
  SHELL
end
