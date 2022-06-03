provider "aws" {
  region = "${var.aws_region}"
  access_key = "shehu-yusuf"
  secret_key = "025"
}

provider "archive" {}

data "archive_file" "zip" {
  type        = "zip"
  source_file = "my_lambda.py"
  output_path = "my_lambda.zip"
}

data "aws_iam_policy_document" "policy" {
  statement {
    sid    = ""
    effect = "Allow"

    principals {
      identifiers = ["lambda.amazonaws.com"]
      type        = "Service"
    }

    actions = ["sts:AssumeRole"]
  }
}

resource "aws_iam_role" "cil_lambda" {
  name               = "cil_lambda"
  assume_role_policy = "${data.aws_iam_policy_document.policy.json}"
}

resource "aws_lambda_function" "lambda" {
  function_name = "my_lambda"

  filename         = "${data.archive_file.zip.output_path}"
  source_code_hash = "${data.archive_file.zip.output_base64sha256}"

  role    = "${aws_iam_role.cil_lambda.arn}"
  handler = "my_lambda.lambda_handler"
  runtime = "python3.9"

  environment {
    variables = {
      address = "Hello Hakeem, this is my cil step function"
    }
  }
}

resource "aws_sfn_state_machine" "sfn_state_machine" {
  name     = "sfn_state_machine" 
  role_arn = "${aws_iam_role.cil_lambda.arn}"
  definition = <<EOF
  
  {
  
  "Comment": "this is my first cil-inters-step-function",
  "StartAt": "lambda",
   "States": {
      
     "lambda": {
       "Type": "Task",
       "Resource": "${aws_lambda_function.lambda.arn}",
       "End": true
      }
   }  
 }

 EOF

}