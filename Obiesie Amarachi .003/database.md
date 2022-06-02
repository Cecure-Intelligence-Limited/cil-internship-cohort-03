# WEEK 6

ASS 2
DATABASE
Database is a collection or set of tables. It’s also a structured system to put your data in that imposes rules upon that data, and the rules are yours because the importance of these problems changes based on your needs. There are different types of Database: Relational Database, Non-relational databases, and Object-oriented databases.

RELATIONAL DATABASES USE CASE
There are a lot of use cases for relationship database. Some of which are listed below.
•	Oracle: Oracle Database is commonly referred to as Oracle RDBMS or simply as Oracle. It is a multi-model database management system produced and marketed by Oracle Corporation.
•	MySQL: MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX, and Windows.
•	Microsoft SQL Server: Microsoft SQL Server is an RDBMS that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.
•	PostgreSQL: PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.

MYSQL
It is a free, open-source RDBMS solution that is owned and managed by Oracle; Although MySQL didn’t support NoSQL in time past, the version 8 provides NoSQL support to compete with other solution like PostgreSQL.

ADVANTAGES
•	Free installation. The community edition of MySQL is free to download. Nevertheless, if your company is too small to pay for one of them, the free-to-download model is the most suitable for a fresh start.
•	Simple syntax and mild complexity. MySQL’s structure and style are very plain. Developers even consider MySQL a database with a human-like language. MySQL is often used in tandem with the PHP programming language. Because they share a gentle learning curve, it’s much easier to form a team to manage your database. Also, MySQL is easy to use. For instance, most of the tasks can be executed right in the command line, reducing development steps.
•	Cloud compatibility. Business-oriented by nature and originally developed for the web, MySQL is supported by the most popular cloud providers. It’s available on such leading platforms as Amazon, Microsoft, and others. This makes MySQL even more attractive and gives businesses room for growth.

DISAVANTAGE
•	Scalability challenges. MySQL was not built with scalability in mind, which is inherent in its code.
•	Partial open-source support. Although MySQL has the open-source part, it’s mostly under Oracle’s license. This limits the MySQL community in terms of improving the DBMS.
•	Limited compliance with SQL standards. Structured Query Language has specific standards. MySQL doesn’t completely follow them, i.e., MySQL provides no support for some standard SQL features. On the other hand, MySQL has some extensions and distinct features that don’t match the Structured Query Language standards. It’s not a big deal for small web applications. The issues may appear when you shift to other databases.
USE CASES FOR MYSQL
•	Small web-based solutions. MySQL database system is the best option when you’re designing a small, web-based solution with a small volume of data. For example, when building a local eCommerce store, MySQL may come in handy.
•	OLAP/OLTP systems. This is one of the best use cases for a MySQL database, as OLAP/OLTP don’t require complex queries and large volumes of data. 

ORACLE 
Oracle is a relational database management system created and run by the Oracle Corporation. Currently, it supports multiple data models like document, graph, relational, and key-value within the single database.

ADVANTAGES 
•	Innovations for daily workflow. With every new release (Oracle 12C), Oracle tries to keep up with the innovation pace while focusing on information security including active data guard, partitioning, improved backup, and recovery.
•	Strong tech support and documentation. Oracle ensures decent customer support and provides comprehensive tech documentation across multiple resources. So, you’ll likely find solutions to any issues that appear. 
•	Large capacity. Oracle’s multi-model solution allows for accommodating and processing a vast amount of data. Thanks to the recently released multi-tenancy feature, the database architecture now simplifies packing many databases and manages them smoothly.

DISADVANTAGES
•	High cost. Though the Oracle database has free editions, they are very limited in terms of functionality. Standard Edition, which doesn’t include all available features, costs $17,500 per unit. The Enterprise Edition is over $47,000 per unit.
•	Resource-consuming technology. Oracle database needs powerful infrastructure. Not only does installation require a lot of disk space, but you’ll also have to consider constant hardware updates if you deploy it on-premises.
•	Hard learning curve. Oracle database is not a system to start using right away. It’s better to have certified Oracle DB engineers to run it. Oracle’s documentation, while covering many issues, can sometimes be overwhelming and even confusing. 
USE CASES 
Consider Oracle RDMS as a reasonable solution for online OLTP, data warehousing, and even mixed (OLTP and DW) database application. If you have a billion records to hold and manage – and sufficient budget to support.

POSTGRESQL
is an open-source, free database engine with unlimited scaling capabilities. PostgreSQL supports both relational and non-relational data formats. This database management system shares its popularity with MySQL. This is an object-relational DBMS where user-defined objects and table approaches are combined to build more complex data structures.

ADVANTAGES 
•	Great scalability. Vertical scalability is a hallmark of PostgreSQL, unlike MySQL DBMS. Considering that almost any custom software solution tends to grow, resulting in database extension, this option certainly supports business growth and development.
•	Support for custom data types. PostgreSQL natively supports many data types by default, such as JSON, XML, H-Store, and others. PostgreSQL takes advantage of it, being one of the few relational databases with strong support for NoSQL features. Additionally, it allows users to define their own data types. 
•	Highly ACID Compliant: PostgreSQL consistently ranks as the most ACID-compliant DBMS. 
•	Open-source and community-driven support. Postgres is completely open-source and supported by its community, which strengthens it as a complete ecosystem. Additionally, developers can always expect free and prompt community assistance.

