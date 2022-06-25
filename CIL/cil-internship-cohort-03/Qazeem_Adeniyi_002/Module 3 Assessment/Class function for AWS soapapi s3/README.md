# CREATION OF REUSABLE PYTHON CLASS FOR INGESTING AND EXTRACTING IN AWS USING SOAP API
- In order to access the SOAP API on python, I had to install zeep. Zeep is a fast and modern SOAP API client for python. Zeep inspects WSDL file and generates the corresponding code to use the services and types in the document.
- I passed in the AWS S3 Bucket wsdl file into the Client argument.
- I ran the command python "-mzeep 'https://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl" in the terminal to know the parameters that would be needed for the CreateBucket, PutObject and GetObject services available in AWS.
- The parameters were in turn passed in and also used to create the class attributes.
- Then, the methods were defined as well.