Question: Explain the steps in data engineering

Attempt:
First what is data engineering?
Data engineering is a set of operations aimed at creating interfaces and mechanisms for the flow and access of information. Data engineers ensure that data is available for data scientist and analyst through the creation of automated pipelines

Steps involved in data engineering include:
a. Extract: This retriving of incoming data. Raw data is dealt with the beginning of the pipeline from numeroud sources, so what this step entails is to write lines of codes that run on a schedule extracting all the data gathered during a certain period
b. Transform: Upon extraction of data, it is not always in a useable format, so the data engineer again goes to work to render it in the correct format. The essence of which can not be overemphasized as it improves data discoverability and usability
c. Load:The transformed data is now loaded (saved) in a destination usually a relational database management system (RDBMS), a data warehouse or hadoop. Each storage option has it own use and reliability

Extract

During the extraction process, data engineers define the data and its source:

Define the data source: Identify source details such as the resource group, subscription, and identity information such as a key or secret.

Define the data: Identify the data to be extracted. Define data by using a database query, a set of files, or an Azure Blob storage name for blob storage.

Transform

Define the data transformation: Data transformation operations can include splitting, combining, deriving, adding, removing, or pivoting columns. Map fields between the data source and the data destination. You might also need to aggregate or merge data.

Load

Define the destination: During a load, many Azure destinations can accept data formatted as a JavaScript Object Notation (JSON), file, or blob. You might need to write code to interact with application APIs.
Azure Data Factory offers built-in support for Azure Functions. You'll also find support for many programming languages, including Node.js, .NET, Python, and Java. Although Extensible Markup Language (XML) was common in the past, most systems have migrated to JSON because of its flexibility as a semistructured data type.