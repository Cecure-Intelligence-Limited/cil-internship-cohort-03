provider "aws" {
  region  = "us-east-1"
  access_key = "ACCESS"
  secret_key = "PASSCODE"
}

resource "aws_vpc" "cil-vpc" {
  cidr_block = "10.0.0.0/16"
  tags = {
    "Name" = "production"
  }
}

resource "aws_internet_gateway" "gw" {
  vpc_id = aws_vpc.cil-vpc.id
}

resource "aws_route_table" "proud-route-table" {
  vpc_id = aws_vpc.cil-vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.gw.id
  }
  
  route {
    ipv6_cidr_block = "::/0"
    gateway_id = aws_internet_gateway.gw.id
  }

  tags = {
    "Name" = "prod"
  }
}

resource "aws_subnet" "subnet-1" {
  vpc_id = aws_vpc.cil-vpc.id
  cidr_block = "10.0.1.0/24"
  availability_zone = "us-east-1a"

  tags = {
    "Name" = "production"
  }
}

resource "aws_route_table_association" "a" {
  subnet_id = aws_subnet.subnet-1.id
  route_table_id = aws_route_table.proud-route-table.id
}

resource "aws_security_group" "allow_web" {
  name        = "allow_web_traffic"
  description = "Allow web inbound traffic"
  vpc_id      = aws_vpc.cil-vpc.id

  ingress {
    description = "HTTPS from VPC"
    from_port = 443
    to_port   = 443
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "HTTP"
    from_port = 80
    to_port   = 80
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    description = "SSH"
    from_port = 22
    to_port   = 22
    protocol  = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    "Name" = "allow_web"
  }
}

resource "aws_network_interface" "web_server_nic" {
  subnet_id       = aws_subnet.subnet-1.id
  private_ips     = ["10.0.1.40"]
  security_groups = [aws_security_group.allow_web.id]
  
}

resource "aws_eip" "one" {
  vpc                       = true
  network_interface         = aws_network_interface.web_server_nic.id
  associate_with_private_ip = "10.0.1.40"
  depends_on                = [aws_internet_gateway.gw]

}

resource "aws_instance" "web-server-intance" {
  ami               = "ami-09d56f8956ab235b3"
  instance_type     = "t2.micro"
  availability_zone = "us-east-1a"
  key_name          = "first_key"

  network_interface {
    device_index = 0
    network_interface_id = aws_network_interface.web_server_nic.id
  }
  
  user_data = <<-EOF
              # !/bin/bash
              sudo apt update -y
              sudo apt install apache2 -y
              sudo systemctl start apache2
              sudo bash -c 'echo your very first web server > file /var/www/html/index.html'
              EOF

  tags = {
    "Name" = "web-server"
  }
}



# Explain the processes in data data-engineering. 

# Processes in Data Engineering
## Introduction
Data engineers build the tools and platforms to answer questions with data, using
software engineering best practices, computer science fundamentals, core database principles, and recent advances in distributed systems.

“Data engineers are specialized software engineers that enable others to answer
questions on datasets, within latency constraints” - Nathan Marz, Inventor of Apache Storm and the Lambda Architecture, Author of Big
Data, and Insight Advisor
Data engineering involves the process of designing, constructing, and maintaining data pipelines, data warehouses, and integrating specializations in big data and distributed systems, as well as concepts like the extended ecosystem, stream processing, and compute at scale.
This ensures that the data the customer is using is clean, reliable, and prepared for whatever use cases that may present themselves such that the data is in a state that can then have queries run against it by data scientists.
Data engineers design and build high performing custom Extract, Transform and Load (ETL) pipelines and operate widely available pipelines from cloud services to serve specific business cases. 
The main processes involved in data engineering are:
*	Extract
*	Transform
*	Load

## Extract: 
This the step where the data is obtained from relevant sources or application. From this step, the data is transported to a location or platform where it will be transformed.

