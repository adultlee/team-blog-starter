import { SystemTheme } from "@/enums/theme";
import useTheme from "@/hooks/theme/useTheme";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import styled from "styled-components";

const ToggleButton = styled(motion.button)`
	font-size: 30px;
	&:focus {
		outline: none;
	}
	border: none;
	box-shadow: none;
	background-color: transparent;
`;

const ToggleTheme = (): JSX.Element => {
	const { theme, toggleTheme } = useTheme();

	return (
		<AnimatePresence mode="wait" initial={false}>
			{theme === SystemTheme.DARK ? (
				<ToggleButton
					onClick={() => toggleTheme()}
					key={SystemTheme.DARK}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ x: -20, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					🌙
				</ToggleButton>
			) : (
				<ToggleButton
					onClick={() => toggleTheme()}
					key={SystemTheme.LIGHT}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ x: -20, opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					🌤️
				</ToggleButton>
			)}
		</AnimatePresence>
	);
};

export default ToggleTheme;
