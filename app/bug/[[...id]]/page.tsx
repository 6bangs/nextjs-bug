export const dynamic = "force-dynamic";

type Props = {
  params: {
      id: string;
  }
}
const BugPage = async ({params: {id}}: Props) => {
  console.log(`Bug page executing for ID ${id}`);
  return (
    <p>Testing.</p>
  )
}

export default BugPage;