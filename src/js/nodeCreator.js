'use strcit';

class NewFamilyMember {
    #firstName;
    #secondName;
    #gender;
    #photoLink;
    #personDescription;
    layer;
    UPID;
    #connections;
    constructor(firstName, secondName, gender, layer, connections, photoLink, pD, upid) {
        this.#firstName = firstName;
        this.#secondName = secondName;
        this.#gender = gender;
        this.#photoLink = photoLink;
        this.#personDescription = pD;
        if(upid != undefined) this.UPID = upid;
        else this.UPID = this.#uniqueId();
        this.layer = layer;
        this.#connections = connections;
    }
    #calculatePositionLeft() {
        const xPosition = primeCoordinate + screenWidth / 2;
        return xPosition;
    }
    #calculatePositionTop() {
        const yPosition = primeCoordinate + screenHeight / 2;
        return yPosition;
    }

    #uniqueId() {
        let newId = Math.floor(Math.random() * 100000)
            .toString()
            .split('')
            .map(x => String.fromCharCode(97 + parseInt(x)))
            .join('');
        return newId;
    }
    

    addPerson() {
        $treeWrapper.append(
            $('<div/>')
                .attr('id', this.UPID)
                .attr('class', 'person')
                .attr('data-gender', this.#gender)
                .css({
                    left: this.#calculatePositionLeft(),
                    top: this.#calculatePositionTop()
                }).append(
                    $('<img/>')
                        .attr('src', this.#photoLink)
                        .attr('class', 'person__image'),
                    $('<div/>')
                        .attr('class', 'person-initials').append(
                            $('<span/>')
                                .html(this.#firstName)
                                .attr('class', 'person-initials__name'),
                            $('<span/>')
                                .html(this.#secondName)
                                .attr('class', 'person-initials__surName')
                        )
                )
        )
    }
    generatObjSave() {
        return {
            firstName: this.#firstName || '',
            secondName: this.#secondName || '',
            gender: this.#gender || '',
            photoLink: this.#photoLink,
            personDescription: this.#personDescription,
            layer: this.layer,
            connections: this.#connections || '',
            upid: this.UPID
        }
    }
}