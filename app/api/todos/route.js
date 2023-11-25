import { NextResponse } from "next/server";
import { connectDatabase } from "../../../helpers/db";
import {Todo} from "../../../models/Todo"

export async function GET(request) {
    try {
        await connectDatabase();
        const todos = await Todo.find();
        console.log('getTodos',todos)
        return NextResponse.json({
            message: "all todos",
            success: true,
            todos
        })
    } catch (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 501 }
        )
    }
}