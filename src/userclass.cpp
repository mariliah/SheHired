//
//  userclass.cpp
//  
//
//  Created by Sandra Campuzano on 2/26/24.
//

#include "header.hpp"

// User sign up
class User {
    public:
    void apply() {
        //On-click sign-up button
        //Choose Student, Early Career, or Org
        cout << "Apply" << std::endl;
    };
};

//Student
class Student: private User {
   // Set user as a student job seeker
};

//Early Career
class Early: private User {
   //Set user to as early career job seeker
 
};


//Companies
class Poster: private User {
    
    //Set user as an organization
    //should we also have separate sign ups for indviduals
    // eg: HR and DEI points of contact
};
