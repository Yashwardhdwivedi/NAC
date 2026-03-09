export type Role =
  | "ADMIN"
  | "HR_MANAGER"
  | "RECRUITER"
  | "EMPLOYER"
  | "CANDIDATE"
  | "VERIFICATION_VENDOR";

export type Permission =
  | "jobs:manage"
  | "candidates:manage"
  | "employees:manage"
  | "verification:manage"
  | "verification:update"
  | "marketplace:purchase"
  | "analytics:view"
  | "admin:manage";

export const rolePermissions: Record<Role, Permission[]> = {
  ADMIN: [
    "admin:manage",
    "jobs:manage",
    "candidates:manage",
    "employees:manage",
    "verification:manage",
    "analytics:view",
    "marketplace:purchase",
  ],
  HR_MANAGER: [
    "jobs:manage",
    "candidates:manage",
    "employees:manage",
    "verification:manage",
    "analytics:view",
    "marketplace:purchase",
  ],
  RECRUITER: ["jobs:manage", "candidates:manage", "analytics:view"],
  EMPLOYER: ["jobs:manage", "analytics:view", "marketplace:purchase"],
  CANDIDATE: ["marketplace:purchase"],
  VERIFICATION_VENDOR: ["verification:update"],
};

export const hasPermission = (role: Role, permission: Permission): boolean => {
  return rolePermissions[role].includes(permission);
};
