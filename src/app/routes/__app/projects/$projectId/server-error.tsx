import { Error500 } from "@app/components/error-500";

export const loader = async () => {
  throw new Error("Fail from Error500Route");
};

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  const errorMessage =
    "The Server error page failed. Navigate to the board page";

  return (
    <div className="pt-[100px]">
      <Error500 message={errorMessage} href="board" />
    </div>
  );
}

export default function Error500Route() {
  return <div>This will never show because of the server error 500</div>;
}
