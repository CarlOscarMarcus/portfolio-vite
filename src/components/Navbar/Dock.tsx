"use client";

import {
	motion,
	MotionValue,
	useMotionValue,
	useSpring,
	useTransform,
	type SpringOptions,
	AnimatePresence,
} from "motion/react";
import React, {
	Children,
	cloneElement,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { NavLink } from "react-router-dom";

export type DockItemData = {
	icon: React.ReactNode;
	label: React.ReactNode;
	to: string;
	className?: string;
	external?: boolean;
};

export type DockProps = {
	items: DockItemData[];
	className?: string;
	distance?: number;
	panelHeight?: number;
	baseItemSize?: number;
	dockHeight?: number;
	magnification?: number;
	spring?: SpringOptions;
};

type HoverInjectedProps = {
	isHovered: MotionValue<number>;
};

type DockItemProps = {
	className?: string;
	children: React.ReactNode;
	mouseX: MotionValue<number>;
	spring: SpringOptions;
	distance: number;
	baseItemSize: number;
	magnification: number;
	label?: React.ReactNode;
};

function DockItem({
	children,
	className = "",
	mouseX,
	spring,
	distance,
	magnification,
	baseItemSize,
	label,
}: DockItemProps) {
	const ref = useRef<HTMLDivElement>(null);
	const isHovered = useMotionValue(0);

	const mouseDistance = useTransform(mouseX, (val) => {
		const rect = ref.current?.getBoundingClientRect() ?? {
			x: 0,
			width: baseItemSize,
		};
		return val - rect.x - baseItemSize / 2;
	});

	const targetSize = useTransform(
		mouseDistance,
		[-distance, 0, distance],
		[baseItemSize, magnification, baseItemSize],
	);

	const size = useSpring(targetSize, spring);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
		}
	};

	return (
		<motion.div
			ref={ref}
			style={{
				width: size,
				height: size,
			}}
			onHoverStart={() => isHovered.set(1)}
			onHoverEnd={() => isHovered.set(0)}
			onFocus={() => isHovered.set(1)}
			onBlur={() => isHovered.set(0)}
			onKeyDown={handleKeyDown}
			className={`relative inline-flex items-center justify-center rounded-full bg-white border-neutral-700 border-2 shadow-md ${className}`}
			tabIndex={0}
			role="button"
			aria-label={typeof label === "string" ? label : undefined}
		>
			{Children.map(children, (child) => {
				if (!React.isValidElement(child)) return child;

				return cloneElement(child, {
					isHovered,
				} as HoverInjectedProps);
			})}
		</motion.div>
	);
}

type DockLabelProps = {
	className?: string;
	children: React.ReactNode;
	isHovered?: MotionValue<number>;
};

function DockLabel({ children, className = "", isHovered }: DockLabelProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (!isHovered) return;
		const unsubscribe = isHovered.on("change", (latest) => {
			setIsVisible(latest === 1);
		});
		return () => unsubscribe();
	}, [isHovered]);

	return (
		<AnimatePresence>
			{isVisible && (
				<motion.div
					initial={{ opacity: 0, y: 0 }}
					animate={{ opacity: 1, y: -10 }}
					exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 0.2 }}
					className={`${className} absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border border-neutral-700 bg-black px-2 py-0.5 text-xs text-white`}
					style={{ x: "-50%" }}
				>
					{children}
				</motion.div>
			)}
		</AnimatePresence>
	);
}

function DockIcon({ children }: { children: React.ReactNode }) {
	return <div className="flex items-center justify-center">{children}</div>;
}

export default function Dock({
	items,
	className = "",
	spring = { mass: 0.1, stiffness: 150, damping: 12 },
	magnification = 70,
	distance = 200,
	panelHeight = 64,
	baseItemSize = 50,
}: DockProps) {
	const mouseX = useMotionValue(Infinity);
	const isHovered = useMotionValue(0);

	const maxHeight = useMemo(
		() => Math.max(panelHeight, magnification + magnification / 2 + 4),
		[magnification, panelHeight],
	);

	const height = useSpring(
		useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
		spring,
	);

	return (
		<motion.div
			style={{ height }}
			className="mx-2 flex max-w-full items-center"
		>
			<motion.div
				onMouseMove={({ pageX }) => {
					isHovered.set(1);
					mouseX.set(pageX);
				}}
				onMouseLeave={() => {
					isHovered.set(0);
					mouseX.set(Infinity);
				}}
				className={`${className} fixed z-50 bottom-4 left-1/2 -translate-x-1/2 flex items-end gap-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 pb-2 shadow-xl`}
				style={{ height: panelHeight }}
			>
				{items.map((item, index) => {
					const content = (
						<DockItem
							mouseX={mouseX}
							spring={spring}
							distance={distance}
							magnification={magnification}
							baseItemSize={baseItemSize}
							label={item.label}
							className={item.className}
						>
							<DockIcon>{item.icon}</DockIcon>
							<DockLabel>{item.label}</DockLabel>
						</DockItem>
					);

					return item.external ? (
						<a
							key={index}
							href={item.to}
							target="_blank"
							rel="noopener noreferrer"
							className="no-underline"
						>
							{content}
						</a>
					) : (
						<NavLink
							key={index}
							to={item.to}
							className="no-underline"
						>
							{content}
						</NavLink>
					);
				})}
			</motion.div>
		</motion.div>
	);
}
