"use client";

import { motion } from "framer-motion";
import styles from "@/styles/homepage/NewsTicker.module.css";

const newsItems = [
  "ADMISSION STARTED 2025",
  "ADMISSION STARTED 2025",
  "ADMISSION STARTED 2025",
  "ADMISSION STARTED 2025",
  "ADMISSION STARTED 2025",
  "ADMISSION STARTED 2025",
];

export default function NewsTicker() {
  return (
    <div className={styles.tickerContainer}>
      {/* News Label */}
      <div className={styles.newsLabel}>NEWS</div>

      {/* Scrolling Text */}
      <div className={styles.tickerWrapper}>
        <motion.div
          className={styles.tickerContent}
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {newsItems.concat(newsItems).map((item, index) => (
            <div key={index} className={styles.tickerItem}>
              {item} <span className={styles.separator}>•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
