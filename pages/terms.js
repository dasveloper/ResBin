import Link from "next/link";
import Layout from "../components/Layout";

export default function Terms() {
  return (
    <Layout>
      <div tw="prose">
        <h1 id="terms-of-service">Terms of Service</h1>
        <p>
          These Terms of Service govern your use of the website located at{" "}
          <Link href="/">
            <a>ResBin.com</a>
          </Link>{" "}
          and any related services provided by ResBin.
        </p>
        <p>
          By accessing{" "}
          <Link href="/">
            <a>ResBin.com</a>
          </Link>{" "}
          , you agree to abide by these Terms of Service and to comply with all
          applicable laws and regulations. If you do not agree with these Terms
          of Service, you are prohibited from using or accessing this website or
          using any other services provided by ResBin.
        </p>
        <p>
          We, ResBin, reserve the right to review and amend any of these Terms
          of Service at our sole discretion. Upon doing so, we will update this
          page. Any changes to these Terms of Service will take effect
          immediately from the date of publication.
        </p>
        <p>These Terms of Service were last updated on 21 June 2022.</p>
        <h3 id="limitations-of-use">Limitations of Use</h3>
        <p>
          By using this website, you warrant on behalf of yourself, your users,
          and other parties you represent that you will not:
        </p>
        <ol>
          <li>
            knowingly or negligently use this website or any of its associated
            services in a way that abuses or disrupts our networks or any other
            service RssBin provides;
          </li>
          <li>
            use this website or its associated services to transmit or publish
            any harassing, indecent, obscene, fraudulent, or unlawful material;
          </li>
          <li>
            use this website or its associated services in violation of any
            applicable laws or regulations;
          </li>
          <li>
            harvest, collect, or gather user data without the user&#39;s
            consent;
          </li>
          <li>
            use this website or its associated services in such a way that may
            infringe the privacy, intellectual property rights, or other rights
            of third parties.
          </li>
        </ol>
        <h3 id="liability">Liability</h3>
        <p>
          Our website and the materials on our website are provided on an
          &#39;as is&#39; basis. To the extent permitted by law, ResBin makes no
          warranties, expressed or implied, and hereby disclaims and negates all
          other warranties including, without limitation, implied warranties or
          conditions of merchantability, fitness for a particular purpose, or
          non-infringement of intellectual property, or other violation of
          rights.
        </p>
        <p>
          In no event shall ResBin or its suppliers be liable for any
          consequential loss suffered or incurred by you or any third party
          arising from the use or inability to use this website or the materials
          on this website, even if ResBin or an authorized representative has
          been notified, orally or in writing, of the possibility of such
          damage.
        </p>
        <p>
          In the context of this agreement, “consequential loss” includes any
          consequential loss, indirect loss, real or anticipated loss of profit,
          loss of benefit, loss of revenue, loss of business, loss of goodwill,
          loss of opportunity, loss of savings, loss of reputation, loss of use
          and/or loss or corruption of data, whether under statute, contract,
          equity, tort (including negligence), indemnity, or otherwise.
        </p>
        <p>
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
        <h3 id="accuracy-of-materials">Accuracy of Materials</h3>
        <p>
          The materials appearing on our website are not comprehensive and are
          for general information purposes only. ResBin does not warrant or make
          any representations concerning the accuracy, likely results, or
          reliability of the use of the materials on this website, or otherwise
          relating to such materials or on any resources linked to this website.
        </p>
        <h3 id="links">Links</h3>
        <p>
          ResBin has not reviewed all of the sites linked to its website and is
          not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement, approval, or control
          by ResBin of the site. Use of any such linked site is at your own risk
          and we strongly advise you make your own investigations with respect
          to the suitability of those sites.
        </p>
        <h3 id="right-to-terminate">Right to Terminate</h3>
        <p>
          We may suspend or terminate your right to use our website and
          terminate these Terms of Service immediately upon written notice to
          you for any breach of these Terms of Service.
        </p>
        <h3 id="severance">Severance</h3>
        <p>
          Any term of these Terms of Service which is wholly or partially void
          or unenforceable is severed to the extent that it is void or
          unenforceable. The validity of the remainder of these Terms of Service
          is not affected.
        </p>
        <h3 id="governing-law">Governing Law</h3>
        <p>
          These Terms of Service are governed by and construed in accordance
          with the laws of United States. You irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </p>
      </div>
    </Layout>
  );
}
