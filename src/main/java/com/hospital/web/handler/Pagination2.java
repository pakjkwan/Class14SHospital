package com.hospital.web.handler;

public class Pagination2 {
	public static int PAGE_SIZE = 5;
	public static int BLOCK_SIZE = 5;
	public static Integer[] getRows(int theNumberOfRows, int pageNumber) {
		Integer startRow = 0, endRow = 0;
		Integer[] rows = new Integer[2];

		if (pageNumber <= theNumberOfRows / PAGE_SIZE + 1) {
			if (pageNumber == 1) {
				startRow = 1;
				endRow = PAGE_SIZE;
			} else {
				startRow = (pageNumber - 1) * PAGE_SIZE + 1;
				endRow = pageNumber * PAGE_SIZE;
			}
		}
		rows[0] = startRow;
		rows[1] = endRow;
		return rows;
	}
	
	public static Integer[] getPages(int theNumberOfAll, int pageNumber){
		Integer startPage = 0, lastPage = 0, theNumberOfPages = 0;
		Integer[] pages = new Integer[3];
		theNumberOfPages = (theNumberOfAll % PAGE_SIZE) == 0 ? theNumberOfAll / PAGE_SIZE : theNumberOfAll / PAGE_SIZE + 1;
		startPage = pageNumber - ((pageNumber - 1) % BLOCK_SIZE);
		lastPage = (startPage + BLOCK_SIZE - 1 <= theNumberOfPages) ? startPage + BLOCK_SIZE - 1 : theNumberOfPages;
		pages[0] = startPage;
		pages[1] = lastPage;
		pages[2] = theNumberOfPages;
		return pages;
	}
}
