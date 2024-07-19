import { motion } from "framer-motion";

export function AnimateInfiniteScale({
  children,
  active = true,
  once = false,
}: {
  children: any;
  active?: boolean;
  once?: boolean;
}) {
  return active ? (
    <motion.div
      initial={{ opacity: 0.8, scale: 1 }}
      transition={
        {
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse'
        }
      }
      whileInView={{ opacity: 1 }}
      viewport={{ once: once }}
      animate={{
        scale: [0.8, 1, 1.05]
      }}
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
}
