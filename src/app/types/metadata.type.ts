type PaginationMeta = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};

export type Metadata = {
	pagination: PaginationMeta;
};
