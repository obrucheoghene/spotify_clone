import {create} from "zustand"

interface SubscrbeModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useSubscrbeModal = create<SubscrbeModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false})
}))

export default useSubscrbeModal;
