export class WorkFlow {
  id: number;
  name: string;
  status: number;
  isPublic: number;
  current_state: Object;
  next_state: Object;
  flowType: number;
  created_at: Date;
  updated_at: Date;
}
