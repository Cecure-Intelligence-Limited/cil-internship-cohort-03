#	Question 1. Explain the difference between cloud data engineering and Data engineering.

# Data engineering / Cloud data engineering

Involve the design, construction, maintenance, extension and organized the infrastructure that supports data pipelines to ensure a solid foundation of data for use in business-critical analytics or reporting.
>>	Infrastructure is composed of the hardware, software, networking and facilities.
>>	Data pipeline is a system that consists of independent programs that do various operations on incoming or collected data.

*Cloud Data Engineering* 
Is infrastructure focused and work mostly on the cloud side by creating scalable and optimized data pipelines on the cloud where data is being collected from various data sources to store in a storage pool and applied the transformation on the fly to make the data available for the downstream system.
>>	Managed cloud-based data platforms using DevOps tools

Data Engineering 
Is infrastructure focused and work mostly on-premise by designing and building system, setting up hardware and software infrastructure to scaling for collecting, storing, moving and analyzing data.
>>	Managed data across multiple on-premise infrastructure

# List out the technologies used in these two cases.

+	Amazon S3 
+	AWS Glue
+	Amazon Redshift
+	Amazon Quicksight
+	Amazon DynamoDB
+	Amazon Kinesis Firehouse 
+	AWS Snowball
+	AWS Storage Gateway 
+	Amazon EMR
+	Amazon Athena
+	Relational Database 
+	NoSQL Database
+	SQL
+	Python 
+	Spark
+	Hadoop  
+	Java
+	Scala


# Question 2. Write a class for ingesting and extracting data from an s3 bucket. Use the AWS SoapAPI for s3

Inline 'code'

Indented code

    import zeep

    from zeep import Client

    client = Client(wsdl = 'https://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl')

class AmazonS3:

    def __init__(self, awsAccessKey, timestamp, signature, region = 'us-east-1'):
        self.awsAccessKey = awsAccessKey
        self.timestamp = timestamp
        self.signature = signature
        self.region = region
        
    def create_bucket(self, bucket_name, awsAccessKey, timestamp, signature):
        response = client.service.CreateBucket(Bucket = bucket_name, AWSAccessKeyId = awsAccessKey, Timestamp = timestamp,
                                           Signature = signature)
        
    def data_inesting(self, bucket_name, file_name, metadataEntry, length, awsAccessKey, timestamp, signature, my_policy):
        response = client.service.PutObject(Bucket = bucket_name, Key = file_name, Metadata = metadataEntry, ContentLength = length,
                                            AWSAccessKeyId = awsAccessKey, Timestamp = timestamp, Signature = signature, Credential = my_policy)
        
    def data_extracting(self, bucket_name, file_name, true, is_true, yes, awsAccessKey, timestamp, signature, my_policy):
        response = client.service.GetObject(Bucket = bucket_name, Key = file_name, GetMetadata = true, GetData = is_true, InlineData = yes,
                                            AWSAccessKeyId = awsAccessKey, Timestamp = timestamp, Signature = signature, Credential = my_policy)


// accessing the AmazonS3 class and assigning value
my_class = AmazonS3('accessKeyy','2022-06-24T13:37:05.183Z','secretKey')

// create bucket in the s3 with the shehu-cil-bucket
my_class.create_bucket('shehu-cil-bucket','accessKey','2022-06-24T16:34:05.183Z','secretKey')

// put object file name shehu_doc.json in the bucket shehu-cil-bucket
my_class.data_inesting('Shehu-cil-bucket', 'shehu_doc.json', {'Name': 'shehu yusuf', 'Value':'25'}, 2,'accessKey','2022-06-24T16:34:05.183Z',
                       'secretKey', 'soupapi_policy')

// get the oject file shehu_doc.json from bucket shehu-cil-bucket
my_class.data_extracting('Shehu-cil-bucket', 'shehu_doc.json', True, True, True,'accessKey','2022-06-24T16:34:05.183Z',
                         'secretKey', 'soupapi_policy')
                         

# QUESTION 3.	Explain some software engineering practices for Data Engineers.

Software engineer (infrastructure or platform engineers)
The maintenance of servers and systems that deliver information to the user, by building operating systems for user-facing applications, setting up networks, software testing and debugging, software configuration management and maintaining, software design and IT documentation. Data engineers build systems that can store consolidate and retrieve data that is required for the systems and applications built by software engineers.
 
1.	Enhance Code Readability
Professionally written code is clean and modular. It is easily readable, as well as logically structured into modules and functions. Using modules makes your code more efficient, reusable, and organized. With proper naming and a good structure, we make it easier for our future self and for other people who work with our code.
+	Make use of meaningful variable names
+	While naming your objects, try following PEP8 conventions
+	Do not use abbreviations that no one can understand
+	Do not hard code 
+	Include indentations & whitespaces properly


2.	Refactor Your Code
Refactoring is basically improving the structure of your code, without making modifications to its actual functionality.  If you have multiple blocks of code that do similar things, it is useful to refactoring them into a single function. Refactoring aims at reorganizing the internal structure of the code without altering its functionalities.

3.	Design your functions to do one thing
To make functions reusable, it is a good practice to write them in such a way that they do one thing. You can always have your main function that can tie together different pieces. In order to optimize your code, you need to make sure it executes the function quickly. As a failure of a single element can be easier identified and fixed. 
+	Do not repeat yourself
+	 Minimize functions & classes
+	Functions should only do one thing

4.	Test Your Code
Good testing practices not only ensure quality standards in software engineering, but also guide and shape the development process itself. Testing ensures the code gives the desired result and meets all necessary user requirements. If you are building a data pipeline that executes a series of operations, one way to make sure it performs according to what it is designed to do, is to write tests that check an expected behavior.

+	It improves the stability of the code and makes mistakes easier to spot
+	It prevents unexpected outputs
+	It helps to detect edge cases
+	It prevents from pushing broken code to production.

5.	Version Control
Version control refers to a software engineering framework that tracks all changes and synchronizes them with a master file stored on a remote server. An effective version control system is a key aspect of writing production code. Using a version control system can have a lot of perks. It can help you keep track of all the changes and allows you to roll back on any previous version of your code if required. The merge and pull requests make the team collaboration more efficient.
+	Keeping track of your changes
+	Rolling back to any previous version of the code
+	Efficient collaboration between team members via merge and pull requests
+	Increase of code quality
+	Code review
+	Assigning tasks to team members and monitoring their progress over time


6.	Logging
Monitor and track the progress of your code on every step after running its first version. Here is how you can use logging efficiently. 

+	Make use of different levels according to the messages that you want to log
+	Provide information in logs that helps in solving the related issues

Inline 'code'

Indented code

    import logging

    logging.basicConfig(filename='example.log',level=logging.DEBUG)
    logging.debug('This message should go to the log file')
    logging.info('So should this')
    logging.warning('And this, too')

7.	Documentation is key but only if done properly
Proper documentation of the code is necessary because it helps in the clarification of the complex parts. It can help you to correctly describe to others what the purpose of the code or its specific components is. To document WHY the code is doing what it is doing.

Indented code
   //putting data in the s3 bucket
     data_ingesting() 

8.	Think long-term

Trade-offs between doing things right and doing them fast, creating solutions that are general enough to be reused across different use cases, and that will make our lives easier long-term, take longer to develop.

