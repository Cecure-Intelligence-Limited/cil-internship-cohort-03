# NS And IP Address
I got the IP address by using "ping" followed by the "website address" in the command prompt. I did this because big public companies like this have multiple IP addresses. So I used this to get the closest to network.

www.facebook.com - 102.132.101.35

www.tesla.com - 104.86.104.55

www.google.com- 216.58.223.238



# Breakdown of  RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over

The break down was done using the asumption from this CIDR:

10.10.10.0/8

192.168.64.0/24

172.168.1.0/16

### The breakdown are as follows:
|Network ID   | Subnet Mask | No of Usable Host
|-------------| ----------- | ----------------- |
|10.10.10.0   | /10         | 16382
|10.10.10.64  | /10         | 16382
|10.10.10.128 | /10         | 16382
|10.10.10.192 | /10         | 16382
|192.168.0.0  | /26         | 2
|192.168.64.0 | /26         | 2
|192.168.128.0| /26         | 2
|192.168.192.0| /26         | 2
|172.168.1.0  | /18         | 62
|172.168.1.64 | /18         | 62
|172.168.1.128| /18         | 62
|172.168.1.192| /18         | 62
