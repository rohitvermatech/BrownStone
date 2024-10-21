//fallback
function FALLBACK() {
    return {
        text: "I'm not sure how to respond to that. Please choose an option.",
        buttons: [
            { payload: "DISCRIMINATION", title: "Discrimination" },
            { payload: "INTERSECTIONALITY", title: "Intersectionality" },
            { payload: "NEURODIVERSITY", title: "Neurodiversity" },
            { payload: "RACISM", title: "Racism" },
            { payload: "SOCIAL MOBILITY", title: "Social Mobility" },
            { payload: "MONEY & PAY", title: "Money & Pay" },
        ],
        showInput: false,
        inputPrompt: "Select an option"
    }
};

//Restart
function RESTART() {
    return [
        { text: "Hello, welcome to Brownstone EDI Guru." },
        { text: "We are here to advise and support you to ensure equity, diversity, and inclusion (EDI) policies work for you." },
        {
            text: "Can you tell us your name and email id? (All our conversations are confidential and are not shared with any third party)",
            buttons: [
                { payload: "NAME EMAIL CONTACT", title: "Share Name, Email & Contact" },
                { payload: "ANONYMOUS", title: "Prefers anonymous" }
            ],
            showInput: false,
            inputPrompt: ""
        }
    ]
};

//Main Menu
function MAIN_MENU() {
    return [
        {
            text: "",
            buttons: [
                { payload: "DISCRIMINATION", title: "Discrimination" },
                { payload: "INTERSECTIONALITY", title: "Intersectionality" },
                { payload: "NEURODIVERSITY", title: "Neurodiversity" },
                { payload: "RACISM", title: "Racism" },
                { payload: "SOCIAL MOBILITY", title: "Social Mobility" },
                { payload: "MONEY & PAY", title: "Money & Pay" },
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
};

//Main Menu Flow
function handle_DISCRIMINATION() {
    return [
        {
            text: "The Equality Act 2010 legally protects people from discrimination in the workplace and in wider society."
        },
        {
            text: "It replaced previous anti-discrimination laws with a single Act, making the law easier to understand and strengthening protection in some situations."
        },
        {
            text: "It sets out the different ways in which it's unlawful to treat someone Through nin protected charactersitics.",
            buttons: [
                { payload: "TYPES OF DISCRIMINATION", title: "Different types of discrimination?" },
                { payload: "PROTECTED AT WORK", title: "How am I protected at work?" },
                { payload: "PROTECTION CHARACTERSITICS", title: "Protection charactersitics?" },
                { payload: "MAIN MENU", title: "Back to Previous Menu" },
                { payload: "RESTART", title: "Restart Conversation" },
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
};

function handle_INTERSECTIONALITY() { }

function handle_NEURODIVERSITY() { }

function handle_RACISM() { }

function handle_SOCIAL_MOBILITY() { }

function handle_MONEY_PAY() { }

//DISCRIMINATION Menu
function DISCRIMINATION_MENU() {
    return {
        text: "",
        buttons: [
            { payload: "TYPES OF DISCRIMINATION", title: "Different types of discrimination?" },
            { payload: "PROTECTION CHARACTERSITICS", title: "Protection charactersitics?" },
            { payload: "MAIN MENU", title: "Back to Previous Menu" },
            { payload: "RESTART", title: "Restart Conversation" },
        ],
        showInput: false,
        nputPrompt: "Select an option"
    }
};

//DISCRIMINATION flow
function handle_TYPES_OF_DISCRIMINATION() {
    return [
        {
            text: "direct discrimination - treating someone with a protected characteristic less favourably than others",
        },
        {
            text: "indirect discrimination - putting rules or arrangements in place that apply to everyone, but that put someone with a protected characteristic at an unfair disadvantage",
        },
        {
            text: "harassment - unwanted behaviour linked to a protected characteristic that violates someone’s dignity or creates an offensive environment for them",
        },
        {
            text: "victimisation - treating someone unfairly because they’ve complained about discrimination or harassment",
        },
        {
            text: "",
            buttons: [
                { payload: "PROTECTED AT WORK", title: "How am I protected at work?" },
                { payload: "PROTECTION CHARACTERSITICS", title: "Protection charactersitics?" },
                { payload: "MAIN MENU", title: "Back to Previous Menu" },
                { payload: "RESTART", title: "Restart Conversation" },
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
};

function handle_PROTECTED_AT_WORK() {
    return [
        {
            text: "<b>The law protects you against discrimination at work, including:</b>",
        },
        {
            text: "dismissal, employment terms & conditions, pay & benefits, promotion and transfer opportunities, training, recruitment, redundancy.",
        },
        {
            text: "",
            buttons: [
                { payload: "TYPES OF DISCRIMINATION", title: "Different types of discrimination?" },
                { payload: "PROTECTION CHARACTERSITICS", title: "Protection charactersitics?" },
                { payload: "MAIN MENU", title: "Back to Previous Menu" },
                { payload: "RESTART", title: "Restart Conversation" },
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
};

function handle_PROTECTION_CHARACTERSITICS() {
    return [
        {
            text: "",
            buttons: [
                { payload: "AGE", title: "Age" },
                { payload: "GENDER REASSIGNMENT", title: "Gender reassignment" },
                { payload: "MARRIED OR PARTNERSHIP", title: "Being married or in a civil partnership" },
                { payload: "BEING PREGNANT", title: "Being pregnant" },
                { payload: "RACE", title: "Race including colour, nationality, ethnic or national origin" },
                { payload: "RELIGION", title: "Religion or belief" },
                { payload: "SEX", title: "Sex" },
                { payload: "SEXUAL ORIENTATION", title: "Sexual orientation" },
                { payload: "DISABILITY", title: "Disability" },
                { payload: "DISCRIMINATION MENU", title: "Back to Previous Menu" },
                { payload: "RESTART", title: "Restart Conversation" },
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
};

//PROTECTION_CHARACTERSITICS

function handle_AGE() {
    return [
        {
            text: "Under UK law, age discrimination is prohibited by the Equality Act 2010, which protects employees from being treated unfairly due to their age. If an older employee is passed over for a promotion in favor of a younger colleague based on assumptions about age, such as being 'outdated,' this could amount to direct age discrimination."
        },
        {
            text: "Here are some initial solutions the older employee could consider:"
        },
        {
            text: "<b>1. Raise an Informal Grievance</b>"
        },
        {
            text: "The employee can first try to resolve the issue internally by raising an informal concern with their manager or HR department. It may be that the company is unaware of the discriminatory nature of their decision, and this could prompt a review or correction."
        },
        {
            text: "<b>2. Submit a Formal Grievance</b>"
        },
        {
            text: "If an informal discussion does not resolve the issue, the employee can escalate by filing a formal grievance with the company. This gives the company an opportunity to formally investigate the decision-making process behind the promotion."
        },
        {
            text: "<b>3. Request Justification from the Employer</b>"
        },
        {
            text: "The company may argue that favoring a younger employee was based on objective criteria, such as innovation or adaptability. Under UK law, if an employer can objectively justify its decision (known as a 'proportionate means of achieving a legitimate aim'), it may not be unlawful. The employee could request clear evidence of how the decision was made and whether the chosen candidate truly met these criteria."
        },
        {
            text: "<b>4. Seek Legal Advice</b>"
        },
        {
            text: "If internal procedures do not lead to a satisfactory resolution, the employee can seek legal advice from a solicitor specializing in employment law. The employee can also consult organizations such as ACAS (Advisory, Conciliation and Arbitration Service), which offers free, impartial advice on employment disputes."
        },
        {
            text: "<b>5. Consider ACAS Early Conciliation</b>"
        },
        {
            text: "Before taking the matter to an employment tribunal, the employee is required to notify ACAS, which offers a service called Early Conciliation. This provides an opportunity to settle the dispute without going to tribunal."
        },
        {
            text: "<b>6. Employment Tribunal</b>"
        },
        {
            text: "If all else fails, the employee may lodge a claim with the Employment Tribunal for age discrimination. Claims must typically be made within three months less one day from the date of the discriminatory act."
        },
        {
            text: "In the meantime, the company should ensure that any promotion decision is based on merit and not biased against employees based on their age, offering equal opportunities for development and advancement."
        },
        {

            text: "",
            buttons: [
                { payload: "PROTECTION CHARACTERSITICS", title: "Back to Previous Menu" },
                { payload: "RESTART", title: "Restart Conversation" },
                { payload: "CONNECT_GURU", title: "Connect with a Guru" }
            ],
            showInput: false,
            nputPrompt: "Select an option"
        }
    ]
}

function handle_GENDER_REASSIGNMENT() {
    return [
    ]
}

function handle_MARRIED_OR_PARTNERSHIP() {
    return [

    ]
}

function handle_BEING_PREGNANT() {
    return [

    ]
}

function handle_RACE() {
    return [
    ]
}

function handle_RELIGION() {
    return [

    ]
}

function handle_SEX() {
    return [

    ]
}

function handle_SEXUAL_ORIENTATION() {
    return [

    ]
}

function handle_DISABILITY() {

}

function handle_() { }
function handle_() { }
function handle_() { }

module.exports = {
    FALLBACK,
    RESTART,
    MAIN_MENU,
    handle_DISCRIMINATION,
    handle_INTERSECTIONALITY,
    handle_NEURODIVERSITY,
    handle_RACISM,
    handle_SOCIAL_MOBILITY,
    handle_MONEY_PAY,

    DISCRIMINATION_MENU,
    handle_TYPES_OF_DISCRIMINATION,
    handle_PROTECTED_AT_WORK,
    handle_PROTECTION_CHARACTERSITICS,

    handle_AGE,
    handle_GENDER_REASSIGNMENT,
    handle_MARRIED_OR_PARTNERSHIP,
    handle_BEING_PREGNANT,
    handle_RACE,
    handle_RELIGION,
    handle_SEX,
    handle_SEXUAL_ORIENTATION,
    handle_DISABILITY
};