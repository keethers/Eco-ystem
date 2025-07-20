// /hooks/useHiveControl.js
export default function useHiveControl() {
  const purgeHive = () => {
    console.log("Hive Purge Initiated");
  };

  return { purgeHive };
}
