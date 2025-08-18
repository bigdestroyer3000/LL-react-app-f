import { TrpcProvider } from './lib/trps.tsx';
import { AllIdeasPage } from './pages/Ideas';

export const App = () => {
  return (
    <TrpcProvider>
      <AllIdeasPage />
    </TrpcProvider>
  )
}