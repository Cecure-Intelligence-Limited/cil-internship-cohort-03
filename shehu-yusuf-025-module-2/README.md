
# Question 1. Explains data engineering process?

**Data engineering process** involve extracting data from source databases, transforming data to match a unified format for specific business purpose and loading reformatted data to the storage. The process of operations aimed at creating interfaces and mechanisms for the flow and access of information. End-user extract data from the database using transactional query and transform the data to a machine readable using algorithm then processed the data and load the data into a storage (data warehouse or data lake) for decision making or further processes.

Data engineering process is the automation of using an ETL pipeline to automatically pull data from all sources. It involves moving data from one system to another constantly supply of information into the data lake, repair failure, update the system by adding or deleting fields and adjust the schema to the changing needs of the business.

## ETL pipeline
+	Extract 
+	Transform 
+	Load 

1.	Extract _retrieving incoming data_ Extract data from different sources and integrate it in a unified storage where it is reformatted and kept ready for use.  It transports the data from the source location to further transformations.

2.	Transform _standardizing data_ Transform uses algorithms and performs action like filtering, grouping and aggregating to convert raw data into analysis-ready dataset. It is a critical function as it significantly improves data discoverability and usability.

3.	Load _saving data to a new destination_ Load the processed data and transport them to a final destination. Each destination has its specific practices to follow for performance and reliability.

**Data Warehouse** is a central repository where data is stored in query-able forms and optimized for reading, aggregating and querying large volumes of data.  

**Data Lake** is a vast pool for saving data in its native and unprocessed form. It uses the ELT approach swapping transform and load operations and support large storage and scalable computing.

End-user can connect to the data warehouse or lake and access the needed data in the convenient format and get valuable insights from it.1.	


# Question 2. Create a terraform template to provision a Lambda Function and a Step Function. attach the lambda function to the step function Deploy a lambda function with ansible. Raise a PR to main


+ Provision a lambda function using terraform

## code

Inline '
my_lambda.py

import os


def lambda_handler(event, context):
    return "{} from Lambda!".format(os.environ['address'])

provider "aws" {
  region = "${var.aws_region}"
  access_key = "shehu-yusuf"
  secret_key = "025"
}

provider "archive" {}

data "archive_file" "zip" {
  type        = "zip"
  source_file = "my_lambda.py"
  output_path = "my_lambda.zip"
}

