module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
      env: {
        NETLIFY_URL:
          process.env.NODE_ENV !== 'production'
            ? 'http://localhost:8888'
            : 'https://lifefitnessdemo.netlify.app',
      },
   
  }