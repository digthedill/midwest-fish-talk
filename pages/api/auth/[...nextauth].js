import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import Adapters from 'next-auth/adapters' //didn't work from documentation
import Models from '../../../models' //ditto

const options = {
  site: process.env.NEXTAUTH_URL,
}

export default NextAuth({
  options,
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
  ],
  database: process.env.DB_URL,
  // adapter: Adapters.TypeORM.Adapter(process.env.DB_URL, {
  //   models: {
  //     User: Models.User,
  //   },
  // }),
})
