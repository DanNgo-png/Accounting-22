// Defines the three dimensions of the COSO framework.
const COSO_COMPONENTS = ["Control Environment", "Risk Assessment", "Control Activities", "Information & Communication", "Monitoring Activities"];
const COSO_OBJECTIVES = ["Operations", "Reporting", "Compliance"];
const COSO_LEVELS = ["Entity Level", "Division", "Operating Unit", "Function"];

/**
 * Represents the base COSO Cube, defining the context (objectives and organizational levels)
 * in which the internal control components operate.
 */
class COSO_Cube {
    constructor(objectives, levels) {
        this.objectives = objectives || COSO_OBJECTIVES;
        this.levels = levels || COSO_LEVELS;
        this.componentName = "Base Cube";
    }

    /**
     * Describes the application of the component across the cube's dimensions.
     */
    describe() {
        return `${this.componentName} applies to objectives [${this.objectives.join(', ')}] across organizational levels [${this.levels.join(', ')}].`;
    }
}

/**
 * Component 1: The Control Environment (Principles 1-5)
 * The set of standards, processes, and structures that provide the basis for carrying out internal control.
 */
class Control_Environment extends COSO_Cube {
    constructor(objectives, levels) {
        super(objectives, levels);
        this.componentName = COSO_COMPONENTS[0];
        this.principles = {
            1: "The organization demonstrates a commitment to integrity and ethical values.",
            2: "The board of directors demonstrates independence from management and exercises oversight of the development and performance of internal control.",
            3: "Management establishes, with board oversight, structures, reporting lines, and appropriate authorities and responsibilities in the pursuit of objectives.",
            4: "The organization demonstrates a commitment to attract, develop, and retain competent individuals in alignment with objectives.",
            5: "The organization holds individuals accountable for their internal control responsibilities in the pursuit of objectives."
        };
    }
}

/**
 * Component 2: Risk Assessment (Principles 6-9)
 * A dynamic and iterative process for identifying and assessing risks to the achievement of objectives.
 */
class Risk_Assessment extends COSO_Cube {
    constructor(objectives, levels) {
        super(objectives, levels);
        this.componentName = COSO_COMPONENTS[1];
        this.principles = {
            6: "The organization specifies objectives with sufficient clarity to enable the identification and assessment of risks relating to objectives.",
            7: "The organization identifies risks to the achievement of its objectives across the entity and analyzes risks as a basis for determining how the risks should be managed.",
            8: "The organization considers the potential for fraud in assessing risks to the achievement of objectives.",
            9: "The organization identifies and assesses changes that could significantly impact the system of internal control."
        };
    }
}

/**
 * Component 3: Control Activities (Principles 10-12)
 * Actions established through policies and procedures to help ensure that management’s directives to mitigate risks are carried out.
 */
class Control_Activities extends COSO_Cube {
    constructor(objectives, levels) {
        super(objectives, levels);
        this.componentName = COSO_COMPONENTS[2];
        this.principles = {
            10: "The organization selects and develops control activities that contribute to the mitigation of risks to the achievement of objectives to acceptable levels.",
            11: "The organization selects and develops general control activities over technology to support the achievement of objectives.",
            12: "The organization deploys control activities through policies that establish what is expected and procedures that put policies into action."
        };
    }
}

/**
 * Component 4: Information & Communication (Principles 13-15)
 * The continual, iterative process of providing, sharing, and obtaining necessary information.
 */
class Information_and_Communication extends COSO_Cube {
    constructor(objectives, levels) {
        super(objectives, levels);
        this.componentName = COSO_COMPONENTS[3];
        this.principles = {
            13: "The organization obtains or generates and uses relevant, quality information to support the functioning of internal control.",
            14: "The organization internally communicates information, including objectives and responsibilities for internal control, necessary to support the functioning of internal control.",
            15: "The organization communicates with external parties regarding matters affecting the functioning of internal control."
        };
    }
}

/**
 * Component 5: Monitoring Activities (Principles 16-17)
 * Ongoing evaluations, separate evaluations, or some combination of the two used to ascertain whether each of the five components of internal control is present and functioning.
 */
class Monitoring_Activities extends COSO_Cube {
    constructor(objectives, levels) {
        super(objectives, levels);
        this.componentName = COSO_COMPONENTS[4];
        this.principles = {
            16: "The organization selects, develops, and performs ongoing and/or separate evaluations to ascertain whether the components of internal control are present and functioning.",
            17: "The organization evaluates and communicates internal control deficiencies in a timely manner to those parties responsible for taking corrective action, including senior management and the board of directors, as appropriate."
        };
    }
}