import React from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./styles.module.css";
import cx from "classnames";

interface IModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  onClose: () => void;
}
export const Modal = ({
  isVisible,
  children,
  className,
  overlayClassName,
  onClose,
}: IModalProps) => {
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cx(styles.overlay, overlayClassName)}
          onClick={() => {
            onClose();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <motion.div
            className={styles.modalPosition}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, y: 30, transition: { duration: 0.2 } }}
          >
            <motion.div className={styles.modalContainer}>
              <div
                className={cx(styles.modal, className)}
                onClick={() => {
                  // e.stopPropagation();
                  onClose();
                }}
              >
                {children}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