DISADVANTAGES 
•	Inconsistent documentation. While PostgreSQL has a large community and provides strong support for its participants, the documentation still lacks consistency and completeness. 
•	Lack of reporting and auditing instruments. A significant shortcoming of PostgreSQL is the absence of revising tools that would show the current condition of a database. 

USE CASES
PostgreSQL is a perfect match for data analysis and warehousing. If you are building a database automation tool, PostgreSQL is the best fit for it due to its strong analytical capabilities, ACID compliance, and powerful SQL engine.

NON-RELATIONAL DATABASE
A non-relational database is a non-tabular database that uses different data models for storing, managing, and accessing data.

USE CASES
MONGODB
A free, open-source, non-relational DBMS, MongoDB also includes a commercial version. Although MongoDB wasn’t initially intended for structured data processing, it can be employed for applications that use both structured and unstructured. In MongoDB, databases are connected to applications via database drivers. They are widely available within the database management system.

ADVANTAGES
Simple data access, storage, input, and retrieval. One of the benefits of MongoDB derived from its NoSQL nature is the fast and easy data operation. Data can be entered, stored, and withdrawn from the database quickly and without any additional confirmation. As with any other non-relational database, it places emphasis on RAM usage, so the records can be manipulated fast and without any consequences to data integrity.
Easy compatibility with other data models. MongoDB is easily combined with different database management systems, both SQL and NoSQL types. Besides that, it has pluggable storage engine APIs. To make a long story short, this option allows third parties to build their own data storage engines for MongoDB. From a commercial point of view, it creates extra value for business software.
Horizontally scalable solution. Scalability – where data is spread out across a distributed network of manageable servers – is a facet of MongoDB’s fundamental nature. It becomes even more important for enterprises operating big data applications. 

DISADVANTAGES 
•	Extensive memory consumption. The denormalization process, when previously normalized data in a database is grouped to increase performance, usually results in high memory consumption. Also, this DBMS keeps in memory all key names for each value pair. Beyond that, because there is no support for joins, Mongo databases have data oversupply, resulting in big memory waste and lower application performance.
•	Data insecurity. With a focus on fast data operation, MongoDB, like any other NoSQL DBMS, lacks data security. As user authentication isn’t a default Mongo option, and higher protection is available with a commercial edition only, you can’t consider it totally secure. Additionally, there are constant MongoDB update releases, with no guarantee that all amendments or data changes will work as they did before. 
•	No SQL querying: MongoDB will not accept SQL queries. You can use additional tools to translate your SQL queries to work with this database engine. However, the workaround can be inconvenient.
 
USE CASES
MongoDB works best in real-time data integration and database scalability. For instance, it’s the right option for product catalogs due to its capacity to stock a multiplicity of objects with various attribute collections.

REDIS
An open-source, NoSQL, in-memory data structure store, Redis can also be used as a cache. Instead of documents, it uses key-value pairs. Its distinct feature is that there are several options for data structuring, such as lists, sets, and hashes.

ADVANTAGES
Rapid solution. Due to its replication and transaction features, Redis processes the data fast. The absence of dependencies and in-memory data store type makes Redis a worthy competitor even among simple SQL alternatives.
Massive data processing. From the data perception and refining perspective, Redis can be considered a colossus. It can easily upload up to 1GB of data for one entry. Add built-in data caching and you get a powerhouse data machine.

DISADVANTAGES 
Dependency on the application memory. Total reliance and dependency on the application memory is a real drawback. 
No support for query language or joins. Regarding compatibility with other dataset types, Redis lags.

USE CASES
Redis basically has a few different directions to work with. And the first of them is IoT applications. Here, heavy data from IoT devices can be transferred to Redis to process these records before keeping them in any steady data storage.

CASSANDRA 
Cassandra is a decentralized system developed by Apache. Cassandra is a free Java-based DBMS whose strength is in its multi-replication and multi-deployment features. These peculiarities allow for numerous query copying and deploying all of them at the same time. Being rapidly scalable, Cassandra allows for managing large data volumes by replicating them into multiple nodes. It eliminates the problem of database crash – if some of the nodes fail at any time, it’s replaced immediately, and the system keeps working as long as at least one single node is safe. Cassandra uses its own query language, CQL.

ADVANTAGES
Data security: Due to its master node replication feature, Cassandra stays failure tolerant. It means that DB engineers can feel confident about data safety unless master nodes fail all at the same time.

Flexibility and on-hand amendments: Cassandra’s simple syntax has the best of SQL and NoSQL. In addition to scalability, it largely contributes to dataset flexibility. Cassandra collects data on the go, and data retrieval shares the same simplicity, despite dataset size. This allows for fully enlarging the database.

DISADVANTAGES
Slow reading: As Cassandra was initially designed for fast writing, its weakness lies in its incapacity for fast reading. One of the reasons for it is that there are no bottlenecks for information sent, so it needs more time to process.

Need for additional resources: As Cassandra processes multiple layers of data simultaneously, it demands enough power to do it. This means additional investment in both software and hardware.

USE CASES 
Cassandra fits well with real-time analytics, as it allows linear scaling and data increase in real time. 






















