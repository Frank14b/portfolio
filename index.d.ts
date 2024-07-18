import "react";

declare global {
	interface Window {
		opera: any;
		Worker: Worker;
    Promise: Promise
	};
}

declare module "react" {
  interface HTMLAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T | null>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T | null>) => void;
    placeholder?: string;
  }
  
  interface RefAttributes<T> {
    onPointerEnterCapture?: (e: React.PointerEvent<T | null>) => void;
    onPointerLeaveCapture?: (e: React.PointerEvent<T | null>) => void;
    placeholder?: string;
  }
}

export {};