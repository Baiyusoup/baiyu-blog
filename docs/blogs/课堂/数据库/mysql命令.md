---
title: Mysql笔记
date: 2021-03-01
categories:
 - 课堂
author: 青菜白玉汤
tags:
 - MySql
---

### 创建

```shell
create database [数据库名];

create database if not exists [数据库名];

# 指定字符集和校对规则
create database [name] default character set utf8mb4 collate utf8mb4_general_ci;
```

### 使用和查看

```shell
# 使用某数据库
use [name];

# 查看所有数据库
show databases;

show database like 'test';
show database like '%test%';

# 查看数据库的定义声明
show create database [name]
```

### 修改和删除

```shell
# 修改数据库的字符集和较对规则（也只能修改这两个）
alter database [name] character set utf8mb4 collate utf8mb4_unicode_ci;

# 删除数据库（无法恢复）
drop database if exists [name];
```

## 数据表

### 创建和查看

```shell
## 创建
create table [table_name] (字段1 数据类型, 字段2 数据类型, ...);

# 查看当前数据库的所有表
show tables;

# 查看表的详细信息
show create table [table_name];

# 查看表结构
describe/desc [table_name];
```

### 修改和删除

```shell
# 修改表名
alter table [old name] REANME [new name];

# 修改字符集和较对规则
alter table [table_name] character set xxx default collate xxx;

# 修改字段名和数据类型
alter table [table_name] CHANGE [old name] [new name] [new type or old type];

# 修改数据类型
alter table [table_name] MODIFY [字段] [new type];

# 修改字段的默认值
alter table [table_name] CHANGE [字段] [类型] defult [new value];

# 添加新字段
alter table [table_name] ADD [新字段] [type]; # 末尾
alter table [table_name] ADD [新字段] [type] FIRST; # 在开头
alter table [table_name] ADD [新字段] [type] AFTER [字段]; # 在某字段后面

# 删除字段
alter table [table_name] DROP [字段];

# 删除表
drop table if exsits 表1, 表2, ...;
```

## 约束

1. 主键约束 PRIMARY KEY  
2. 唯一约束 UNIQUE
3. 非空约束 NOT NULL  
4. 检查约束 CHECK  
5. 默认约束 DEFAULT  
6. 外键约束  REFERENCES：
  7. 主键的关联列必须是一个KEY，且两者类型相同或兼容  
  8. 插入数据时，先插入主表，再插入从表

### 添加约束

```shell
# 创建表时添加
// 从表
CREATE TABLE student(
	id INT PRIMARY KEY, # 主键约束
	stu_name VARCHAR(20) NOT NULL, # 非空约束
	gender CHAR(1) CHECK(gender = '男' OR gender = '女'), # 检查约束
	seat INT UNIQUE, # 唯一约束
	age INT DEFAULT 7, # 默认约束
	majorId INT REFERENCES major(id) # 外键约束
);


CREATE TABLE student (
	id INT,
	stu_name VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorId INT,

	CONSTRAINT pk PRIMARY KEY(id), # 主键约束
	CONSTRAINT uq UNIQUE(seat), # 唯一约束
	CONSTRAINT ck CHECK(gender = '男' OR gender = '女'), # 检查约束
	CONSTRAINT fk_major FOREIGN KEY(majorId) REFERENCES major(id) # 外键约束
);
# CONSTRAINT [约束键名] 可以省略，则默认的键名为绑定的字段名
# 通用的写法为除了外键约束用表级约束的写法外都用列级约束写法


// 主表
CREATE TABLE major(
	id INT PRIMARY KEY, # 关联列 一般是主键约束或唯一约束
	name VARCHAR(20)
);



### 修改表时添加
​```sql
CREATE TABLE student (
	id INT,
	stu_name VARCHAR(20),
	gender CHAR(1),
	seat INT,
	age INT,
	majorId INT
);

# 添加非空约束
ALTER TABLE student MODIFY COLUMN stu_name VARCHAR(20) NOT NULL;

# 添加默认约束
ALTER TABLE student MODIFY COLUMN age INT DEFAULT 18;

# 添加主键约束
ALTER TABLE student MODIFY COLUMN id INT PRIMARY KEY;
ALTER TABLE student ADD PRIMARY KEY(id);
			    
# 添加唯一约束
ALTER TABLE student MODIFY COLUMN seat INT UNIQUE;
ALTER TABLE student ADD UNIQUE(seat);

# 添加外键约束
ALTER TABLE student ADD CONSTRAINT fk_major FOREIGN KEY(majorId) REFERENCES major(id);

