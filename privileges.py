class Admin(User):
    def __init__(self, name, email):
        super().__init__(name, email)
        self.privileges = Privileges()

class Privileges:
    def __init__(self):
        self.privileges = ['can add post', 'can delete post', 'can ban user']

    def show_privileges(self):
        print("Admin privileges: ")
        for privilege in self.privileges:
            print("- " + privilege)