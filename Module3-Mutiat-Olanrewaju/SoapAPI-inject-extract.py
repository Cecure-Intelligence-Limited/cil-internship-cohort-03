# This is a soap API template that can be modified for personal used

# Zeep is a framework that allows us to access the AWS client
from zeep import Client

client = Client(wsdl='https://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl')


class AWS_S3_Bucket():
    def __init__(self, BucketName, AWSAccessKeyId, Timestamp, Signature):
        self.Bucket = BucketName
        self.AWSAccessKeyId = AWSAccessKeyId
        self.Timestamp = Timestamp
        self.Signature = Signature

    def BucketCreation(self):
        print("Bucket created successfully")

# Parameters needed to ingest data to the bucket are specified and inheritence was used to access the bucketName details

class IngestData(AWS_S3_Bucket):
    def __init__(self, BucketName, KeyID, Metadata, ContentLength, AccessControlList, StorageClass,
                 AWSAccessKeyId, Timestamp, Signature, Credential):
        super().__init__(BucketName, AWSAccessKeyId, Timestamp, Signature)
        self.Key = KeyID
        self.Metadata = Metadata
        self.ContentLength = ContentLength
        self.AccessControlList = AccessControlList
        self.StorageClass = StorageClass
        self.Credential = Credential

    def UploadObject(self):
        print("Object uploaded to bucket successfully")

# Double level inheritance used to access the IngestData and Bucket properties

class extract(IngestData):
    def __init__(self, BucketName, KeyID, GetMetadata, GetData, InlineData,
                 AWSAccessKeyId, Timestamp, Signature, Credential):
        super().__init__(BucketName, KeyID, AWSAccessKeyId, Timestamp, Signature, Credential)
        self.GetMetadata = GetMetadata
        self.GetData = GetData
        self.InlineData = InlineData

    def DownloadObject(self):
        print("Object successfully downloaded")
