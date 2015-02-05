# Haproxy Ansible Role

`Ansible` role for compiling `Haproxy` and installs `Haproxyctl`.

Currently for `CentOS` only.

## Notes:

Remember to enable UDP 514 on `syslog`.

Example `rsyslog.conf`:

```
$ModLoad imudp
$UDPServerRun 514
```

## Logging References:
- http://sharadchhetri.com/2013/10/16/how-to-enable-logging-of-haproxy-in-rsyslog/
- http://www.percona.com/blog/2014/10/03/haproxy-give-me-some-logs-on-centos-6-5/
- https://transloadit.com/blog/2010/08/haproxy-logging/
