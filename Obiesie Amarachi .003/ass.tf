{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Metadata": {
        "AWS::CloudFormation::Designer": {
            "35f8a2f5-3e36-4535-9baa-a4feafba9ea3": {
                "size": {
                    "width": 60,
                    "height": 60
                },
                "position": {
                    "x": 440,
                    "y": 10
                },
                "z": 0,
                "embeds": []
            },
            "b2d1275e-399b-4fa4-a48a-151ed7851672": {
                "size": {
                    "width": 60,
                    "height": 60
                },
                "position": {
                    "x": 360,
                    "y": 90
                },
                "z": 0
            }
        }
    },
    "Resources": {
        "Lambda": {
            "Type": "AWS::Lambda::Function",
            "Properties": {},
            "Metadata": {
                "AWS::CloudFormation::Designer": {
                    "id": "35f8a2f5-3e36-4535-9baa-a4feafba9ea3"
                }
            }
        },
        "S3Bucket": {
            "Type": "AWS::S3::Bucket",
            "Properties": {},
            "Metadata": {
                "AWS::CloudFormation::Designer": {
                    "id": "b2d1275e-399b-4fa4-a48a-151ed7851672"
                }
            }
        }
    }
}