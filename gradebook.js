const gradebook = {
    students: {},
  
    addStudent(name) {
      this.students[name] = [];
    },
  
    addGrade(name, grade) {
      if (this.students[name]) {
        this.students[name].push(grade);
      } else {
        console.log("Student "+name+ "not found.");
      }
    },
  
    calculateAverageGrade(name) {
      if (this.students[name] && this.students[name].length > 0) {
        let total = 0;
        for (let i = 0; i < this.students[name].length; i++) {
          total += this.students[name][i];
        }
        return total / this.students[name].length;
      } else {
        return 0;
      }
    },
  
    findHighestAndLowestGrades(name) {
      if (this.students[name] && this.students[name].length > 0) {
        let highest = this.students[name][0];
        let lowest = this.students[name][0];
        for (let i = 1; i < this.students[name].length; i++) {
          if (this.students[name][i] > highest) {
            highest = this.students[name][i];
          }
          if (this.students[name][i] < lowest) {
            lowest = this.students[name][i];
          }
        }
        return { highest, lowest };
      } else {
        return { highest: 0, lowest: 0 };
      }
    }
  };




  gradebook.addStudent("sohan");
  gradebook.addGrade("sohan",10);
  gradebook.addGrade("sohan",20);
  gradebook.addGrade("sohan",30);
  gradebook.addGrade("sohan",40);
  console.log(gradebook.calculateAverageGrade("sohan"));

  gradebook.addStudent("roza")
  gradebook.addGrade("roza",1);
  gradebook.addGrade("roza",2);
  gradebook.addGrade("roza",3);
  gradebook.addGrade("roza",4);
  console.log(gradebook.calculateAverageGrade("roza"));

  console.log(gradebook.findHighestAndLowestGrades("sohan"));
  console.log(gradebook.findHighestAndLowestGrades("roza"));