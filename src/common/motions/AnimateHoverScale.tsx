import { motion } from "framer-motion";

export default function AnimateHoverScale({
  children,
  index,
  active = true,
  once = false,
}: {
  children: any;
  index: number;
  active?: boolean;
  once?: boolean;
}) {
  return active ? (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      transition={{ duration: 0.2 + index / 10 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.05 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: once }}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
}
