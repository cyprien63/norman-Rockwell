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
        title:    "Girl at a Mirror",
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
                subheading: "a. Description of the scene",
                text: `We can see a mirror and a little girl who has a magazine on her legs.
                       She is sitting on a red box; there is a broom, a lipstick, and a brush
                       next to her. Next to the mirror there is a doll.`,
            },
            {
                subheading: "b. The girl and her surroundings",
                text: `The little girl is intrigued by her reflection, because she is trying
                       to do the same hairstyle that she sees in the magazine and tried to
                       recreate it herself.`,
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
                subheading: "a. Thoughts and emotions of the girl",
                text: `The girl is curious about her reflection. She is feeling very sad
                       because she didn't manage to replicate the hairstyle shown in
                       the magazine.`,
            },
            {
                subheading: "b. The environment and storytelling",
                text: `She is maybe trying to look like the picture on her lap and achieve
                       the same hairstyle using the brush next to her.`,
            },
            {
                subheading: "c. Explored themes",
                text: `For me, the little girl is trying to look like the woman in the magazine,
                       reflecting a deep desire to conform to an ideal of beauty.`,
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
                subheading: "a. Portrayal of a young woman",
                text: `It is a portrait of a girl who is worried about her looks. This painting
                       is the image of a young woman — for me, the woman we see in the magazine
                       is the little girl but older, or it represents what she wants to become.`,
            },
            {
                subheading: "b. Comparison with modern representations",
                text: `Today, girls use social media to compare themselves to others, while back
                       then girls compared themselves to magazine models. Today's girls are more
                       likely to compare themselves to others than in the past; there was only
                       one "look" that everyone was expected to follow, and being different
                       meant being mocked.`,
            },
            {
                subheading: "c. Societal expectations",
                text: `We can learn that in our society, girls face a kind of "dress code" to
                       be considered important, and that this code represents who you are —
                       whether you are famous, or anything else. For the little girl, this
                       dress code is the most important thing in the world.`,
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
                `In the painting, the girl sits on a red stool. She is in front of a big
                 mirror and looks at her reflection. On her knees, there is a magazine
                 featuring an actress. We can see that she compares herself with the
                 woman in the magazine.`,

                `She holds her face with her hands, comparing herself to the magazine
                 photograph as if she is transitioning from child to adult. Back in the
                 day, looking just like a celebrity meant having a personality you were
                 supposed to embody. The little girl seems depressed because she doesn't
                 really like the hairstyle, but she feels she has to do it — or she will
                 be mocked by the other girls for being different. So the little girl
                 feels lonely with the hairstyle she has, because she doesn't truly like
                 it. The self-reflection you project tells a lot about you: if you have
                 dirty clothes, others think you are dirty or poor. So in the past, and
                 even today, self-presentation is something to be worried about.`,
            ],
        },

        artworks: [
            {
                subheading: "Piece of Art",
                imageSrc:   "fin prompt1.png",
                imageAlt:   "Shattered Reflection – Prompt 1",
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
                imageSrc:   "fin prompt2.png",
                imageAlt:   "Shattered Reflection – Prompt 2",
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
                label:    "Original Artwork",
                href:     "Norman-Rockwell-Girl-at-Mirror-1954-1.jpg",
                filename: "Original_Norman_Rockwell.jpg",
            },
            {
                label:    "Generated Art 1",
                href:     "fin%20prompt1.png",
                filename: "Generated_Art_1.png",
            },
            {
                label:    "Generated Art 2",
                href:     "fin%20prompt2.png",
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
        hostingInfo:  "Hosted on GitHub Pages © 2026",
        legalLabel:   "Mentions Légales",
        legalHref:    "mentions-legales.html",
    },

};
