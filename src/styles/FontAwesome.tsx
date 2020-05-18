import React from "react";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconLookup,
  IconDefinition,
  findIconDefinition,
  library,
} from "@fortawesome/fontawesome-svg-core";

library.add(fas);

export const CheckFontAwesome: React.FC = () => {
  const coffeeLookup: IconLookup = { prefix: "fas", iconName: "check" };
  const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup);

  return <FontAwesomeIcon icon={coffeeIconDefinition} />;
};
