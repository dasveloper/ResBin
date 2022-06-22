import { getBinById } from "../../../services/bin";
import { Input, Label, Description } from "../../../components/common";
import Layout from "../../../components/Layout";

export default function Bin({ bin, binId }) {
  const { resBody, resStatus } = bin;
  return (
    <Layout>
      <div tw="space-y-6">
        <div>
          <Label htmlFor="endpoint">API endpoint</Label>
          <Description>The unique API endpoint for your bin.</Description>
          <Input
            id="endpoint"
            block
            readOnly
            defaultValue={`${process.env.NEXT_PUBLIC_ROOT_URL}/api/${process.env.NEXT_PUBLIC_CURRENT_VERSION}/bins/${binId}`}
          />
        </div>
        <div>
          <Label htmlFor="resStatus">Response status</Label>
          <Description>The response status your bin will return.</Description>
          <Input
            id="resStatus"
            type="number"
            readOnly
            defaultValue={resStatus}
          />
        </div>
        <div>
          <Label htmlFor="resBody">Response body</Label>
          <Description>
            The JSON content your response body will return.
          </Description>
          <Input
            as="textarea"
            id="resBody"
            rows="12"
            block
            readOnly
            defaultValue={resBody}
          />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const { binId } = params;
  const bin = await getBinById(binId);
  if (!bin) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      bin,
      binId,
    },
  };
}
