# **DATA ENGINEERING PROCESSES**
Data engineering is the practice designing and building systems for collecting, storing and analyzing data at scale. It is a broad field with applications in just about every industry. orgaisations have the ability to collect massive amounts of data, and they need the right people and technology to ensure that the data is in a highly usable state by the time it reaches the data scientists and analysts.

 Data engineering process involves using different data storage and manipulation tools together to build and maintain data pipelines while you integrate the operation of big data. So a data engineer should have a deep understanding of many data technologies to be able to choose the right ones for a certain job:

 ### **Registration with cloud providers** ##
This where all your data infrasture would be situated. Cloud providers like Azure, AWS and GCP have exceptional services available that charge on a pay-as-you-go bases. All you have to do is pick a cloud provider of your choice, create an account and pick the services that align with your business.  

### **Acquire datasets that align with business needs** ###
 After the data engineer has been briefed about the company's objective and business goal, the next step is to get the right datasets from different sources that would be useful for the business. This can be done by conecting to specific database server you need. The datasets gotten would be stored in your own database for easy access and use later.  This process is known as **Data Ingestion**

### **Develop algorithmms to transform data into useful, actionable information** ### 
This is where the ETL pipeline comes into play. The full meaning is Extract, Transform, Load. With a tool like Airflow, we can extract data from our database. The extracted data is transformed in order to match the schema of the target location and to remove inaccurate, out of date and duplicate information. The transformed data is loaded into the target location usually a data warehouse or data lake. This process is an automated process known as **Data Transformation**


### **Testing and maintaining database pipeline architecture** ###
 The whole point of the data engineering exercise is to make the data available to data scientists, data analysts, and business people. Without proper testing, any project is at risk of catastrophic failure. A tool like Pytest can be used

