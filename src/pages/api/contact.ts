export const prerender = false;
import type { APIRoute } from "astro";
import { Resend } from "resend";
import { ContactEmailTemplate } from "../../components/EmailTemplate";
import validator from "validator";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message, _honey } = body;

  if (_honey) {
    return new Response("Bad request", { status: 400 });
  }

  if (
    !name ||
    typeof name !== "string" ||
    name.trim() === "" ||
    !email ||
    typeof email !== "string" ||
    email.trim() === "" ||
    !message ||
    typeof message !== "string" ||
    message.trim() === ""
  ) {
    return new Response(
      JSON.stringify({ error: "Missing or invalid fields" }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  if (!validator.isEmail(email)) {
    return new Response(JSON.stringify({ error: "Invalid email format" }), {
      status: 422,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (message.length > 2000) {
    return new Response(
      JSON.stringify({ error: "Message too long (max 2000 characters)" }),
      {
        status: 422,
        headers: { "Content-Type": "application/json" },
      },
    );
  }

  const { error } = await resend.emails.send({
    from: "Gabriel's Contact <contact@gzelaya.com>",
    to: import.meta.env.MY_EMAIL,
    subject: `New message from ${name}`,
    react: ContactEmailTemplate({ name, email, message }),
  });

  if (error) {
    console.log("Resend error:", JSON.stringify(error));
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
