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
        

# accessing the AmazonS3 class and assigning value
my_class = AmazonS3('accessKey','2022-06-24T13:37:05.183Z','secretKey')

# create bucket in the s3 with the shehu-cil-bucket
my_class.create_bucket('shehu-cil-bucket','accessKey','2022-06-24T16:34:05.183Z','secretKey')

# put object file name shehu_doc.json in the bucket shehu-cil-bucket
my_class.data_inesting('Shehu-cil-bucket', 'shehu_doc.json', {'Name': 'shehu yusuf', 'Value':'25'}, 2,'accessKey','2022-06-24T16:34:05.183Z',
                       'secretKey', 'soupapi_policy')

# get the oject file shehu_doc.json from bucket shehu-cil-bucket
my_class.data_extracting('Shehu-cil-bucket', 'shehu_doc.json', True, True, True,'accessKey','2022-06-24T16:34:05.183Z',
                         'secretKey', 'soupapi_policy')
                         