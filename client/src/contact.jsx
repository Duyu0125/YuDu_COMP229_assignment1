import '../src/contact.css'
export default function Contact() {
     return (
     <>
     <p>Contact</p>
     <form id="ffp">
		
			
				<label htmlFor="myFName"> *First Name: </label>
				<input type="text" id="myFName" name="myFName" required="required" autoFocus /> <br /> <br />
				
				<label htmlFor="myLName"> *Last Name: </label>
				<input type="text" id="myLName" name="myLName" required="required" /> <br /> <br />
				
				
				<label htmlFor="myEmail"> *Email: </label>
				<input type="email" id="myEmail" name="myEmail" required="required" /> <br /> <br />
				
				<input type="submit" className="submit" value="Submit" /> <br />
					
		
		</form> <br></br>
          <p><i>Call me on: <strong>4373246990 </strong></i></p>
 <p>facebook:www.phoebe.facebook.com</p>
 <p>email:duyu0125@gamil.com</p>
     </>
     );
     }
    