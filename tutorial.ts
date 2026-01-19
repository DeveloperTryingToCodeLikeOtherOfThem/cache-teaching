namespace cache{
//% help=github:DeveloperTryingToCodeLikeOtherOfThem/cache-teaching/docs/tutorial
  //% blockId=get_cached block="get cached"
  export function getCached(op = 16): Buffer {
     return Buffer.create(op)
  }
}