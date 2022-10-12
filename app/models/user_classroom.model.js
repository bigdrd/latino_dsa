module.exports = (sequelize, Sequelize) => {
    const User_Classroom = sequelize.define("user_classroom", {
      active: {
        type: Sequelize.INTEGER      
      },
      score: {
        type: Sequelize.INTEGER
      },
      log: {
        type: Sequelize.STRING
      }
    });
  
    return User_Classroom;
  };