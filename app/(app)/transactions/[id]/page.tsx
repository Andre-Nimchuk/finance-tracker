type TransactionDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TransactionDetailsPage({ params }: TransactionDetailsPageProps) {
  const { id } = await params;

  return (
    <main>
      <h1>Transaction details</h1>

      <p>Transaction ID: {id}</p>
    </main>
  );
}
