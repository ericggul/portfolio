import Navigation from "@/components/Navigation";

export default function PublicationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation currTab="publications" />
      {children}
    </>
  );
}
