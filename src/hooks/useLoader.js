import { useState } from "react";

export default function useLoader() {
  const [isLoading, setIsLoading] = useState(0);

  console.log(isLoading);
  return [isLoading, setIsLoading];
}
