import type { emailsSchema } from "@pages/app/calendars/index/components/calendar-list/components/calendar-card-settings/components/calendar-members/components/invite-users/schemas.ts";
import type { z } from "zod";

export type EmailsFormData = z.infer<typeof emailsSchema>;
