//import { useParams } from 'react-router-dom';
//import { type ViewIdeaRouteParams } from '../../lib/routes';
//import { trpc } from '../../lib/trps';
import css from './index.module.scss';

export const NewIdeaPage = () => {
  //const { ideaNick } = useParams() as ViewIdeaRouteParams;

  //const { data, error, isLoading, isFetching, isError } = trpc.getIdea.useQuery({
  //  ideaNick,
  //});

  //if (isLoading || isFetching) return <span>Loading...</span>;

  //if (isError) return <span>Error: {error.message}</span>;

  //if (!data!.idea) return <span>Idea not found</span>;

  return (
    <div>
      <h1 className={css.title}>New Idea</h1>
      <div>Form will be here...</div>
    </div>
  );
};
