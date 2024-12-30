import { SetScoreProps } from "@/types";

export async function setScore({
  deployment,
  label,
  title,
  players,
  scores,
}: SetScoreProps) {
  try {
    const response = await fetch("/api/setScore", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deployment,
        label,
        title,
        players,
        scores,
      }),
    });

    if (!response.ok) {
      console.error("Failed to set scores");
    } else {
      const data = await response.json();
      console.log("Set scores response: ", data);

      return data;
    }
  } catch (error) {
    console.log("setScore error === ", error);
  }
}
