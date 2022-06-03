# MODERN STACKS IN DATA ENGINEERING
Quite simply, the modern data stack (MDS) is a set of tools hosted in the cloud that enables an organization to perform a highly efficient data integration. MDS creates clean, trustworthy, and always available data that can empower business users to make self-service discoveries, enabling a truly data-driven culture. 

The MDS is comprised of multiple layers stacked on top of each other and each layer has its own function



### Databases
It’s a structured system to put your data in that imposes rules upon that data, and the rules are yours because the importance of these problems changes based on your needs. 
The DBMS is the software that would be installed on your personal computer or on a server, then you would use it to manage one or more databases.

The database has your actual data and the rules about that data, while the DBMS is the program that surrounds and manages your actual data, and it enforces the rules you specified on your data. The rules for example could be the type of the data, like integer or string, or the relationship between them.
Even with the bursting on the scene of many unconventional databases, the first thing that comes to mind when we talk about databases is still relational databases and SQL.

All relational databases, more or less, work in the same way. Internal implementation differs, obviously. It’s more than enough to be skilled in one or two of the four major relational databases — Oracle, MySQL, Microsoft SQL Server, and PostgreSQL. 

### Data ingestion
This is where the data is transported from various sources (databases, server logs, third-party apps, etc) into a storage medium. Examples are Fivetran, airbyte, Event hub

### Data storage
A data warehouse or a data lake (or a lakehouse!) is a (typically cloud-based) solution that is used to store all the collected data sent from the data ingestion tool. Data warehouses have a different set of database management systems, the most popular out of which are Google BigQuery, Amazon Redshift, Snowflake, Azure Data Warehouse, etc. The choice of a data warehouse usually defaults to the cloud service provider a company is using. For instance, if a company’s infrastructure is on AWS, they’d surely want to use Amazon Redshift as their data warehouse to reduce friction. Here the data can be accessed and analyzed.

### Data transformation
Once the raw data has been moved into storage, it will need to be transformed into user-friendly data models. This is where the ETL(extract, transform, load) pipelines come into play.

In ETL, all things considered, SQL has been the best option for doing ETL to date. There’s also a host of fully managed ETL solutions provided by companies dedicated to data integration and ETL. Some of them are Fivetran, Panoply and Stitch. Most of these tools are purely scheduled or triggered SQL statements getting data from one database and inserting it into another. 
 
 Data transformation allows the analysts or data scientists to easily query the data to extract insights, build dashboards or even ML models. Example of tools are EasyMorph, Airflow, DBT.

### Data analytics/ business intelligence
Here the data is analyzed and dashboards are created for users to explore the data. Modern data analytical tools have also been designed with non-technical users in mind. This empowers domain experts to answer business questions without depending on developers and analysts. Example tools: Looker, Power BI, ThoughtSpot.


### Cloud
With the mainstreaming of cloud computing with cloud service providers like AWS, Azure, and Google Cloud, infrastructure has been democratised to a great degree. Smaller companies don’t have to worry about CapEx incurred from infrastructure anymore. A host of exceptional services by all the major providers are available, which charge on a pay-what-you-use basis. Companies have moved to the serverless computing model where the infrastructure is up only when the compute & memory are needed. Persistent storage is a separate service.

### Infrastructure Provisioning and Maintenance
For provisioning infrastructure and maintenance, there are several cloud platform-independent tools like Pulumi and Terraform are available in the market. Platform-specific tools like CloudFormation (for AWS) have also seen wide acceptance. Infrastructure-as-Code tools. IaC comes with its own benefits like the ease of implementing immutable infrastructure, increased speed of deployment and so on.


### Orchestration
Airflow has been the obvious choice for an orchestrator in the last two to three years for more engineering-centric teams. Cloud platforms have their own orchestrators. For instance, with AWS, you can use a mix of Glue, Step Functions and Lambda. Google Cloud offers implemented a fully-managed cloud version of Airflow called Cloud Composer. Azure also offers similar services.


### CI/CD
Whether deploying infrastructure or SQL scripts, or Spark code, continuous integration and continuous deployment pipeline are standard ways to do it. The popular tools are  Jenkins, AWS CodePipeline, Google Cloud Build, Azure DevOps.

### Testing
The whole point of the data engineering exercise is to make the data available to data scientists, data analysts, and business people. Without proper testing, any project is at risk of catastrophic failure. Manual testing of data is highly inefficient, and, honestly, it isn’t doable at scale.

So the best way out is to automate the tests. Any of the automation test frameworks available for testing backend code also works for testing Data Engineering components. You can also use tools like dbt for automation testing. Otherwise, widely used tools like Cucumber, Gherkin for BDD are available. Pytest, JUnit and others can also be used.

### Data governance
#### Data catalogues and governance
Allows organizations to keep track and make sense of their data which helps in data discoverability, quality, and sharing. Without these tools, the data lake can easily become a data swamp.
#### Data privacy and access governance
These tools help an organization to stay legally compliant when it comes to data protection. Problems such as data breaches of sensitive data can be mitigated.
Example tools: Atlan, Immuta, Informatica