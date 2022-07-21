'use strcit';

class NewFamilyMember {
    #firstName;
    #secondName;
    #gender;
    #photoLink;
    #personDescription;
    layer;
    #connections;
    constructor(firstName, secondName, gender, layer, connections, photoLink = '', pD = '') {
        this.#firstName = firstName;
        this.#secondName = secondName;
        this.#gender = gender;
        this.#photoLink = photoLink;
        this.#personDescription = pD
        this.layer = layer;
        this.#connections = connections;
    }
    #calculatePositionLeft() {
        const xPosition = primeCoordinate;
        return xPosition;
    }
    #calculatePositionTop() {
        const yPosition = primeCoordinate;
        return yPosition;
    }

    addPerson() {
        $treeWrapper.append(
            $('<div/>')
                .attr('id', uniqueId())
                .attr('class', 'person')
                .attr('data-gender', this.#gender)
                .css({
                    left: this.#calculatePositionLeft(),
                    top: this.#calculatePositionTop()
                }).append(
                    $('<img/>')
                        .attr('url', this.#photoLink)
                        .attr('class', 'person__image'),
                    $('<span/>')
                        .html(this.#firstName)
                        .attr('class', 'person__name'),
                    $('<span/>')
                        .html(this.#secondName)
                        .attr('class', 'person__surName')
                )
        )
    }
}