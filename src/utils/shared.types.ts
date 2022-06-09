/**
 * This file is defines all the shared types in the application
 */

export type Theme = 'light' | 'dark';

export type UserProfile = {
  username: string;
  password: string;
  first_name: string;
  email: string;
  last_name: string;
  middle_name: string;
  phone: string;
  profile: {
    birth_date: string; //2022-06-09
    gender: string;
    height: string;
    physical_frame: string;
    ethnicity: string;
    location: {
      google_place_id: string;
      name: string;
      longitude: number;
      latitude: number;
    };
    media: [
      {
        encoded_file: string;
        name: string;
        type: string; //image/png
        is_default: boolean;
      },
    ];
    bio: {
      bio: string;
      looking_for: string;
      language_ids: [number];
      passion_ids: [number];
      other_details_ids: [number];
    };
  };
};
