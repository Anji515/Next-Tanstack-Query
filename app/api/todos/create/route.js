import { NextResponse } from "next/server";
import { connectDatabase } from "../../../../helpers/db";

import { Todo } from "../../../../models/Todo"

export async function POST(request) {
    try {
        await connectDatabase();
        const { title, content, date ,status} = await request.json();

        const newItem = new Todo({
            title,
            content,
            date,
            status
        })

        const saveTodo = await newItem.save()

        return NextResponse.json({
            message: "Todo created successfully",
            success: true,
            saveTodo
        })

    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        )
    }
}