import privileges

class User:
    def __init__(idnum, fname, lname, dob, country, metro, email, password, work, school, skills, portfolio, roles):
        self.idnum = idnum
        self.fnamen = fname
        self.lname = lname
        self.dob = dob
        self.country = country
        self.metro = metro
        self.email = email
        self.password = password
        self.work = work
        self.school = school
        self.skills = skills
        self.portfolio = portfolio
        self.roles = roles

class Student(User):
    def __init__(clubs, year):
        super().__init__(idnum, fname, lname, dob, country, metro, email, password, work, school, skills, portfolio, roles)
        self.clubs = clubs
        self.year = year
        self.privileges = Privileges()

    def show_privileges(self):
        print("Student privileges: ")
        for privilege in self.privileges:
            print("- " + privilege)

class Professional(User):
    def __init__(prof_org, title):
        super().__init__(idnum, fname, lname, dob, country, metro, email, password, work, school, skills, portfolio, roles)
        self.prof_org = prof_org
        self.title = title
        self.privileges = Privileges()

    def show_privileges(self):
        print("Professional privileges: ")
        for privilege in self.privileges:
            print("- " + privilege)

class Company:
    def __init__(self, email, password, idnum, compname, owner, address, city, state, zip, phone, size, website, industry, references, license, positions, history, dei, hr):
        self.compname = compname
        self.owner = owner
        self.address = address
        self.city = city
        self.state = state
        self.zip = zip
        self.phone = phone
        self.size = size
        self.website = website
        self.industry = industry
        self.references = references
        self.license = license
        self.positions = positions
        self.history = history
        self.dei = dei
        self.hr = hr
        self.privileges = Privileges()

    def show_privileges(self):
        print("Company privileges: ")
        for privilege in self.privileges:
            print("- " + privilege)