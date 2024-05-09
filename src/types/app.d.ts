declare module "roles" {
	type Role =
		| {
				value: "admin";
				label: "Admin";
		  }
		| {
				value: "owner";
				label: "Owner";
		  }
		| {
				value: "member";
				label: "Member";
		  };
}
