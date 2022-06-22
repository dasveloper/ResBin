import Link from "next/link";
import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div tw="prose">
        <h1 id="docs">Docs</h1>
        <p>
          ResBin is a service for creating mock API responses. You supply the
          response status and response body and ResBin will generate a unique
          endpoint your mock API response.
        </p>
        <h3 id="use-cases">Use cases</h3>
        <p>
          There are many use cases for a mock API service like ResBin, but here
          are the two most common utilizations:
        </p>
        <ul>
          <li>
            Often you want to build the frontend before the backend. ResBin lets
            you create mock API responses to use in your frontend before your
            backend is built to make for an easier transition later on.
          </li>
          <li>
            When running tests you need stable responses (of non-production)
            data to ensure that your tests are running correctly and it is not
            just a data error.
          </li>
        </ul>
        <p>
          You could of course use ResBin for anything you want. If you have an
          interesting use-case for our service let us know!
        </p>
        <h3 id="creating-bin">Getting started</h3>
        <p>
          To get started with ResBin, you need to create your first bin. Here
          are the simple steps to get you bin up and running:
        </p>
        <ol>
          <li>
            Navigate to{" "}
            <Link href="/">
              <a>the ResBin homepage</a>
            </Link>
            .
          </li>
          <li>
            In the &quot;Response status&quot; field, enter the status you want
            your mock API response to return. For example, use 200 to mock
            successful responses, or 500 to mock error responses.
          </li>
          <li>
            In the &quot;Response body&quot; field, enter the content you want
            your mock API response to return. This can be any text or JSON data.
          </li>
          <li>
            Click the &quot;Create bin&quot; button to submit your response data
            and generate your mock API endpoint.
          </li>
          <li>
            You will be navigated to your mock API endpoint page that contains a
            review of the data you submitted as well as a new unique &quot;API
            endpoint&quot; URL.
          </li>
          <li>
            Make a HTTP GET request to your new API endpoint to retrieve your
            mock API data. The response status and body will reflect the data
            you entered.
          </li>
        </ol>
        <h3 id="resbin-fields">ResBin fields</h3>
        <p>
          Each field in a bin has certain requirements and expectations. If they
          are not met, they will throw errors on bin creation.
        </p>
        <ul>
          <li>
            <b>resStatus (response status)</b> &mdash; Integer between 100 and
            600.
          </li>
          <li>
            <b>resBody (response body)</b> &mdash; String less than 1000
            characters.
          </li>
          <li>
            <b>recaptcha (ReCAPTCHA)</b> &mdash; Valid ReCATPCHA
          </li>
        </ul>
        <h3 id="resbin-responses">ResBin responses</h3>
        <p>
          In order to discern between actual errors and purposefully set error
          responses, ResBin utilizes custom header attributes to send response
          results. Every bin response will contain two headers:
        </p>
        <ul>
          <li>
            <b>resBinSuccess</b> &mdash; Either `true` or `false`, indicating if
            there was an internal ResBin error. i.e. a 404 response is a{" "}
            <b>REAL</b> 404 response.
          </li>
          <li>
            <b>resBinMessage</b> &mdash; A human readable message to help
            determine what the error is.
          </li>
        </ul>
        <h3 id="resbin-limitations">ResBin limitations</h3>
        <p>
          Because Resbin is a free service it operated under certain
          restrictions and limitations. These are the current limitations of
          ResBin bins.
        </p>
        <ul>
          <li>
            <b>Rate limit</b> &mdash; Requests to a bin are limited to 10
            requests in 10 second window. Every request beyond that window
            receive a 429 response.
          </li>
          <li>
            <b>TTL</b> &mdash; Bins will automatically expire after 90 days.
            Requests after 90 days will receive a 404 response.
          </li>
        </ul>
        <p>
          If you feel like any of these limitations are too low, or you need an
          extension, let us know and we will do our best to extend it. These
          limitations are hopefully temporary and will be expanded or removed
          once ResBin grows.
        </p>
      </div>
    </Layout>
  );
}
