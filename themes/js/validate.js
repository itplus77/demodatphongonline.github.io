var number_people = 'Xin chọn số người ';
var number_room = 'Xin chọn số phòng đặt';
var type_room = 'Xin chọn loại phòng';
var full_name = 'Xin nhập tên của bạn';
var phone_number = 'Xin nhập số điện thoại';
var email = 'Xin nhập địa chỉ email';
var invalide_email = 'Email không đúng';
var null_security = 'Xin nhập mã bảo mật';
var security_incorrect = 'Mã bảo mật không đúng';

function validateForm(frm)
	{
		var RE_EMAIL = /^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/;

		if ( frm.number_people.value == '')
		{
			alert (number_people);
			frm.number_people.focus();
			return false;
		}
		if ( frm.number_room.value == '')
		{
			alert (number_room);
			frm.number_room.focus();
			return false;
		}
		if ( frm.type_room.value == '')
		{
			alert (type_room);
			frm.type_room.focus();
			return false;
		}
		if ( frm.full_name.value == '')
		{
			alert (full_name);
			frm.full_name.focus();
			return false;
		}
		if ( frm.phone_number.value == '')
		{
			alert (phone_number);
			frm.phone_number.focus();
			return false;
		}
		if ( frm.email.value == '')
		{
			alert (email);
			frm.email.focus();
			return false;
		}
		if ( !RE_EMAIL.test(frm.email.value) )
		{
			alert (invalide_email);
			frm.email.focus();
			return false;
		}
		if ( frm.scurity_code.value == '')
		{
			alert (null_security);
			frm.scurity_code.focus();
			return false;
		}
		if ( frm.scurity_code.value != frm.hid_keycapcha.value )
		{
			alert (security_incorrect);
			frm.scurity_code.focus();
			return false;
		}
		
	}
