import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://puiajhtimouszncosnrt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB1aWFqaHRpbW91c3puY29zbnJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzEyMTYzMjgsImV4cCI6MTk4Njc5MjMyOH0.12THp5oMmVyw1kb3IgKK4t-u4RaK3SNcnmjqR_2MnbE";

const handler = async (req, res) => {
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data, err } = await supabase.from("test").select();
  console.log(data[0].callNo);
  const callNumber = data[0].callNo;

  const { error } = await supabase
    .from("test")
    .update({ callNo: callNumber + 1 })
    .eq("id", 1);

  // console.log("Data", data);
  // console.log("Error", error);
  return res
    .status(200)
    .json({ method: req.method, message: "testing backend response " });
};

export default handler;
