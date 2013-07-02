
$(document).ready(function(){
	// Original Data Set [ { "Date": "Jun 17", "Host": "Jael Watts", "Location": "P.O. Box 380, 4326 Pretium Avenue", "Description": "ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada" }, { "Date": "Jun 25", "Host": "Quentin Russo", "Location": "7059 Ridiculus St.", "Description": "auctor non, feugiat nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis" }, { "Date": "Jun 14", "Host": "Vielka Cook", "Location": "P.O. Box 571, 3584 Nec Rd.", "Description": "enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus" }, { "Date": "Jun 22", "Host": "Sybil Joyce", "Location": "3721 Curabitur St.", "Description": "sagittis felis. Donec tempor, est ac" }, { "Date": "Jun 06", "Host": "Farrah Curtis", "Location": "P.O. Box 695, 5123 Integer Ave", "Description": "eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae" }, { "Date": "Jun 25", "Host": "Malachi Ramsey", "Location": "P.O. Box 843, 3720 Pede St.", "Description": "vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc" } ];
	var events = [{"Date":"2013-03-04T18:10:10-08:00","Host":"Jayme Hutchinson","Location":"P.O. Box 172, 2131 Posuere Ave","Title":"dis parturient montes, nascetur ridiculus mus.","Description":"eu metus. In lorem. Donec elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames"},{"Date":"2013-05-08T23:59:29-07:00","Host":"Damon Guzman","Location":"934-4134 Eget Rd.","Title":"nec urna et arcu imperdiet ullamcorper.","Description":"pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel,"},{"Date":"2013-09-18T01:38:59-07:00","Host":"Mariam Suarez","Location":"6179 Orci, Street","Title":"eros turpis non enim. Mauris","Description":"egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus."},{"Date":"2013-07-22T09:52:40-07:00","Host":"MacKensie Lott","Location":"Ap #522-1280 Per Av.","Title":"et pede. Nunc sed orci lobortis","Description":"rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis"},{"Date":"2013-12-08T11:10:02-08:00","Host":"Idona West","Location":"5380 Amet Ave","Title":"lacus, varius et, euismod et, commodo at, libero. Morbi accumsan","Description":"et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl."},{"Date":"2013-12-13T04:50:19-08:00","Host":"Kelsie Mayo","Location":"615-8463 Sem Av.","Title":"a ultricies adipiscing, enim mi tempor lorem, eget","Description":"vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean"},{"Date":"2013-02-27T03:26:10-08:00","Host":"Imelda Mckee","Location":"P.O. Box 144, 3314 Justo St.","Title":"sapien, gravida non, sollicitudin a,","Description":"Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus."},{"Date":"2013-03-07T09:39:39-08:00","Host":"Yasir Welch","Location":"217-7603 Egestas Av.","Title":"Cum sociis natoque penatibus et magnis","Description":"nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum"},{"Date":"2013-04-15T16:39:27-07:00","Host":"Lionel Burgess","Location":"6230 Eget St.","Title":"justo eu arcu. Morbi sit","Description":"mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi"},{"Date":"2013-11-10T06:09:23-08:00","Host":"Tatum Noble","Location":"Ap #881-941 Rutrum, Avenue","Title":"est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh","Description":"aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt"},{"Date":"2013-09-15T10:31:40-07:00","Host":"Mechelle Solomon","Location":"3409 Elit, St.","Title":"mauris id sapien. Cras dolor dolor, tempus","Description":"Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras pellentesque. Sed dictum."},{"Date":"2013-08-29T20:02:11-07:00","Host":"Dante Quinn","Location":"Ap #844-4839 Tempus Road","Title":"Vestibulum ut eros non enim","Description":"enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id"},{"Date":"2013-04-29T02:08:31-07:00","Host":"Daphne Lambert","Location":"963-7030 Facilisis. Avenue","Title":"non, hendrerit id, ante. Nunc","Description":"ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae velit egestas lacinia. Sed"},{"Date":"2013-06-20T17:02:33-07:00","Host":"Iris Workman","Location":"303-746 Et, Road","Title":"ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede.","Description":"nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,"},{"Date":"2013-01-11T21:58:35-08:00","Host":"Keefe Peters","Location":"P.O. Box 472, 9238 A Road","Title":"Donec sollicitudin adipiscing ligula. Aenean gravida","Description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo"},{"Date":"2013-09-04T14:46:11-07:00","Host":"Cheyenne Bush","Location":"1579 Et St.","Title":"dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis","Description":"congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae"},{"Date":"2013-03-01T15:26:35-08:00","Host":"Dahlia Rocha","Location":"P.O. Box 702, 5135 Tellus Rd.","Title":"mi. Duis risus odio, auctor vitae,","Description":"morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem"},{"Date":"2013-06-07T00:12:44-07:00","Host":"Nayda Melton","Location":"P.O. Box 220, 730 Mauris Avenue","Title":"ornare lectus justo eu arcu. Morbi sit","Description":"Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec"},{"Date":"2013-08-22T08:01:53-07:00","Host":"Igor Sandoval","Location":"4363 Donec Street","Title":"fames ac turpis egestas. Aliquam fringilla cursus","Description":"est arcu ac orci. Ut semper pretium neque. Morbi quis urna. Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu."},{"Date":"2013-04-22T10:23:59-07:00","Host":"Marcia Crane","Location":"7842 Morbi Rd.","Title":"et netus et malesuada fames ac turpis egestas. Aliquam fringilla","Description":"purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In lorem. Donec elementum, lorem"},{"Date":"2013-11-22T05:27:35-08:00","Host":"Kieran Mclean","Location":"Ap #259-5108 Sapien. Road","Title":"ipsum sodales purus, in molestie tortor nibh sit amet orci.","Description":"penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed"},{"Date":"2013-04-02T12:08:19-07:00","Host":"Tate Berger","Location":"P.O. Box 686, 6385 Nonummy. St.","Title":"id risus quis diam luctus lobortis. Class aptent taciti sociosqu","Description":"blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod enim. Etiam gravida"},{"Date":"2013-02-08T18:06:25-08:00","Host":"Jarrod Miles","Location":"229-2064 Purus. Road","Title":"risus odio, auctor vitae, aliquet nec, imperdiet","Description":"Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis"},{"Date":"2013-06-16T05:27:57-07:00","Host":"Akeem Collier","Location":"Ap #658-6746 At, St.","Title":"enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum","Description":"lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus."},{"Date":"2013-12-17T12:18:51-08:00","Host":"Gretchen Pennington","Location":"935-2815 Nunc St.","Title":"amet, faucibus ut, nulla. Cras eu tellus eu augue","Description":"pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae,"},{"Date":"2013-01-28T12:51:39-08:00","Host":"MacKenzie Booth","Location":"224-7394 Scelerisque Ave","Title":"nec, cursus a, enim. Suspendisse","Description":"neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit"},{"Date":"2013-09-22T00:46:06-07:00","Host":"Rama Weaver","Location":"Ap #875-5502 Quisque Road","Title":"volutpat. Nulla facilisis. Suspendisse commodo tincidunt","Description":"pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan"},{"Date":"2013-03-23T05:02:25-07:00","Host":"Uma Vincent","Location":"P.O. Box 968, 3053 Taciti Av.","Title":"iaculis enim, sit amet ornare lectus justo eu arcu. Morbi","Description":"pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero"},{"Date":"2013-02-16T17:27:54-08:00","Host":"Allen Nunez","Location":"409-3234 Enim, St.","Title":"ipsum cursus vestibulum. Mauris magna. Duis","Description":"vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper."},{"Date":"2013-04-27T02:25:06-07:00","Host":"Jermaine Kidd","Location":"P.O. Box 944, 2237 Lacinia. Road","Title":"erat neque non quam. Pellentesque habitant morbi tristique senectus et","Description":"Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis"},{"Date":"2013-09-14T07:36:18-07:00","Host":"Blake Wood","Location":"129-3750 Metus. St.","Title":"habitant morbi tristique senectus et netus","Description":"convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer"},{"Date":"2013-09-03T16:59:23-07:00","Host":"Halla Mcbride","Location":"4665 Auctor Ave","Title":"consectetuer adipiscing elit. Aliquam auctor, velit","Description":"elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec"},{"Date":"2013-09-15T23:25:04-07:00","Host":"Jolie Garrett","Location":"384-4947 Nec Rd.","Title":"tellus eu augue porttitor interdum.","Description":"dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare."},{"Date":"2013-08-26T06:48:49-07:00","Host":"Ira Hutchinson","Location":"697-9220 Enim, Ave","Title":"fames ac turpis egestas. Fusce aliquet magna a","Description":"nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor"},{"Date":"2013-09-30T00:47:23-07:00","Host":"Martena Boyd","Location":"Ap #943-5383 Neque Rd.","Title":"Donec est. Nunc ullamcorper, velit","Description":"Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed"},{"Date":"2013-10-20T18:41:07-07:00","Host":"Rhea Malone","Location":"P.O. Box 858, 5720 Orci St.","Title":"senectus et netus et malesuada fames ac","Description":"nibh. Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis"},{"Date":"2013-12-13T18:43:11-08:00","Host":"Grace Pierce","Location":"Ap #944-998 Egestas St.","Title":"volutpat nunc sit amet metus. Aliquam erat","Description":"nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus."},{"Date":"2013-04-28T00:18:14-07:00","Host":"Keane Farmer","Location":"2284 Nisi. Rd.","Title":"lorem. Donec elementum, lorem ut","Description":"sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra"},{"Date":"2013-11-15T04:20:06-08:00","Host":"Hedley Henson","Location":"677-8659 Nisi Road","Title":"magnis dis parturient montes, nascetur ridiculus","Description":"Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim"},{"Date":"2013-05-22T09:31:35-07:00","Host":"Hall Cain","Location":"P.O. Box 811, 4757 Aliquet St.","Title":"nisl. Quisque fringilla euismod enim. Etiam gravida molestie arcu. Sed","Description":"convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem"},{"Date":"2013-04-21T19:48:46-07:00","Host":"Rinah Bradley","Location":"181-4608 Justo Rd.","Title":"augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed,","Description":"augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis"},{"Date":"2013-03-04T20:20:17-08:00","Host":"Brian Fleming","Location":"P.O. Box 981, 4202 Blandit Ave","Title":"tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed","Description":"semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus"},{"Date":"2013-06-10T22:19:57-07:00","Host":"Giselle Sandoval","Location":"143-6786 Cursus St.","Title":"blandit at, nisi. Cum sociis natoque","Description":"erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis."},{"Date":"2013-12-13T09:15:13-08:00","Host":"Isaiah Bridges","Location":"Ap #725-5900 Ullamcorper, Rd.","Title":"erat. Sed nunc est, mollis non, cursus","Description":"dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod"},{"Date":"2013-10-03T05:55:18-07:00","Host":"Quemby Johns","Location":"7642 Purus. Ave","Title":"et magnis dis parturient montes, nascetur ridiculus","Description":"Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc"},{"Date":"2013-08-25T17:00:01-07:00","Host":"Jordan Travis","Location":"5847 Erat, Ave","Title":"Fusce aliquam, enim nec tempus","Description":"amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus."},{"Date":"2013-02-10T11:06:42-08:00","Host":"Troy Chaney","Location":"Ap #860-455 Elementum Rd.","Title":"dolor, nonummy ac, feugiat non,","Description":"elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta"},{"Date":"2013-02-13T19:16:19-08:00","Host":"Noelle Davenport","Location":"P.O. Box 497, 8594 Parturient Rd.","Title":"egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae,","Description":"orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros"},{"Date":"2013-02-11T22:11:41-08:00","Host":"Caldwell Lara","Location":"P.O. Box 221, 5739 Fames St.","Title":"consectetuer, cursus et, magna. Praesent","Description":"gravida nunc sed pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec"},{"Date":"2013-03-29T23:16:41-07:00","Host":"Otto Walker","Location":"1818 Nunc Rd.","Title":"quis arcu vel quam dignissim pharetra. Nam ac","Description":"sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu"},{"Date":"2013-02-17T01:47:16-08:00","Host":"Violet Obrien","Location":"P.O. Box 601, 8518 In St.","Title":"vel, vulputate eu, odio. Phasellus at augue","Description":"Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus"},{"Date":"2013-12-05T06:18:41-08:00","Host":"Nathaniel Craft","Location":"259-9598 Donec Av.","Title":"metus. Aenean sed pede nec ante blandit viverra. Donec tempus,","Description":"bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet"},{"Date":"2013-10-09T02:01:09-07:00","Host":"Levi George","Location":"Ap #798-2888 Velit. Rd.","Title":"sollicitudin a, malesuada id, erat. Etiam vestibulum massa","Description":"eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae"},{"Date":"2013-10-15T02:27:30-07:00","Host":"Nyssa Everett","Location":"P.O. Box 698, 4545 Nec Street","Title":"aliquet vel, vulputate eu, odio. Phasellus","Description":"Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut"},{"Date":"2013-09-27T16:12:18-07:00","Host":"Rama Walsh","Location":"7473 Vulputate Avenue","Title":"ut, sem. Nulla interdum. Curabitur dictum. Phasellus in","Description":"eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in"},{"Date":"2013-01-21T04:58:33-08:00","Host":"Kasimir Murphy","Location":"155-5385 Magna. St.","Title":"non sapien molestie orci tincidunt adipiscing. Mauris","Description":"enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur"},{"Date":"2013-07-11T07:42:38-07:00","Host":"Kyla Atkinson","Location":"Ap #905-9524 Non, Ave","Title":"Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien.","Description":"libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis"},{"Date":"2013-06-16T03:46:32-07:00","Host":"Yen Dillon","Location":"2261 Ac Av.","Title":"aliquet. Proin velit. Sed malesuada","Description":"commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,"},{"Date":"2013-07-26T06:53:50-07:00","Host":"Angela Cummings","Location":"227-9390 Nulla. Rd.","Title":"Nullam scelerisque neque sed sem egestas blandit. Nam","Description":"eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem"},{"Date":"2013-10-26T20:03:41-07:00","Host":"Sydnee Mack","Location":"781-4354 Nonummy Rd.","Title":"eu, eleifend nec, malesuada ut, sem. Nulla","Description":"quis accumsan convallis, ante lectus convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim"},{"Date":"2013-08-11T23:21:50-07:00","Host":"Ila Nielsen","Location":"4060 Consectetuer Road","Title":"sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum","Description":"lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis"},{"Date":"2013-02-08T18:40:33-08:00","Host":"Kelsey Mccray","Location":"Ap #356-3775 Velit. Av.","Title":"est. Mauris eu turpis. Nulla aliquet. Proin velit.","Description":"convallis est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis"},{"Date":"2013-07-18T00:09:52-07:00","Host":"Wang Flowers","Location":"P.O. Box 523, 8863 At, Road","Title":"enim. Sed nulla ante, iaculis nec,","Description":"mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla"},{"Date":"2013-06-21T09:46:26-07:00","Host":"Clio Orr","Location":"P.O. Box 888, 4231 Egestas. St.","Title":"vitae erat vel pede blandit","Description":"Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare"},{"Date":"2013-09-23T18:02:19-07:00","Host":"Avye Rice","Location":"P.O. Box 976, 7651 Varius. Road","Title":"Donec felis orci, adipiscing non, luctus sit amet,","Description":"vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc"},{"Date":"2013-09-10T15:53:56-07:00","Host":"Joan Bruce","Location":"2173 Vitae, Avenue","Title":"dui, semper et, lacinia vitae, sodales at,","Description":"velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi quis urna."},{"Date":"2013-11-06T01:50:15-08:00","Host":"Aline Walsh","Location":"2262 Integer St.","Title":"libero. Proin sed turpis nec mauris","Description":"lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada"},{"Date":"2013-07-18T21:16:28-07:00","Host":"Mannix Wall","Location":"P.O. Box 287, 7688 Fusce St.","Title":"mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus.","Description":"amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu"},{"Date":"2013-07-23T09:44:25-07:00","Host":"Buffy Mccoy","Location":"Ap #820-5926 Etiam St.","Title":"ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem","Description":"Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris."},{"Date":"2013-10-31T06:44:24-07:00","Host":"Louis Bradshaw","Location":"344-9736 Tincidunt Road","Title":"consequat dolor vitae dolor. Donec fringilla. Donec","Description":"massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,"},{"Date":"2013-07-15T07:52:40-07:00","Host":"Gil Medina","Location":"264-2233 Ornare Rd.","Title":"erat vitae risus. Duis a mi fringilla mi lacinia mattis.","Description":"enim diam vel arcu. Curabitur ut odio vel est tempor bibendum. Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu"},{"Date":"2013-11-09T13:18:53-08:00","Host":"Hayfa House","Location":"P.O. Box 952, 8612 Massa St.","Title":"amet luctus vulputate, nisi sem semper","Description":"libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus"},{"Date":"2013-10-09T03:08:06-07:00","Host":"Yuri Sweet","Location":"2267 Erat Street","Title":"enim nec tempus scelerisque, lorem ipsum sodales","Description":"vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt."},{"Date":"2013-04-09T10:51:18-07:00","Host":"Avye Burton","Location":"555-3246 At Rd.","Title":"neque sed sem egestas blandit.","Description":"neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,"},{"Date":"2013-12-23T09:40:09-08:00","Host":"Eugenia Rocha","Location":"Ap #592-6737 Auctor Road","Title":"lacus. Quisque purus sapien, gravida non, sollicitudin a,","Description":"non massa non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget"},{"Date":"2013-07-12T13:12:54-07:00","Host":"Thaddeus Sears","Location":"P.O. Box 320, 2449 Amet Ave","Title":"gravida mauris ut mi. Duis risus odio, auctor vitae,","Description":"a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris"},{"Date":"2013-10-08T17:00:08-07:00","Host":"Devin Robles","Location":"P.O. Box 300, 6337 Ullamcorper Ave","Title":"quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis.","Description":"venenatis vel, faucibus id, libero. Donec consectetuer mauris id sapien. Cras dolor dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse"},{"Date":"2013-07-24T23:47:21-07:00","Host":"Hiroko Farmer","Location":"167 Urna. Avenue","Title":"scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed","Description":"Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse"},{"Date":"2013-03-04T15:04:32-08:00","Host":"Steel Kennedy","Location":"Ap #888-6069 Iaculis Avenue","Title":"sit amet lorem semper auctor. Mauris vel turpis. Aliquam","Description":"sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi"},{"Date":"2013-09-16T00:55:24-07:00","Host":"Yoko Leblanc","Location":"3841 Sed St.","Title":"sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum","Description":"magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum"},{"Date":"2013-12-14T15:09:29-08:00","Host":"Stone Mcfadden","Location":"Ap #966-8011 Ac, Av.","Title":"cursus in, hendrerit consectetuer, cursus et, magna. Praesent","Description":"non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales nisi"},{"Date":"2013-02-20T10:25:01-08:00","Host":"Autumn Frazier","Location":"P.O. Box 978, 5386 Urna. Av.","Title":"porttitor scelerisque neque. Nullam nisl. Maecenas malesuada","Description":"urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna."},{"Date":"2013-03-06T19:00:45-08:00","Host":"Tyler Duran","Location":"Ap #442-1438 Tempor Rd.","Title":"vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit","Description":"nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed"},{"Date":"2013-02-24T19:09:46-08:00","Host":"Ulric Sherman","Location":"Ap #703-4727 Nisi. Av.","Title":"sit amet ante. Vivamus non lorem","Description":"non ante bibendum ullamcorper. Duis cursus, diam at pretium aliquet, metus urna convallis erat, eget tincidunt dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis vel, faucibus id,"},{"Date":"2013-07-07T09:54:50-07:00","Host":"Joy Guerra","Location":"2020 Fringilla Rd.","Title":"Cras sed leo. Cras vehicula aliquet libero. Integer in magna.","Description":"Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit"},{"Date":"2013-04-26T12:05:57-07:00","Host":"Mikayla Young","Location":"622-2701 Adipiscing Street","Title":"ligula eu enim. Etiam imperdiet dictum magna.","Description":"molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus"},{"Date":"2013-04-17T07:25:47-07:00","Host":"Indira Taylor","Location":"Ap #647-3926 Mollis St.","Title":"turpis vitae purus gravida sagittis. Duis gravida. Praesent eu","Description":"dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem"},{"Date":"2013-09-30T21:12:54-07:00","Host":"Keane Saunders","Location":"P.O. Box 575, 8442 Fringilla Road","Title":"Nunc lectus pede, ultrices a, auctor non, feugiat","Description":"malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula"},{"Date":"2013-10-18T14:40:29-07:00","Host":"Phelan Scott","Location":"P.O. Box 359, 9245 Ac, Street","Title":"Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis","Description":"a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat"},{"Date":"2013-04-09T03:52:18-07:00","Host":"Naomi Holcomb","Location":"569 Nullam Street","Title":"pharetra, felis eget varius ultrices, mauris ipsum","Description":"Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum"},{"Date":"2013-09-26T21:33:23-07:00","Host":"Martha Todd","Location":"326-2391 Eget Rd.","Title":"feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus","Description":"sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus."},{"Date":"2013-04-15T14:48:58-07:00","Host":"Lewis Ramirez","Location":"P.O. Box 769, 5876 Ipsum Ave","Title":"enim. Nunc ut erat. Sed nunc est, mollis","Description":"quam vel sapien imperdiet ornare. In faucibus. Morbi vehicula. Pellentesque tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie"},{"Date":"2013-05-23T11:31:44-07:00","Host":"Keith Pope","Location":"364 Hendrerit. Road","Title":"sapien, gravida non, sollicitudin a, malesuada","Description":"vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra, felis eget"},{"Date":"2013-06-10T23:26:20-07:00","Host":"Ulla Hester","Location":"Ap #744-915 Egestas Road","Title":"blandit at, nisi. Cum sociis natoque penatibus","Description":"risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque"},{"Date":"2013-09-26T06:47:33-07:00","Host":"Destiny Harrell","Location":"P.O. Box 371, 8824 In Street","Title":"Cum sociis natoque penatibus et magnis","Description":"diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum"},{"Date":"2013-12-06T22:27:34-08:00","Host":"Honorato Phillips","Location":"3006 Sed St.","Title":"Nullam vitae diam. Proin dolor. Nulla","Description":"fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum"},{"Date":"2013-03-30T19:20:06-07:00","Host":"Chadwick Mckinney","Location":"597-2906 Nec Av.","Title":"Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non","Description":"Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat. Sed nunc est, mollis non, cursus non, egestas a, dui. Cras"},{"Date":"2013-09-14T15:04:10-07:00","Host":"Kareem Barber","Location":"348-8845 Aliquet. Rd.","Title":"neque sed dictum eleifend, nunc","Description":"Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim"},{"Date":"2013-11-19T01:43:09-08:00","Host":"Camille Richardson","Location":"P.O. Box 838, 6719 Cursus, Avenue","Title":"ipsum. Suspendisse non leo. Vivamus nibh","Description":"nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."},{"Date":"2013-06-20T00:55:16-07:00","Host":"Hunter Ortiz","Location":"9342 Egestas. Avenue","Title":"at auctor ullamcorper, nisl arcu","Description":"ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec"}];
	// get the current date
	var now = moment();
	
	// set the calendar to the current month
	var monthSelector = $('select#month');
	$(monthSelector).val(now.month());
	
	//set the calendar to the current year
	var yearSelector = $('input#yearInput');
	$(yearSelector).val(now.year());
	
	// update title to match inputs
	updateTitle(yearSelector, monthSelector);
	
	// find where the calendar goes on the page and setup for the first time
	var calendarBody = '.Calendar';
	var originalHTML = $(calendarBody).parent().html();
	UpdateAll(events, calendarBody, monthSelector, now, originalHTML, yearSelector);
	
	// setup add event dialog
	 var addEventDialog = $('form#AddEvent-form').dialog({
		width: 600,
		title: "Add Event",
		autoOpen: false,
		model:true,
		buttons:{
			Add: function(){
				$(this).dialog("close");
			}
		}
	});
	$('.ui-dialog-buttonset').children().addClass('btn');
	
	// attach event listener for when the user changes the month and presses enter
	$(yearSelector).keypress(function(e){
		if (e.keyCode == 13){
			e.preventDefault();
			UpdateAll(events, calendarBody, monthSelector, now, originalHTML, yearSelector)
		}
	});
	
	// attach event listener for when the user clicks update
	$(monthSelector).change(function(){
		UpdateAll(events, calendarBody, monthSelector, now, originalHTML, yearSelector)
	});
	
	// reset and display add event dialog
	$('input#AddEvent-button').click(function(){
		$('#AddEvent-month').val(now.month());
		$('#AddEvent-year').val(now.year());
		updateDaysInMonthDropDown(now.year(), now.month(), '#AddEvent-day')
		addEventDialog.dialog('open');
	});
	
	// when month on the add events form is updated
	$('#AddEvent-month').change(function(){
		var monthAdd = parseInt($('#AddEvent-month').val());
		var yearAdd = parseInt($('#AddEvent-year').val());
		updateDaysInMonthDropDown(yearAdd, monthAdd, '#AddEvent-day');
	});
});

