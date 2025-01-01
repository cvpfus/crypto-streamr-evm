import Widget from "./widget";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;

  return <Widget username={username} />;
}
