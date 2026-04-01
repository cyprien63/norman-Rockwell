/**
 * ═══════════════════════════════════════════════════════════
 *   FICHIER DE CONTENU - MODIFIEZ ICI POUR CHANGER LES TEXTES
 * ═══════════════════════════════════════════════════════════
 *
 *  Ce fichier centralise TOUS les textes du site.
 *  Pour modifier un texte, trouvez la clé correspondante
 *  et changez sa valeur. Ne modifiez pas index.html ni script.js.
 *
 *  Les textes supportent le HTML basique : <em>, <strong>, <br>, etc.
 */

const SITE_CONTENT = {

    // ──────────────────────────────────────────────────────────
    //   EN-TÊTE (header)
    // ──────────────────────────────────────────────────────────
    header: {
        title: "Girl at a Mirror",
        subtitle: "Norman Rockwell · 1954",
    },

    // ──────────────────────────────────────────────────────────
    //   INTRODUCTION
    // ──────────────────────────────────────────────────────────
    introduction: {
        heading: "Introduction :",
        // Laissez vide ("") si vous n'avez pas encore de texte
        text: "",
    },

    // ──────────────────────────────────────────────────────────
    //   OBSERVATION
    // ──────────────────────────────────────────────────────────
    observation: {
        heading: "Observation",
        items: [
            {
                subheading: "a. study the painting carefully",
                text: `we can see a miror and a little girl who as a magazine
                on her legs, she is sitting on a red box, there is a broom, a
                lipstick, a brush next to her next to the miror there is a doll
                it was thrown away. The doll have a dress aged.`,

            },
            {
                subheading: "b. Describe the girl and her surroundings using the vocabulary provided in the toolbox (girlhood, reflection, intrigued, etc.).",
                text: `the little girl is intriguet by her reflexion, because she
                is trying to do the same hair cut that she see in the magazine and
                tried to her self. the girl want look like the woman in the magazine.
                it like a trend.`,
            },
        ],
    },

    // ──────────────────────────────────────────────────────────
    //   ANALYSIS
    // ──────────────────────────────────────────────────────────
    analysis: {
        heading: "Analysis",
        items: [
            {
                subheading: "a. What do you think the girl is thinking or feeling as she looks in the mirror ?",
                text: `the girl is curious about her reflexion, she is feeling very sad
                beacause she dindn't make the samehair cut that is in the magazine.
                she have her head in her hand`,
            },
            {
                subheading: "b. How do the background and the way she is sitting or standing help tell the story of the painting?",
                text: ` she is maybe trying to look like the picture on her legs and
                have the same haircut with the brush next to her`,
            },
            {
                subheading: "c. What themes does this painting explore (identity, transition, self-awareness) ?",
                text: `For me the little girl is trying to look like the woman in
                the magazine. she is an a idol`,
            },
        ],
    },

    // ──────────────────────────────────────────────────────────
    //   DISCUSSION
    // ──────────────────────────────────────────────────────────
    discussion: {
        heading: "Discussion",
        items: [
            {
                subheading: "a. How does this painting portray the image of a young woman ?",
                text: `it a portray of a girl who is worry about her look, this painting
                is the image of a young woman beacause for me the woman we see in the
                magazine is the little girl but older. Or because she is doing her own
                things that she want to do.`,
            },
            {
                subheading: "b. How does this portrayal differ from or align with modern depictions of young women ?",
                text: `today the girls use social media for compare themselves to other
                while at the time the girls compare with magazine. Todays girl are more
                likely to compare themselves to other than back in the days then it was
                only one mode and everyone should respected it to look cool or just
                with a identity, if you had something that was orginal everybody
                would make fun of you for being diffrent`,
            },
            {
                subheading: "c. What can we learn about societal expectations from this artwork ?",
                text: `We can learn that in our society that the girls  haves a "dress code"
                for be importante, and that the "dress code" represent how you are, if you
                are famous, or anythings else. The dress code is for the little girl the
                thing that is th most important for her.`,
            },
        ],
    },

    // ──────────────────────────────────────────────────────────
    //   EXPRESSION CRÉATIVE
    // ──────────────────────────────────────────────────────────
    creativeExpression: {
        heading: "Creative Expression",

        story: {
            subheading: "Short Story",
            paragraphs: [
                `In the painting, the girl sits on a red stoul. She is in front a big mirror
                and she look her reflection.On her knees, there is a magazine with a  actress.
                We can see that she compares herself with the woman in the magazine. in the
                room, there is a doll throw on the floor`,

                `She holds her face with her hands, comparing herself to the magazine photograph
                as if she is transitioning from child to adult. Back in the days looking just
                like a celebrity means that you had a personality, that you must have. The
                little girl seems depresed because she don't really like the hair cut but she
                as to do it or she will be moque by the other girls or childrens for being
                diffrent than everybody. So the little girl is filling lonely with the hair
                cut that she has, beacause for me she don't like it. The self reflection that
                you have is telling a lot of things about you if you have dirty clothes than the
                other would thinks that you are dirty or poor just by that, so in the past and
                even today the self reflection is something to be worried about. The doll is
                on the floor and it seems like a the little girl is throwing away her past and
                start a new "life" as a young woman. The little is voluntary passing her
                childish to her old age. The doll seems old because she might have it since
                when she was born. The little girl is trying to age faster with th doll away
                from her. She is trying to seem older just with that action.`,
            ],
        },

        artworks: [
            {
                subheading: "Piece of Art",
                imageSrc: "fin prompt1.png",
                imageAlt: "Shattered Reflection – Prompt 1",
                promptLabel: "PROMPT :",
                prompt: `"Create an illustration inspired by the style of <em>Girl at a Mirror</em>.
                         The composition should depict the same girl at multiple stages of her life
                         (childhood, adolescence, and adulthood), either through reflections,
                         overlapping figures, or a visual progression within the same scene.
                         The artwork must clearly convey the transformation and contrast between
                         innocence and maturity, highlighting emotional and physical changes over time.
                         While keeping the essence of the original painting's composition and symbolism,
                         reinterpret it with a modern illustration style (clean lines, contemporary
                         shading, and updated color palette). Pay special attention to lighting, facial
                         expressions, and posture to emphasize the theme of self-reflection and identity."`,
            },
            {
                subheading: "Piece of Art",
                imageSrc: "fin prompt2.png",
                imageAlt: "Shattered Reflection – Prompt 2",
                promptLabel: "PROMPT :",
                prompt: `"Change the style to a slightly more modern, hand-drawn look."`,
            },
        ],
    },

    // ──────────────────────────────────────────────────────────
    //   SECTION TÉLÉCHARGEMENT
    // ──────────────────────────────────────────────────────────
    downloads: {
        heading: "Download Images",
        buttons: [
            {
                label: "Original Artwork",
                href: "Norman-Rockwell-Girl-at-Mirror-1954-1.jpg",
                filename: "Original_Norman_Rockwell.jpg",
            },
            {
                label: "Generated Art 1",
                href: "fin%20prompt1.png",
                filename: "Generated_Art_1.png",
            },
            {
                label: "Generated Art 2",
                href: "fin%20prompt2.png",
                filename: "Generated_Art_2.png",
            },
        ],
    },

    // ──────────────────────────────────────────────────────────
    //   PIED DE PAGE (footer)
    // ──────────────────────────────────────────────────────────
    footer: {
        creditsTitle: "Created by :",
        authors: [
            "Noa Garcia",
            "Thimeo Michi",
            "Léo Tesutud",
            "Cyprien Pisicchio",
        ],
        hostingInfo: "Hosted on GitHub Pages © 2026",
        legalLabel: "Mentions Légales",
        legalHref: "mentions-legales.html",
    },

};
