import React, { FunctionComponent } from "react";

import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import { Badge } from "@material-ui/core";

type TodoIconProps = {};

const TodoIcon: FunctionComponent<TodoIconProps> = () => {
	return (
		<>
			{true ? (
				<Badge color="secondary" badgeContent={3}>
					<FormatListNumberedIcon />
				</Badge>
			) : (
				<FormatListNumberedIcon />
			)}
		</>
	);
};

export default TodoIcon;
