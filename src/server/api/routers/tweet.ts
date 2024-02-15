import {z} from "zod";

import {createTRPCRouter, protectedProcedure, publicProcedure,} from "~/server/api/trpc";


export const tweetRouter = createTRPCRouter({

    feed: publicProcedure.query(({ctx}) => {
        const userId = ctx.session?.user?.id;

        return  ctx.db.tweet.findMany({
            where: {id: userId},
        });
    }),
    create: protectedProcedure
        .input(z.object({content: z.string()}))
        .mutation(async ({input: {content}, ctx}) => {
            return await ctx.db.tweet.create({
                    data: {content, userId: ctx.session.user.id}
                }
            )
        }),


});
