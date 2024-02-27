import privileges

class User:
    def __init__(self, email, password, idnum):
        self.email = email
        self.password = password
        self.idnum = idnum

class Seeker(User):
    def __init__(self, name, email, password, idnum):
        super().__init__(name, email, password, idnum, fname, lname, work, school, title, portfolio, resume)
        self.fnamen = fname
        self.lname = lname
        self.work = work
        self.school = school
        self.title = title
        self.portfolio = portfolio
        self.resume = resume
        self.privileges = Privileges()

    def show_privileges(self):
        print("Seeker privileges: ")
        for privilege in self.privileges:
            print("- " + privilege)

class Company(User):
    def __init__(self, email, password, idnum):
        super().__init__(self, email, password, idnum, compname, owner, address, city, state, zip, phone, size, website, industry, references, license, positions, history, dei, hr)
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