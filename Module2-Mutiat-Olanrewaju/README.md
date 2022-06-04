# 1. Explain the processes in data engineering
The processes used by data engineers in data engineering is called ETL (Extract, Transform and Load) process<br><br>

- **Extract**: This is the step where data can be compared to land. It is the stage that requires data collecting and gathering from various sources. E.g. a upstream source could be machine or user-generated logs, relational database copy, external dataset … etc. Upon available, the data is transport from their source locations to further transformations.
<br>
- **Transform**: The data is then being transformed and cleaned by applying algorithms and performing actions such as filtering, grouping, and aggregation to convert raw data into analysis-ready datasets. This step requires significant amount of business understanding and domain knowledge.
<br>
- **Load**: Lastly, the processed data is loaded and transported to a final destination which can databases used for analysis and reporting. Often, this dataset can be either consumed directly by end-users or it can be treated as yet another upstream dependency to another ETL job, forming the data lineage. 
<br><br>


# 3. List and explain modern stacks in data engineering 
The modern data stack for data engineering is focused on giving data engineers the tools they need to build more complex data products in a way that’s maintainable, reliable, and scalable. 

-  **Database** <br>
OLTP-based relational databases are meant for transactional loads. Examples are Oracle, MySQL, MS SQL Server, PostgreSQL. For analytical loads, data lakes, data warehouses, data marts, there’s another list of databases which include Google BigQuery, Amazon Redshift, Snowflake, Azure Data Warehouse etc.

- **Cloud** <br>
With the mainstreaming of cloud computing with cloud service providers like AWS, Azure, and Google Cloud, infrastructure has been democratised to a great degree. Companies have moved to the serverless computing model where the infrastructure is up only when the compute & memory are needed. As a Data Engineer who’s supposed to be working on AWS, the knowledge of S3 & EBS (for storage), EC2 & EMR (for computing & memory), Glue & Step Functions & Lambda (for orchestration) and more are important. The same goes for other cloud providers.

- **ETL** <br>
SQL has been the best option for doing ETL process to date. Recently, many other technologies like Spark have come into space where more compute & memory gives you quicker results by exploiting the principles of MPP computing.

- **Infrastructure** <br>
For provisioning infrastructure and maintenance, there are several cloud platform-independent tools like Pulumi and Terraform are available in the market. Platform-specific tools like CloudFormation (for AWS) have also seen wide acceptance.

- **Continuous Integration (CI) and Continuous Deployment** <br>
Whether deploying infrastructure or SQL scripts, or Spark code, continuous integration and continuous deployment pipeline are standard ways to do it. This can be done with Jenkins, AWS CodePipeline, Google Cloud Build, Azure DevOps.

- **Testing** <br>
The main reason for the data engineering exercise is to make the data available to data scientists, data analysts, and business people. Without proper testing, any project is at risk of catastrophic failure. Manual testing of data is highly inefficient and the best way out is to automate the test. Any of the automation test frameworks available for testing backend code also works for testing Data Engineering components and these include Cucumber, Pytest JUnit etc.

- **Source Control**  <br>
Source control like Github, GitLab, BitBucket and more can be used to store and organise the pipelines, the database DDLs, the orchestrator code, test cases and everything.

- **Programming Language** <br>
Even though  Python should be the obvious answer to which language data engineers use, there is a host of technologies built on Java & Scala. The whole Hadoop ecosystem is based on Java. Talend, the orchestrator + ETL tool, is also written in Java. It can be said that the most common programming language for data engineers are Python, Java and SQL. <br><br>

# 4. An extensive comparison on the different use cases for different kinds of databases
Databse is an organized collection of interrelated data stored in a computer.

There are different kind of databases which include 
- SQL or See-Quel for relational databse and
- NoSQL for non-relational database which uses a variety of data models for accessing and managing the data. They may support SQL-like queries as well.

Colons can be used to align columns.

| SQL Database     |  NoSQL Database  | 
| ------------------|    -------------:|
It is vertically scalable | Horizontally scalable
It's a relational database management system | It's a distributed maanagement system
Best for complex queries | Not good for complex queries because of its powerful limitation
Fixed or static schema | Dynamic schema
ACID (Atomicity, Consistency, Isolation and Durability) is the used standard | Base (Basically Available, Soft state, Eventually consistent) is the used standard 
Vendors offer excellent support | Rely mostly on community support
Focus on defining and manipulating of data | Focused on the collection  of documents
Examples are SQL, MySQL, PostgreSQL | Examples are MongoDB, Cassandra, Redis, Amazon Dynamic DB



NoSQL is ideal to be used in the following use case: <br>
- To handle a large amount of data. The data can be anything: structured, semi-structured, or unstructured.
- For economical yet efficient architecture.
- For schema-less data..
- For local data transactions that need not to be durable.
- For object-oriented programming.
- In a case of a relational databas not able to scale up the traffic in the budget.