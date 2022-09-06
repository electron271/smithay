var sourcesIndex = {};
sourcesIndex["calloop"] = {"name":"","dirs":[{"name":"sources","dirs":[{"name":"ping","files":["eventfd.rs"]}],"files":["channel.rs","generic.rs","mod.rs","ping.rs","signals.rs","timer.rs","transient.rs"]},{"name":"sys","files":["epoll.rs","mod.rs"]}],"files":["error.rs","io.rs","lib.rs","loop_logic.rs","macros.rs"]};
sourcesIndex["dbus"] = {"name":"","dirs":[{"name":"arg","files":["array_impl.rs","basic_impl.rs","messageitem.rs","mod.rs","msgarg.rs","variantstruct_impl.rs"]},{"name":"blocking","files":["generated_org_freedesktop_dbus.rs","generated_org_freedesktop_standard_interfaces.rs"]},{"name":"channel","files":["ffichannel.rs"]},{"name":"ffidisp","files":["connection.rs","stdintf.rs","watch.rs"]},{"name":"message","files":["matchrule.rs","parser.rs","signalargs.rs"]}],"files":["blocking.rs","channel.rs","error.rs","ffidisp.rs","filters.rs","lib.rs","message.rs","strings.rs"]};
sourcesIndex["drm"] = {"name":"","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"control","files":["atomic.rs","connector.rs","crtc.rs","dumbbuffer.rs","encoder.rs","framebuffer.rs","mod.rs","plane.rs","property.rs"]}],"files":["lib.rs","util.rs"]};
sourcesIndex["gbm"] = {"name":"","files":["buffer_object.rs","device.rs","lib.rs","surface.rs"]};
sourcesIndex["input"] = {"name":"","dirs":[{"name":"event","dirs":[{"name":"tablet_pad","files":["mode_group.rs"]},{"name":"tablet_tool","files":["tool.rs"]}],"files":["device.rs","gesture.rs","keyboard.rs","pointer.rs","switch.rs","tablet_pad.rs","tablet_tool.rs","touch.rs"]}],"files":["context.rs","device.rs","event.rs","lib.rs","seat.rs"]};
sourcesIndex["nix"] = {"name":"","dirs":[{"name":"mount","files":["linux.rs","mod.rs"]},{"name":"net","files":["if_.rs","mod.rs"]},{"name":"sys","dirs":[{"name":"ioctl","files":["linux.rs","mod.rs"]},{"name":"ptrace","files":["linux.rs","mod.rs"]},{"name":"socket","files":["addr.rs","mod.rs","sockopt.rs"]}],"files":["aio.rs","epoll.rs","eventfd.rs","inotify.rs","memfd.rs","mman.rs","mod.rs","personality.rs","pthread.rs","quota.rs","reboot.rs","resource.rs","select.rs","sendfile.rs","signal.rs","signalfd.rs","stat.rs","statfs.rs","statvfs.rs","sysinfo.rs","termios.rs","time.rs","timer.rs","timerfd.rs","uio.rs","utsname.rs","wait.rs"]}],"files":["dir.rs","env.rs","errno.rs","fcntl.rs","features.rs","ifaddrs.rs","kmod.rs","lib.rs","macros.rs","mqueue.rs","poll.rs","pty.rs","sched.rs","time.rs","ucontext.rs","unistd.rs"]};
sourcesIndex["slog"] = {"name":"","dirs":[{"name":"key","files":["mod.rs","static.rs"]}],"files":["lib.rs"]};
sourcesIndex["smithay"] = {"name":"","dirs":[{"name":"backend","dirs":[{"name":"allocator","dirs":[{"name":"vulkan","files":["format.rs","mod.rs"]}],"files":["dmabuf.rs","dumb.rs","format.rs","gbm.rs","mod.rs","swapchain.rs"]},{"name":"drm","dirs":[{"name":"device","files":["atomic.rs","legacy.rs","mod.rs"]},{"name":"node","files":["constants.rs","mod.rs"]},{"name":"surface","files":["atomic.rs","gbm.rs","legacy.rs","mod.rs"]}],"files":["error.rs","mod.rs","session.rs"]},{"name":"egl","files":["context.rs","device.rs","display.rs","error.rs","ffi.rs","mod.rs","native.rs","surface.rs"]},{"name":"input","files":["mod.rs","tablet.rs"]},{"name":"libinput","files":["mod.rs","tablet.rs"]},{"name":"renderer","dirs":[{"name":"gles2","files":["mod.rs","shaders.rs","version.rs"]},{"name":"multigpu","files":["egl.rs","mod.rs"]}],"files":["mod.rs","utils.rs"]},{"name":"session","dirs":[{"name":"dbus","files":["logind.rs","mod.rs"]}],"files":["auto.rs","direct.rs","mod.rs"]},{"name":"vulkan","files":["inner.rs","mod.rs","phd.rs","version.rs"]},{"name":"winit","files":["input.rs","mod.rs"]},{"name":"x11","files":["buffer.rs","error.rs","extension.rs","input.rs","mod.rs","surface.rs","window_inner.rs"]}],"files":["mod.rs","udev.rs"]},{"name":"desktop","dirs":[{"name":"popup","files":["grab.rs","manager.rs","mod.rs"]},{"name":"space","files":["element.rs","layer.rs","mod.rs","output.rs","popup.rs","window.rs"]}],"files":["layer.rs","mod.rs","utils.rs","window.rs"]},{"name":"input","dirs":[{"name":"keyboard","files":["keymap_file.rs","mod.rs","modifiers_state.rs","xkb_config.rs"]},{"name":"pointer","files":["cursor_image.rs","grab.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"utils","files":["alive_tracker.rs","geometry.rs","ids.rs","mod.rs","serial.rs","signaling.rs","user_data.rs","x11rb.rs"]},{"name":"wayland","dirs":[{"name":"buffer","files":["mod.rs"]},{"name":"compositor","files":["cache.rs","handlers.rs","mod.rs","transaction.rs","tree.rs"]},{"name":"data_device","files":["device.rs","dnd_grab.rs","mod.rs","seat_data.rs","server_dnd_grab.rs","source.rs"]},{"name":"dmabuf","files":["dispatch.rs","mod.rs"]},{"name":"input_method","files":["input_method_handle.rs","input_method_keyboard_grab.rs","input_method_popup_surface.rs","mod.rs"]},{"name":"keyboard_shortcuts_inhibit","files":["dispatch.rs","mod.rs"]},{"name":"output","files":["handlers.rs","mod.rs","xdg.rs"]},{"name":"primary_selection","files":["device.rs","mod.rs","seat_data.rs","source.rs"]},{"name":"seat","files":["keyboard.rs","mod.rs","pointer.rs","touch.rs"]},{"name":"shell","dirs":[{"name":"kde","files":["decoration.rs","handlers.rs","mod.rs"]},{"name":"wlr_layer","files":["handlers.rs","mod.rs","types.rs"]},{"name":"xdg","dirs":[{"name":"handlers","dirs":[{"name":"surface","files":["popup.rs","toplevel.rs"]}],"files":["positioner.rs","surface.rs","wm_base.rs"]}],"files":["decoration.rs","handlers.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"shm","files":["handlers.rs","mod.rs","pool.rs"]},{"name":"tablet_manager","files":["mod.rs","tablet.rs","tablet_seat.rs","tablet_tool.rs"]},{"name":"text_input","files":["mod.rs","text_input_handle.rs"]},{"name":"viewporter","files":["mod.rs"]},{"name":"xdg_activation","files":["dispatch.rs","mod.rs"]}],"files":["mod.rs","socket.rs"]},{"name":"xwayland","files":["mod.rs","x11_sockets.rs","xserver.rs"]}],"files":["lib.rs","output.rs","reexports.rs"]};
sourcesIndex["udev"] = {"name":"","files":["device.rs","enumerator.rs","lib.rs","list.rs","monitor.rs","udev.rs","util.rs"]};
sourcesIndex["wayland_backend"] = {"name":"","dirs":[{"name":"rs","dirs":[{"name":"client_impl","files":["mod.rs"]},{"name":"server_impl","files":["client.rs","common_poll.rs","handle.rs","mod.rs","registry.rs"]}],"files":["client_api.rs","debug.rs","map.rs","mod.rs","server_api.rs","socket.rs","wire.rs"]},{"name":"sys","dirs":[{"name":"client_impl","files":["mod.rs"]}],"files":["client_api.rs","mod.rs"]},{"name":"types","files":["client.rs","mod.rs","server.rs"]}],"files":["core_interfaces.rs","lib.rs","protocol.rs"]};
sourcesIndex["wayland_protocols"] = {"name":"","files":["ext.rs","lib.rs","protocol_macro.rs","wp.rs","xdg.rs"]};
sourcesIndex["wayland_server"] = {"name":"","files":["client.rs","dispatch.rs","display.rs","global.rs","lib.rs","socket.rs"]};
sourcesIndex["winit"] = {"name":"","dirs":[{"name":"platform","files":["mod.rs","run_return.rs","unix.rs"]},{"name":"platform_impl","dirs":[{"name":"linux","dirs":[{"name":"wayland","dirs":[{"name":"event_loop","files":["mod.rs","proxy.rs","sink.rs","state.rs"]},{"name":"seat","dirs":[{"name":"keyboard","files":["handlers.rs","keymap.rs","mod.rs"]},{"name":"pointer","files":["data.rs","handlers.rs","mod.rs"]},{"name":"text_input","files":["handlers.rs","mod.rs"]},{"name":"touch","files":["handlers.rs","mod.rs"]}],"files":["mod.rs"]},{"name":"window","files":["mod.rs","shim.rs"]}],"files":["env.rs","mod.rs","output.rs"]},{"name":"x11","dirs":[{"name":"ime","files":["callbacks.rs","context.rs","inner.rs","input_method.rs","mod.rs"]},{"name":"util","files":["atom.rs","client_msg.rs","cursor.rs","format.rs","geometry.rs","hint.rs","icon.rs","input.rs","keys.rs","memory.rs","mod.rs","modifiers.rs","randr.rs","window_property.rs","wm.rs"]}],"files":["dnd.rs","event_processor.rs","events.rs","ffi.rs","mod.rs","monitor.rs","window.rs","xdisplay.rs"]}],"files":["mod.rs"]}],"files":["mod.rs"]}],"files":["dpi.rs","error.rs","event.rs","event_loop.rs","icon.rs","lib.rs","monitor.rs","window.rs"]};
sourcesIndex["x11rb"] = {"name":"","dirs":[{"name":"protocol","files":["bigreq.rs","dri3.rs","ge.rs","mod.rs","present.rs","randr.rs","render.rs","shape.rs","sync.rs","xc_misc.rs","xfixes.rs","xproto.rs"]},{"name":"rust_connection","files":["mod.rs","packet_reader.rs","stream.rs","write_buffer.rs"]}],"files":["connection.rs","cookie.rs","errors.rs","event_loop_integration.rs","extension_manager.rs","lib.rs","properties.rs","utils.rs","wrapper.rs","x11_utils.rs"]};
createSourceSidebar();