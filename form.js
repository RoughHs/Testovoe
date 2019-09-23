$("#send").on("click", function() { 

	var firstname=$("#firstname").val().trim();
	var lastname=$("#lastname").val().trim();
	var email=$("#email").val().trim();
	var password=$("#password").val().trim();
	var repassword=$("#repassword").val().trim();
	
		if (firstname=="") {
			$("#errorMsg").text("Введите Имя");
			return false;
			}
			else if (lastname==""){
			$("#errorMsg").text("Введите Фамилию");
			return false;
			}

		else if (email==""){
			$("#errorMsg").text("Введите почту");
			return false;
			}

		else if (password==""){
			$("#errorMsg").text("Введите пароль");
			return false;
			}

		else if (repassword==""){
			$("#errorMsg").text("Повторите пароль");
			return false;
			}
				$("#errorMsg").text("");
				
	
	
				
				$.ajax({
			url:'ajax.php',
			type:"POST",
			cache:false,
			dataType: 'json',
			data:{'firstname':firstname,'lastname':lastname,'email':email,'password':password,'repassword':repassword},
			success:function(data)
			{
		
			$('.container').html(data.result);

				}

		});
	});

	
		