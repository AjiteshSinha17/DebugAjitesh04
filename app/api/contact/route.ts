import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

type ContactMessage = {
  id: string;
  fullName: string;
  email: string;
  phone?: string | null;
  subject: string;
  budget?: string | null;
  message: string;
  createdAt: string;
};

const messages: ContactMessage[] = [];

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validated = insertContactMessageSchema.parse(body);
    const message: ContactMessage = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...validated,
    };
    messages.unshift(message);
    return Response.json({ success: true, message: "Message sent successfully!", id: message.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ success: false, message: "Validation error", errors: error.errors }),
        { status: 400, headers: { "content-type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send message. Please try again later." }),
      { status: 500, headers: { "content-type": "application/json" } }
    );
  }
}

export async function GET() {
  return Response.json(messages);
}


