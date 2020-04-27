const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const mongoose = require("mongoose");
const User = mongoose.model("users");

const keys = process.env.secretOrKey; // Bring the Secret Key

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); // 클라이언트에서 서버로 jwt를 전달하는 방식
opts.secretOrKey = keys; // fromAuthHeaderAsBearerToken():  header에 Authorizationi이라는 키이름에 BearerToken을 전달하는 방식

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then((user) => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    })
  );
};
