module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'ropdev_my-project'),
      user: env('DATABASE_USERNAME', 'ropdev_ropdev'),
      password: env('DATABASE_PASSWORD', 'TeE3sRGythRD'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
