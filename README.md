# cil-internship-cohort-03
Repo for cil inters for cohort-03

# 025-cil-internship-project
Shehu-yusuf internship project repo

# shehu yusuf project 1
repo for 025 cohort-03 project

> About me
>* Vibrate Data Engineer
>* Upskilling
>* Good knowledge of OSI model
>* Skilled in MySql and Python

Paragraph 1
While there is value in the items on the right, we value the items on the left more. Thank you cil for giving me this opportunity.



# Q1. Describe any layered process you are familiar with similar to the OSI model

> TCP/IP model 
1.	Application Layer
2.	Transport Layer
3.	Network Layer
4.	Data link Layer
5.	Physical Layer

*	Application Layer 
Define the protocols and standards that application requires to connect to the network.  It provides services for network application with the help of a protocol to perform user activities.
All network applications are dependent on application layer protocol to function. It forms the basis for various network services. E.g. Telnet, HTTP/HTTPS, FTP, SMTP, DHCP, DNS etc.

*	Transport Layer 
Provide a logical connection between two hosts. It controls reliability of communication through segmentation, flow control and error control.
_	Segmentation is the process of breaking up a large data into smaller data unit called a segment, each segment contain port and sequence number for segment rearrangement and assembly when it get to the destination host.
_	Flow control it control amount of data being transported by increasing or decreasing the rate of data transfer between devices with different Mbps rate.
_	Error control used automatic repeat request to retransmit the loss or corrupted data with a group of checksum to verified
Transport layer protocols are TCP and UDP
_	Transmission control protocol (TCP) its a connection- oriented transmission, it wait for an acknowledgement from the remote host (feedback). It is reliable but very slow compared to UDP
_	User datagram protocol its a connectionless transmission. its not reliable because it does not require a feedback but very fast.

*	Network layer
Main functions are logical addressing, routing and path determination. It uses IP protocol. Data unit in network layer is called packet and data packet contain IP address of sender/ receiver.  
_	For computers to exchange data over a network both needs to have a unique IP address (IPv4 or IPv6). 
_	Routing move data from source to destination base and 
_	Path determination choosing the best path for data delivery over a million node.

*	Data link and physical layer
Defines standards and protocols for data transmission and physical connectivity, data link control how data is placed and received. it uses MAC (media access control) to form a frame. This is the layer where switching reside.
Data from application layer has been segmented by transport layer and placed into packet by network layer and frame by data link layer to a sequence of 0 and 1 (Binary). Physical layer convert these binary sequence into signal (verse versa) and transmit it over local media or further encapsulated as the data move back to application layer
+	Electrical signal > copper cable, TP, UTP (cat5e or 6,7)
+	Light signal > optic fiber cable,  MM & SM
+	Radio signal >  air


# Q2. What are the NS IP addresses for Google, Facebook and Tesla? 
1.	Facebook.com - 102.132.101.35

2.	Google.com - 216.58.223.206
                216.58.223.228

3.	Tesla.com - 104.89.119.127
               184.50.204.169
               104.86.104.55
               184.30.18.203
               23.201.26.71
               2.20.92.122
         
# Q2i. Breakdown the following RFC 1918 IPv4 address range into exactly 4 subnetwork with no address left over.
 
 10.10.10.0
 192.168.0.0
 172.168.1.0 

*	class A - 10.10.10.0             default subnet of 255.0.0.0              CIDR /8
*	class B - 172.168.1.0            default subnet of 255.255.0.0                 /16
*	class C - 192.168.0.0            default subnet of 255.255.255.0               /24

Breakdown into 4 subnets 256/4 = 64 
128  64  32   16   8   4   2   1

   128  64  *  * * * * * = 192 

1.	Class A     10.0.0.0 /10 - 255.192.0.

Network ID 

10.0.0.0 

10.64.0.0

10.128.0.0

10.192.0.0       			  

Subnet Mask 

255.192.0.0 

255.192.0.0 

255.192.0.0 

255.192.0.0     

Address Range  

10.0.0.1   -  10.63.255.254 

10.64.0.1  -  10.127.255.254

10.128.0.1 -  10.191.255.254

10.192.0.1 -  10.255.255.254     

Broadcast ID

10.63.255.255

10.127.255.255

10.191.255.255

10.255.255.255
		

2.	Class B     172.168.0.0 /18 -  255.255.192.0		 

Network ID

172.168.0.0 

172.168.64.0

172.168.128.0 

172.168.192.0  			  

Subnet Mask  

255.255.192.0 

255.255.192.0 

255.255.192.0 

255.255.192.0   

Address Range 

172.168.0.1   -  172.168.63.254

172.168.64.1  -  172.168.127.254 

172.168.128.1 -  172.168.191.254

172.168.192.1 -  172.168.255.254

Broadcast ID

172.168.63.255

172.168.127.255

172.168.191.255

172.168.255.255


3.	Class C    192.168.0.0 /26 - 255.255.255.192

Network ID 

192.168.0.0

192.168.0.64 

192.168.0.128  

192.168.0.192 			  

Subnet Mask   

255.255.255.192 

255.255.255.192   

255.255.255.192   

255.255.255.192  

Address Range  

192.168.0.1   -  192.168.0.62 

192.168.0.65  -  192.168.0.126 

192.168.0.129 -  192.168.0.190 

192.168.0.193 -  192.168.0.254   

Broadcast ID

192.168.0.63

192.168.0.127

192.168.0.191

192.168.0.255



# Q3. Describe what you understand by Scrum, and elaborate on some of it's benefits in software development.

1. Scrum is a software product development strategy that organizes software developers as a team to reach a common goal. It predefines a step-by-step component that a team will obey to create a ready for market product.
+	Product owner provide a backlog which contain a list of items.
+	Scrum team take top item from the backlog as a task and collaborate in a daily meeting to complete the task within maximum of one month.
+	Scrum master (part of the team) keeps the team focused on the goal.
+	Each task ends with a task review and the team chooses another item from the backlog as a task.
+	Tasks continue until the project deadline.

2. Benefits of Scrum
+	Developers who want the freedom to make decisions thrive in scrum teams.
+	Project focus and goals can change with evolving business goals.
+	Each sprint produces a product that is ready for market even though the project is ongoing. The highest priority requirements are addressed first so a high-quality, low-risk product can be on the market
+	Reviewing each sprint before the team moves on to the next sprint spreads testing throughout development.


# Q3ii. From the Agile Manifesto, complete the following:
Individuals and interactions over ..... 
Working software over .....
Customer collaboration over ..... 
Responding to change over ......

*	Individuals and interactions over processes and tools.
*	Working software over comprehensive documentation.
*	Customer collaboration over contract negotiation.
*	Responding to change over following a plan.

