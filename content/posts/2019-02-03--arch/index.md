---
title: Arch from Hell 2
subTitle: n-ary boots ahoy!
category: "tech"
cover: cover.jpg
---
<p align='center'><img src="" alt="Arch"><br>
<font size=2>Arch</font></p>

> <p align="center"><b>Arching it out </b></p>

1. So I had a happy system with Arch Linux, until I needed Windows 10 for some Windows development.
2. Then I installed Windows 10 UEFI with Rufus.
3. Then I had a happy system with Arch Linux and Windows 10.
4. Then I needed a ubuntu based OS for some testing puposes. I decided to triple boot.
5. I went for Zorin OS 12.4 CORE, it's a beautiful distro, you must check it out!
6. I simply installed it on a separate ext4 partition at the end of my HDD (using that `something else` option)

> it *might* have did something to my prior GRUB config of Arch Linux.

7. Arch's GRUB settings loaded on next boot, which had options for Windows and Arch Linux.(no Zorin OS here)
8. Then I went ahead and booted into Arch to run a `grub-mkconfig -o /boot/grub/grub.cfg`, because it didn't know about Zorin OS.
9. After I rebooted the sys, Zorin's GRUB config greeted me. WTH? It didn't have Arch.
10. Then I tried running the same `grub-mkconfig -o /boot/grub/grub.cfg` in Zorin OS.
11. I got options for Arch then, but they didn't work (why? I don't know).
12. I decided I NEED my Arch before anything else!
13. I went ahead and fired off a Live USB.

## SOLUTION
- re-formatted the /dev/sda1 (EFI) partition.
- `arch-chroot`ed into my Arch installation and force-reinstalled all my arch packages by my previous post.(to get linux `img`s in /boot). I could've done it by reinstalling just the firmware too, as <Namarggon> on #archlinux (IRC) suggested.
- ran grub-install and grub-mkconfig commands from my GitHub gist. (ARCH COMMANDS)
- ran genfstab command from my GitHub gist. (kudos to <GreyShade> and <iovec> for helping me out on this one!)

<p align='center'> Hola! I'm back with my Arch Linux and Zorin.</p>

>Now I'm left with putting in some effort to get my Windows 10 back.

<p align='center'> <font size=3> Stay safe and make the internet a healthier place! </font></p>
