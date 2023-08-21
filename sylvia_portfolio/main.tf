terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "5.5.0"
    }
  }
}


provider "aws" {
  profile = "default"
  region  = "us-east-1"
}


# resource "aws_instance" "sylvia_server" {
#   ami           = ""
#   instance_type = "t2.micro"

#   tags = {
#     Name = "sylviaServer"
#   }
# }


module "sylvia_frontend_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"
  
  bucket_name = "sylvia-portfolio-bucket"
  acl         = "public-read"
}


module "sylvia_backend_bucket" {
  source = "terraform-aws-modules/s3-bucket/aws"
  
  bucket_name = ""
  acl         = "public-read-write"
}


module "sylvia_backend_ec2" {
  source  = "terraform-aws-modules/ec2-instance/aws"
  
  instance_count = 1
  ami            = ""
  instance_type = "t2.micro"  
  key_name       = ""
}
