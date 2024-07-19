export default function WelcomeEmail() {
  return `<!-- end tr -->
<tr>
  <td
    valign="middle"
    class="hero bg_white"
    style="
      background-image: url({{welcomeImage}});
      background-size: cover;
      height: 200px;
    "
  >
    <div class="overlay"></div>
    <table>
      <tr>
        <td>
          <div class="text" style="text-align: left">
            <h5>{{title}}</h5>
          </div>
        </td>
      </tr>
    </table>
  </td>
</tr>
<!-- end tr -->
<tr>
  <td class="bg_dark email-section" style="text-align:left">
    <div class="heading-section heading-section-white">
      <h2>{{subTitle}}</h2>
      <p>Thank you for your email. I appreciate you reaching out.</p>
      <p>We've got your inquiry, and we'll be in touch shortly.</p>
      <div>
        <p>Thank you for being part of our community!</p>
      </div>
    </div>
  </td>
</tr>
<!-- end: tr -->
`;
}
