package com.hospital.web.domain;

import java.util.Map;

import javax.annotation.Resource;
import javax.inject.Inject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;
@Component
interface Orderable{
	public Command process(Map<?, ?> map);
}
@Component @Lazy
public class Command implements Orderable{
	Map<?, ?> map;
	public Command() {}
	public Command(Map<?,?> map) {
		this.map = map;
	}

	public Pagination getPageInfo() {
		
		Pagination p = new Pagination();
		System.out.println("#### after new Pagination()####");
		p.setTheNumberOfRows(Integer.parseInt(map.get("theNumberOfRows").toString()));
		p.setPageNumber(Integer.parseInt(map.get("pageNumber").toString()));
		p.setStartRow();
		p.setEndRow();
		p.setTheNumberOfPages();
		p.setTheNumberOfBlocks();
		p.setStartPage();
		p.setPrevBlock();
		p.setNextBlock();
		p.setEndPage();
		System.out.println("####Start####"+p.getStartRow());
		System.out.println("####End####"+p.getEndRow());
		return p;
	}
	public Person<? extends Info> getPersonInfo(){
		Person<?> person=null;
		Map<?, ?> map = null;
		switch (map.get("type").toString()) {
		case "patient":
			person=new Person<Info>(new Patient());
			Patient patient=(Patient) person.getInfo();
			patient.setAddr(map.get("addr").toString());
			// 이하 setter 생략
			break;
		case "doctor":
			person=new Person<Info>(new Doctor());
			Doctor doctor=(Doctor) person.getInfo();
			// 이하 setter 생략
			break;
		case "nurse":
			person=new Person<Info>(new Nurse());
			Nurse nurse=(Nurse) person.getInfo();
			// 이하 setter 생략
			break;
		case "admin":
			person=new Person<Info>(new Admin());
			Admin admin=(Admin) person.getInfo();
			// 이하 setter 생략
			break;
		default:
			break;
		}
		return person;
	}
	@Override
	public Command process(Map<?, ?> map) {
		return new Command(map);
	}
	

	public class Pagination {
		public final int PAGE_SIZE = 5;
		public final int BLOCK_SIZE = 5;
		private int theNumberOfRows, pageNumber, startRow, endRow, 
				theNumberOfPages, theNumberOfBlocks, startPage,
				prevBlock, nextBlock, endPage;

		public void setTheNumberOfRows(int theNumberOfRows) {
			this.theNumberOfRows = theNumberOfRows;
		}

		public void setPageNumber(int pageNumber) {
			this.pageNumber = pageNumber;
		}

		public void setStartRow() {
			this.startRow = (pageNumber - 1) * PAGE_SIZE + 1;
		}

		public void setEndRow() {
			this.endRow = pageNumber * PAGE_SIZE;
		}

		
		public void setTheNumberOfPages() {
			if (theNumberOfRows % PAGE_SIZE == 0) {
				theNumberOfPages = theNumberOfRows / PAGE_SIZE;
			} else {
				theNumberOfPages = theNumberOfRows / PAGE_SIZE + 1;
			}
		}
		public void setTheNumberOfBlocks() {
			this.theNumberOfBlocks = theNumberOfPages / BLOCK_SIZE;
		}
		public void setStartPage() {
			this.startPage = pageNumber - ((pageNumber - 1) % BLOCK_SIZE);
		}
		public void setPrevBlock() {
			this.prevBlock = startPage - BLOCK_SIZE;
		}
		public void setNextBlock() {
			this.nextBlock = startPage + BLOCK_SIZE;
		}
		public void setEndPage() {
			if ((startPage + theNumberOfRows - 1) < theNumberOfPages) {
				endPage = startPage + BLOCK_SIZE - 1;
			} else {
				endPage = theNumberOfPages;
			}
		}
		public int getPageNumber() {
			return pageNumber;
		}
		public int getStartRow() {
			return startRow;
		}
		public int getEndRow() {
			return endRow;
		}
		public int getTheNumberOfPages() {
			return theNumberOfPages;
		}
		public int getTheNumberOfBlocks() {
			return theNumberOfBlocks;
		}
		public int getStartPage() {
			return startPage;
		}
		public int getPrevBlock() {
			return prevBlock;
		}
		public int getNextBlock() {
			return nextBlock;
		}
		public int getEndPage() {
			return endPage;
		}
		public int getTheNumberOfRows() {
			return theNumberOfRows;
		}
		public int getPageSize(){
			return PAGE_SIZE;
		}
		public int getBlockSize(){
			return BLOCK_SIZE;
		}
	}

}
