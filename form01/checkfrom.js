function check()
{
    //luu y dat ten cho from la f
  
    var username= f.TenDangNhap.value;
    var password= f.MatKhau.value;

    
    if(username=='')
    {
        alert('Tên đăng nhập không được bỏ trống');
        return false;
    }
    if(password=='')
    {
        alert('mật khẩu không được bỏ trống');
        return false;
    }
    return true;
}
