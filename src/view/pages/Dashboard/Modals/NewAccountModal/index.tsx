import { ColorsDropdownInput } from "../../../../components/ColorsDropdownInput";
import { Input } from "../../../../components/Input";
import { InputCurrency } from "../../../../components/InputCurrency";
import { Modal } from "../../../../components/Modal";
import { Select } from "../../../../components/Select";
import { useNewAccountModalController } from "./useNewAccountModal";

export function NewAccountModal() {
  const { closeNewAccountModal, isNewAccountModalOpen } =
    useNewAccountModalController();
  return (
    <Modal
      title="Nova Conta"
      open={isNewAccountModalOpen}
      onClose={closeNewAccountModal}
    >
      <form action="">
        <div>
          <span className="text-gray-600 tracking-[-0.5px] text-sm">Saldo</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-600 tracking-[-0.5px] text-lg">R$</span>
            <InputCurrency />
          </div>
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <Input type="text" name="name" placeholder="Nome da Conta" />
          <Select
            placeholder="Tipo"
            options={[
              { label: "Conta Corrente", value: "CHECKING" },
              { label: "Investimentos", value: "INVESTMENT" },
              { label: "Dinheiro Físico", value: "CASH" },
            ]}
          />
          <ColorsDropdownInput />
        </div>
      </form>
    </Modal>
  );
}