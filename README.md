# UI_FrameWork_Palywrite
This repository contains a UI automation framework built using TypeScript



**Features**


•	TypeScript: The framework is implemented using TypeScript, allowing for static typing and enhanced code readability.


•	Page Object Model (POM): The framework follows the Page Object Model design pattern, separating the UI elements and actions into page objects for better maintainability and reusability.


•	Browser: Framework supported for 3 browsers(default browser) - chromium , FireFox and Webkit


•	Test Runner: The framework is integrated with a test runner (inbuilt playwrite test runner) for executing test cases and generating test reports.


•	Configuration: Configuration files are provided to customize test execution settings


• Reporting: The framework has inbuilt reporting option. Report automatically generated once you have run the test.



**Prerequisites**
To set up and run the UI automation framework, ensure the following software is installed on your machine

•	Node.js (latest )


•	Palywrite (latest)


• VS code (IDE - latest)



**Getting Started**


Follow the steps below to get started with the UI automation framework


1. Clone the repository

   
3. Install dependencies: run npm install

 
 
 **Instruction to use**
 
  1.To run the test type  npx playwright test

  
  If you want pt run only one test class type - npx playwright test <xxx.spec.ts>
  
  
  
  **How to Add new pages and test** 
  
 1.Implement new page  - Create page objects under <page_directory> to represent the UI elements and actions for each web page.

  
 2.Implement new test - Create test cases in <test_directory> using the provided framework methods and page objects.

  
 3. View test reports  - npx playwright show-report
  	


