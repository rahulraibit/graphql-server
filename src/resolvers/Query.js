async function feed(parent, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { url_contains: args.filter },
        ],
    } : {}
    const links = await context.prisma.links({
        where,
        skip: args.skip,
        first: args.first,
        orderBy: args.orderBy,
    })
    // Have to see how to use links to calculate the length 
    // without using 
    const count = links.length;
    return {
        links,
        count,
    }
}

module.exports = {
    feed,
}