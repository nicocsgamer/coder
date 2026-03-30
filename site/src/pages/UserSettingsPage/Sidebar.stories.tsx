import type { Meta, StoryObj } from "@storybook/react-vite";
import { Outlet } from "react-router";
import { MockUserOwner } from "#/testHelpers/entities";
import { withDashboardProvider } from "#/testHelpers/storybook";
import { Sidebar } from "./Sidebar";

const meta = {
	title: "pages/UserSettingsPage/Sidebar",
	component: Sidebar,
	args: {
		user: MockUserOwner,
	},
	decorators: [
		withDashboardProvider,
		(Story) => (
			<div className="flex gap-2">
				<Story />
				<Outlet />
			</div>
		),
	],
	parameters: {
		reactRouter: {
			location: {
				path: "/account",
			},
			routing: [
				{
					path: "/",
					useStoryElement: true,
					children: [{ path: "account", element: <>Account page</> }],
				},
			],
		},
	},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const WithAgentsEnabled: Story = {
	parameters: {
		experiments: ["agents"],
	},
};

export const WithAgentsDisabled: Story = {
	parameters: {
		experiments: [],
	},
};
