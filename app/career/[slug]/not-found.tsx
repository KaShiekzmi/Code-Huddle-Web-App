import DataNotFound from "@/components/ui/DataNotFound";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex mt-10 flex-col items-center align-middle justify-center min-h-[70vh] text-center">
      <DataNotFound
        title="Job Not Found"
        description="Sorry, the job you are looking for does not exist or has been removed."
      />

      <Link
        href="/career"
        className=" text-[var(--color-gray)] rounded-lg font-semibold hover:bg-royalblue-200 transition-colors underline hover:no-underline"
      >
        Back to Careers
      </Link>
    </div>
  );
}
