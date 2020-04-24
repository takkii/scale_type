function fancyDate(this: Date){
    return `${this.getFullYear()}/${this.getMonth() + 1}/${this.getDate()}`
}

let days: string

days = fancyDate.call(new Date)

console.info(days)

// OutPuts
// 2020/4/24
