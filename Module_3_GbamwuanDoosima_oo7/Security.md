## Difference between Users, Roles, Permissions Policies and Groups

Cloud security is one of the top priorities when it comes to providing cloud services.
With AWS security, there are:
 * IAM
 * Key Management System (KMS)
 * Cognito
 * Web Access Firewall (WAF)

With the Identity Access Management('IAM') being the mot commonly used AWS cloud security
The IAM works in such a way that a group or users are created and allowed or denied permission to some services in the same environment.
The IAM AWS Security has the following components/main actors:
 * Users
 * Roles
 * Groups
 * Policies

IAM User: This is the permanent named operator, human or application that interacts with AWS with specific credentials attached to it like roles, to control access. The credentials(which refers to the Username, password, access or secret key) of the IAM User are permanent(or more like long-term credentials) and they stay with the user.

IAM Roles: An AWS IAM role is an identity within an account that has specific permissions which dictate what the identity can and can't do. Also, the IAM  role does not have any credentials and cannot make direct requests to AWS services. IAM roles are meant to be assumed by authorized entities, such as IAM users, applications, or an AWS service such as EC2. 
One major similarity betweeen IAM Roles and IAM User is that, both can be operators(human or applications) but credentials with roles are temporary.

IAM Groups: This is a collection of IAM Users. An IAM User can belong to many groups whereas the Roles cannot belong to a group.

Policies: A policy is an object in AWS that, when associated with an identity or resource, defines their permissions. When an IAM principal makes a request,AWS evaluates the request in accordance with the policy attached to that principaland grants or denies the request. AWS policies are stored in JSON documents called policy documents which bascially handles permissions. Each IAM principal has his policy documents( in JSON) attached to him
AWS supports six types of policies: 
 * identity-based policies
 * resource-based policies 
 * permissions boundaries
 * Organizations SCPs
 * ACLs and 
 * session policies


While Policies is used for authorization which means a security process that determines a user or service's level of access, authentication which means when ones signs into AWS using his credentials is done using the IAM User, Roles and Groups