## Transform: 
Here, algorithms are applied and actions such as filtering, grouping, and aggregation to convert raw data into analysis-ready datasets are performed. This step demands a significant degree of business and industry awareness.
Load:
Finally, the processed data is loaded and transported to a destination. This processed data can either be consumed directly by the end-users or it can be yet treated to another upstream dependency to another ETL process comprising of the data workflow. 
 

### Other functionalities obtained from data engineering are:
*	Moving data to the cloud or to a data warehouse
*	Wrangling the data into a single location for convenience in machine learning projects
*	Integrating data from various connected devices and systems in IoT
*	Copying databases into a cloud data warehouse
*	Bringing data to one place in Business Intelligence (BI) for informed business decisions

### Challenges in Data Engineering
Data engineers work on some of the most interesting challenges in software engineering and
computer science:
* Processing and storing data consistently and efficiently across a distributed cluster of
dozens (or hundreds) of servers.
* Ingesting complex, semi-structured data from a variety of real-world sources that
dynamically evolve.
* Evaluating the technical trade-offs of tools to build simple, yet robust, architectures that
survive hardware failures.
* Monitoring systems in real-time to automate decisions within milliseconds of incoming events.

## Building a Data Platform
* Adding Features: A production-quality contribution that adds functionality to a single technology, such as an open-source project. 
* Benchmark Technologies: A well-conceived benchmark of two or three technologies, resulting in recommendations for a given use case. 
* Building Pipelines: An end-to-end pipeline that ingests and processes data so that it can be queried efficiently, and possibly visualized using dashboards. This requires a general understanding of 4-6 technologies, but still examines a few challenges in-depth. This approach emulates building an entire infrastructure, like a start-up or “greenfield” project


# List and explain modern stacks in data engineering.

# MODERN STACKS IN DATA ENGINEERING
*	Relational Databases
A relational database is a type of database that stores and provides access to data points that are related to one another. A relational database includes tables containing rows and columns. For example, a typical business order entry database would include a table that describes a customer with columns for name, address, phone number and so forth.

It is more than enough to be skilled in one or two of the four major relational databases — Oracle, MySQL, Microsoft SQL Server, and PostgreSQL.

*	Cloud
Cloud computing enables companies and businesses host their infrastructure, application software, services and other company process assets virtually thus reducing their overall CaPex – Capital Expenditure.
The three big cloud service providers include AWS, Azure, and Google Cloud, and has been democratized to a great degree.
A data engineer should be familiar with data-related cloud services provided by at least one of the three cloud providers. For instance, a data engineer working with AWS should know about S3 & EBS (for storage), EC2 & EMR (for computing & memory), Glue & Step Functions & Lambda (for orchestration) and more. The same goes for other cloud providers.

*	Orchestration
Data orchestration is the process of collecting and organizing siloed data from numerous data storage locations and making it available to data analysis tools. Businesses can use data orchestration to automate and streamline data-driven decision-making. 
Airflow has been the major orchestrator tool for more engineering-centric teams.
Cloud platforms have their own orchestrators such as AWS (having a mix of Glue, step function and Lamda), Google Clouds (Cloud Composer, a fully-manage cloud version of Airflow) and Microsoft Azure.

*	ETL (Extract, Transform and Load)
ETL is the basic data processing flow in data engineering. Data is extracted from relevant source(s), transformed into readable and best formatting styles to suit user cases, and then it is loaded into destined database storage as required. The major two software used in this stark are SQL and Spark.
Other open-source tool kits are Fivetran, Panoply and Stitch. They are triggered SQL statement triggered used to get data from one source to another achieved using Airflow or something similar.

*	Warehouses (OLAP)
OLTP, or online transactional processing, enables the real-time execution of large numbers of database transactions by large numbers of people, typically over the internet. A database transaction is a change, insertion, deletion, or query of data in a database.
* For analytical loads, data lakes, data warehouses, data marts, there’s another list of databases. Google BigQuery, Amazon Redshift, Snowflake, Azure Data Warehouse, and others are among the most prominent database management systems for data warehouses. A company's choice of data warehouse is usually dictated by the cloud service provider it uses. If a company's infrastructure is hosted on AWS, for example, they will almost certainly want to use Amazon Redshift as their data warehouse to eliminate friction.

