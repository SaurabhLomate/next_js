import { NextResponse } from "next/server";

export async function successResponse({
  status = 200,
  message,
  data,
}: {
  status: number;
  message: string;
  data?: unknown;
}) {
  return NextResponse.json({ message, data, success: true }, { status });
}

export async function errorResponse({
  status = 400,
  message,
  error,
}: {
  status: number;
  message: string;
  error?: unknown;
}) {
  return NextResponse.json({ message, success: false, error }, { status });
}
