from zeep import Client

client = Client(wsdl='https://doc.s3.amazonaws.com/2006-03-01/AmazonS3.wsdl')

class S3_Bucket():
    def __init__(self, Bucket, AWSAccessKeyId, Timestamp, Signature):
        self.Bucket = Bucket
        self.AWSAccessKeyId = AWSAccessKeyId
        self.Timestamp = Timestamp
        self.Signature = Signature
    def CreateBucket(self):
        print("Bucket was successfully created")
        
class Ingest(S3_Bucket):
    def __init__(self, Bucket, Key, Metadata, ContentLength, AccessControlList, StorageClass,
                 AWSAccessKeyId, Timestamp, Signature, Credential):
        super().__init__(Bucket, AWSAccessKeyId, Timestamp, Signature)
        self.Key = Key
        self.Metadata= Metadata 
        self.ContentLength = ContentLength
        self.AccessControlList = AccessControlList
        self.StorageClass = StorageClass
        self.Credential= Credential
    def PutObject(self):
        print("Object was successfully addedd to the bucket")
        
class extract(Ingest):
    def __init__(self, Bucket, Key, GetMetadata, GetData, InlineData,
                 AWSAccessKeyId, Timestamp, Signature, Credential):
        super().__init__(Bucket, Key, AWSAccessKeyId, Timestamp, Signature, Credential)
        self.GetMetadata = GetMetadata
        self.GetData = GetData
        self.InlineData = InlineData
    def GetObject(self):
        print("Object successfully downloaded")