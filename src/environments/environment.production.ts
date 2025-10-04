import { FeatureToggleEnum } from "../app/shared/enums/feature-toggle.enum";

export const environment = {
  featureToggles: {
    [FeatureToggleEnum.fragmentNew]: false,
    [FeatureToggleEnum.fragmentImprovement]: false,
    [FeatureToggleEnum.newFeature]: false,
    [FeatureToggleEnum.routeGuardBlock]: false,
    [FeatureToggleEnum.routeVersion]: false,
    [FeatureToggleEnum.services]: false,
  }
}
