// declaration.d.ts
import { AuthStackParamList } from './app/types/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList {}
  }
}