function UpdateAll(events, calendarBody, monthSelector, now, originalHTML, yearSelector){
	var year = $(yearSelector).val();
	var result = validateInputs(year);
	if(result == true){
		updateTitle(yearSelector, monthSelector);
		makeCalendar(events, calendarBody, monthSelector, now, originalHTML, yearSelector);
	}
	else{
		$('div#validationError').dialog({
			width: 600,
			title: "Validation Error",
			modal: true,
			buttons: {
				Close: function() {
					$(this).dialog("destroy");
				}
			}
		});
		$('.ui-dialog-buttonset').children().addClass('btn');
	}
}

function makeCalendar(events, calendarBody, monthSelector, today, originalHTML, yearSelector){
	var yearTxt = $(yearSelector).val()
	var year = parseInt(yearTxt);
	var monthTxt = $(monthSelector).val();
	var month = parseInt(monthTxt);//months.indexOf(monthTxt);	
	var numDays = daysInMonth((month+1), year);
	
	var rowIndex = 0;
	
	var html = "";
	
	for (var v = 0; v < numDays; v++){
		// if this is the first day of the month calculate the padding before today.
		if (v == 0){
			var day = dayOfWeek(month, year, (v+1));
			for(var i = 0; i < day; i++){
				if (rowIndex == 0) {
					html = html + '<div class="CalendarBodyRow"><div class="CalendarBodyDay First"></div>';
					rowIndex++;
				}
				else if (rowIndex == 6){
					html = html + '<div class="CalendarBodyDay Last"></div></div>';
					rowIndex = 0;
				}
				else{
					html = html + '<div class="CalendarBodyDay"></div>';
					rowIndex++;
				}
			}
		}
		
		// find all of the events for today
		var todaysEvents = [];
		$(events).each(function(index, data){
			var date = moment(this.Date);
			if (date.date() == (v+1) && date.month() == month && date.year() == year)
			{
				todaysEvents.push(data);
			}
		});
		
		// begin constructing todays date code
		if (today.date() == (v+1) && today.month() == month && today.year() == year){
			if (rowIndex == 0) {
				html = html + '<div class="CalendarBodyRow"><div class="CalendarBodyDay Today First"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div>'
				rowIndex++;
			}
			else if (rowIndex == 6){
				html = html + '<div class="CalendarBodyDay Today Last"><div class="CalendarBodyDay-Date"></div>' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div></div>'
				rowIndex = 0;
			}
			else{
				html = html + '<div class="CalendarBodyDay Today"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div>'
				rowIndex++;
			}
			//html = html + '<div class="CalendarBodyDay Today"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
		}
		else{
			if (rowIndex == 0) {
				html = html + '<div class="CalendarBodyRow"><div class="CalendarBodyDay First"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div>'
				rowIndex++;
			}
			else if (rowIndex == 6){
				html = html + '<div class="CalendarBodyDay Last"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div></div>'
				rowIndex = 0;
			}
			else{
				html = html + '<div class="CalendarBodyDay"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
				html = addEvents(todaysEvents, html)
				html = html + '</div></div>'
				rowIndex++;
			}
			//html = html + '<div class="CalendarBodyDay"><div class="CalendarBodyDay-Date">' + (v+1) + '</div><div class="CalendarBodyDay-Events">';
		}
		
		// if this is the last day for the month calculate the padding at the end of the month.
		if (v == (numDays - 1)){
			var day = dayOfWeek(month, year, (v+1));
			var num = 6 - day;
			for(var i = 0; i < num; i++){
				if (rowIndex == 0) {
					html = html + '<div class="CalendarBodyRow"><div class="CalendarBodyDay First"></div>';
					rowIndex++;
				}
				else if (rowIndex == 6){
					html = html + '<div class="CalendarBodyDay Last"></div></div>';
					rowIndex = 0;
				}
				else{
					html = html + '<div class="CalendarBodyDay"></div>';
					rowIndex++;
				}
			}
		}
	}
	
	// empty any old dates that were there and add in the new html we just generated.
	if($('html').hasClass('ie7')){ $('.Calendar').css('behavior', "");}
	var parent = $(calendarBody).parent('div');
	$(parent).empty();
	$(parent).html(originalHTML);
	$('.CalendarHeader').after(html);
	if($('html').hasClass('ie7')){ $('.Calendar').css('behavior', "url('http://localhost:8080/htc/display-table.min.htc')");}
	
	// attach event handler to show details
	$('.CalendarBodyDay-Event').click(function(){
		$(this).find('.back').dialog({
			width: 600,
			title: "Event Details",
			modal: true,
			buttons: {
				Close: function() {
					$(this).dialog("destroy");
				}
			}
		});
		$('.ui-dialog-buttonset').children().addClass('btn');
	});
}