*	Others
Different use cases necessitate various solutions. For example, geospatial data requires geospatial databases like PostGIS; time-series data sometimes requires specialized time-series databases like InfluxDB or TimescaleDB.

Document-oriented databases, key-value stores have made their place in the database ecosystem by offering something that relational database had struggled to offer for the longest period of time, i.e., the ability to store, retrieve and analyze semi-structured and unstructured data efficiently.

Then there are graph databases, in-memory data stores, and full-text search engines — which are solutions for particular problems. 

* The major eight are: MongoDB, InfluxDB, neo4j, Redis, Elasticsearch, CosmosDB, DynamoDB, Cloud Datastore.

*	Infrastructure
Data engineers should be able to resolve operational issues concerning the infrastructure — databases, data pipelines, data warehouses, orchestrators, storage, etc. in whatever stack they are using.
The two big Infrastructure-as-Code tools are Terraform and Pulumi.

*	CI/CD  Continuous Integration/Continuous Deployment
Continuous integration and continuous deployment pipelines are conventional approaches to deliver infrastructure, SQL scripts, and Spark code. Many people have realized the dangers of doing so, often after years of suffering from inadvertent human errors.
The Big Four Jenkins, AWS CodePipeline, Google Cloud Build, Azure DevOps.

*	Testing
Manual data testing is inefficient and, basically, impossible to accomplish at scale. Without proper testing, any project is at risk of catastrophic failure. So, the best way out is to automate the tests. Any of the automation test frameworks available for testing backend code also works for testing Data Engineering components. You can also use tools like dbt for automation testing. Otherwise, widely used tools like Cucumber, Gherkin for BDD are available. The two big tool testing tools are Pytest and JUnit. 

*	Languages
The most widely used are SQL, Python and Java.

*	Source Control
Source Control allows you to manage changes to database schema and static data alongside application code. For example, SQL Source Control plugs into SQL Server Management Studio (SSMS) and links your databases to an existing version control system, such as Git, TFS or Subversion. 
Source control everything. The pipelines, the database DDLs, the orchestrator code, test cases. Everything.


# CONCLUSION
The modern stacks in data engineering are summarized in the following:
*	Data Source: This where your data come from.

*	Data ingestion: This is how data from your data source is transported to your data store and standardized.

*	Data Storage: This is where all the data coming in from the data sources is aggregated and stored.

*	Data Transformation and Modelling: Data transformation and modeling aid in the packaging of many data sources into user-friendly models, allowing individuals to examine these merged sets without having to search through raw data and infer what they represent. Notable companies in this space are dbt and Dataform.

*  Data Analytics: Data analytics, often known as "data visualization" or "business intelligence," allows users to explore and discover insights in their data. This usually include creating visualizations or other representations, as well as the creation of dashboards and other monitoring tools.

 * Data Operationalization: Data operationalization, often known as "Reverse ETL," is the process of moving data from a data warehouse back into third-party systems to make it operational. For instance, syncing client data from your warehouse into your customer service software so that your frontline personnel can provide better service.
Census and Hightouch are two notable companies in this field.


 ## Do an extensive comparison on the different use cases for different kinds of databases. Create a detailed readme file and raise a PR.

# A COMPARISON OF DIFFERENT USE CASES FOR DIFFERENT DATABASES
There are different DBMS, and they are categorized under:
*	Relational Database Management Systems
*	Hierarchical Database Systems
*	Network Database Systems
*	Object-Oriented Database Systems
*	NoSQL Database Systems

Depending upon your specific needs, one of these models above can be used.
*	Relational Database Management Systems
In this model, data is organized in rows and column structure i.e., two-dimensional tables and the relationship is maintained by storing a common field. It consists of three major components.
In relational model, three key terms are heavily used such as relations, attributes, and domains. A relation is nothing but a table with rows and columns. The named columns of the relation are called as attributes, and finally the domain is nothing but the set of values the attributes can take.

