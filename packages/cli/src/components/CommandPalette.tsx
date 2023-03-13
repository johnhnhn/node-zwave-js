import { Box } from "ink";
import React from "react";
import { Frame } from "./Frame.js";
import { HotkeyLabel, HotkeyLabelProps } from "./HotkeyLabel.js";
import { VDivider } from "./VDivider.js";

export interface CommandPaletteProps {
	label?: React.ReactNode;
	commands: (HotkeyLabelProps | false | undefined | null)[];
}

export const CommandPalette: React.FC<CommandPaletteProps> = (props) => {
	return (
		<Frame
			topLabels={{
				left: [props.label ?? "Commands"],
			}}
			flexDirection="row"
			justifyContent="flex-start"
			borderColor="gray"
		>
			{props.commands
				.filter((c): c is HotkeyLabelProps => !!c)
				.map((p, i) => (
					<React.Fragment key={i}>
						{i > 0 && <VDivider dimColor />}
						<Box paddingX={2}>
							<HotkeyLabel {...p} />
						</Box>
					</React.Fragment>
				))}
		</Frame>
	);
};