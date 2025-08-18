import { initTRPC } from '@trpc/server';

const ideas = [
  { nick: 'cool-idea-nick-1', name: 'idea 1', description: 'Description of idea 1...' },
  { nick: 'cool-idea-nick-2', name: 'idea 2', description: 'Description of idea 2...' },
  { nick: 'cool-idea-nick-3', name: 'idea 3', description: 'Description of idea 3...' },
  { nick: 'cool-idea-nick-4', name: 'idea 4', description: 'Description of idea 4...' },
  { nick: 'cool-idea-nick-5', name: 'idea 5', description: 'Description of idea 5...' },
];

const trpc = initTRPC.create();

const y: number = 'asdsad'
console.log(y)

if (Math.random()) console.info("sd");

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas };
  }),
});

export type TrpcRouter = typeof trpcRouter;
