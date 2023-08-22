terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "3.0.0" 
    }
  }
}


provider "aws" {
  profile = "default"
  region  = "us-east-1"
}



module "sylvia_frontend_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"
  
  bucket_name = "sylvia-frontend-bucket"
  acl         = "public-read"
}


module "sylvia_backend_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"
  
  bucket_name = "sylvia-backend-bucket"
  acl         = "public-read-write"
}


module "sylvia_backend_ec2" {
  source  = "terraform-aws-modules/ec2-instance/aws"

  version = "5.3.1"
  instance_count = 1
  ami            = ""
  instance_type = "t2.micro"  
  key_name       = ""


  user_data = <<-EOF
    #!/bin/bash
    sudo apt-get update -y
    sudo apt-get install -y nodejs npm
    git clone https://github.com/mauroapjr/sylvia_portfolio.git
    cd /Users/user/Desktop/React_Projects/sylvia_portfolio/server
    npm install
    npm start
    EOF
}

resource "aws_security_group" "backend_ec2_sg" {
  name_prefix = "backend-ec2-sg-"

  ingress {
    from_port   = 3000  
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group_rule" "backend_ec2_outbound" {
  security_group_id = aws_security_group.backend_ec2_sg.id

  type        = "egress"
  from_port   = 0
  to_port     = 0
  protocol    = "-1"
  cidr_blocks = ["0.0.0.0/0"]
}