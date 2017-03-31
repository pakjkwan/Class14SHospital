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
	public Command(Map<?,?> map) {
		this.map = map;
	}

	public Integer[] getPageInfo() {
		Pagination page = new Pagination();
		String pageNO = (String) map.get("pageNO");
		String count = (String) map.get("count");
		page.setBlockSize(5);
		page.setRowCount(5);
		page.setCount(Integer.parseInt(count));
		page.setPageNO(pageNO);
		page.setPageStart();
		page.setPageEnd();
		page.setPageCount();
		page.setBlockCount();
		page.setBlockStart();
		page.setPrevBlock();
		page.setNextBlock();
		page.setBlockEnd();
		return page.getPageInfo();
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
	

	class Pagination {
		private int rowCount, pageNO, pageStart, pageEnd, count, pageCount, blockSize, blockCount, blockStart,
				prevBlock, nextBlock, blockEnd;

		public void setRowCount(int rowCount) {
			this.rowCount = rowCount;
		}

		public void setPageNO(String pageNO) {
			this.pageNO = Integer.parseInt(pageNO);
		}

		public void setPageStart() {
			this.pageStart = (pageNO - 1) * rowCount + 1;
		}

		public void setPageEnd() {
			this.pageEnd = pageNO * rowCount;
		}

		public void setCount(int count) {
			this.count = count;
		}

		public void setPageCount() {
			if (count % rowCount == 0) {
				pageCount = count / rowCount;
			} else {
				pageCount = count / rowCount + 1;
			}
		}

		public void setBlockSize(int blockSize) {
			this.blockSize = blockSize;
		}

		public void setBlockCount() {
			this.blockCount = pageCount / blockSize;
		}

		public void setBlockStart() {
			this.blockStart = pageNO - ((pageNO - 1) % blockSize);
		}

		public void setPrevBlock() {
			this.prevBlock = blockStart - blockSize;
		}

		public void setNextBlock() {
			this.nextBlock = blockStart + blockSize;
		}

		public void setBlockEnd() {
			if ((blockStart + rowCount - 1) < pageCount) {
				blockEnd = blockStart + blockSize - 1;
			} else {
				blockEnd = pageCount;
			}
		}

		public int getPageNO() {
			return pageNO;
		}

		public int getPageStart() {
			return pageStart;
		}

		public int getPageEnd() {
			return pageEnd;
		}

		public int getPageCount() {
			return pageCount;
		}

		public int getBlockCount() {
			return blockCount;
		}

		public int getBlockStart() {
			return blockStart;
		}

		public int getPrevBlock() {
			return prevBlock;
		}

		public int getNextBlock() {
			return nextBlock;
		}

		public int getBlockEnd() {
			return blockEnd;
		}

		public int getRowCount() {
			return rowCount;
		}

		public int getCount() {
			return count;
		}

		public int getBlockSize() {
			return blockSize;
		}

		public Integer[] getPageInfo() {
			Integer[] arr = { count, pageCount, pageNO, pageStart, pageEnd, blockStart, blockEnd, prevBlock,
					nextBlock };
			return arr;
		}
	}

}
