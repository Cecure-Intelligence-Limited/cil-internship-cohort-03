module "step_function" {
  source = "terraform-aws-modules/step-functions/aws"

  name       = "my-step-function"
  definition = <<EOF
{
  "Comment": "A Hello World example of the Amazon States Language using Pass states",
  "StartAt": "Hello",
  "States": {
    "Hello": {
      "Type": "Pass",
      "Result": "Hello",
      "Next": "World"
    },
    "World": {
      "Type": "Pass",
      "Result": "World",
      "End": true
    }
  }
}
EOF

  service_integrations = {
    dynamodb = {
      dynamodb = ["arn:aws:dynamodb:eu-east-1:970025564377:table/Test"]
    }

    lambda = {
      lambda = ["arn:aws:lambda:us-east-1:970025564377:function:myFirstFunction", "arn:aws:lambda:us-east-1:970025564377:function:myFirstFunction1"]
    }

    stepfunction_Sync = {
      stepfunction = ["arn:aws:states:eu-east-1:970025564377:stateMachine:test1"]
      stepfunction_Wildcard = ["arn:aws:states:eu-east-1:970025564377:stateMachine:test1"]

      # Set to true to use the default events (otherwise, set this to a list of ARNs; see the docs linked in locals.tf
      # for more information). Without events permissions, you will get an error similar to this:
      #   Error: AccessDeniedException: 'arn:aws:iam::xxxx:role/step-functions-role' is not authorized to
      #   create managed-rule
      events = true
    }
  }

  type = "STANDARD"

  tags = {
    Module = "my"
  }
}