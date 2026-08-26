import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/firebase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Server-side validation
    if (!body.fullName || !body.fullName.trim()) {
      return NextResponse.json(
        { message: "Full name is required" },
        { status: 400 }
      );
    }

    if (!body.phone || body.phone.length < 8) {
      return NextResponse.json(
        { message: "Valid phone is required" },
        { status: 400 }
      );
    }

    if (
      !body.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)
    ) {
      return NextResponse.json(
        { message: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!body.travelDate) {
      return NextResponse.json(
        { message: "Travel date is required" },
        { status: 400 }
      );
    }

    const selectedDate = new Date(body.travelDate);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      return NextResponse.json(
        { message: "Travel date must be in the future" },
        { status: 400 }
      );
    }

    if (!body.numberOfPeople || Number(body.numberOfPeople) < 1) {
      return NextResponse.json(
        { message: "At least 1 person is required" },
        { status: 400 }
      );
    }

    if (
      body.numberOfChildren !== undefined &&
      Number(body.numberOfChildren) < 0
    ) {
      return NextResponse.json(
        { message: "Number of children cannot be negative" },
        { status: 400 }
      );
    }

    // Save enquiry to Firestore
    const enquiryData = {
      fullName: body.fullName.trim(),
      phone: body.phone,
      email: body.email.trim().toLowerCase(),
      travelDate: body.travelDate,
      numberOfPeople: Number(body.numberOfPeople),
      hotelCategory: body.hotelCategory || "Standard",
      numberOfChildren: Number(body.numberOfChildren) || 0,
      createdAt: new Date(),
    };

    const enquiryRef = await db.collection("enquiries").add(enquiryData);

    return NextResponse.json(
      {
        message: "Enquiry submitted successfully",
        id: enquiryRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}