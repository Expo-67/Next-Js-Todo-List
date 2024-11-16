import { prisma } from "@/app/db";
import Link from "next/link";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";

  // check to see if it passes true or false when toggled
  console.log(id, complete);
}
export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Angs Todo List!</h1>
        <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded
           hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
        >
          Create to do
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
