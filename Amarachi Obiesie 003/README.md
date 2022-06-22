# WEEK 2
- DAY 1: 
Open System Intercommunication Model (OSI Model)  helps understand how data is transferred from one computer to another over the internet.  One of the Layered process is THE PRESENTATION LAYER. The Presentation is also as "Translation Layer". It "receives" and “translates”  data going to and from the application layer; they are in form of characters or Numbers which transfers them into machine understandable characters. Because data going to and from the application layer is often not in the format required to be transported over the network, it needs to be translated and “presented properly” to the next layer. The perform three basics function: Translation, Data Comparison, and Encryption.
- DAY 2
a. NS IP addresses for the following:
Google - 8.8.8.8.8.8.4.4.
Facebook - 185.89.218.12
Tesla - 104.145.231.237
b. Breaking down the following RFC 1918 IPV4 addresses into range.
A RFC 1918 describes the use of IP address deemed private by IANA (The Internet Assigned Numbers Authority). It is an IP address that is assigned by an enterprise organization to an internet post.
192.168.0.0 - 192.168.255.255.255 (192.168/16) prefix
10.0.0.0 - 10.255.255.255,255 (10/8) prefix
172.168.0.0 - 172.255.255.255  (172.168/12) prefix


## WEEK 3
- DAY 2
1. A scrum is a light-weight agile process tool.  It is a software product development strategy that organizes software developers as a team to reach a common goal; creating a ready-for-market product. Scrum has different phases: Initiation, Planning and estimation, Implementation, Reviewing and Releasing.
BENEFIT OF SCRUM
Developers who want the freedom to make decisions thrive in scrum teams. Team morale tends to be high.
Each sprint produces a product that is ready for market even though the project is ongoing. The highest priority requirements are addressed first so a high-quality, low-risk product can be on the market.
The incremental process shortens the time to market by about 30 percent to 40 percent. Because the product owner is part of the scrum team, requirements can be delivered as they are needed; Split time into short fixed length iterations with potentially code demonstrated after each iteration.
2. Individuals and interactions over processes and tools.
    Working software ovser comprehensive documentation.
    Customer collaboration over contract negotiation.
    Responding to change over following a plan.
- DAY  3
from PIL import Image
import os, sys
path = ('C:\Users\Amara Obiesie\Pictures\2018-03')
def resize():
for item in os.listdir(path):
    if os.path.isfile(picture):
        im = Image.open(picture)
        f, e = os.path.splitext(picture)
        imResize = im.resize((100,100), Image.ANTIALIAS)
        imResize.save(f + ' resized.jpg', 'JPEG', quality=100)


 