{
    "sdkResponseMetadata": null,
    "sdkHttpMetadata": null,
    "partial": false,
    "permissionsBoundary": null,
    "policies": [
      {
        "arn": "arn:aws:iam::aws:policy/AmazonAPIGatewayInvokeFullAccess",
        "document": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "execute-api:Invoke",
                "execute-api:ManageConnections"
              ],
              "Resource": "arn:aws:execute-api:*:*:*"
            }
          ]
        },
        "id": "ANPAIIWAX2NOOQJ4AIEQ6",
        "name": "AmazonAPIGatewayInvokeFullAccess",
        "type": "managed"
      },
      {
        "arn": "arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess",
        "document": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Action": [
                "dynamodb:*",
                "dax:*",
                "application-autoscaling:DeleteScalingPolicy",
                "application-autoscaling:DeregisterScalableTarget",
                "application-autoscaling:DescribeScalableTargets",
                "application-autoscaling:DescribeScalingActivities",
                "application-autoscaling:DescribeScalingPolicies",
                "application-autoscaling:PutScalingPolicy",
                "application-autoscaling:RegisterScalableTarget",
                "cloudwatch:DeleteAlarms",
                "cloudwatch:DescribeAlarmHistory",
                "cloudwatch:DescribeAlarms",
                "cloudwatch:DescribeAlarmsForMetric",
                "cloudwatch:GetMetricStatistics",
                "cloudwatch:ListMetrics",
                "cloudwatch:PutMetricAlarm",
                "cloudwatch:GetMetricData",
                "datapipeline:ActivatePipeline",
                "datapipeline:CreatePipeline",
                "datapipeline:DeletePipeline",
                "datapipeline:DescribeObjects",
                "datapipeline:DescribePipelines",
                "datapipeline:GetPipelineDefinition",
                "datapipeline:ListPipelines",
                "datapipeline:PutPipelineDefinition",
                "datapipeline:QueryObjects",
                "ec2:DescribeVpcs",
                "ec2:DescribeSubnets",
                "ec2:DescribeSecurityGroups",
                "iam:GetRole",
                "iam:ListRoles",
                "kms:DescribeKey",
                "kms:ListAliases",
                "sns:CreateTopic",
                "sns:DeleteTopic",
                "sns:ListSubscriptions",
                "sns:ListSubscriptionsByTopic",
                "sns:ListTopics",
                "sns:Subscribe",
                "sns:Unsubscribe",
                "sns:SetTopicAttributes",
                "lambda:CreateFunction",
                "lambda:ListFunctions",
                "lambda:ListEventSourceMappings",
                "lambda:CreateEventSourceMapping",
                "lambda:DeleteEventSourceMapping",
                "lambda:GetFunctionConfiguration",
                "lambda:DeleteFunction",
                "resource-groups:ListGroups",
                "resource-groups:ListGroupResources",
                "resource-groups:GetGroup",
                "resource-groups:GetGroupQuery",
                "resource-groups:DeleteGroup",
                "resource-groups:CreateGroup",
                "tag:GetResources",
                "kinesis:ListStreams",
                "kinesis:DescribeStream",
                "kinesis:DescribeStreamSummary"
              ],
              "Effect": "Allow",
              "Resource": "*"
            },
            {
              "Action": "cloudwatch:GetInsightRuleReport",
              "Effect": "Allow",
              "Resource": "arn:aws:cloudwatch:*:*:insight-rule/DynamoDBContributorInsights*"
            },
            {
              "Action": [
                "iam:PassRole"
              ],
              "Effect": "Allow",
              "Resource": "*",
              "Condition": {
                "StringLike": {
                  "iam:PassedToService": [
                    "application-autoscaling.amazonaws.com",
                    "application-autoscaling.amazonaws.com.cn",
                    "dax.amazonaws.com"
                  ]
                }
              }
            },
            {
              "Effect": "Allow",
              "Action": [
                "iam:CreateServiceLinkedRole"
              ],
              "Resource": "*",
              "Condition": {
                "StringEquals": {
                  "iam:AWSServiceName": [
                    "replication.dynamodb.amazonaws.com",
                    "dax.amazonaws.com",
                    "dynamodb.application-autoscaling.amazonaws.com",
                    "contributorinsights.dynamodb.amazonaws.com",
                    "kinesisreplication.dynamodb.amazonaws.com"
                  ]
                }
              }
            }
          ]
        },
        "id": "ANPAINUGF2JSOSUY76KYA",
        "name": "AmazonDynamoDBFullAccess",
        "type": "managed"
      },
      {
        "arn": "arn:aws:iam::aws:policy/AWSLambdaExecute",
        "document": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "logs:*"
              ],
              "Resource": "arn:aws:logs:*:*:*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "s3:GetObject",
                "s3:PutObject"
              ],
              "Resource": "arn:aws:s3:::*"
            }
          ]
        },
        "id": "ANPAJE5FX7FQZSU5XAKGO",
        "name": "AWSLambdaExecute",
        "type": "managed"
      },
      {
        "arn": "arn:aws:iam::aws:policy/AWSLambdaInvocation-DynamoDB",
        "document": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "lambda:InvokeFunction"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": [
                "dynamodb:DescribeStream",
                "dynamodb:GetRecords",
                "dynamodb:GetShardIterator",
                "dynamodb:ListStreams"
              ],
              "Resource": "*"
            }
          ]
        },
        "id": "ANPAJTHQ3EKCQALQDYG5G",
        "name": "AWSLambdaInvocation-DynamoDB",
        "type": "managed"
      },
      {
        "arn": "arn:aws:iam::aws:policy/AWSLambda_FullAccess",
        "document": {
          "Version": "2012-10-17",
          "Statement": [
            {
              "Effect": "Allow",
              "Action": [
                "cloudformation:DescribeStacks",
                "cloudformation:ListStackResources",
                "cloudwatch:ListMetrics",
                "cloudwatch:GetMetricData",
                "ec2:DescribeSecurityGroups",
                "ec2:DescribeSubnets",
                "ec2:DescribeVpcs",
                "kms:ListAliases",
                "iam:GetPolicy",
                "iam:GetPolicyVersion",
                "iam:GetRole",
                "iam:GetRolePolicy",
                "iam:ListAttachedRolePolicies",
                "iam:ListRolePolicies",
                "iam:ListRoles",
                "lambda:*",
                "logs:DescribeLogGroups",
                "states:DescribeStateMachine",
                "states:ListStateMachines",
                "tag:GetResources",
                "xray:GetTraceSummaries",
                "xray:BatchGetTraces"
              ],
              "Resource": "*"
            },
            {
              "Effect": "Allow",
              "Action": "iam:PassRole",
              "Resource": "*",
              "Condition": {
                "StringEquals": {
                  "iam:PassedToService": "lambda.amazonaws.com"
                }
              }
            },
            {
              "Effect": "Allow",
              "Action": [
                "logs:DescribeLogStreams",
                "logs:GetLogEvents",
                "logs:FilterLogEvents"
              ],
              "Resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*"
            }
          ]
        },
        "id": "ANPAZKAPJZG4OXQPYWZ5D",
        "name": "AWSLambda_FullAccess",
        "type": "managed"
      }
    ],
    "resources": {
      "s3": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzFCNjYwRiIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM2Q0FFM0UiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNjAuODM2IDQyLjg5M2wuMzg0LTIuNzA0YzMuNTQgMi4xMiAzLjU4NyAyLjk5NyAzLjU4NiAzLjAyLS4wMDYuMDA2LS42MS41MS0zLjk3LS4zMTZ6bS0xLjk0My0uNTRDNTIuNzczIDQwLjUgNDQuMjUgMzYuNTkgNDAuOCAzNC45NmMwLS4wMTQuMDA0LS4wMjcuMDA0LS4wNDFhMi40MDYgMi40MDYgMCAwMC0yLjQwNC0yLjQwMyAyLjQwNiAyLjQwNiAwIDAwLTIuNDAyIDIuNDAzIDIuNDA2IDIuNDA2IDAgMDAyLjQwMiAyLjQwM2MuNTgyIDAgMS4xMS0uMjE3IDEuNTI3LS41NjIgNC4wNTggMS45MiAxMi41MTUgNS43NzQgMTguNjggNy41OTRMNTYuMTcgNjEuNTZhLjk1NS45NTUgMCAwMC0uMDEuMTRjMCAxLjUxNi02LjcwNyA0LjI5OS0xNy42NjYgNC4yOTktMTEuMDc1IDAtMTcuODUzLTIuNzgzLTE3Ljg1My00LjI5OCAwLS4wNDYtLjAwMy0uMDkxLS4wMS0uMTM2bC01LjA5My0zNy4yMDdjNC40MDkgMy4wMzUgMTMuODkyIDQuNjQgMjIuOTYyIDQuNjQgOS4wNTYgMCAxOC41MjMtMS42IDIyLjk0LTQuNjI1bC0yLjU0NyAxNy45Nzl6TTE1IDIwLjQ3OEMxNS4wNzIgMTkuMTYyIDIyLjYzNCAxNCAzOC41IDE0YzE1Ljg2NCAwIDIzLjQyNyA1LjE2IDIzLjUgNi40Nzh2LjQ0OUM2MS4xMyAyMy44NzcgNTEuMzMgMjcgMzguNSAyN2MtMTIuODUyIDAtMjIuNjU3LTMuMTMyLTIzLjUtNi4wODd2LS40MzV6bTQ5IC4wMjJjMC0zLjQ2NS05LjkzNC04LjUtMjUuNS04LjVTMTMgMTcuMDM1IDEzIDIwLjVsLjA5NC43NTQgNS41NDggNDAuNTI0QzE4Ljc3NSA2Ni4zMSAzMC44NiA2OCAzOC40OTQgNjhjOS40NzIgMCAxOS41MzUtMi4xNzggMTkuNjY1LTYuMjJsMi4zOTYtMTYuODk2YzEuMzMzLjMxOSAyLjQzLjQ4MiAzLjMxLjQ4MiAxLjE4NCAwIDEuOTg0LS4yOSAyLjQ2OS0uODY3YTEuOTUgMS45NSAwIDAwLjQzNi0xLjY2Yy0uMjYtMS4zODMtMS45MDItMi44NzUtNS4yNDgtNC43ODRsMi4zNzYtMTYuNzYyTDY0IDIwLjV6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon S3"
        },
        "statements": [
          {
            "action": "s3:GetObject",
            "effect": "Allow",
            "resource": "arn:aws:s3:::*",
            "service": "s3",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaExecute",
              "policyType": "managed"
            }
          },
          {
            "action": "s3:PutObject",
            "effect": "Allow",
            "resource": "arn:aws:s3:::*",
            "service": "s3",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaExecute",
              "policyType": "managed"
            }
          }
        ]
      },
      "resource-groups": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ii0zNy41IiB5MT0iMzcuNSIgeDI9IjExMi41IiB5Mj0iMzcuNSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgtNDUgMzcuNTAyIDM3LjQ5NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTQxYjIzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzVhNjM2ZSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDY0djY0SDB6Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InNjYWxlKC43NSkgdHJhbnNsYXRlKDEwIDEwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMi41NnB4Ij4KICAgICAgICA8cG9seWdvbiBwb2ludHM9IjU4Ljc4IDQ4IDU4Ljc4IDE2IDMyIDEuMjggNS4yMiAxNiA1LjIyIDQ4IDMyIDYyLjcyIDU4Ljc4IDQ4Ii8+CiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iNS4yMiAxNiAzMiAzMiA1OC43OCAxNiIvPgogICAgICAgIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iMzIiIHkyPSI2Mi43MiIvPgogICAgPC9nPgo8L3N2Zz4=",
          "name": "AWS Resource Groups"
        },
        "statements": [
          {
            "action": "resource-groups:ListGroups",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "resource-groups:ListGroupResources",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "resource-groups:GetGroup",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "resource-groups:GetGroupQuery",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "resource-groups:DeleteGroup",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "resource-groups:CreateGroup",
            "effect": "Allow",
            "resource": "*",
            "service": "resource-groups",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "application-autoscaling": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNDggNDQuNDAydi03LjcxMWwtNyAzLjg5djcuNjcybDctMy44NTF6bS0xNi0uOTQ2bDcgNC42MjhWNDAuNThsLTctMy44OXY2Ljc2NnptMS4wNjItOC40NjRsNi45NCAzLjg1NiA2LjkzNi0zLjg1NUw0MCAzMS4xNTNsLTYuOTM4IDMuODR6TTUwIDM0Ljk5djEwLjAwM2ExIDEgMCAwMS0uNTE5Ljg3N2wtOSA0Ljk1YS45OS45OSAwIDAxLTEuMDMzLS4wNDFsLTktNS45NTJhMS4wMDIgMS4wMDIgMCAwMS0uNDQ4LS44MzRWMzQuOTljMC0uMzYzLjE5Ny0uNjk4LjUxNi0uODc1bDktNC45OGEuOTk4Ljk5OCAwIDAxLjk2OCAwbDkgNC45OGMuMzE5LjE3Ny41MTYuNTEyLjUxNi44NzV6bTE4IDQuMDAxSDU3LjQxNGw1LjI5My01LjI5NC0xLjQxNC0xLjQxNS03IDcuMDAzYTEgMSAwIDAwMCAxLjQxNGw3IDcuMDAyIDEuNDE0LTEuNDE0LTUuMjkzLTUuMjk1SDY4di0yek0xOS44IDMxLjM5bC0xLjYgMS4yIDQuOCA2LjQwMkgxMnYyLjAwMWgxMC41ODZsLTUuMjkzIDUuMjk1IDEuNDE0IDEuNDE0IDctNy4wMDJhMSAxIDAgMDAuMDkzLTEuMzA3bC02LTguMDAzek00MSA2NC4zMzdsLjAwMS0xMC4zNDFoLTJMMzkgNjQuMzM5bC01LjI0Ny02LTEuNTA2IDEuMzE4IDYuOTk5IDguMDAyYTEuMDAzIDEuMDAzIDAgMDAxLjUwNiAwbDcuMDAxLTguMDAyLTEuNTA2LTEuMzE4TDQxIDY0LjMzN3ptLTcuMjQ3LTQyLjY5MmwtMS41MDYtMS4zMTcgNi45OTktOC4wMDJjLjM4MS0uNDM1IDEuMTI1LS40MzUgMS41MDYgMGw3LjAwMSA4LjAwMi0xLjUwNiAxLjMxN0w0MSAxNS42NDhsLjAwMSAxMC4zNGgtMkwzOSAxNS42NDVsLTUuMjQ3IDZ6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "AWS Application Auto Scaling"
        },
        "statements": [
          {
            "action": "application-autoscaling:DeleteScalingPolicy",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:DeregisterScalableTarget",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:DescribeScalableTargets",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:DescribeScalingActivities",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:DescribeScalingPolicies",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:PutScalingPolicy",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "application-autoscaling:RegisterScalableTarget",
            "effect": "Allow",
            "resource": "*",
            "service": "application-autoscaling",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "xray": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJFMjdBRCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1MjdGRkYiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNDcuNSA0Mi4yaC0ydjEzLjg4M2gtNHYtOS45MTZoLTJ2OS45MTZoLTR2LTYuOTQxaC0ydjYuOTQxaC0ydjEuOTg0aDE4di0xLjk4NGgtMlY0Mi4yem04IDcuNDM4YzAtNy45MjktNi41MDUtMTQuMzgtMTQuNS0xNC4zOHMtMTQuNSA2LjQ1MS0xNC41IDE0LjM4YzAgNy45MjggNi41MDUgMTQuMzc5IDE0LjUgMTQuMzc5czE0LjUtNi40NTEgMTQuNS0xNC4zOHptMiAwQzU3LjUgNTguNjYgNTAuMDk4IDY2IDQxIDY2Yy05LjA5OCAwLTE2LjUtNy4zNC0xNi41LTE2LjM2MiAwLTkuMDIyIDcuNDAyLTE2LjM2MyAxNi41LTE2LjM2MyA5LjA5OCAwIDE2LjUgNy4zNCAxNi41IDE2LjM2M3pNNjggMzguNzAyYzAgNS42NTctMy4xMzIgOS4zMzYtOC41OTEgMTAuMDkybC0uMjc3LTEuOTY1QzYyLjI2NiA0Ni4zOTYgNjYgNDQuNjM0IDY2IDM4LjcwMmMwLTUuNTY4LTQuMjQ3LTcuNTgzLTcuODA5LTguMjkyYS45OTEuOTkxIDAgMDEtLjgwMS0uOTE2Yy0uMjM0LTQuMDczLTIuNjQ1LTUuODk2LTQuOTMyLTUuODk2LTEuNDM3IDAtMi43NzcuNjcxLTMuNjc2IDEuODQyLS4yMi4yODgtLjU4NS40MzMtLjk0My4zOGEuOTk3Ljk5NyAwIDAxLS43OS0uNjM3Yy0uODEtMi4xNjgtMi4wMS00LjA2LTMuNDctNS40NjktMy44MzgtMy43MTEtOS4wOS00LjcyLTE0LjA0OS0yLjY5NS00LjExNyAxLjY3NS03LjM0MiA2LjQ5NS03LjM0MiAxMC45NzQgMCAuNTAzLjAzMSAxLjAwMy4wOTEgMS40ODhhLjk5Ljk5IDAgMDEtLjc1MiAxLjA4NGMtMi40MzcuNi02LjUyNyAyLjQ0My02LjUyNyA4LjA2IDAgLjIxMi4wMTEuNDAzLjAyMS42MDQuMTgzIDMuMjkyIDMuMDQ3IDYuMzE1IDYuOTY2IDcuMzUxbC0uNTE1IDEuOTE2Yy00Ljc0NC0xLjI1NC04LjIxOC01LjAyLTguNDQ4LTkuMTZhMTIuNjI4IDEyLjYyOCAwIDAxLS4wMjQtLjcxYzAtNi40OTEgNC41MzgtOC44OTggNy4yMTYtOS43NTJhMTMuNTY5IDEzLjU2OSAwIDAxLS4wMjgtLjg4MWMwLTUuMzEyIDMuNjktMTAuODE3IDguNTgyLTEyLjgwOCA1LjcxOC0yLjMzNyAxMS43NzgtMS4xNzUgMTYuMjA1IDMuMTEgMS4zMzggMS4yOSAyLjQ4MSAyLjkyNCAzLjM1MSA0Ljc3OGE2LjU1NyA2LjU1NyAwIDAxNC4xMzItMS40NTljMy4wNzIgMCA2LjI5NSAyLjE3NyA2Ljg2MiA3LjAxMyA1LjYwNiAxLjM1IDguNjggNC45MDQgOC42OCAxMC4wNzV6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "AWS X-Ray"
        },
        "statements": [
          {
            "action": "xray:GetTraceSummaries",
            "effect": "Allow",
            "resource": "*",
            "service": "xray",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "xray:BatchGetTraces",
            "effect": "Allow",
            "resource": "*",
            "service": "xray",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "kinesis": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzREMjdBOCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBMTY2RkYiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMTkgNjJoMmMwLTguNDA2IDUuNDY1LTE3IDQ2LTE3di0yYy00Mi4yOTcgMC00OCA5LjYwNC00OCAxOW02IDZoMmMwLTcuNTY2IDAtMTkgNDAtMTl2LTJjLTE4LjMzNyAwLTMwLjI3MiAyLjM1OS0zNi40OSA3LjIxMkMyNSA1OC41MTIgMjUgNjMuOTk2IDI1IDY4TTE1IDI2aC0yYzAgNy4zOTYgMTAuMDM5IDEyLjA4IDI5Ljg5MyAxNEMyMy4wMzkgNDEuOTIgMTMgNDYuNjA0IDEzIDU0aDJjMC00Ljg1NSA2Ljc1Ni0xMyA1Mi0xM3YtMmMtNDUuMjQ0IDAtNTItOC4xNDUtNTItMTNtNi04aC0yYzAgOS4zOTYgNS43MDMgMTkgNDggMTl2LTJjLTQwLjUzNSAwLTQ2LTguNTk0LTQ2LTE3bTQ2IDEzdjJjLTE4LjMzNyAwLTMwLjI3Mi0yLjM1OS0zNi40OS03LjIxMkMyNSAyMS40ODggMjUgMTYuMDA0IDI1IDEyaDJjMCA3LjU2NiAwIDE5IDQwIDE5IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon Kinesis"
        },
        "statements": [
          {
            "action": "kinesis:ListStreams",
            "effect": "Allow",
            "resource": "*",
            "service": "kinesis",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "kinesis:DescribeStream",
            "effect": "Allow",
            "resource": "*",
            "service": "kinesis",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "kinesis:DescribeStreamSummary",
            "effect": "Allow",
            "resource": "*",
            "service": "kinesis",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "execute-api": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMzQuMDY1IDU1LjYzMkgzN3YtMi4wMTdoLTIuOTM1djIuMDE3em00LjkzNSAwaDN2LTIuMDE3aC0zdjIuMDE3ek0yNyAxNC42M2wtMTMgNi40NTN2NDAuMTExbDEzIDQuMzk3VjE0LjYzem0yIDEyLjc2NHYyNi4yMjJoM3YyLjAxN2gtM3YxMS4zNmMwIC4zMjQtLjE1NS42MjktLjQxNi44MThhLjk5My45OTMgMCAwMS0uOTAyLjEzOGwtMTUtNS4wNzJBMS4wMDggMS4wMDggMCAwMTEyIDYxLjkyVjIwLjQ1NGMwLS4zODQuMjE3LS43MzUuNTU5LS45MDVsMTUtNy40NDVhLjk4OS45ODkgMCAwMS45NjkuMDQ5Yy4yOTMuMTgzLjQ3Mi41MDcuNDcyLjg1NnYxMi4zNjdoM3YyLjAxN2gtM3ptMTUgMjguMjRoM3YtMi4wMThoLTN2Mi4wMTd6bS4wNjUtMjguMjRINDd2LTIuMDE3aC0yLjkzNXYyLjAxN3ptLTUgMEg0MnYtMi4wMTdoLTIuOTM1djIuMDE3em0tNSAwSDM3di0yLjAxN2gtMi45MzV2Mi4wMTd6TTY2IDIxLjA4M2wtMTMtNi40NTR2NTAuOTZsMTMtNC4zOTZ2LTQwLjExem0yIDQwLjgzN2MwIC40MzItLjI3NC44MTctLjY4Mi45NTZsLTE1IDUuMDcyYS45OTEuOTkxIDAgMDEtLjkwMi0uMTM4IDEuMDEyIDEuMDEyIDAgMDEtLjQxNi0uODE5VjU1LjYzMmgtMS45MzV2LTIuMDE3SDUxVjI3LjM5M2gtMS45MzV2LTIuMDE3SDUxVjEzLjAxYzAtLjM1LjE3OS0uNjczLjQ3Mi0uODU2YS45ODguOTg4IDAgMDEuOTY5LS4wNDlsMTUgNy40NDVjLjM0Mi4xNy41NTkuNTIxLjU1OS45MDVWNjEuOTJ6TTQyLjkzNCAzMy44MDdsLTEuODY4LS43MjQtNSAxMy4xMSAxLjg2OC43MjUgNS0xMy4xMTF6bTYuNzczIDYuNDAyYTEuMDEzIDEuMDEzIDAgMDAwLTEuNDI2bC00LTQuMDM0LTEuNDE0IDEuNDI2IDMuMjkzIDMuMzItMy4yOTMgMy4zMjIgMS40MTQgMS40MjYgNC00LjAzNHptLTE1LjQxNCA0LjAzNGwtNC00LjAzNGExLjAxMyAxLjAxMyAwIDAxMC0xLjQyNmw0LTQuMDM0IDEuNDE0IDEuNDI2LTMuMjkzIDMuMzIgMy4yOTMgMy4zMjItMS40MTQgMS40MjZ6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon API Gateway"
        },
        "statements": [
          {
            "action": "execute-api:Invoke",
            "effect": "Allow",
            "resource": "arn:aws:execute-api:*:*:*",
            "service": "execute-api",
            "source": {
              "index": "0",
              "policyName": "AmazonAPIGatewayInvokeFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "execute-api:ManageConnections",
            "effect": "Allow",
            "resource": "arn:aws:execute-api:*:*:*",
            "service": "execute-api",
            "source": {
              "index": "0",
              "policyName": "AmazonAPIGatewayInvokeFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "dynamodb": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJFMjdBRCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1MjdGRkYiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTIuMDg2IDU0Ljg1Yy0zLjMzOCAyLjY5OS0xMC4zNDEgNC4xMjUtMTcuMDQyIDQuMTI1LTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzNmguMDAxYzAgMi43MSA2Ljk5OSA1LjczMSAxNy4wNDMgNS43MzEgMTAuMDM2IDAgMTcuMDMxLTMuMDE3IDE3LjA0Mi01LjcyNnYtNS40NHptLjAwMS0xMC4zMjhsMi0uMDF2LjAxYzAgMS4yMDgtLjYwNSAyLjMzNi0xLjc4MyAzLjM2OSAxLjQyOCAxLjI1NiAxLjc4MyAyLjQ4OSAxLjc4MyAzLjM2N2wtLjAwMS4wMTd2OS4wMWMwIDUuMDEtOS44MTEgNy43MTUtMTkuMDQyIDcuNzE1LTkuMjA5IDAtMTguOTk0LTIuNjkzLTE5LjA0MS03LjY4IDAtLjAwNi0uMDAzLS4wMS0uMDAzLS4wMTZ2LTkuMDVsLjAwMi0uMDA3Yy4wMDMtLjg3OC4zNTktMi4xMDYgMS43ODUtMy4zNi0xLjQxNy0xLjI1MS0xLjc3Ny0yLjQ3Mi0xLjc4Ni0zLjM0M2guMDAxbC0uMDAyLS4wMXYtOS4wNWwuMDAyLS4wMWMuMDAzLS44NzcuMzYtMi4xMDUgMS43ODYtMy4zNTctMS40MTgtMS4yNTItMS43NzgtMi40NzQtMS43ODctMy4zNDRoLjAwMUwxNiAyOC43NnYtOS4wNDhsLjAwMi0uMDFDMTYuMDE5IDE0LjcgMjUuODIgMTIgMzUuMDQ0IDEyYzUuMjExIDAgMTAuMjE3LjgyOCAxMy43MzQgMi4yNzJsLS43NjUgMS44MzNjLTMuMjgzLTEuMzQ4LTguMDEtMi4xMjEtMTIuOTY5LTIuMTIxLTEwLjA0NCAwLTE3LjA0MyAzLjAyLTE3LjA0MyA1LjczMyAwIDIuNzEyIDYuOTk5IDUuNzMzIDE3LjA0MyA1LjczMy4yNzEuMDAzLjUzNiAwIC44MDQtLjAxbC4wODQgMS45ODJjLS4yOTYuMDEyLS41OTIuMDEyLS44ODguMDEyLTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzMmguMDAxdi4wMjNjLjAxIDEuMDQgMS4wNzcgMS45NDkgMS45NzEgMi41MjYgMi42OSAxLjcxNSA3LjUxIDIuODg2IDEyLjg4NSAzLjEzbC0uMDkxIDEuOTgxYy01LjQ0NS0uMjQ3LTEwLjIxMy0xLjM3Ny0xMy4yODItMy4xMDgtLjc1Ni41NjUtMS40ODMgMS4zMy0xLjQ4MyAyLjE5NyAwIDIuNzExIDYuOTk5IDUuNzMyIDE3LjA0MyA1LjczMi45ODUgMCAxLjk2My0uMDMyIDIuOTA4LS4wOThsLjEzOSAxLjk3OWMtLjk5LjA2OC0yLjAxNi4xMDMtMy4wNDcuMTAzLTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzMmguMDAxYy4wMSAxLjA2NCAxLjA3NyAxLjk3MSAxLjk3MSAyLjU1IDMuMDc2IDEuOTYyIDguODUyIDMuMTg0IDE1LjA3MiAzLjE4NGguNDR2MS45ODRoLS40NGMtNi4zMTkgMC0xMi4wNjItMS4xNzQtMTUuNTc0LTMuMTU2LS43NTIuNTY0LTEuNDY5IDEuMzI1LTEuNDY5IDIuMTg1IDAgMi43MTIgNi45OTkgNS43MzQgMTcuMDQzIDUuNzM0IDEwLjAzNiAwIDE3LjAzMS0zLjAxOCAxNy4wNDItNS43Mjd2LS4wMTFjLS4wMDItLjg2Mi0uNzIyLTEuNjIzLTEuNDc2LTIuMTg3LS40ODguMjc3LTEuMDExLjU0My0xLjYwNi43ODhsLS43NjYtMS44MzNjLjcyNi0uMjk4IDEuMzU2LS42MiAxLjg3My0uOTYuOTAyLS41ODggMS45NzYtMS41MDcgMS45NzYtMi41NHptOC41NjYtMTQuNTA1aC01LjYwNGExIDEgMCAwMS0uODI3LS40MzUuOTgyLjk4MiAwIDAxLS4xMDMtLjkyMmwzLjQwOS04LjUyMkg0NC42MTlsLTYgMTEuOTAyaDYuMzgyYy4zMTkgMCAuNjE5LjE1Mi44MDguNDA3YS45ODkuOTg5IDAgMDEuMTQ1Ljg4Nkw0MC4yNTggNTEuMDlsMjAuMzk1LTIxLjA3MnptMy4wNjktLjMwNUwzOC43MjMgNTUuNTRhMS4wMDYgMS4wMDYgMCAwMS0xLjIzMy4xNjUuOTg4Ljk4OCAwIDAxLS40NDItMS4xNTNsNi41ODYtMjAuNTI4aC02LjYzM2MtLjM0NyAwLS42NjgtLjE3OC0uODUxLS40N2EuOTgzLjk4MyAwIDAxLS4wNDMtLjk2NWw3LTEzLjg4NmExIDEgMCAwMS44OTQtLjU0OWgxNWMuMzMgMCAuNjQyLjE2NC44MjcuNDM1YS45ODQuOTg0IDAgMDEuMTAzLjkyM2wtMy40MSA4LjUyMUg2M2MuNCAwIC43NjMuMjM4LjkyLjYwM2EuOTg3Ljk4NyAwIDAxLS4xOTggMS4wNzZ6TTE5LjQ1NSA2MC42NzRjMS40MTcuNzk5IDMuMjAxIDEuNDcgNS4zMDIgMS45OTRsLjQ4OC0xLjkyNGMtMS44OTktLjQ3My0zLjU1OS0xLjA5NC00LjgwMi0xLjc5NGwtLjk4OCAxLjcyNHpNMjQuNzU3IDQ2LjhsLjQ4OC0xLjkyNGMtMS44OTktLjQ3NC0zLjU1OS0xLjA5NS00LjgwMi0xLjc5NWwtLjk4OCAxLjcyNWMxLjQxNy43OTggMy4yIDEuNDcgNS4zMDIgMS45OTR6bS01LjMwMi0xNy44NjNsLjk4OC0xLjcyNWMxLjI0MS43IDIuOTAyIDEuMzIgNC44MDIgMS43OTVsLS40ODggMS45MjNjLTIuMTA0LS41MjUtMy44ODctMS4xOTYtNS4zMDItMS45OTN6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon DynamoDB"
        },
        "statements": [
          {
            "action": "dynamodb:*",
            "effect": "Allow",
            "resource": "*",
            "service": "dynamodb",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "dynamodb:DescribeStream",
            "effect": "Allow",
            "resource": "*",
            "service": "dynamodb",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaInvocation-DynamoDB",
              "policyType": "managed"
            }
          },
          {
            "action": "dynamodb:GetRecords",
            "effect": "Allow",
            "resource": "*",
            "service": "dynamodb",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaInvocation-DynamoDB",
              "policyType": "managed"
            }
          },
          {
            "action": "dynamodb:GetShardIterator",
            "effect": "Allow",
            "resource": "*",
            "service": "dynamodb",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaInvocation-DynamoDB",
              "policyType": "managed"
            }
          },
          {
            "action": "dynamodb:ListStreams",
            "effect": "Allow",
            "resource": "*",
            "service": "dynamodb",
            "source": {
              "index": "1",
              "policyName": "AWSLambdaInvocation-DynamoDB",
              "policyType": "managed"
            }
          }
        ]
      },
      "states": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNDUgNDRoMjF2LTdINDV2N3ptMjItOUg0NGExIDEgMCAwMC0xIDF2OWExIDEgMCAwMDEgMWgyM2ExIDEgMCAwMDEtMXYtOWExIDEgMCAwMC0xLTF6TTQzLjUgNjIuNWMwIDEuOTMtMS41NyAzLjUtMy41IDMuNXMtMy41LTEuNTctMy41LTMuNVMzOC4wNyA1OSA0MCA1OXMzLjUgMS41NyAzLjUgMy41ek0xNCA0N2gxOHYtNEgxNHY0em0wLTEwaDE4di00SDE0djR6bTIyLjUtMTkuNWMwLTEuOTMgMS41Ny0zLjUgMy41LTMuNXMzLjUgMS41NyAzLjUgMy41UzQxLjkzIDIxIDQwIDIxcy0zLjUtMS41Ny0zLjUtMy41ek01NiA1M0gyNHYtNGg5YTEgMSAwIDAwMS0xdi02YTEgMSAwIDAwLTEtMWgtOXYtMmg5YTEgMSAwIDAwMS0xdi02YTEgMSAwIDAwLTEtMWgtOXYtM2gzMnY0aDJ2LTVhMSAxIDAgMDAtMS0xSDQxdi0zLjA5NmMyLjU1Ni0uNDcyIDQuNS0yLjcxMyA0LjUtNS40MDQgMC0zLjAzMy0yLjQ2OC01LjUtNS41LTUuNWE1LjUwNiA1LjUwNiAwIDAwLTUuNSA1LjVjMCAyLjY5MSAxLjk0NCA0LjkzMiA0LjUgNS40MDRWMjZIMjNhMSAxIDAgMDAtMSAxdjRoLTlhMSAxIDAgMDAtMSAxdjZhMSAxIDAgMDAxIDFoOXYyaC05YTEgMSAwIDAwLTEgMXY2YTEgMSAwIDAwMSAxaDl2NWExIDEgMCAwMDEgMWgxNnYyLjA5NmMtMi41NTYuNDcyLTQuNSAyLjcxMy00LjUgNS40MDQgMCAzLjAzMyAyLjQ2OCA1LjUgNS41IDUuNXM1LjUtMi40NjcgNS41LTUuNWMwLTIuNjkxLTEuOTQ0LTQuOTMyLTQuNS01LjQwNFY1NWgxNmExIDEgMCAwMDEtMXYtNC45NzNoLTJWNTN6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "AWS Step Functions"
        },
        "statements": [
          {
            "action": "states:DescribeStateMachine",
            "effect": "Allow",
            "resource": "*",
            "service": "states",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "states:ListStateMachines",
            "effect": "Allow",
            "resource": "*",
            "service": "states",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "kms": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0JEMDgxNiIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjUyNTIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTEuOTk3IDUyLjQ5Nmg3di0yaC03djJ6bS05IDBoN3YtMmgtN3Yyem0tOSAwaDd2LTJoLTd2MnptMTEtOGMwLTEuMTAzLjg5OC0yIDItMiAxLjEwMyAwIDIgLjg5NyAyIDJzLS44OTcgMi0yIDJjLTEuMTAyIDAtMi0uODk3LTItMnptNiAwYzAtMi4yMDYtMS43OTMtNC00LTQtMi4yMDYgMC00IDEuNzk0LTQgNHMxLjc5NCA0IDQgNGMyLjIwNyAwIDQtMS43OTQgNC00em0tMTQtMmMxLjEwMyAwIDIgLjg5NyAyIDJzLS44OTcgMi0yIDJjLTEuMTAyIDAtMi0uODk3LTItMnMuODk4LTIgMi0yem0wIDZjMi4yMDcgMCA0LTEuNzk0IDQtNHMtMS43OTMtNC00LTRjLTIuMjA2IDAtNCAxLjc5NC00IDRzMS43OTQgNCA0IDR6bTI5LTE1djIzYTEgMSAwIDAxLTEgMWgtMzF2LTJoMzB2LTIxaC0yMnYtMmgyM2ExIDEgMCAwMTEgMXptLTM1LjMwMSA1LjA0N2ExIDEgMCAwMC0uNy45NTN2MjEuMDRsLTIuMzk4IDIuMDU3LTIuNjAxLTIuOTczdi0yLjYyNGEuOTk3Ljk5NyAwIDAwLS4yOTMtLjcwN2wtMi4yOTItMi4yOTMgMi4yOTItMi4yOTNhLjk5Ny45OTcgMCAwMC4yOTMtLjcwN3YtMmEuOTk3Ljk5NyAwIDAwLS4yOTMtLjcwN2wtMi4yOTItMi4yOTMgMi4yOTItMi4yOTNhLjk5Ny45OTcgMCAwMC4yOTMtLjcwN3YtMy40OWEuOTk4Ljk5OCAwIDAwLS42OTgtLjk1M2MtNS4xNDItMS42My04LjE4Mi02LjkxOS03LjA3LTEyLjMwNC44MDMtMy44OCAzLjc4Ny02Ljk5IDcuNjAyLTcuOTI2IDMuMjQ5LS43OTcgNi41OC0uMSA5LjE0IDEuOTA3YTEwLjQ0NiAxMC40NDYgMCAwMTQuMDI2IDguMjY2YzAgNC41NTMtMy4wMDIgOC42ODUtNy4zMDEgMTAuMDQ3em05LjMtMTAuMDQ3YzAtMy44NjQtMS43NDUtNy40NS00Ljc5LTkuODQtMy4wNDUtMi4zODktNi45OTctMy4yMi0xMC44NTEtMi4yNzUtNC41NjEgMS4xMTctOC4xMjYgNC44MzItOS4wODQgOS40NjN2LjAwMUMxNCAzMS45OSAxNy4zIDM4LjAzNSAyMi45OTcgNDAuMjE1djIuMzY3TDIwLjI5IDQ1LjI5YTEgMSAwIDAwMCAxLjQxNGwyLjcwNyAyLjcwN3YxLjE3MkwyMC4yOSA1My4yOWExIDEgMCAwMDAgMS40MTRsMi43MDcgMi43MDd2Mi41ODZjMCAuMjQyLjA4OC40NzYuMjQ4LjY2bDMuNSA0YTEgMSAwIDAwMS40MDMuMWwzLjUtM2EuOTk4Ljk5OCAwIDAwLjM0OS0uNzZWNDAuMjA0YzQuNzQ2LTEuODMyIDgtNi41NDIgOC0xMS43MDh6bS0xMi41IDIuMzdhMi41MDMgMi41MDMgMCAwMS0yLjUtMi41YzAtMS4zNzggMS4xMjMtMi41IDIuNS0yLjUgMS4zOCAwIDIuNSAxLjEyMiAyLjUgMi41IDAgMS4zOC0xLjEyIDIuNS0yLjUgMi41em0wLTdhNC41MDUgNC41MDUgMCAwMC00LjUgNC41YzAgMi40ODIgMi4wMiA0LjUgNC41IDQuNSAyLjQ4MyAwIDQuNS0yLjAxOCA0LjUtNC41IDAtMi40OC0yLjAxNy00LjUtNC41LTQuNXoiIGZpbGw9IiNGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
          "name": "AWS Key Management Service"
        },
        "statements": [
          {
            "action": "kms:DescribeKey",
            "effect": "Allow",
            "resource": "*",
            "service": "kms",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "kms:ListAliases",
            "effect": "Allow",
            "resource": "*",
            "service": "kms",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "kms:ListAliases",
            "effect": "Allow",
            "resource": "*",
            "service": "kms",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "lambda": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0M4NTExQiIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGOTAiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMjguMDA4IDY2SDE1LjU5bDEzLjczMy0yOC43MDQgNi4yMjIgMTIuODFMMjguMDA4IDY2em0yLjIxMi0zMS40NDdhMS4wMDUgMS4wMDUgMCAwMC0uOTAyLS41NjRoLS4wMDNhMS4wMDEgMS4wMDEgMCAwMC0uOTAzLjU2OUwxMy4wOTggNjYuNTY5QTEgMSAwIDAwMTQuMDAyIDY4aDE0LjY0Yy4zODggMCAuNzQtLjIyMy45MDYtLjU3Mmw4LjAxNi0xNi45YS45OTUuOTk1IDAgMDAtLjAwNS0uODYzbC03LjM0LTE1LjExMnpNNjQuOTk1IDY2SDUyLjY2TDMyLjg2NyAyNC41N2ExLjAwMiAxLjAwMiAwIDAwLS45MDUtLjU3SDIzLjg5bC4wMDktMTBoMTUuODJMNTkuNDIgNTUuNDI5Yy4xNjYuMzQ4LjUxOS41NzEuOTA2LjU3MWg0LjY3djEwem0xLjAwMy0xMkg2MC45NmwtMTkuNy00MS40MjlhMS4wMDMgMS4wMDMgMCAwMC0uOTA3LS41NzFIMjIuODk4Yy0uNTUzIDAtMS4wMDIuNDQ3LTEuMDAzLjk5OWwtLjAxIDEyQTEgMSAwIDAwMjIuODg2IDI2aDguNDQybDE5Ljc5MyA0MS40M2MuMTY3LjM0OC41MTcuNTcuOTA0LjU3aDEzLjk3MkExIDEgMCAwMDY3IDY3VjU1YTEgMSAwIDAwLTEuMDAyLTF6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "AWS Lambda"
        },
        "statements": [
          {
            "action": "lambda:CreateFunction",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:ListFunctions",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:ListEventSourceMappings",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:CreateEventSourceMapping",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:DeleteEventSourceMapping",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:GetFunctionConfiguration",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:DeleteFunction",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:InvokeFunction",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AWSLambdaInvocation-DynamoDB",
              "policyType": "managed"
            }
          },
          {
            "action": "lambda:*",
            "effect": "Allow",
            "resource": "*",
            "service": "lambda",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "iam": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0JEMDgxNiIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjUyNTIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMTQgNTloNTJWMjFIMTR2Mzh6bTU0LTM5djQwYTEgMSAwIDAxLTEgMUgxM2ExIDEgMCAwMS0xLTFWMjBhMSAxIDAgMDExLTFoNTRhMSAxIDAgMDExIDF6TTQ0IDQ4aDE1di0ySDQ0djJ6bTEzLTZoNXYtMmgtNXYyem0tMTMgMGg4di0yaC04djJ6bS0xNSA0YTEuMDAxIDEuMDAxIDAgMDAtMiAwIDEuMDAxIDEuMDAxIDAgMDAyIDB6bTIgMGEyLjk5NyAyLjk5NyAwIDAxLTIgMi44MTZWNTFoLTJ2LTIuMTg1QTIuOTk1IDIuOTk1IDAgMDEyNSA0NmMwLTEuNjU0IDEuMzQ2LTMgMy0zczMgMS4zNDYgMyAzem0tMTIgNy45OTNMMzYuOTk0IDU0bC4wMDItNEgzM3YtMmgzLjk5NmwuMDAyLTNIMzN2LTJoMy45OTlMMzcgNDAuMDA3IDE5LjAwNiA0MCAxOSA1My45OTN6bTMtMTUuOTkybDEyIC4wMDVWMzFjLjAwMS0yLjMwMy0yLjgwMy00LjMyMy02LTQuMzI1aC0uMDA0Yy0zLjE5MiAwLTUuOTkyIDIuMDIxLTUuOTk0IDQuMzI1TDIyIDM4LjAwMXptLTUgMTYuOTkxTDE3LjAwNiAzOWExIDEgMCAwMTEtMWwxLjk5NC4wMDEuMDAyLTcuMDAxYy4wMDItMy40ODggMy41ODgtNi4zMjUgNy45OTQtNi4zMjVIMjhjNC40MTIuMDAyIDguMDAxIDIuODQgOCA2LjMyNXY3LjAwN2wyIC4wMDFhMSAxIDAgMDExIDFMMzguOTk0IDU1YTEgMSAwIDAxLTEgMUwxOCA1NS45OTJhMSAxIDAgMDEtMS0xek02MCAzNmgydi0yaC0ydjJ6bS0xNiAwaDExdi0ySDQ0djJ6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Identity And Access Management"
        },
        "statements": [
          {
            "action": "iam:GetRole",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:ListRoles",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:PassRole",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "2",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:CreateServiceLinkedRole",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "3",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:GetPolicy",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:GetPolicyVersion",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:GetRole",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:GetRolePolicy",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:ListAttachedRolePolicies",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:ListRolePolicies",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:ListRoles",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "iam:PassRole",
            "effect": "Allow",
            "resource": "*",
            "service": "iam",
            "source": {
              "index": "1",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "ec2": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0M4NTExQiIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGOTAiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMjcgNTNoMjVWMjhIMjd2MjV6bTI3LTI1aDR2MmgtNHY0aDR2MmgtNHYzaDR2MmgtNHY0aDR2MmgtNHY0aDR2MmgtNHYuMTM2QTEuODY2IDEuODY2IDAgMDE1Mi4xMzYgNTVINTJ2NGgtMnYtNGgtNHY0aC0ydi00aC0zdjRoLTJ2LTRoLTR2NGgtMnYtNGgtNHY0aC0ydi00aC0uMTM2QTEuODY2IDEuODY2IDAgMDEyNSA1My4xMzZWNTNoLTN2LTJoM3YtNGgtM3YtMmgzdi00aC0zdi0yaDN2LTNoLTN2LTJoM3YtNGgtM3YtMmgzdi0uMTM2YzAtMS4wMjguODM2LTEuODY0IDEuODY0LTEuODY0SDI3di00aDJ2NGg0di00aDJ2NGg0di00aDJ2NGgzdi00aDJ2NGg0di00aDJ2NGguMTM2YzEuMDI4IDAgMS44NjQuODM2IDEuODY0IDEuODY0VjI4ek00MSA2NS44NzZhLjEyNS4xMjUgMCAwMS0uMTI0LjEyNEgxNC4xMjRhLjEyNS4xMjUgMCAwMS0uMTI0LS4xMjRWMzkuMTI0YzAtLjA2OC4wNTYtLjEyNC4xMjQtLjEyNEgyMHYtMmgtNS44NzZBMi4xMjcgMi4xMjcgMCAwMDEyIDM5LjEyNHYyNi43NTJjMCAxLjE3MS45NTMgMi4xMjQgMi4xMjQgMi4xMjRoMjYuNzUyQTIuMTI3IDIuMTI3IDAgMDA0MyA2NS44NzZWNjFoLTJ2NC44NzZ6bTI3LTUxLjc1MnYyNi43NTJBMi4xMjcgMi4xMjcgMCAwMTY1Ljg3NiA0M0g2MHYtMmg1Ljg3NmEuMTI1LjEyNSAwIDAwLjEyNC0uMTI0VjE0LjEyNGEuMTI1LjEyNSAwIDAwLS4xMjQtLjEyNEgzOS4xMjRhLjEyNS4xMjUgMCAwMC0uMTI0LjEyNFYyMGgtMnYtNS44NzZjMC0xLjE3MS45NTMtMi4xMjQgMi4xMjQtMi4xMjRoMjYuNzUyYzEuMTcxIDAgMi4xMjQuOTUzIDIuMTI0IDIuMTI0eiIgZmlsbD0iI0ZGRiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==",
          "name": "Amazon EC2"
        },
        "statements": [
          {
            "action": "ec2:DescribeVpcs",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "ec2:DescribeSubnets",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "ec2:DescribeSecurityGroups",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "ec2:DescribeSecurityGroups",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "ec2:DescribeSubnets",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "ec2:DescribeVpcs",
            "effect": "Allow",
            "resource": "*",
            "service": "ec2",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "datapipeline": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzREMjdBOCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNBMTY2RkYiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNjQgNjJoLTNjLS40NDggMC0xLS41NTEtMS0xdi0yaDV2MmMwIC40NDktLjU1MiAxLTEgMXptLTQyLTNoMzZ2LTNIMjJ2M3ptLTMgM2gtM2MtLjY2MyAwLTEtLjMzNi0xLTF2LTJoNXYyYzAgLjM3Mi0uMjExIDEtMSAxem0tMy0zMGgzYy40NDggMCAxIC41NTEgMSAxdjNoLTV2LTNjMC0uNDQ5LjU1Mi0xIDEtMXptMjEuMDA4IDNINTh2M0gyMnYtM2gxNS4wMDh6bTEuMDAyLTdINDJsLS4wMDEgNWgtMy45OTFsLjAwMi01ek0zMyAyNmExIDEgMCAwMC0uOTkxLjg2NmMtLjExNi4wNS0uNDAzLjEzNC0xLjAwOS4xMzQtMS4yNjcgMC0yLS4zNzYtMi0yLjMgMC0xLjc5Mi42NzMtMi43IDItMi43LjU3NSAwIC44ODUuMDg4IDEuMDExLjE0OEExIDEgMCAwMDMzIDIzaDEzYTEgMSAwIDAwLjk4Ni0uODMzQzQ3LjA5MyAyMi4xMSA0Ny4zOCAyMiA0OCAyMmMxLjA5NCAwIDIgLjE5IDIgMi41MzFDNTAgMjYuNTg3IDQ5LjIzNCAyNyA0OCAyN2MtLjU5NyAwLS44ODYtLjA3NC0xLjAwNy0uMTIxQTEgMSAwIDAwNDYgMjZIMzN6bTctOGMxLjU4MiAwIDIgMS45NjIgMiAzaC00YzAtMS4wMzguNDE4LTMgMi0zem0yMCAzOWg1VjM4aC01djE5em0tMzgtM2gzNlY0MEgyMnYxNHptLTcgM2g1VjM4aC01djE5em00Ni0yNWgzYy40NTQgMCAxIC42MTQgMSAxdjNoLTV2LTNjMC0uMzg2LjU0Ni0xIDEtMXptMy0yaC0zYy0xLjUxNCAwLTMgMS40ODYtMyAzSDQzLjk5OUw0NCAyOGgxLjI4NmMuMzU2LjUzMyAxLjEyMSAxIDIuNzE0IDEgMS44MjUgMCA0LS43NzUgNC00LjQ2OUM1MiAyMS41MjQgNTAuNjU0IDIwIDQ4IDIwYy0xLjQxNiAwLTIuMjQ4LjQ0MS0yLjY2NCAxSDQ0YzAtMi40ODUtMS4zNzQtNS00LTVzLTQgMi41MTUtNCA1aC0yLjMxNWMtLjM1OC0uNTEtMS4xMTEtMS0yLjY4NS0xLTEuOTM0IDAtNCAxLjIzNS00IDQuNyAwIDIuNzczIDEuNDIxIDQuMyA0IDQuMyAxLjU4OCAwIDIuMzQ1LS40ODEgMi43LTFoMi4zMWwtLjAwMiA1SDIyYzAtMS41NDItMS40NTgtMy0zLTNoLTNjLTEuNTQyIDAtMyAxLjQ1OC0zIDN2MjhjMCAxLjc2NyAxLjIzMyAzIDMgM2gzYzEuOTQ4IDAgMy0xLjU0NiAzLTNoMzZjMCAxLjU0MiAxLjQ1OCAzIDMgM2gzYzEuNTQyIDAgMy0xLjQ1OCAzLTNWMzNjMC0xLjUxNC0xLjQ4Ni0zLTMtM3oiIGZpbGw9IiNGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
          "name": "AWS Data Pipeline"
        },
        "statements": [
          {
            "action": "datapipeline:ActivatePipeline",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:CreatePipeline",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:DeletePipeline",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:DescribeObjects",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:DescribePipelines",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:GetPipelineDefinition",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:ListPipelines",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:PutPipelineDefinition",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "datapipeline:QueryObjects",
            "effect": "Allow",
            "resource": "*",
            "service": "datapipeline",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "sns": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNMTcgMzhjMS4xMDMgMCAyIC44OTcgMiAycy0uODk3IDItMiAyLTItLjg5Ny0yLTIgLjg5Ny0yIDItMnptMjQgMjZjLTExLjY4NiAwLTIxLjcxMS04LjUzNC0yMy44MDYtMjAuMDJBMy45ODQgMy45ODQgMCAwMDIwLjg1NyA0MUgyN3YtMmgtNi4xNDNhMy45ODUgMy45ODUgMCAwMC0zLjY2Mi0yLjk4QzE5LjI4NSAyNC43MSAyOS41MTEgMTYgNDEgMTZjNC4zMTMgMCA4LjgzMiAxLjYyMiAxMy40MjkgNC44MjFsMS4xNDItMS42NDJDNTAuNjMzIDE1Ljc0MyA0NS43MyAxNCA0MSAxNGMtMTIuNzMgMC0yNC4wNTEgOS44NjUtMjUuOTM3IDIyLjUyMUMxMy44MzkgMzcuMjA3IDEzIDM4LjUgMTMgNDBzLjgzOSAyLjc5MyAyLjA2MyAzLjQ3OEMxNi45NyA1Ni4zNDEgMjguMDU2IDY2IDQxIDY2YzUuNDA3IDAgMTAuOTQyLTEuODQzIDE1LjU4NS01LjE4OWwtMS4xNy0xLjYyMkM1MS4xMSA2Mi4yOTIgNDUuOTkxIDY0IDQxIDY0ek0zMC4xMDEgMzYuNDQyYzEuODU0LjQ1MyA0LjE3NC41NTggNS44OTkuNTU4IDEuNjQyIDAgMy44MjMtLjA5NSA1LjYyOS0uNDk0bC00LjUyNCA5LjA0N0ExLjAwMiAxLjAwMiAwIDAwMzcgNDZ2NC40NTNjLS44MDEuNTExLTIuMTY3IDEuMzU5LTMgMS41MzNWNDZhLjk5OC45OTggMCAwMC0uMDc3LS4zODVsLTMuODIyLTkuMTczek0zNiAzM2M0LjAyNSAwIDYuMTc0LjYwNCA2Ljg0MSAxLS42NjcuMzk2LTIuODE2IDEtNi44NDEgMXMtNi4xNzQtLjYwNC02Ljg0MS0xYy42NjctLjM5NiAyLjgxNi0xIDYuODQxLTF6bS0zIDIxaDFjLjA0MyAwIC4wODYtLjAwMy4xMjgtLjAwOCAxLjIyNC0uMTU5IDIuNzgxLTEuMTA1IDQuMTQ0LTEuOTc5bC4yNjMtLjE2OGMuMjg5LS4xODQuNDY1LS41MDMuNDY1LS44NDV2LTQuNzY0bDUuNTU5LTExLjExNmMuMjc0LS4zMTkuNDQxLS42ODYuNDQxLTEuMTIgMC0yLjYxLTUuNjM5LTMtOS0zLTMuMzYxIDAtOSAuMzktOSAzIDAgLjM2Ni4xMi42ODQuMzIuOTY3TDMyIDQ2LjJWNTNhMSAxIDAgMDAxIDF6bTI5LTFjMS4xMDMgMCAyIC44OTcgMiAycy0uODk3IDItMiAyLTItLjg5Ny0yLTIgLjg5Ny0yIDItMnptMC0zMGMxLjEwMyAwIDIgLjg5NyAyIDJzLS44OTcgMi0yIDItMi0uODk3LTItMiAuODk3LTIgMi0yem0yIDE1YzEuMTAzIDAgMiAuODk3IDIgMnMtLjg5NyAyLTIgMi0yLS44OTctMi0yIC44OTctMiAyLTJ6bS0xMCAzaDYuMTQzYy40NDYgMS43MiAxLjk5OSAzIDMuODU3IDMgMi4yMDYgMCA0LTEuNzk0IDQtNHMtMS43OTQtNC00LTRjLTEuODU4IDAtMy40MTEgMS4yOC0zLjg1NyAzSDU0VjI2aDQuMTQzYy40NDYgMS43MiAxLjk5OSAzIDMuODU3IDMgMi4yMDYgMCA0LTEuNzk0IDQtNHMtMS43OTQtNC00LTRjLTEuODU4IDAtMy40MTEgMS4yOC0zLjg1NyAzSDUzYTEgMSAwIDAwLTEgMXYxNGgtN3YyaDd2MTRhMSAxIDAgMDAxIDFoNS4xNDNjLjQ0NiAxLjcyIDEuOTk5IDMgMy44NTcgMyAyLjIwNiAwIDQtMS43OTQgNC00cy0xLjc5NC00LTQtNGMtMS44NTggMC0zLjQxMSAxLjI4LTMuODU3IDNINTRWNDF6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon SNS"
        },
        "statements": [
          {
            "action": "sns:CreateTopic",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:DeleteTopic",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:ListSubscriptions",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:ListSubscriptionsByTopic",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:ListTopics",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:Subscribe",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:Unsubscribe",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "sns:SetTopicAttributes",
            "effect": "Allow",
            "resource": "*",
            "service": "sns",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "dax": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzJFMjdBRCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM1MjdGRkYiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTIuMDg2IDU0Ljg1Yy0zLjMzOCAyLjY5OS0xMC4zNDEgNC4xMjUtMTcuMDQyIDQuMTI1LTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzNmguMDAxYzAgMi43MSA2Ljk5OSA1LjczMSAxNy4wNDMgNS43MzEgMTAuMDM2IDAgMTcuMDMxLTMuMDE3IDE3LjA0Mi01LjcyNnYtNS40NHptLjAwMS0xMC4zMjhsMi0uMDF2LjAxYzAgMS4yMDgtLjYwNSAyLjMzNi0xLjc4MyAzLjM2OSAxLjQyOCAxLjI1NiAxLjc4MyAyLjQ4OSAxLjc4MyAzLjM2N2wtLjAwMS4wMTd2OS4wMWMwIDUuMDEtOS44MTEgNy43MTUtMTkuMDQyIDcuNzE1LTkuMjA5IDAtMTguOTk0LTIuNjkzLTE5LjA0MS03LjY4IDAtLjAwNi0uMDAzLS4wMS0uMDAzLS4wMTZ2LTkuMDVsLjAwMi0uMDA3Yy4wMDMtLjg3OC4zNTktMi4xMDYgMS43ODUtMy4zNi0xLjQxNy0xLjI1MS0xLjc3Ny0yLjQ3Mi0xLjc4Ni0zLjM0M2guMDAxbC0uMDAyLS4wMXYtOS4wNWwuMDAyLS4wMWMuMDAzLS44NzcuMzYtMi4xMDUgMS43ODYtMy4zNTctMS40MTgtMS4yNTItMS43NzgtMi40NzQtMS43ODctMy4zNDRoLjAwMUwxNiAyOC43NnYtOS4wNDhsLjAwMi0uMDFDMTYuMDE5IDE0LjcgMjUuODIgMTIgMzUuMDQ0IDEyYzUuMjExIDAgMTAuMjE3LjgyOCAxMy43MzQgMi4yNzJsLS43NjUgMS44MzNjLTMuMjgzLTEuMzQ4LTguMDEtMi4xMjEtMTIuOTY5LTIuMTIxLTEwLjA0NCAwLTE3LjA0MyAzLjAyLTE3LjA0MyA1LjczMyAwIDIuNzEyIDYuOTk5IDUuNzMzIDE3LjA0MyA1LjczMy4yNzEuMDAzLjUzNiAwIC44MDQtLjAxbC4wODQgMS45ODJjLS4yOTYuMDEyLS41OTIuMDEyLS44ODguMDEyLTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzMmguMDAxdi4wMjNjLjAxIDEuMDQgMS4wNzcgMS45NDkgMS45NzEgMi41MjYgMi42OSAxLjcxNSA3LjUxIDIuODg2IDEyLjg4NSAzLjEzbC0uMDkxIDEuOTgxYy01LjQ0NS0uMjQ3LTEwLjIxMy0xLjM3Ny0xMy4yODItMy4xMDgtLjc1Ni41NjUtMS40ODMgMS4zMy0xLjQ4MyAyLjE5NyAwIDIuNzExIDYuOTk5IDUuNzMyIDE3LjA0MyA1LjczMi45ODUgMCAxLjk2My0uMDMyIDIuOTA4LS4wOThsLjEzOSAxLjk3OWMtLjk5LjA2OC0yLjAxNi4xMDMtMy4wNDcuMTAzLTYuNzAyIDAtMTMuNzA3LTEuNDI3LTE3LjA0NC00LjEyNnY1LjQzMmguMDAxYy4wMSAxLjA2NCAxLjA3NyAxLjk3MSAxLjk3MSAyLjU1IDMuMDc2IDEuOTYyIDguODUyIDMuMTg0IDE1LjA3MiAzLjE4NGguNDR2MS45ODRoLS40NGMtNi4zMTkgMC0xMi4wNjItMS4xNzQtMTUuNTc0LTMuMTU2LS43NTIuNTY0LTEuNDY5IDEuMzI1LTEuNDY5IDIuMTg1IDAgMi43MTIgNi45OTkgNS43MzQgMTcuMDQzIDUuNzM0IDEwLjAzNiAwIDE3LjAzMS0zLjAxOCAxNy4wNDItNS43Mjd2LS4wMTFjLS4wMDItLjg2Mi0uNzIyLTEuNjIzLTEuNDc2LTIuMTg3LS40ODguMjc3LTEuMDExLjU0My0xLjYwNi43ODhsLS43NjYtMS44MzNjLjcyNi0uMjk4IDEuMzU2LS42MiAxLjg3My0uOTYuOTAyLS41ODggMS45NzYtMS41MDcgMS45NzYtMi41NHptOC41NjYtMTQuNTA1aC01LjYwNGExIDEgMCAwMS0uODI3LS40MzUuOTgyLjk4MiAwIDAxLS4xMDMtLjkyMmwzLjQwOS04LjUyMkg0NC42MTlsLTYgMTEuOTAyaDYuMzgyYy4zMTkgMCAuNjE5LjE1Mi44MDguNDA3YS45ODkuOTg5IDAgMDEuMTQ1Ljg4Nkw0MC4yNTggNTEuMDlsMjAuMzk1LTIxLjA3MnptMy4wNjktLjMwNUwzOC43MjMgNTUuNTRhMS4wMDYgMS4wMDYgMCAwMS0xLjIzMy4xNjUuOTg4Ljk4OCAwIDAxLS40NDItMS4xNTNsNi41ODYtMjAuNTI4aC02LjYzM2MtLjM0NyAwLS42NjgtLjE3OC0uODUxLS40N2EuOTgzLjk4MyAwIDAxLS4wNDMtLjk2NWw3LTEzLjg4NmExIDEgMCAwMS44OTQtLjU0OWgxNWMuMzMgMCAuNjQyLjE2NC44MjcuNDM1YS45ODQuOTg0IDAgMDEuMTAzLjkyM2wtMy40MSA4LjUyMUg2M2MuNCAwIC43NjMuMjM4LjkyLjYwM2EuOTg3Ljk4NyAwIDAxLS4xOTggMS4wNzZ6TTE5LjQ1NSA2MC42NzRjMS40MTcuNzk5IDMuMjAxIDEuNDcgNS4zMDIgMS45OTRsLjQ4OC0xLjkyNGMtMS44OTktLjQ3My0zLjU1OS0xLjA5NC00LjgwMi0xLjc5NGwtLjk4OCAxLjcyNHpNMjQuNzU3IDQ2LjhsLjQ4OC0xLjkyNGMtMS44OTktLjQ3NC0zLjU1OS0xLjA5NS00LjgwMi0xLjc5NWwtLjk4OCAxLjcyNWMxLjQxNy43OTggMy4yIDEuNDcgNS4zMDIgMS45OTR6bS01LjMwMi0xNy44NjNsLjk4OC0xLjcyNWMxLjI0MS43IDIuOTAyIDEuMzIgNC44MDIgMS43OTVsLS40ODggMS45MjNjLTIuMTA0LS41MjUtMy44ODctMS4xOTYtNS4zMDItMS45OTN6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "Amazon DynamoDB Accelerator (DAX)"
        },
        "statements": [
          {
            "action": "dax:*",
            "effect": "Allow",
            "resource": "*",
            "service": "dax",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "cloudwatch": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTUuMDYgNDYuNzc3YzAtMy45MDktMy4yMDItNy4wOS03LjEzOC03LjA5LTMuOTM1IDAtNy4xMzYgMy4xODEtNy4xMzYgNy4wOSAwIDMuOTEgMy4yIDcuMDkgNy4xMzYgNy4wOXM3LjEzNy0zLjE4IDcuMTM3LTcuMDltMi4wMSAwYzAgNS4wMTEtNC4xMDMgOS4wODctOS4xNDcgOS4wODctNS4wNDMgMC05LjE0Ny00LjA3Ni05LjE0Ny05LjA4NyAwLTUuMDEgNC4xMDQtOS4wODYgOS4xNDctOS4wODYgNS4wNDQgMCA5LjE0OCA0LjA3NiA5LjE0OCA5LjA4Nm04LjQ0IDEzLjY5N0w1OC41IDU0LjIwM2ExMy4wMzMgMTMuMDMzIDAgMDEtMS45NDcgMi4xNmw2Ljk5OCA2LjI3YTEuNDc0IDEuNDc0IDAgMDAyLjA2Ni0uMTA3IDEuNDUzIDEuNDUzIDAgMDAtLjEwOC0yLjA1Mm0tMTcuNTg4LTIuODEyYzYuMDQzIDAgMTAuOTU4LTQuODgzIDEwLjk1OC0xMC44ODVzLTQuOTE1LTEwLjg4NC0xMC45NTgtMTAuODg0Yy02LjA0MSAwLTEwLjk1NyA0Ljg4Mi0xMC45NTcgMTAuODg0IDAgNi4wMDIgNC45MTYgMTAuODg1IDEwLjk1NyAxMC44ODVtMTkuMTkgNi4yQTMuNDgzIDMuNDgzIDAgMDE2NC41MjkgNjVhMy40NzUgMy40NzUgMCAwMS0yLjMyMi0uODgzTDU0LjkzMSA1Ny42YTEyLjkzNSAxMi45MzUgMCAwMS03LjAwOSAyLjA2Yy03LjE1IDAtMTIuOTY3LTUuNzc5LTEyLjk2Ny0xMi44ODIgMC03LjEwMiA1LjgxNy0xMi44ODEgMTIuOTY3LTEyLjg4MSA3LjE1MSAwIDEyLjk2OSA1Ljc3OSAxMi45NjkgMTIuODgxIDAgMi4wMzgtLjQ5MiAzLjk2LTEuMzQ0IDUuNjc0bDcuMzA5IDYuNTRhMy40NDQgMy40NDQgMCAwMS4yNTYgNC44NzJNMjEuMjggMjkuMzkzYzAgLjUxOS4wMzIgMS4wMzYuMDk0IDEuNTM2YS45OTQuOTk0IDAgMDEtLjgyMyAxLjEwNmMtMi40NzIuNjM0LTYuNTQgMi41NTMtNi41NCA4LjMxIDAgNC4zNDggMi40MTMgNi43NDggNC40MzkgNy45OTYuNjkxLjQzMyAxLjUxLjY2NCAyLjM3My42NzNsMTIuMTIyLjAxMS0uMDAyIDEuOTk3LTEyLjEzMS0uMDFjLTEuMjQ2LS4wMTQtMi40MjgtLjM1MS0zLjQyOC0uOTc3QzE1LjM3NyA0OC43OTcgMTIgNDUuODkgMTIgNDAuMzQ1YzAtNi42ODMgNC42LTkuMTUzIDcuMy0xMC4wMjYtLjAyLS4zMDctLjAzLS42MTctLjAzLS45MjYgMC01LjQ2IDMuNzI4LTExLjEyMyA4LjY3Mi0xMy4xNzEgNS43ODItMi40MDcgMTEuOTA4LTEuMjE0IDE2LjM4NCAzLjE4OSAxLjM4OCAxLjM2NCAyLjUyOSAzLjAyIDMuNDA0IDQuOTM3YTYuNTA5IDYuNTA5IDAgMDE0LjE1NC0xLjUwMmMzLjAwMiAwIDYuMzgyIDIuMjY0IDYuOTg0IDcuMjE1IDIuODEyLjY0NCA4Ljc1MyAyLjg5NCA4Ljc1MyAxMC4zNjIgMCAyLjk4MS0uOTQxIDUuNDQ0LTIuNzk4IDcuMzE5bC0xLjQzMy0xLjQwMWMxLjQ3My0xLjQ4OCAyLjIyLTMuNDc5IDIuMjItNS45MTggMC02LjUzMi01LjUwNC04LjE1Ny03Ljg3My04LjU1MWExLjAwMiAxLjAwMiAwIDAxLS44MjMtMS4xNTdjLS4zMjktNC4wNTUtMi43NTMtNS44NzItNS4wMy01Ljg3Mi0xLjQzNyAwLTIuNzg0LjY5NS0zLjY5NyAxLjkwN2ExLjAwNiAxLjAwNiAwIDAxLTEuNzUtLjI1OGMtLjgyMy0yLjI2Ni0yLjAxLTQuMTcxLTMuNTI1LTUuNjYxLTMuODgtMy44MTYtOS4xODQtNC44NS0xNC4xOTUtMi43NjYtNC4xNyAxLjcyNy03LjQzNyA2LjcwMi03LjQzNyAxMS4zMjgiIGZpbGw9IiNGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
          "name": "Amazon CloudWatch"
        },
        "statements": [
          {
            "action": "cloudwatch:DeleteAlarms",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:DescribeAlarmHistory",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:DescribeAlarms",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:DescribeAlarmsForMetric",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:GetMetricStatistics",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:ListMetrics",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:PutMetricAlarm",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:GetMetricData",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:GetInsightRuleReport",
            "effect": "Allow",
            "resource": "arn:aws:cloudwatch:*:*:insight-rule/DynamoDBContributorInsights*",
            "service": "cloudwatch",
            "source": {
              "index": "1",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:ListMetrics",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudwatch:GetMetricData",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudwatch",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "tag": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeDE9Ii0zNy41IiB5MT0iMzcuNSIgeDI9IjExMi41IiB5Mj0iMzcuNSIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSgtNDUgMzcuNTAyIDM3LjQ5NikiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMTQxYjIzIi8+CiAgICAgICAgICAgIDxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzVhNjM2ZSIvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8cGF0aCBmaWxsPSJ1cmwoI2EpIiBkPSJNMCAwaDY0djY0SDB6Ii8+CiAgICA8ZyB0cmFuc2Zvcm09InNjYWxlKC43NSkgdHJhbnNsYXRlKDEwIDEwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMi41NnB4Ij4KICAgICAgICA8cG9seWdvbiBwb2ludHM9IjU4Ljc4IDQ4IDU4Ljc4IDE2IDMyIDEuMjggNS4yMiAxNiA1LjIyIDQ4IDMyIDYyLjcyIDU4Ljc4IDQ4Ii8+CiAgICAgICAgPHBvbHlsaW5lIHBvaW50cz0iNS4yMiAxNiAzMiAzMiA1OC43OCAxNiIvPgogICAgICAgIDxsaW5lIHgxPSIzMiIgeTE9IjMyIiB4Mj0iMzIiIHkyPSI2Mi43MiIvPgogICAgPC9nPgo8L3N2Zz4=",
          "name": "Amazon Resource Group Tagging API"
        },
        "statements": [
          {
            "action": "tag:GetResources",
            "effect": "Allow",
            "resource": "*",
            "service": "tag",
            "source": {
              "index": "0",
              "policyName": "AmazonDynamoDBFullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "tag:GetResources",
            "effect": "Allow",
            "resource": "*",
            "service": "tag",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "logs": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTUuMDYgNDYuNzc3YzAtMy45MDktMy4yMDItNy4wOS03LjEzOC03LjA5LTMuOTM1IDAtNy4xMzYgMy4xODEtNy4xMzYgNy4wOSAwIDMuOTEgMy4yIDcuMDkgNy4xMzYgNy4wOXM3LjEzNy0zLjE4IDcuMTM3LTcuMDltMi4wMSAwYzAgNS4wMTEtNC4xMDMgOS4wODctOS4xNDcgOS4wODctNS4wNDMgMC05LjE0Ny00LjA3Ni05LjE0Ny05LjA4NyAwLTUuMDEgNC4xMDQtOS4wODYgOS4xNDctOS4wODYgNS4wNDQgMCA5LjE0OCA0LjA3NiA5LjE0OCA5LjA4Nm04LjQ0IDEzLjY5N0w1OC41IDU0LjIwM2ExMy4wMzMgMTMuMDMzIDAgMDEtMS45NDcgMi4xNmw2Ljk5OCA2LjI3YTEuNDc0IDEuNDc0IDAgMDAyLjA2Ni0uMTA3IDEuNDUzIDEuNDUzIDAgMDAtLjEwOC0yLjA1Mm0tMTcuNTg4LTIuODEyYzYuMDQzIDAgMTAuOTU4LTQuODgzIDEwLjk1OC0xMC44ODVzLTQuOTE1LTEwLjg4NC0xMC45NTgtMTAuODg0Yy02LjA0MSAwLTEwLjk1NyA0Ljg4Mi0xMC45NTcgMTAuODg0IDAgNi4wMDIgNC45MTYgMTAuODg1IDEwLjk1NyAxMC44ODVtMTkuMTkgNi4yQTMuNDgzIDMuNDgzIDAgMDE2NC41MjkgNjVhMy40NzUgMy40NzUgMCAwMS0yLjMyMi0uODgzTDU0LjkzMSA1Ny42YTEyLjkzNSAxMi45MzUgMCAwMS03LjAwOSAyLjA2Yy03LjE1IDAtMTIuOTY3LTUuNzc5LTEyLjk2Ny0xMi44ODIgMC03LjEwMiA1LjgxNy0xMi44ODEgMTIuOTY3LTEyLjg4MSA3LjE1MSAwIDEyLjk2OSA1Ljc3OSAxMi45NjkgMTIuODgxIDAgMi4wMzgtLjQ5MiAzLjk2LTEuMzQ0IDUuNjc0bDcuMzA5IDYuNTRhMy40NDQgMy40NDQgMCAwMS4yNTYgNC44NzJNMjEuMjggMjkuMzkzYzAgLjUxOS4wMzIgMS4wMzYuMDk0IDEuNTM2YS45OTQuOTk0IDAgMDEtLjgyMyAxLjEwNmMtMi40NzIuNjM0LTYuNTQgMi41NTMtNi41NCA4LjMxIDAgNC4zNDggMi40MTMgNi43NDggNC40MzkgNy45OTYuNjkxLjQzMyAxLjUxLjY2NCAyLjM3My42NzNsMTIuMTIyLjAxMS0uMDAyIDEuOTk3LTEyLjEzMS0uMDFjLTEuMjQ2LS4wMTQtMi40MjgtLjM1MS0zLjQyOC0uOTc3QzE1LjM3NyA0OC43OTcgMTIgNDUuODkgMTIgNDAuMzQ1YzAtNi42ODMgNC42LTkuMTUzIDcuMy0xMC4wMjYtLjAyLS4zMDctLjAzLS42MTctLjAzLS45MjYgMC01LjQ2IDMuNzI4LTExLjEyMyA4LjY3Mi0xMy4xNzEgNS43ODItMi40MDcgMTEuOTA4LTEuMjE0IDE2LjM4NCAzLjE4OSAxLjM4OCAxLjM2NCAyLjUyOSAzLjAyIDMuNDA0IDQuOTM3YTYuNTA5IDYuNTA5IDAgMDE0LjE1NC0xLjUwMmMzLjAwMiAwIDYuMzgyIDIuMjY0IDYuOTg0IDcuMjE1IDIuODEyLjY0NCA4Ljc1MyAyLjg5NCA4Ljc1MyAxMC4zNjIgMCAyLjk4MS0uOTQxIDUuNDQ0LTIuNzk4IDcuMzE5bC0xLjQzMy0xLjQwMWMxLjQ3My0xLjQ4OCAyLjIyLTMuNDc5IDIuMjItNS45MTggMC02LjUzMi01LjUwNC04LjE1Ny03Ljg3My04LjU1MWExLjAwMiAxLjAwMiAwIDAxLS44MjMtMS4xNTdjLS4zMjktNC4wNTUtMi43NTMtNS44NzItNS4wMy01Ljg3Mi0xLjQzNyAwLTIuNzg0LjY5NS0zLjY5NyAxLjkwN2ExLjAwNiAxLjAwNiAwIDAxLTEuNzUtLjI1OGMtLjgyMy0yLjI2Ni0yLjAxLTQuMTcxLTMuNTI1LTUuNjYxLTMuODgtMy44MTYtOS4xODQtNC44NS0xNC4xOTUtMi43NjYtNC4xNyAxLjcyNy03LjQzNyA2LjcwMi03LjQzNyAxMS4zMjgiIGZpbGw9IiNGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=",
          "name": "Amazon CloudWatch Logs"
        },
        "statements": [
          {
            "action": "logs:*",
            "effect": "Allow",
            "resource": "arn:aws:logs:*:*:*",
            "service": "logs",
            "source": {
              "index": "0",
              "policyName": "AWSLambdaExecute",
              "policyType": "managed"
            }
          },
          {
            "action": "logs:DescribeLogGroups",
            "effect": "Allow",
            "resource": "*",
            "service": "logs",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "logs:DescribeLogStreams",
            "effect": "Allow",
            "resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*",
            "service": "logs",
            "source": {
              "index": "2",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "logs:GetLogEvents",
            "effect": "Allow",
            "resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*",
            "service": "logs",
            "source": {
              "index": "2",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "logs:FilterLogEvents",
            "effect": "Allow",
            "resource": "arn:aws:logs:*:*:log-group:/aws/lambda/*",
            "service": "logs",
            "source": {
              "index": "2",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      },
      "cloudformation": {
        "service": {
          "icon": "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPGcgdHJhbnNmb3JtPSJzY2FsZSguOCkiPgogICAgPGRlZnM+CiAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSIxMDAlIiB4Mj0iMTAwJSIgeTI9IjAlIiBpZD0iYSI+CiAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0IwMDg0RCIgb2Zmc2V0PSIwJSIvPgogICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRjRGOEIiIG9mZnNldD0iMTAwJSIvPgogICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgPHBhdGggZD0iTTAgMGg4MHY4MEgweiIgZmlsbD0idXJsKCNhKSIvPgogICAgICA8cGF0aCBkPSJNNTMgMzkuOTYzaDVWMzcuOTZoLTV2Mi4wMDN6TTI4IDUxLjk4Mmg1di0yLjAwM2gtNXYyLjAwM3ptLTEwIDBoN3YtMi4wMDNoLTd2Mi4wMDN6bTAtNi4wMWgxMlY0My45N0gxOHYyLjAwM3ptMC0xMi4wMThoOXYtMi4wMDNoLTl2Mi4wMDN6bTAgNi4wMWgzM1YzNy45NkgxOHYyLjAwM3ptMTkgMjIuMDMzSDE0VjI3Ljk0NWgyM3Y4LjAxMmgydi05LjAxNGMwLS41NTMtLjQ0OC0xLjAwMS0xLTEuMDAxSDEzYTEgMSAwIDAwLTEgMS4wMDF2MzYuMDU1QTEgMSAwIDAwMTMgNjRoMjVjLjU1MiAwIDEtLjQ0OSAxLTEuMDAydi0yMC4wM2gtMnYxOS4wMjl6bTMxLTI1LjAzOGMwIDYuNDcyLTUuODI3IDguNzIzLTguOTA4IDkuMDFMNDMgNDUuOTcxVjQzLjk3aDE2Yy4xOTUtLjAyMyA3LS43NTcgNy03LjAxIDAtNS42OTUtNS4xMzctNi44NS02LjE2Ni03LjAyNWExIDEgMCAwMS0uODI1LTEuMTI2Yy0uMDU1LTMuMjE4LTIuMDI4LTQuMjIzLTIuODgzLTQuNTA4LTEuNTk2LS41My0zLjM3NS0uMDIzLTQuMzE2IDEuMjRhMSAxIDAgMDEtMS43NDItLjI2MmMtLjYyMS0xLjc0Mi0xLjUyMi0yLjg3LTIuNzc1LTQuMTI1LTMuMTM0LTMuMTE0LTcuMzg4LTMuOTc1LTExLjM2OC0yLjMtMi4wODguODgtMy45MTMgMi44NzUtNS4wMDMgNS40NzRsLTEuODQ0LS43NzdjMS4yOTItMy4wNzYgMy41MDYtNS40NjEgNi4wNzItNi41NDMgNC43NTUtMi4wMDIgOS44MjEtLjk4MSAxMy41NTQgMi43MjcgMS4wNyAxLjA3MyAxLjk1NiAyLjExNyAyLjY0NiAzLjQ3IDEuNDkzLTEuMTA2IDMuNTA3LTEuNDM3IDUuNDA3LS44MDUgMi40MzIuODEgMy45NyAyLjkyMiA0LjIxOCA1LjczIDMuNDA2Ljg2IDcuMDI1IDMuNTgzIDcuMDI1IDguODN6IiBmaWxsPSIjRkZGIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K",
          "name": "AWS CloudFormation"
        },
        "statements": [
          {
            "action": "cloudformation:DescribeStacks",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudformation",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          },
          {
            "action": "cloudformation:ListStackResources",
            "effect": "Allow",
            "resource": "*",
            "service": "cloudformation",
            "source": {
              "index": "0",
              "policyName": "AWSLambda_FullAccess",
              "policyType": "managed"
            }
          }
        ]
      }
    },
    "roleName": "SignupLambdaRole",
    "trustedEntities": [
      "lambda.amazonaws.com"
    ]
  }