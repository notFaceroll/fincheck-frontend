import { Logo } from "../../components/Logo";
import { UserMenu } from "../../components/UserMenu";
import { EditAccountModal } from "./Modals/EditAccountModal";
import { NewTransactionModal } from "./Modals/NewTransactionModal";
import { Accounts } from "./components/Accounts";
import {
  DashboardContext,
  DashboardProvider,
} from "./components/DashboardContext";
import { Fab } from "./components/Fab";
import { Transactions } from "./components/Transactions";

export function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
        {({ accountToEdit }) => (
          <div className="flex flex-col w-full h-full gap-4 p-4 md:p-8 md:pt-6">
            <header className="flex items-center justify-between h-12">
              <Logo className="h-6 text-teal-900" />
              <UserMenu />
            </header>

            <main className="flex flex-col flex-1 max-h-full gap-4 md:flex-row">
              <div className="w-full md:w-1/2 ">
                <Accounts />
              </div>
              <div className="w-full md:w-1/2 ">
                <Transactions />
              </div>
            </main>

            <NewTransactionModal />
            {accountToEdit && <EditAccountModal />}
            <Fab />
          </div>
        )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  );
}
