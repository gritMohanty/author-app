import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
// import { createClient } from "@/utils/supabase/server";
import ConnectSupabaseSteps from "@/components/tutorial/ConnectSupabaseSteps";
import SignUpUserSteps from "@/components/tutorial/SignUpUserSteps";
import Header from "@/components/Header";
import Card from "@/components/Card";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function Index() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  console.log(data, error, "here details ---------");
  if (error || !data?.user) {
    redirect("/login");
  }
  redirect("/storylines");

  return <section className="m-8">Redirecting...</section>;
}
