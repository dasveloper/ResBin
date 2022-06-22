import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import ky from "ky";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import Link from "next/link";
import { binSchema } from "../lib/validators";
import {
  Button,
  Input,
  Label,
  Description,
  Alert,
  Error,
} from "../components/common";
import Layout from "../components/Layout";

const Recaptcha = dynamic(() => import("react-google-recaptcha"));

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(binSchema),
    defaultValues: {
      resStatus: 200,
      resBody: "",
      recaptcha: null,
    },
  });

  const onSubmit = async (data) => {
    try {
      const { message, binId } = await ky
        .post("/api/bins", { json: data })
        .json();
      router.push(`/bins/${binId}`);
      toast.success(message);
    } catch (err) {
      const { message } = await err.response.json();
      toast.error(message);
    }
  };

  return (
    <Layout>
      <h2 tw="font-bold">
        ResBin is a simple mock API response service. Use it to create
        placeholder API responses while building your frontend, or in tests that
        rely on API responses, or anything else you want!{" "}
        <Link href="/docs">
          <a tw="underline cursor-pointer">Learn more</a>
        </Link>
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} tw="mt-8 space-y-6">
        <div>
          <Label htmlFor="resStatus">Response status</Label>
          <Description>The response status your bin will return.</Description>
          <Input
            id="resStatus"
            type="number"
            {...register("resStatus", {
              valueAsNumber: true,
            })}
          />
          {errors.resStatus && <Error>{errors.resStatus.message}</Error>}
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
            {...register("resBody")}
          />
          <p tw="text-red-500">{errors?.resBody?.message}</p>
        </div>

        <Alert variant="warning">
          <b>Important!</b>
          <ul tw="list-disc list-inside">
            <li>
              All bins should be considered public, do not add confidential
              information.
            </li>
            <li>
              You can not edit or delete a bin once you create it, be careful
              what you add.
            </li>
            <li>
              All bins are bound by{" "}
              <Link href="/docs#resbin-limitations">
                <a tw="underline cursor-pointer">bin limitations</a>
              </Link>{" "}
              and{" "}
              <Link href="/terms">
                <a tw="underline cursor-pointer">ResBin terms of service</a>
              </Link>
            </li>
          </ul>
        </Alert>
        <div tw="flex flex-col items-end">
          <Controller
            name="recaptcha"
            control={control}
            render={({ field }) => (
              <Recaptcha
                size="normal"
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY}
                onChange={field.onChange}
              />
            )}
          />
          {errors.recaptcha && <Error>{errors.recaptcha.message}</Error>}
        </div>
        <div tw="flex justify-end">
          <Button type="submit" size="lg">
            Create bin
          </Button>
        </div>
      </form>
    </Layout>
  );
}
