// hooks/useHiveControl.js

export default function useHiveControl() {
  const purgeHive = () => {
    console.log("🔥 Hive purge activated...");
    // Insert actual purge logic here
  };

  return { purgeHive };
}