data "aws_iam_policy_document" "policy" {
  statement {
    sid    = ""
    effect = "Allow"

    principals {
      identifiers = ["lambda.amazonaws.com"]
      type        = "Service"
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "cil_lambda" {
  name               = "cil_lambda"
  assume_role_policy = "${data.aws_iam_policy_document.policy.json}"
}

resource "aws_lambda_function" "lambda" {
  function_name = "my_lambda"

  filename         = "${data.archive_file.zip.output_path}"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"

  role    = "${aws_iam_role.cil_lambda.arn}"
  handler = "my_lambda.lambda_handler"
  runtime = "python3.9"

  environment {
    variables = {
      address = "Hello Hakeem, this is my cil lambda function"
    }
  }
} '

+ Provision a step function using terraform

Inline '
provider "aws" {
  region = "${var.aws_region}"
  access_key = "shehu-yusuf"
  secret_key = "025"
}
resource "aws_sfn_state_machine" "sfn_state_machine" {
  name     = "sfn_state_machine" 
  role_arn = "${aws_iam_role.cil_lambda.arn}"
  definition = <<EOF
  
  {
  
  "Comment": "this is my first cil-inters-step-function",
  "StartAt": "lambda",
   "States": {
      
     "lambda": {
       "Type": "Task",
       "Resource": "${aws_lambda_function.lambda.arn}",
       "End": true
      }
   }  
 }

 EOF
'
+ Attach the lambda function to the step function

Inline ' my_lambda.py

import os


def lambda_handler(event, context):
    return "{} from Lambda!".format(os.environ['address'])

provider "aws" {
  region = "${var.aws_region}"
  access_key = "AKIA2VHD6QPYB5U5F4I3"
  secret_key = "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"
}

provider "archive" {}

data "archive_file" "zip" {
  type        = "zip"
  source_file = "my_lambda.py"
  output_path = "my_lambda.zip"
}

data "aws_iam_policy_document" "policy" {
  statement {
    sid    = ""
    effect = "Allow"

    principals {
      identifiers = ["lambda.amazonaws.com"]
      type        = "Service"
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "cil_lambda" {
  name               = "cil_lambda"
  assume_role_policy = "${data.aws_iam_policy_document.policy.json}"
}

resource "aws_lambda_function" "lambda" {
  function_name = "my_lambda"

  filename         = "${data.archive_file.zip.output_path}"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"

  role    = "${aws_iam_role.cil_lambda.arn}"
  handler = "my_lambda.lambda_handler"
  runtime = "python3.9"

  environment {
    variables = {
      address = "Hello Hakeem, this is my cil attched lambda and step function"
    }
  }
}

resource "aws_sfn_state_machine" "sfn_state_machine" {
  name     = "sfn_state_machine" 
  role_arn = "${aws_iam_role.cil_lambda.arn}"
  definition = <<EOF
  
  {
  
  "Comment": "this is my first cil-inters-step-function",
  "StartAt": "lambda",
   "States": {
      
     "lambda": {
       "Type": "Task",
       "Resource": "${aws_lambda_function.lambda.arn}",
       "End": true
      }
   }  
 }

 EOF

} '


## Deploying a lambda function with ansible

> require document
>>> ansible, python, boto3, tree

+ Create terraform template and deploy ubuntu in my EC2 instance.

## Code

Inline 'provider "aws" {
  region  = "us-east-1"
  access_key = "shehu-yusuf"
  secret_key = "025"
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
} '


+ create EC2 instance using ansible

>> create IAMROLE and attache it to the EC2 instance runing
>> sudo vi /ect/ansible/hosts
  > [localhost]
  > local
  > cd ~
  > mkdir playbooks
  > cd playbooks
>> sudo vi shehu-yusuf.yml
 > code
  >> Inline '---
 - name:  provisioning EC2 instances using Ansible
   hosts: localhost
   connection: local
   gather_facts: False
   tags: provisioning

   vars:
     keypair: first_key
     instance_type: t2.micro
     image: ami-09d56f8956ab235b3
     wait: yes
     group: allow_web
     count: 1
     region: us-east-1
     security_group: allow_web
   
   tasks:

     - name: Task # 1 - Create my security group
       local_action: 
         module: ec2_group
         name: "{{ security_group }}"
         description: Security Group for webserver Servers
         region: "{{ region }}"
         rules:
            - proto: tcp
              from_port: 22
              to_port: 22
              cidr_ip: 0.0.0.0/0
            - proto: tcp
              from_port: 8080
              to_port: 8080
              cidr_ip: 0.0.0.0/0
            - proto: tcp
              from_port: 80
              to_port: 80
              cidr_ip: 0.0.0.0/0
         rules_egress:
            - proto: all
              cidr_ip: 0.0.0.0/0
       register: basic_firewall
     - name: Task # 2 Launch the new EC2 Instance
       local_action:  ec2 
                      group={{ security_group }} 
                      instance_type={{ instance_type}} 
                      image={{ image }} 
                      wait=true 
                      region={{ region }} 
                      keypair={{ keypair }}
                      count={{count}}
       register: ec2
     - name: Task # 3 Add Tagging to EC2 instance
       local_action: ec2_tag resource={{ item.id }} region={{ region }} state=present
       with_items: "{{ ec2.instances }}"
       args:
         tags:
           Name: MyTargetEc2Instance '

    :wq!

    > sudo ansible-playbook shehu-yusuf.yml

    
    + Create Lambda functions

    sudo vi yusuf_lambda.yml

    > code
    >> Inline '# Create Lambda functions
tasks:
- name: looped creation
  lambda:
    name: '{{ item.name }}'
    state: present
    zip_file: '{{ item.zip_file }}'
    runtime: 'python3.9'
    role: 'aws_iam_role.cil_lambda.arn'
    handler: 'my_lambda.lambda_handler'
    vpc_subnet_ids:
    - subnet-10.0.1.40
    - subnet-10.0.1.40
    vpc_security_group_ids:
    - sg-allow_web
    - sg-allow_web
    environment_variables: '{{ item.env_vars }}'
  with_items:
    - name: HelloWorld
      zip_file: hello-code.zip
      env_vars:
        key1: "first_key"
        key2: "first_key"
    - name: ByeBye 
      zip_file: bye-code.zip
      env_vars:
        key1: "1"
        key2: "2"

# Basic Lambda function deletion
tasks:
- name: Delete Lambda functions HelloWorld and ByeBye
  lambda:
    name: '{{ item }}'
    state: absent
  with_items:
    - HelloWorld
    - ByeBye '

> sudo ansible-playbook yusuf_lambda.yml


# Question 3. List and explain modern stacks in data engineering

1.  Cloud-base data lake (Google BigQuery, Amazon Redshift, Snowflake, Azure Data Warehouse)
2.	Cloud transformation tool (Spark, DBT, Python, SQL) 
3.	Workflow orchestration tool (Airflow, Fivetran)
4.	Streaming system (Kafka, Flink)
5.	Infrastructure as Code (Terraform)
6.	CI/CD (continuous integration and continuous delivery/deployment)

> Cloud-base data lake (Google BigQuery, Amazon Redshift, Snowflake, Azure Data Warehouse)

>> **Amazon Redshift** is a fast, fully managed, and cost-effective data warehouse that gives you petabyte scale data warehousing and exabyte scale data lake analytics together in one service. Amazon Redshift is up to ten times faster than traditional on-premises data warehouses. It is parallel processing and compression algorithms allow users to perform operations on billions of rows, reducing command execution time significantly. Redshift is perfect for analyzing large quantities of data with todays business intelligence tools in multiple data warehouses.

>>**Google BigQuery** is an enterprise-grade serverless data warehouse for analytics. It empowers todays data analysts and data scientists to analyze data efficiently by creating a logical data warehouse into columnar storage and compiling data from object storage and spreadsheets. It has decoupled data locality and offers distinct storing and processing clusters. . BigQuery is a powerful solution to democratize insights, run analytics and analyze petabytes scale SQL queries. It differs from node-based cloud data warehousing solutions. It leverages technologies like Jupiter and Dremel to produce optimum performance.

>>**Snowflake** is a cloud-based data storage and analytics service provider. It is a warehouse-as-a-solution designed to cater to todays enterprises needs. It has built, perfected, and resurrected the data warehouse industry. Its innovative design has taken full advantage of the cloud. Snowflake is central data repository has access to data stored in compute nodes while it processes queries using massively parallel processing (MPP) compute clusters. Each node possesses a portion of the entire data set stored locally. The three-layered architecture includes Database Store, Query Processing and Cloud Services.

>>**Azure Data Warehouse** is a cloud based data warehouse that enables in creating and delivering a data warehouse. Azure Data Warehouse is capable of processing large volumes of relational and non-relational data. It provides SQL data warehouse capabilities on top of a cloud computing platform. it is built on massively parallel processing (MPP) architecture.

> Cloud transformation tool (Spark, DBT, Python, SQL)

>>**Spark** is an excellent ETL tool for Python-based automation for people and enterprises that work with streaming data. Growth in data volume is proportional to business scalability, making automation necessary and relentless with Spark ETL.

>> **DBT** is a command-line tool that allows data engineers, analysts, and scientists to model and transform data into a warehouse using SQL. DBT is the T in ELT. DBT is responsible for the transformation part of the modern data analytics stack. The software allows a seamless data transformation by simply taking the code and then compiling it to SQL and running parallel to the data warehouse.

>> **Python** is a high-level, object-oriented programming language commonly used to develop websites and software. Python applications are also seen in task automation, data analysis, and data visualization. With the ability to assemble a wide array of complex analytical functions like data visualizations, pie charts, histograms, line graph, bar graph and 3D plots. It has been adopted by accountants, scientists, data professionals, and others for various tasks

>> **SQL (Structured Query Language)** is a standardized programming language. SQL is utilized to manage and extract information from relational database. The primary purpose of knowing SQL is to write data integration scripts and run analytical queries to transform and use data for business intelligence. The DML language is employed to collect and manipulate data scripts, while the DDL language is used for defining and revising database structures. Some commonly used SQL queries and commands include select, add, insert, update, delete, create, alter and truncate.

> Workflow orchestration tool (Airflow, Fivetran)

>> **Airflow** is a modern platform that designs, creates, and tracks workflows. It is an open-source Google Cloud ETL tool. It supports integration with cloud services, including Google Cloud Platform, Azure, and AWS. It offers a user-friendly interface and provides clear visualization. Scaling becomes very easy with Airflow due to its modular structure. It key feature is automating scripts to perform tasks.

>> **Fivetran** is a managed data pipeline product that standardizes the process to replicate schemas from the source of your choice to a destination like Redshift, BigQuery, and many more. Fivetran uses the ELT approach to load data into a data warehouse. Which means loading happens before the transformation process.

> Streaming system (Kafka, Flink)

>> **Kafka** is an open-source distributed event streaming platform used by many companies to develop high-performance data pipelines, perform streaming analytics and data integration. It distributes data across multiple nodes for a highly available deployment within a single data center or across multiple availability zone.

>> **Flink** is an open source stream processing framework with powerful stream- and batch-processing capabilities. 

> Infrastructure as Code (Terraform)

>> A Terraform template is a collection of files that together define the state of your infrastructure to be achieved.  They include different configuration file such as modules, resources and variables. (Variables.tf, Outputs.tf, Main.tf, README.md).

> CI/CD (continuous integration and continuous delivery/deployment)

>> Is an operating principles and a set of practices that application development teams use to deliver code changes more frequently and reliably. By automating integration and delivery CI/CD lets software development teams focus on meeting business requirements while ensuring code quality and software security. Continuous delivery is an automated way to push code charges to those environments.

> Cloud (Google cloud and Azure, AWS  )

>> Google cloud and 
>> Azure 
  > > > Cloud composer

>> AWS 
 > > >	S3 & EBS (for storage)
 > > >	EC2 & EMR (for computing and memory),
 > > >	Glue, Step Functions and Lambda (for orchestration). 


# Question 4. Do an extensive comparison on the different use cases for different kinds of databases. create a detailed readme file and raise a PR

 ## h3 Making the choice between a Relational database (SQL) and Non relational database (NoSQL) is not always a straightforward decision. The right choice depends on specific data environment, current needs and future goals.

 +	Relational database focus on normalization and alleviating data redundancy, when data needed to fit into the predefined category of tables where schema, storage types and data types are present, and data is organized in rows and column structure. Relational database management system (Oracle, MySQL, MS SQL Server, PostgreSQL)

 +	Non-relational database (NoSQL or Not only SQL) is a mechanism for storage and retrieval of data that has continuous availability and strong resilience of horizontal scalability that can handle rapid growth and all types of data structured and unstructured from a variety of sources. They are extremely flexible and can seamlessly capture, integrate and analyze new data that is continuously flowing in. NoSQL databases are used in real-time web applications and huge data. NoSQL database management system ( MongoDB, InfluxDB, neo4j, DynamoDB, Cloud Datastore)

 > MySQL use cases involve managing real-time tweet and retweet counts. It can integrate with DevOps and Cloud environment also SQL, NoSQL can be combined through MySQL. MySQL is an open-source database with the largest community. It helps to scale database for cases like management applications where data is originated in a particular manner or structure as defined for implying organizational needs. It can easily share the data and can join the data from different tables to generate some data knowledge or pattern. 

 > MongoDB use cases involve around faster search operations, documented storage, and real-time metadata management. MongoDB is a JSON-based document database with indexing support. It can be used to store and search images faster. MongoDB have the ability to store, retrieve and analyze semi-structured and unstructured data efficiently.

 > Redshift provides a use case for mission-critical workloads as well as for extensive transactional logging. Redshift performs traditional data warehousing in a very smooth manner with the support of always-available service.

 > BigQuery provides best use case for fast SQL querying, massive data sets and a single view of data points on secure access. It provides the fastest and best results once the query is executed. Multi-level execution tree on thousands of servers can process data faster and join collectively at root. It provided SQL-like queries as well as ACID transactions.

 > Cassandra uses distributed node structure and nodes architecture to write at many distributed server nodes. Time series and IoT data can be easily maintained as it supported data partitioning and data can be accessed by a defined unique primary key. When there is a need to customize and load data on free peer-to-peer connection and scalability is required to expand by expanding nodes. Cassandra is the best fit. 

 > PaaS is the category in which the Azure SQL database stands, when more scalability is required on SQL database with no interruptions. Its ability to support flexible schema, along with its inherent support for storing huge amounts of data as distributed partitions. It can be used as a single database, elastic pool or as a managed instance.

 > it is best to use Oracle database when there is a need to put the development and testing of data on the cloud. As it provide more in- Memory capabilities to look into problem and technology advancements are also making transactions faster. Every update of Oracle databases contains new technology updates too.

 > Snowflake encrypts data by default, and semi-structured data can also be processed with SQL in a structured way. This use case increases the capability of where snowflake fits in. Migration and conversion are significant factors that tend to use SnowFlake.

 > Microsoft SQL Server is an RDBMS that supports a wide variety of transaction processing, business intelligence, and analytics applications in corporate IT environments.
 
 > PostgreSQL is an object-relational database management system (ORDBMS) with an emphasis on extensibility and standards compliance.  

 > DB2 is an RDBMS designed to store, analyze, and retrieve data efficiently. DB2 is faster and scalable database that increases the       performance of querying data. DB2 always fulfills the requirements of every use case. It has the inbuilt capability of intelligence that quickly adopts the elements and works according to them. 






