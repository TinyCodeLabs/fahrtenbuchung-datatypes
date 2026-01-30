# Fahrtenbuchung Datentypen

These are all Typescript Definitions using [Zod](https://zod.dev/).

## Contributing

If you want to Contribute, make sure to follow the Guidelines highlighted in `CONTRIBUTING`

## Structure

```DBML
Table users {
  id char(36) [pk, not null, note: "UUID v4 stored as string"]
  name varchar(255) [not null, unique, note: "Display name / login name"]
  password_hash varchar(255) [not null]
  role enum('user','trainer','admin') [not null]
  created_at datetime [not null]
}
Table vehicles {
  id int [pk, not null, note: "Stable reference ID"]
  name varchar(100) [not null, unique]
}
Table slots {
  id char(36) [pk, not null]
  date date [not null]
  time varchar(5) [not null, note: "HH:MM"]
  vehicle_id int [not null, ref: > vehicles.id]
  created_at datetime [not null]

  Indexes {
    (date, time, vehicle_id) [unique]
  }
}
Table required_tours {
  id char(36) [pk, not null]
  user_id char(36) [not null, ref: > users.id]
  vehicle_id int [not null, ref: > vehicles.id]
  status enum('pending','booked','done') [not null]
  slot_id char(36) [ref: - slots.id, note: "Nullable"]
  created_at datetime [not null]
  completed_at datetime [note: "Only set when done"]

  Indexes {
    (user_id, vehicle_id) [unique, note: "One required tour per vehicle per user"]
  }
}
```