function updateDaysInMonthDropDown(year, month, selector){
	var days = daysInMonth((month+1), year);
	var html = '';
	for(var v = 0; v < days; v++){
		html = html + '<option value="' + (v+1) + '">' + (v+1) + '</option>';
	}
	$(selector).empty();
	$(selector).append(html);
}

function validateInputs(year){
	var yearTest = new RegExp('^[0-9]{4}$');
	return yearTest.test(year);
}

function updateTitle(yearSelector, monthSelector){
	var yearTxt = $(yearSelector).val();
	var monthVal = $(monthSelector).val();
	var monthTxt = moment().month(monthVal).format('MMMM');
	//var monthTxt = moment().format;
	
	$('span#titleMonth').text(monthTxt);
	$('span#titleYear').text(yearTxt);
}

function addEvents(todaysEvents, html){
	// for each event add in a new event for it
	for(var i = 0; i < todaysEvents.length; i++){
		var curDate = moment(todaysEvents[i].Date);
		html = html + '<div class="CalendarBodyDay-Event">' + todaysEvents[i].Title + 
			'<div class="back"><strong>Title:</strong> ' + todaysEvents[i].Title + 
			'<br /><strong>Time:</strong> ' +  curDate.format('h:mm a') +
			'<br /><strong>Host:</strong> ' + todaysEvents[i].Host + 
			'<br /><strong>Location:</strong> ' + todaysEvents[i].Location + 
			'<br /><strong>Description:</strong> ' + todaysEvents[i].Description + 
			// '<br /><input type="button" class="closeButton" value="Close" />' +
			'</div></div>';
	}
	return html;
}


// this returns the number of days in a month
function daysInMonth(month, year){
	return  new Date(year, month, 0).getDate();
}

// this returns what day of the week a particular date is
function dayOfWeek(month, year, day){
	return new Date(year, month, day).getDay();
}