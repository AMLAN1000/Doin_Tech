import ByteSpaceNavbar from "@/components/bytespace/Navbar";
import ByteSpaceFooter from "@/components/bytespace/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ByteSpaceNavbar />
      <main className="flex-1 w-full">{children}</main>
      <ByteSpaceFooter />
    </div>
  );
}
