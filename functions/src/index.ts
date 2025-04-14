import { onCall } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { createFalClient } from "@fal-ai/client";

interface FalResult {
  data: {
    images: {
      url?: string;
    }[];
  };
}

interface GenerateLogoRequest {
  prompt: string;
}

export const generateLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
    secrets: ["AI_LOGO_API_KEY"],
  },
  async (request) => {
    const falApiKey = process.env.AI_LOGO_API_KEY;
    if (!falApiKey) {
      throw new Error("AI_LOGO_API_KEY is not set");
    }
    const fal = createFalClient({
      credentials: falApiKey,
    });
    const { prompt } = request.data as GenerateLogoRequest;
    const { request_id: requestId } = await fal.queue.submit(
      "fal-ai/flux/schnell",
      {
        input: {
          prompt: prompt,
        },
      }
    );

    const { status } = await fal.queue.status("fal-ai/flux/schnell", {
      requestId: requestId,
      logs: true,
    });

    while (status !== "COMPLETED") {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { status } = await fal.queue.status("fal-ai/flux/schnell", {
        requestId: requestId,
        logs: true,
      });
      if (status === "COMPLETED") {
        break;
      }
    }
    const result = await fal.queue.result("fal-ai/flux/schnell", {
      requestId: requestId,
    });
    const outputUrl = (result as FalResult)?.data?.images?.[0]?.url;
    if (!outputUrl) {
      throw new Error("İşlem başarısız oldu");
    }
    return outputUrl;
  }
);
