# linux-control-panel
Remote web Interface to control your linux machine

# Setup
- Clone repository to `/var/www/lcp` folder
- Run setup script `./infra/setup.sh`
- Copy service setup `cp ./infra/lcp.service /etc/systemd/system`
- Start `systemctl start lcp`
- Enable it to run on boot `systemctl enable lcp`
