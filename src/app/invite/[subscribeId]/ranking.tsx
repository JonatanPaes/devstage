import Image from 'next/image'

import { getRanking } from '@/http/api'

import medalCooper from '../../../assets/medal-cooper.svg'
import medalGold from '../../../assets/medal-gold.svg'
import medalSilver from '../../../assets/medal-silver.svg'

export async function Ranking() {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="font-heading text-xl leading-none font-semibold text-gray-200">
        Ranking de indicações
      </h2>

      <div className="space-y-4">
        {ranking.map((rank, index) => {
          const rankingPosition = index + 1

          return (
            <div
              key={rank.id}
              className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6"
            >
              <span className="text-sm leading-none text-gray-300">
                <span className="font-semibold">{rankingPosition}&ordm;</span> |{' '}
                {rank.name}
              </span>

              <span className="font-heading text-2xl leading-none font-semibold text-gray-200">
                {rank.score}
              </span>

              {rankingPosition === 1 && (
                <Image
                  src={medalGold}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 2 && (
                <Image
                  src={medalSilver}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}

              {rankingPosition === 3 && (
                <Image
                  src={medalCooper}
                  alt=""
                  className="absolute top-0 right-8"
                />
              )}
            </div>
          )
        })}

        {ranking.length === 0 && (
          <p className="text-gray-300">Nenhuma indicação registrada</p>
        )}
      </div>
    </div>
  )
}
