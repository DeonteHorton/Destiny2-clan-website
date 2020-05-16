const pool = require('../config/dbconfig')

class ContactDao {
  constructor(){
      this.pool = pool
  }
  
  create(req,res){
    // required min data
    if (!req.body.name || !req.body.email ||!req.body.comment) {
      res.json({
        "error":true,
        "message":"Missing Data"
      })
    };

    let fields = Object.keys(req.body);
    let values = Object.values(req.body);
          
      
    let sql = `INSERT into contact (${fields.join(',')}) values (${Array(values.length).fill('?').join(',')})`

    this.pool.query(sql,values,
      function (error,rows){
      if (error) {
        res.json({
          "error":true,
          "message":error
        })
      };
      res.json(rows)
    })
  
  }
  
  run = (req,res,sql)  => {
    pool.query(sql,function (error,rows) {
      if (error) {
        res.json({
          "error":true,
          "message":error
        })
      };
      res.json(rows)
    })
  };

  getAllcontacts(req,res){
    let sql ='SELECT * from contact ';
    
    this.pool.query(sql, function (error,rows){
        if (error) {
          res.json({
            "error":true,
            "message":error
          })
        };
        res.json(rows)
    })
  }
  findByName(req,res){
    let sql = `SELECT * from contact WHERE name = ?`;

    this.pool.query(sql,[req.params.name], function (error,rows){
      if (error) {
        res.json({
          "error":true,
          "message":error
        })
      };
      res.json(rows)
    })
  }

  findByEmail(req,res){
    let sql = `SELECT * from contact WHERE email = ?`;

    this.pool.query(sql,[req.params.email], function (error,rows){
      if (error) {
          res.json({
            "error":true,
            "message":error
          })
      };
      res.json(rows)
    })
  }
  
  findById(req,res){
    let sql = `SELECT * from contact WHERE id = ?`;

    this.pool.query(sql,[req.params.id], function (error,rows){
      if (error) {
          res.json({
            "error":true,
            "message":error
          })
      };
      res.json(rows)
    })
  }

  findUserComment(req,res){
    let sql = `SELECT name,comment from contact where name = ? `;

    this.pool.query(sql,[req.params.name], function (error,rows){
      if (error) {
        res.json({
          "error":true,
          "message":error
        })
      };
      res.json(rows)
    })
  }
    
}
  
module.exports = ContactDao;