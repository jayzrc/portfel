import { FaDiscord, FaEnvelope, FaGithub, FaSteam } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import type { IconType } from 'react-icons/lib'

type Social = {
  id: number
  ref: string
  icon: IconType
  copyValue?: boolean
  ariaLabel: string
}

export const Socials: readonly Social[] = [
  {
    id: 1,
    ref: 'https://github.com/jayzrc',
    icon: FaGithub,
    ariaLabel: 'GitHub',
  },
  {
    id: 2,
    ref: 'https://steamcommunity.com/id/rev00n',
    icon: FaSteam,
    ariaLabel: 'Steam',
  },
  {
    id: 3,
    ref: 'contact@meowrgh.pl',
    icon: FaEnvelope,
    copyValue: true,
    ariaLabel: 'Email',
  },
  {
    id: 4,
    ref: 'https://www.instagram.com/jak.u.b__/',
    icon: RiInstagramFill,
    ariaLabel: 'Instagram',
  },
  {
    id: 5,
    ref: 'https://discord.gg/pinned',
    icon: FaDiscord,
    copyValue: true,
    ariaLabel: 'Discord',
  },
] as const
