// 值的有序列表，数组
[]

['a']

var str = "['a', 'b', 3, true, null, undefined, {\"name\": \"张三\"}, ['a']]";

str = ['a', 'b', 3, true, null, undefined, {name: "张三"}, ['a']];

console.log(str[6]);

/*
 * json对象
 * json字符串
 */

// 键值对的集合，对象
{}

{age: 20}

{
	age: 20, 
	name: '张三', 
	firends: ['李四', '王五'], 
	wife: null, 
	computer: {
		cpu: 'i5', 
		memory: '4g'
	}
}

/*
 * 
 */

var company = {
	name: "百度",
	boss: "李彦宏",
	address: {
		"address1": "上地五街",
		"address2": "上地九街",
		"address3": "上地十街",
		"address4": "软件园2期（后厂村路）"
	},
	stuff_num: 200000
	// ...
};
