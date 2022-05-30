# Creation of template in Aws Console
{
    "AWSTemplateFormatVersion": "2010-09-09",
    "Metadata": {
        "AWS::CloudFormation::Designer": {
            "82041938-4632-4af0-ae4b-b504cfe05be2": {
                "size": {
                    "width": 60,
                    "height": 60
                },
                "position": {
                    "x": 690,
                    "y": 70
                },
                "z": 0,
                "embeds": []
            },
            "b699ddad-378f-4b9e-bb10-7a4ceb66c4e7": {
                "size": {
                    "width": 60,
                    "height": 60
                },
                "position": {
                    "x": 550,
                    "y": 110
                },
                "z": 0,
                "embeds": []
            }
        }
    },
    "Resources": {
        "EC2Instance": {
            "Type": "AWS::EC2::Instance",
            "Properties": {},
            "Metadata": {
                "AWS::CloudFormation::Designer": {
                    "id": "82041938-4632-4af0-ae4b-b504cfe05be2"
                }
            }
        },
        "S3Bucket": {
            "Type": "AWS::S3::Bucket",
            "Properties": {},
            "Metadata": {
                "AWS::CloudFormation::Designer": {
                    "id": "b699ddad-378f-4b9e-bb10-7a4ceb66c4e7"
                }
            }
        }
    }
}