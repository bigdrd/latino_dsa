module.exports = (sequelize, Sequelize) => {
    const Classroom = sequelize.define("classroom", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      cod: {
        type: Sequelize.STRING,
        unique: true
      }
    });
  
    return Classroom;
  };