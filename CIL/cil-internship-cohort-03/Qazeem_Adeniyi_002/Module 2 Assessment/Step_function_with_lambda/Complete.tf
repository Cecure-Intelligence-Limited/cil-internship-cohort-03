provider "aws" {
  region = "eu-west-1"

}

locals {
  definition_template = <<EOF
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
}

module "step_function" {
  source = "../../"

  name = random_pet.this.id

  type = "express"

  definition = local.definition_template

  logging_configuration = {
    include_execution_data = true
    level                  = "ALL"
  }

  service_integrations = {

    dynamodb = {
      dynamodb = ["arn:aws:dynamodb:eu-west-1:052212379155:table/Test"]
    }

    athena_StartQueryExecution_Sync = {
      athena        = ["arn:aws:athena:eu-west-1:123456789012:something1:test1"]
      glue          = ["arn:aws:glue:eu-west-1:123456789012:something2:test1"]
      s3            = true # options: true (use default value from `aws_service_policies`) or provide a list of ARNs
      lakeformation = ["arn:aws:lakeformation:eu-west-1:123456789012:something3:test1"]
    }

    lambda = {
      lambda = [
      module.lambda_function.lambda_function_arn, "arn:aws:lambda:eu-west-1:123456789012:function:test2"]
    }

    xray = {
      xray = true
    }

    stepfunction_Sync = {
      stepfunction = ["arn:aws:states:eu-west-1:123456789012:stateMachine:test1"]
      stepfunction_Wildcard = ["arn:aws:states:eu-west-1:123456789012:stateMachine:test1"]

      
      events = true
    }

    
  }

  

