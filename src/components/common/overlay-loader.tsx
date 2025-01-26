import { useAppStore } from '@/stores/useAppStore';

const OverlayLoader = () => {
  const { isLoading } = useAppStore();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-[1200] flex h-screen w-screen items-center justify-center bg-black-def bg-opacity-30">
      <div className="loader"></div>
    </div>
  );
};

export default OverlayLoader;