```

### 删除

```shell
# 修改表时删除

# 删除非空约束
ALTER TABLE student MODIFY COLUMN stu_name VARCHAR(20) NULL;

# 删除默认约束
ALTER TABLE student MODIFY COLUMN age INT;

# 删除主键约束
ALTER TABLE student DROP PRIMARY KEY;

# 删除唯一约束
ALTER TABLE student DROP INDEX seat;

# 删除外键和约束
ALTER TABLE student DROP FOREIGN KEY fk_major;
```



## 数据操作

### 插入 INSERT INTO VALUES

```shell
insert into student (id, stu_name, age, gender, seat, majorId) values (1, 'Tom', 18, 'G', 11, 2);

insert into student set id = 1, stu_name = 'Tom';


# 复制其他表
insert into student (id, stu_name, age, gender, seat, majorId) select id, stu_name, age, gender, seat, majorId from student_co;
```

### 删除 DELETE    FROM

```shell
# 删除所有数据(不可找回，也不返回被删除数量)
truncate student;

# 删除所有数据(可找回，会返回被删除的数量)
delete from student;

# 删除某行数据
delete from student where id = 1;
```

### 查询

```shell
​```sql
select * from student;
select id, stu_name from student;
​```
`起别名`
​```sql
select stu_name AS 姓名 from student;
​```
` 数据去重`
​```sql
select distinct stu_name from student;
​```
` 分页查询`
​```sql
# 返回前五行数据 最后一条数据索引：0 + 5 - 1
select * from student limit 0, 5;
select * from student limit 5;
select * from student limit 5 offset 0;
​```
` 查询后排序`
​```sql
# 先对age降序， 再对seat字段升序
select * from student order by age desc, seat ASC;
​```
` 条件查询`
​```sql
select age from student where age > 17 and age < 20;
select age from student where age between 18 and 20;
select age from student where age not between 18 and 20;

select stu_name from stduent where stu_name is not null;
select stu_name from stduent where stu_name is null;
# 模糊查询
select stu_name from student where stu_name not like '%j%';

select stu_name from student where stu_name like binary '%j';

select stu_name from student where stu_name like '__j';
```

#### 分组查询

`查询列表必须特殊，要求是分组函数和group by 后的字段`

```shell
 select 分组函数,  列
 from 表
 【where 筛选条件】
 group by 分组的列表
 【order by 子句】
```

`分组函数`

1. sum()
2. avg()
3. max()
4. min()
5. count()  可以和distinct搭配使用

#### 连接查询

>按年代分： 
>	192和199标准 
>按功能分：  
>
>1. 内连接 INNER ：只返回两个表中连接字段相等的行。
>  2. 等值连接
>  3. 非等值连接
>  4. 自连接（表连接自己）：员工和他的上级
>5. 外连接：查询结果 = 内连接查询结果 + 主表中有而从表中没有的结果
>  6. 左外连接 LEFT [OUTER] ：left左边是主表，返回包括左表中的所有记录和右表中连接字段相等的记录
>  7. 右外连接 RIGHT [OUTER]：right 右边是主表，返回包括右表中的所有记录和左表中连接字段相等的记录
>  8. 全外连接 FULL [OUTER]，返回左右表中所有的记录和左右表中连接字段相等的记录。
>9. 交叉连接  CROSS：两个表进行笛卡尔积运算的结果

```shell
# sql199标准的写法
select 列
from 表1 【别名】
【连接类型】join 表2 on 连接条件
【where 筛选条件】
【group by 分组筛选】
【having 筛选条件】
【order by 排序】


select g.name, b.name
from girls g inner
join boys b
on g.id = b.id
```

### 集合运算

```shell
# 并操作 union
# 交操作 intersect
# 差操作 except
```

```shell
# 内连接
select * from goods, category where goods.categoryno = category.categoryno;
select * from goods join category on goods.categoryno = category.categoryno;

# 等值连接：查询的时候将多表连接的结果看成一个单表来操作
select college, sname, sum(salebill.number * saleprice) 消费金额 
from student
join salebill on student.sno = salebill.sno
join goods on goods.goodsno = salebill.goodsno
where college = 'CS'
group by college, sname;

# 自连接

```



## 存储引擎

```shell
​```sql
show create table; # 可以 查看当前表的引擎

alter table [table_name] engine = InnoDB;
​```xxxxxxxxxx select * from table1 where age > 20unionselect * from table2 where uage > 20;#特点：# 这些表查询的列数和顺序要一致# 会自动去重 union all 不去重sql
```

