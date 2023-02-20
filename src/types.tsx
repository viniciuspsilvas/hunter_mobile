export type Zone = {
  id: number;
  name?: string;
  icon?: {
    id?: number;
    fileName?: string | null;
  };
  suspended?: boolean;
  status?: {
    running?: boolean;
  };
};

export type Controller = {
  id?: number;
  zones?: Zone[];
};
