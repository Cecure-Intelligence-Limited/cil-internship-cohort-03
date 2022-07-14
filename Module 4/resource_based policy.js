{
    "Version": "2012-10-17",
    "Id": "default",
    "Statement": [
      {
        "Sid": "f2917432-775c-5d53-9206-199b544102d8",
        "Effect": "Allow",
        "Principal": {
          "Service": "apigateway.amazonaws.com"
        },
        "Action": "lambda:InvokeFunction",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "ArnLike": {
            "AWS:SourceArn": "arn:aws:execute-api:us-east-1:736357471058:d741bgync0/*/*/Cil_Amarachi_Get"
          }
        }
      },
      {
        "Sid": "84ad64b9-4ce0-5004-ab2d-2b2bba4d8de8",
        "Effect": "Allow",
        "Principal": {
          "Service": "apigateway.amazonaws.com"
        },
        "Action": "lambda:InvokeFunction",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "ArnLike": {
            "AWS:SourceArn": "arn:aws:execute-api:us-east-1:736357471058:d741bgync0/*/*/Cil_Amarachi_Head"
          }
        }
      },
      {
        "Sid": "ba93a785-b6af-50cd-a2c5-74cb75bd6ac4",
        "Effect": "Allow",
        "Principal": {
          "Service": "apigateway.amazonaws.com"
        },
        "Action": "lambda:InvokeFunction",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "ArnLike": {
            "AWS:SourceArn": "arn:aws:execute-api:us-east-1:736357471058:d741bgync0/*/*/Cil_Amarachi_Post"
          }
        }
      },
      {
        "Sid": "lambda-adb2bfaf-5197-46e4-ad79-64a4f1ac90b7",
        "Effect": "Allow",
        "Principal": {
          "Service": "events.amazonaws.com"
        },
        "Action": "lambda:InvokeFunction",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "ArnLike": {
            "AWS:SourceArn": "arn:aws:events:us-east-1:736357471058:rule/Cil_Amarachi_Event"
          }
        }
      },
      {
        "Sid": "lambda-1ec4eb65-b15c-4dee-8e65-1315ef32860a",
        "Effect": "Allow",
        "Principal": {
          "Service": "s3.amazonaws.com"
        },
        "Action": "lambda:InvokeFunction",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "StringEquals": {
            "AWS:SourceAccount": "736357471058"
          },
          "ArnLike": {
            "AWS:SourceArn": "arn:aws:s3:::cil-amarachi-s3"
          }
        }
      },
      {
        "Sid": "FunctionURLAllowPublicAccess",
        "Effect": "Allow",
        "Principal": "*",
        "Action": "lambda:InvokeFunctionUrl",
        "Resource": "arn:aws:lambda:us-east-1:736357471058:function:Cil_Amarachi_Lambda",
        "Condition": {
          "StringEquals": {
            "lambda:FunctionUrlAuthType": "NONE"
          }
        }
      }
    ]
  }