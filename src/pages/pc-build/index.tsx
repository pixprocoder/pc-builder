import RootLayout from "@/components/layouts/RootLayout";

function PcBuilderPage() {
  return (
    <div className="bg-gray-800">
      <h1 className="text-center">Build your pc</h1>
      <PcBuilderPage />
    </div>
  );
}

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page: any) {
  return <RootLayout>{page}</RootLayout>;
};
