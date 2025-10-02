export interface NavigationContextType {
    currentPath: string;
    navigate: (to: string) => void;
}