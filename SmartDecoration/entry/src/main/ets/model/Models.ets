export interface ApiError { code: string; message: string; user_action: string; }
export interface ApiEnvelope<T> { data: T | null; error: ApiError | null; trace_id: string; server_time: string; }
export interface Health { status: string; }
export interface Project { project_id: string; name: string; created_at: string; }
export interface Requirements {
  budget_min: number | null; budget_max: number | null; style: string | null;
  household_needs: string | null; retain_items: string[]; confirmed: boolean;
}
export interface Room {
  room_id: string; project_id: string; name: string;
  semantics_version: number; requirement_version: number;
  requirements: Requirements; load_bearing_status: string;
}
export interface NameInput { name: string; }
export interface RequirementUpdate { expected_version: number; requirements: Requirements; }
