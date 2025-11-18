import React from "react";

export default function layout({
  children,
  articles,
  users,
}: {
  children: React.ReactNode;
  articles: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {users}
      {articles}
    </div>
  );
}
