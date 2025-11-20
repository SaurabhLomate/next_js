import { errorResponse, successResponse } from "@/lib/apiResponse";
import connectDb from "@/lib/connectDb";
import User from "@/models/user.model";
import { signUpSchema } from "@/schemas/user-zod.schema";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  body.username = `${body.first_name} ${body.last_name}`;
  //   validate with zod
  const parsed_info = signUpSchema.safeParse(body);

  if (!parsed_info.success) {
    return errorResponse({
      status: 401,
      message: JSON.parse(parsed_info.error.message)[0].message,
    });
  }

  const { username, email, password } = parsed_info.data;

  try {
    // database connect
    await connectDb();

    // check user exist
    const isUserExists = await User.findOne({ email });

    if (isUserExists)
      return errorResponse({
        status: 401,
        message:
          "user already exists! please try with different credentials or sign-in",
      });

    const user = await User.create({ username, email, password });
    if (!user)
      return errorResponse({
        status: 500,
        message:
          "sorry !! something went wrong on our side. please ! try again.",
      });

    // create token
    // create user

    return successResponse({
      status: 201,
      message: "successfully signed up 👍",
      data: user,
    });
  } catch (error) {
    return errorResponse({
      status: 500,
      message: "sorry !! something went wrong on our side. please ! try again.",
      error: error,
    });
  }
}
