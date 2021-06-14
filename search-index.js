var searchIndex = JSON.parse('{\
"socket2":{"doc":"Utilities for creating and using sockets.","t":[3,3,3,3,18,18,11,3,18,18,18,18,3,18,18,18,18,3,11,3,11,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,18,18,18,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["SockAddr","Socket","SockRef","Domain","IPV4","IPV6","for_address","Type","STREAM","DGRAM","SEQPACKET","RAW","Protocol","ICMPV4","ICMPV6","TCP","UDP","RecvFlags","is_truncated","MaybeUninitSlice","new","TcpKeepalive","new","with_time","with_interval","with_retries","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","from","from","from","from","from","from","from","from","from","from","from","from","clone","clone","clone","clone","clone","eq","ne","eq","ne","eq","ne","eq","ne","deref","deref","deref_mut","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","read","read_vectored","write","write_vectored","flush","as_raw_fd","from_raw_fd","into_raw_fd","new","init","family","len","as_ptr","as_socket","as_socket_ipv4","as_socket_ipv6","new","new_raw","pair","pair_raw","bind","connect","connect_timeout","listen","accept","accept_raw","local_addr","peer_addr","type","try_clone","set_nonblocking","shutdown","recv","recv_out_of_band","recv_with_flags","recv_vectored","recv_vectored_with_flags","peek","recv_from","recv_from_with_flags","recv_from_vectored","recv_from_vectored_with_flags","peek_from","send","send_with_flags","send_vectored","send_vectored_with_flags","send_out_of_band","send_to","send_to_with_flags","send_to_vectored","send_to_vectored_with_flags","broadcast","set_broadcast","take_error","keepalive","set_keepalive","linger","set_linger","out_of_band_inline","set_out_of_band_inline","recv_buffer_size","set_recv_buffer_size","read_timeout","set_read_timeout","reuse_address","set_reuse_address","send_buffer_size","set_send_buffer_size","write_timeout","set_write_timeout","ip_transparent","set_ip_transparent","join_multicast_v4","leave_multicast_v4","multicast_if_v4","set_multicast_if_v4","multicast_loop_v4","set_multicast_loop_v4","multicast_ttl_v4","set_multicast_ttl_v4","ttl","set_ttl","join_multicast_v6","leave_multicast_v6","multicast_hops_v6","set_multicast_hops_v6","multicast_if_v6","set_multicast_if_v6","multicast_loop_v6","set_multicast_loop_v6","unicast_hops_v6","set_unicast_hops_v6","only_v6","set_only_v6","keepalive_time","keepalive_interval","keepalive_retries","set_tcp_keepalive","nodelay","set_nodelay","UNIX","PACKET","VSOCK","nonblocking","cloexec","is_end_of_record","is_out_of_band","unix","vsock","vsock_address","accept4","set_cloexec","set_nosigpipe","mss","set_mss","is_listener","domain","protocol","mark","set_mark","device","bind_device","cpu_affinity","set_cpu_affinity","reuse_port","set_reuse_port","freebind","set_freebind","sendfile","set_tcp_user_timeout","tcp_user_timeout"],"q":["socket2","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["The address of a socket.","Owned wrapper around a system socket.","A reference to a [<code>Socket</code>] that can be used to configure …","Specification of the communication domain for a socket.","Domain for IPv4 communication, corresponding to <code>AF_INET</code>.","Domain for IPv6 communication, corresponding to <code>AF_INET6</code>.","Returns the correct domain for <code>address</code>.","Specification of communication semantics on a socket.","Type corresponding to <code>SOCK_STREAM</code>.","Type corresponding to <code>SOCK_DGRAM</code>.","Type corresponding to <code>SOCK_SEQPACKET</code>.","Type corresponding to <code>SOCK_RAW</code>.","Protocol specification used for creating sockets via …","Protocol corresponding to <code>ICMPv4</code>.","Protocol corresponding to <code>ICMPv6</code>.","Protocol corresponding to <code>TCP</code>.","Protocol corresponding to <code>UDP</code>.","Flags for incoming messages.","Check if the message contains a truncated datagram.","A version of <code>IoSliceMut</code> that allows the buffer to be …","Creates a new <code>MaybeUninitSlice</code> wrapping a byte slice.","Configures a socket’s TCP keepalive parameters.","Returns a new, empty set of TCP keepalive parameters.","Set the amount of time after which TCP keepalive probes …","Set the value of the <code>TCP_KEEPINTVL</code> option. On Windows, …","Set the value of the <code>TCP_KEEPCNT</code> option.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The caller must ensure <code>S</code> is actually a socket.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Create a <code>SockAddr</code> from the underlying storage and its …","Initialise a <code>SockAddr</code> by calling the function <code>init</code>.","Returns this address’s family.","Returns the size of this address in bytes.","Returns a raw pointer to the address.","Returns this address as a <code>SocketAddr</code> if it is in the …","Returns this address as a [<code>SocketAddrV4</code>] if it is in the …","Returns this address as a [<code>SocketAddrV6</code>] if it is in the …","Creates a new socket and sets common flags.","Creates a new socket ready to be configured.","Creates a pair of sockets which are connected to each …","Creates a pair of sockets which are connected to each …","Binds this socket to the specified address.","Initiate a connection on this socket to the specified …","Initiate a connection on this socket to the specified …","Mark a socket as ready to accept incoming connection …","Accept a new incoming connection from this listener.","Accept a new incoming connection from this listener.","Returns the socket address of the local half of this …","Returns the socket address of the remote peer of this …","Returns the [<code>Type</code>] of this socket by checking the <code>SO_TYPE</code> …","Creates a new independently owned handle to the …","Moves this TCP stream into or out of nonblocking mode.","Shuts down the read, write, or both halves of this …","Receives data on the socket from the remote address to …","Receives out-of-band (OOB) data on the socket from the …","Identical to <code>recv</code> but allows for specification of …","Receives data on the socket from the remote address to …","Identical to <code>recv_vectored</code> but allows for specification …","Receives data on the socket from the remote adress to …","Receives data from the socket. On success, returns the …","Identical to <code>recv_from</code> but allows for specification of …","Receives data from the socket. Returns the amount of …","Identical to <code>recv_from_vectored</code> but allows for …","Receives data from the socket, without removing it from …","Sends data on the socket to a connected peer.","Identical to <code>send</code> but allows for specification of …","Send data to the connected peer. Returns the amount of …","Identical to <code>send_vectored</code> but allows for specification …","Sends out-of-band (OOB) data on the socket to connected …","Sends data on the socket to the given address. On …","Identical to <code>send_to</code> but allows for specification of …","Send data to a peer listening on <code>addr</code>. Returns the amount …","Identical to <code>send_to_vectored</code> but allows for …","Get the value of the <code>SO_BROADCAST</code> option for this socket.","Set the value of the <code>SO_BROADCAST</code> option for this socket.","Get the value of the <code>SO_ERROR</code> option on this socket.","Get the value of the <code>SO_KEEPALIVE</code> option on this socket.","Set value for the <code>SO_KEEPALIVE</code> option on this socket.","Get the value of the <code>SO_LINGER</code> option on this socket.","Set value for the <code>SO_LINGER</code> option on this socket.","Get value for the <code>SO_OOBINLINE</code> option on this socket.","Set value for the <code>SO_OOBINLINE</code> option on this socket.","Get value for the <code>SO_RCVBUF</code> option on this socket.","Set value for the <code>SO_RCVBUF</code> option on this socket.","Get value for the <code>SO_RCVTIMEO</code> option on this socket.","Set value for the <code>SO_RCVTIMEO</code> option on this socket.","Get the value of the <code>SO_REUSEADDR</code> option on this socket.","Set value for the <code>SO_REUSEADDR</code> option on this socket.","Get the value of the <code>SO_SNDBUF</code> option on this socket.","Set value for the <code>SO_SNDBUF</code> option on this socket.","Get value for the <code>SO_SNDTIMEO</code> option on this socket.","Set value for the <code>SO_SNDTIMEO</code> option on this socket.","Get the value of the <code>IP_TRANSPARENT</code> option on this socket.","Set the value of the <code>IP_TRANSPARENT</code> option on this socket.","Join a multicast group using <code>IP_ADD_MEMBERSHIP</code> option on …","Leave a multicast group using <code>IP_DROP_MEMBERSHIP</code> option …","Get the value of the <code>IP_MULTICAST_IF</code> option for this …","Set the value of the <code>IP_MULTICAST_IF</code> option for this …","Get the value of the <code>IP_MULTICAST_LOOP</code> option for this …","Set the value of the <code>IP_MULTICAST_LOOP</code> option for this …","Get the value of the <code>IP_MULTICAST_TTL</code> option for this …","Set the value of the <code>IP_MULTICAST_TTL</code> option for this …","Get the value of the <code>IP_TTL</code> option for this socket.","Set the value of the <code>IP_TTL</code> option for this socket.","Join a multicast group using <code>IPV6_ADD_MEMBERSHIP</code> option …","Leave a multicast group using <code>IPV6_DROP_MEMBERSHIP</code> option …","Get the value of the <code>IPV6_MULTICAST_HOPS</code> option for this …","Set the value of the <code>IPV6_MULTICAST_HOPS</code> option for this …","Get the value of the <code>IPV6_MULTICAST_IF</code> option for this …","Set the value of the <code>IPV6_MULTICAST_IF</code> option for this …","Get the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …","Set the value of the <code>IPV6_MULTICAST_LOOP</code> option for this …","Get the value of the <code>IPV6_UNICAST_HOPS</code> option for this …","Set the value for the <code>IPV6_UNICAST_HOPS</code> option on this …","Get the value of the <code>IPV6_V6ONLY</code> option for this socket.","Set the value for the <code>IPV6_V6ONLY</code> option on this socket.","Get the value of the <code>TCP_KEEPIDLE</code> option on this socket.","Get the value of the <code>TCP_KEEPINTVL</code> option on this socket.","Get the value of the <code>TCP_KEEPCNT</code> option on this socket.","Set parameters configuring TCP keepalive probes for this …","Get the value of the <code>TCP_NODELAY</code> option on this socket.","Set the value of the <code>TCP_NODELAY</code> option on this socket.","Domain for Unix socket communication, corresponding to …","Domain for low-level packet interface, corresponding to …","Domain for low-level VSOCK interface, corresponding to …","Set <code>SOCK_NONBLOCK</code> on the <code>Type</code>.","Set <code>SOCK_CLOEXEC</code> on the <code>Type</code>.","Check if the message terminates a record.","Check if the message contains out-of-band data.","Constructs a <code>SockAddr</code> with the family <code>AF_UNIX</code> and the …","Constructs a <code>SockAddr</code> with the family <code>AF_VSOCK</code> and the …","Returns this address VSOCK CID/port if it is in the …","Accept a new incoming connection from this listener.","Sets <code>CLOEXEC</code> on the socket.","Sets <code>SO_NOSIGPIPE</code> on the socket.","Gets the value of the <code>TCP_MAXSEG</code> option on this socket.","Sets the value of the <code>TCP_MAXSEG</code> option on this socket.","Returns <code>true</code> if <code>listen(2)</code> was called on this socket by …","Returns the [<code>Domain</code>] of this socket by checking the …","Returns the [<code>Protocol</code>] of this socket by checking the …","Gets the value for the <code>SO_MARK</code> option on this socket.","Sets the value for the <code>SO_MARK</code> option on this socket.","Gets the value for the <code>SO_BINDTODEVICE</code> option on this …","Sets the value for the <code>SO_BINDTODEVICE</code> option on this …","Get the value of the <code>SO_INCOMING_CPU</code> option on this …","Set value for the <code>SO_INCOMING_CPU</code> option on this socket.","Get the value of the <code>SO_REUSEPORT</code> option on this socket.","Set value for the <code>SO_REUSEPORT</code> option on this socket.","Get the value of the <code>IP_FREEBIND</code> option on this socket.","Set value for the <code>IP_FREEBIND</code> option on this socket.","Copies data between a <code>file</code> and this socket using the …","Set the value of the <code>TCP_USER_TIMEOUT</code> option on this …","Get the value of the <code>TCP_USER_TIMEOUT</code> option on this …"],"i":[0,0,0,0,1,1,1,0,2,2,2,2,0,3,3,3,3,0,4,0,5,0,6,6,6,6,7,7,7,7,7,7,7,8,8,8,8,8,8,8,9,9,9,9,9,9,9,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,7,7,7,8,8,8,9,8,8,8,1,2,3,1,2,3,4,6,1,1,2,2,3,3,4,4,9,5,5,7,8,9,1,2,3,4,5,6,8,8,8,8,8,8,8,8,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,1,1,1,2,2,4,4,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],"f":[null,null,null,null,null,null,[[["socketaddr",4]],["domain",3]],null,null,null,null,null,null,null,null,null,null,null,[[],["bool",15]],null,[[],["maybeuninitslice",3]],null,[[],["tcpkeepalive",3]],[[["duration",3]]],[[["duration",3]]],[[["u32",15]]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["socketaddr",4]],["sockaddr",3]],[[["socketaddrv4",3]],["sockaddr",3]],[[["socketaddrv6",3]],["sockaddr",3]],[[["tcpstream",3]],["socket",3]],[[["tcplistener",3]],["socket",3]],[[["udpsocket",3]],["socket",3]],[[]],[[["unixstream",3]],["socket",3]],[[["unixlistener",3]],["socket",3]],[[["unixdatagram",3]],["socket",3]],[[["c_int",6]],["domain",3]],[[["c_int",6]],["type",3]],[[["c_int",6]],["protocol",3]],[[],["domain",3]],[[],["type",3]],[[],["protocol",3]],[[],["recvflags",3]],[[],["tcpkeepalive",3]],[[["domain",3]],["bool",15]],[[["domain",3]],["bool",15]],[[["type",3]],["bool",15]],[[["type",3]],["bool",15]],[[["protocol",3]],["bool",15]],[[["protocol",3]],["bool",15]],[[["recvflags",3]],["bool",15]],[[["recvflags",3]],["bool",15]],[[]],[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[],["result",6]],[[],["c_int",6]],[[["c_int",6]],["socket",3]],[[],["c_int",6]],[[["socklen_t",6],["sockaddr_storage",3]],["sockaddr",3]],[[],["result",6]],[[],["sa_family_t",6]],[[],["socklen_t",6]],[[]],[[],[["option",4],["socketaddr",4]]],[[],[["socketaddrv4",3],["option",4]]],[[],[["socketaddrv6",3],["option",4]]],[[["domain",3],["option",4],["protocol",3],["type",3]],[["result",6],["socket",3]]],[[["domain",3],["option",4],["protocol",3],["type",3]],[["result",6],["socket",3]]],[[["domain",3],["option",4],["protocol",3],["type",3]],["result",6]],[[["domain",3],["option",4],["protocol",3],["type",3]],["result",6]],[[["sockaddr",3]],["result",6]],[[["sockaddr",3]],["result",6]],[[["duration",3],["sockaddr",3]],["result",6]],[[["c_int",6]],["result",6]],[[],["result",6]],[[],["result",6]],[[],[["result",6],["sockaddr",3]]],[[],[["result",6],["sockaddr",3]]],[[],[["result",6],["type",3]]],[[],[["result",6],["socket",3]]],[[["bool",15]],["result",6]],[[["shutdown",4]],["result",6]],[[],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[["c_int",6]],[["usize",15],["result",6]]],[[],["result",6]],[[["c_int",6]],["result",6]],[[],[["usize",15],["result",6]]],[[],["result",6]],[[["c_int",6]],["result",6]],[[],["result",6]],[[["c_int",6]],["result",6]],[[],["result",6]],[[],[["usize",15],["result",6]]],[[["c_int",6]],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[["c_int",6]],[["usize",15],["result",6]]],[[],[["usize",15],["result",6]]],[[["sockaddr",3]],[["usize",15],["result",6]]],[[["c_int",6],["sockaddr",3]],[["usize",15],["result",6]]],[[["sockaddr",3]],[["usize",15],["result",6]]],[[["c_int",6],["sockaddr",3]],[["usize",15],["result",6]]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["result",6],["option",4]]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["option",4],["result",6]]],[[["duration",3],["option",4]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["usize",15],["result",6]]],[[["usize",15]],["result",6]],[[],[["option",4],["result",6]]],[[["duration",3],["option",4]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["usize",15],["result",6]]],[[["usize",15]],["result",6]],[[],[["option",4],["result",6]]],[[["duration",3],["option",4]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[["ipv4addr",3]],["result",6]],[[["ipv4addr",3]],["result",6]],[[],[["result",6],["ipv4addr",3]]],[[["ipv4addr",3]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[["u32",15],["ipv6addr",3]],["result",6]],[[["u32",15],["ipv6addr",3]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["result",6],["duration",3]]],[[],[["result",6],["duration",3]]],[[],[["u32",15],["result",6]]],[[["tcpkeepalive",3]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],null,null,null,[[],["type",3]],[[],["type",3]],[[],["bool",15]],[[],["bool",15]],[[],[["result",6],["sockaddr",3]]],[[["u32",15]],[["result",6],["sockaddr",3]]],[[],["option",4]],[[["c_int",6]],["result",6]],[[["bool",15]],["result",6]],[[["bool",15]],["result",6]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["bool",15],["result",6]]],[[],[["result",6],["domain",3]]],[[],[["result",6],["option",4]]],[[],[["u32",15],["result",6]]],[[["u32",15]],["result",6]],[[],[["result",6],["option",4]]],[[["option",4]],["result",6]],[[],[["usize",15],["result",6]]],[[["usize",15]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[],[["bool",15],["result",6]]],[[["bool",15]],["result",6]],[[["usize",15],["option",4],["nonzerousize",3]],[["usize",15],["result",6]]],[[["duration",3],["option",4]],["result",6]],[[],[["option",4],["result",6]]]],"p":[[3,"Domain"],[3,"Type"],[3,"Protocol"],[3,"RecvFlags"],[3,"MaybeUninitSlice"],[3,"TcpKeepalive"],[3,"SockAddr"],[3,"Socket"],[3,"SockRef"]]}\
}');
initSearch(searchIndex);