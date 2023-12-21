import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
const LoginPage = lazy(() => import("./pages/LoginPage"));
const MyProfilePage = lazy(() => import("./pages/MyProfile"));
const MyJobPostingsPage = lazy(() => import("./pages/MyJobPostings"));
const MyJobRequestsPage = lazy(() => import("./pages/MyJobRequests"));
const MyJobPostingsDetailPage = lazy(() =>
  import("./pages/MyJobPostingDetailPage")
);
const SearchPage = lazy(() => import("./pages/SearchPage"));

export const router = createBrowserRouter([
  {
    path: "/v2",
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/v2/login",
    element: (
      <Suspense>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/v2/dashboard",
    element: <DashboardPage />,
    children: [
      {
        path: "profile",
        element: (
          <Suspense>
            <MyProfilePage />
          </Suspense>
        ),
      },
      {
        path: "job-postings",
        element: (
          <Suspense>
            <MyJobPostingsPage />
          </Suspense>
        ),
      },
      {
        path: "job-requests",
        element: (
          <Suspense>
            <MyJobRequestsPage />
          </Suspense>
        ),
      },
      {
        path: "job-postings/detail",
        element: (
          <Suspense>
            <MyJobPostingsDetailPage />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/v2/search",
    element: (
      <Suspense>
        <SearchPage />
      </Suspense>
    ),
  },
]);