## Terminology used in Relational Model
* Tuple: Each row in a table is known as tuple.
* Cardinality of a relation: The number of tuples in a relation determines its cardinality. In this case, the relation has a cardinality of 4.
* Degree of a relation: Each column in the tuple is called an attribute. The number of attributes in a relation determines its degree. The relation in figure has a degree of 3.
Keys of a Relation
* Primary key - it is the key that uniquely identifies a table. It doesn’t have null values.
* Foreign key - it refers to the primary key of some other table.it permits only those values which appear in the primary key of the table to which it refers.

Some of the example of relational database are as follows.
Oracle: Oracle Database is commonly referred to as Oracle RDBMS or simply as Oracle. It is a multi-model database management system produced and marketed by Oracle Corporation.
MySQL: MySQL is an open-source relational database management system (RDBMS) based on Structured Query Language (SQL). MySQL runs on virtually all platforms, including Linux, UNIX, and Windows.
Microsoft SQL Server: Microsoft SQL Server is an RDBMS that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.
PostgreSQL: PostgreSQL, often simply Postgres, is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.
DB2: DB2 is an RDBMS designed to store, analyze, and retrieve data efficiently.
SQL (Structured Query Language) or See-Quel is the standard query language for Relational Databases. SQL works on queries like insert, search, update, and delete database records.



Advantage of Relational Database Models
* Relational model is one of the most popular used database model.
*  In relational model, changes in the database structure do not affect the data access.
*  The revision of any information as tables consisting of rows and columns is much easier to understand.
*  The relational database supports both data independence and structure independence concept which makes the database design, maintenance, administration and usage much easier than the other models.
* In this we can write complex query to accesses or modify the data from database.
* It is easier to maintain security as compare to other models.

Disadvantages of Relational Database Models
* Mapping of objects in relational database is very difficult.
* Object oriented paradigm is missing in relation model.
* Data Integrity is difficult to ensure with Relational database.
* Relational Model is not suitable for huge database but suitable for small database.
* Hardware overheads are incurred which make it costly.
* Ease of design can lead to bad design.
* Relational database system hides the implementation complexities and the physical data storage details from the users.

##	Hierarchical Database Systems
In a hierarchical database model, the data is organized into a tree-like structure. In simple language we can say that it is a set of organized data in tree structure. The windows registry used in Windows XP is an example of a hierarchical database.


## Advantages of Hierarchical Database Model
* The model allows us easy addition and deletion of new information.
* Data at the top of the Hierarchy is very fast to access.
* It worked well with linear data storage mediums such as tapes.
* It relates well to anything that works through a one-to-many relationships. For example, there is a president with many managers below them, and those managers have many employees below them, but each employee has only one manager.

## Disadvantages of Hierarchical Database Model
* It requires data to be repetitively stored in many different entities.
* Now a day there is no longer use of linear data storage mediums such as tapes.
* Searching for data requires the DBMS to run through the entire model from top to bottom until the required information is found, making queries very slow.
* This model support only one to many relationships, many to many relationships are not supported.

##	Network Database Systems
Network database model organized data more like a graph and can have more than one parent node. The network model is a database model conceived as a flexible way of representing objects and their relationships.


## Advantages of Network Databases
* The network model is conceptually simple and easy to design.
* The network model can represent redundancy in data more effectively than in the hierarchical model.
* The network model can handle the one to many and many to many relationships which is real help in modelling the real-life situations.
* The data access is easier and flexible than the hierarchical model.
* The network model is better than the hierarchical model in isolating the programs from the complex physical storage details.

## Disadvantage of Network Databases
* All the records are maintained using pointers and hence the whole database structure becomes very complex.
* The insertion, deletion and updating operations of any record require the large number of pointers adjustments.
* The structural changes to the database is very difficult.

##	Object-Oriented Database Systems
An object database is a system in which information is represented in the form of objects as used in object-oriented programming. Object oriented databases are different from relational databases which are table-oriented. The object-oriented data model is based on the object-oriented- programming language concept, which is now in wide use. Inheritance, polymorphism, overloading. object-identity, encapsulation and information hiding with methods to provide an interface to objects, are among the key concepts of object-oriented programming that have found applications in data modelling. The object-oriented data model also supports a rich type system, including structured and collection types.
 
