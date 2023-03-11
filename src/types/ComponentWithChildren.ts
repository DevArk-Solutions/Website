export type ComponentWithChildren<T = unknown> = React.FC<
    {
        children?: React.ReactNode;
    } & T
>;

export default ComponentWithChildren;
