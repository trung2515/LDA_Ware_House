export default class Utils {
  static downLoadFile(type: string, data: Uint8Array, fileName: string) {
    var bytes = new Uint8Array(data) // pass your byte response to this constructor
    var blob = new Blob([bytes], { type: type }) // change resultByte to bytes
    var link = document.createElement('a')
    link.href = window.URL.createObjectURL(blob)
    link.download = fileName
    link.click()
  }
  static convertTimeToShift(dateString: string) {
    const date = new Date(dateString)
    if (date.getHours() < 6) return 'CA 3'
    else if (date.getHours() < 14 && date.getHours() > 6) return 'CA 1'
    else return 'CA 2'
  }
  static formatDate(date: Date) {
    var d = date
    var month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear()

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    return [year, month, day].join('-')
  }

  static convertStringToDate(date: string) {
    return new Date(date)
  }

  static _arrayBufferToBase64(buffer: any) {
    var binary = ''
    var bytes = new Uint8Array(buffer)
    var len = bytes.byteLength
    for (var i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary)
  }

  static ab2str(buf: any) {
    let buffer = new Uint8Array(buf)
    return String.fromCharCode.apply(null, buf)
  }
}
