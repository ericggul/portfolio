import Navigation from "@/components/Navigation";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation currTab="" />
      {children}
    </>
  );
}
