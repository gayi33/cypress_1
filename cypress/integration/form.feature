Feature: Form Fill

    I want to Fill the Form

    Scenario: Filling the form
        Given open the Form
        And Enter the FirstName, LastName and Email
        And Select Gender
        And Enter Mobile Number
        And Enter DOB
        And Select Hobbies
        And Select State and City
        Then Click on Submit
        Then Review page is open

    Scenario: Error Filling Form
        Given open the Form
        And Enter the FirstName, LastName and Email
        And Select Gender
        And Enter DOB
        And Select Hobbies
        And Select State and City
        Then Click on Submit
        Then Review is not open