## Advantages of Object-oriented Databases
Object database can handle different types of data while relational data base handles a single data. Unlike traditional databases like hierarchical, network or relational, the object-oriented databases can handle the different types of data, for example, pictures, voice video, including text, numbers and so on.
* Object-oriented databases provide us code reusability, real world modelling, and improved reliability and flexibility.
* The object-oriented database is having low maintenance costs as compared to other model because most of the tasks within the system are encapsulated, they may be reused and incorporated into new tasks.

## Disadvantages of Object-oriented Databases
* There is no universally defined data model for an OODBMS, and most models lack a theoretical foundation.
* In comparison to RDBMSs the use of OODBMS is still relatively limited.
* There is a Lack of support for security in OODBMSs that do not provide adequate security mechanisms.
* The system more complex than that of traditional DBMSs.

##	NoSQL Databases
NoSQL databases is a data storing and retrieval system. It's also known as a non-SQL or non-relational database because it accesses and manages data using several data models.
In real-time online applications and large data sets, NoSQL databases are used. They may also support SQL-like queries. It's for this reason that it's also known as Not Only SQL.
Features: flexibility, scalability, high-performance, and highly functional APIs.

### List of NoSQL Databases
* Redis: stands for REmote Dictionary Server. It is composed in ANSI C language, authorized under BSD, and is famous for a key-value store.Its an open-source database.It is an in-memory but persistent on-disk database.
* Amazon DynamoDB: uses a NoSQL database model, allows documents, graphs & columnar amount of data models.
* Couchbase: it’s a NoSQL document database for interactive web applications. Comes with a flexible data model, is easily scalable, and offers consistently high performance.
* MongoDB: open-source and document-oriented NoSQL database. Uses JSON like documents to share the data and is written in C++.MongoDB is a very popular and highly scalable database.
* Cassandra: it was developed at Facebook for inbox search. It is a distributed data storage system to handle large amounts of structured data. Cassandra is written in Java. It offers Cassandra Query Language (CQL), a SQL-like language for querying the Cassandra Database.
* Oracle NoSQL: it implements a map from user-defined keys to opaque data items.
* Apache HBase: distributed and non-relational Hadoop database ideally suited for storing Big data. Designed for the BigTable database by Google.
* RavenDB: it is a NoSQL document database. Offers a fully-transactional (ACID) data integrity across multiple documents.
* Memcached: it is another popular in-memory key-value database.It is again open-source and has high-performance.


### When to use NoSQL Database
In the following cases, it will be ideal to use a NoSQL DB:
1. To handle a large amount of data. The data can be anything: structured, semi-structured, or unstructured.
2. If you have local data transactions that need not to be durable.
3. When you are required to follow modern software development practices.
4. If you need to do object-oriented programming.
5. If you are using schema-less data.
6. If you want to have economical yet efficient architecture.
7. If a relational database is not able to scale up the traffic in your budget.

## PROS of NoSQL:
*	NoSQL is capable of handling and storing a large amount of data with little or no structure.
*	It is economical and easy to install. There is no need to increase the hardware for scaling. More data can be processed at a minimum cost.
*	NoSQL offers flexible scalability. It can work with low-cost hardware.
*	NoSQL systems are capable of achieving high-level performances by limiting the range of what databases can do.
*	It is low-cost and open source. Thus, NoSQL offers economical solutions for small enterprises.
*	No need for detailed database modeling that will save you a lot of time.
*	The ability of horizontal scaling. It is possible to add more inexpensive servers when your data requires more storage and connect them to the database clusters (horizontal scaling).
CONS of NoSQL
*	Inevitable consistency. NoSQL comes at the cost of relaxing ACID properties. You cannot learn enough about the semantics of the database due to the broad interpretation of ACID.
*	Relatively less community support from vendors as compared to relational databases.
*	Lack of standardization which creates problems during migration.
*	Lack of flexibility in access patterns.
*	NoSQL models were created for modern web applications. Hence it offers less analytic features for normal web applications.


 
