export class TeamService {
  private teamMembers: ITeamMember[];

  constructor() {
    this.teamMembers = [
      {
        email: "gerhard@liip.ch",
        firstName: "Gerhard",
        image: "https://liip.rokka.io/www_liipersmall_3/c757575b4e6d304888b9e8aad4baf37234127126.jpeg",
        job: [
          "Co-Founder"
        ],
        lastName: "Andrey"
      },
      {
        email: "laurent.prodon@liip.ch",
        firstName: "Laurent",
        image: "https://liip.rokka.io/www_liipersmall_3/b3171141ae81f704944b3dd416b4b2f16fb9935e.jpeg",
        job: [
          "Agile Coach",
          "Holacracy Coach"
        ],
        lastName: "Prodon"
      },
      {
        email: "benoit.pointet@liip.ch",
        firstName: "Benoît",
        image: "https://liip.rokka.io/www_liipersmall_3/f96da60614389cf611449ae88ff79f06ea14bca9.jpeg",
        job: [
          "Holacracy Coach"
        ],
        lastName: "Pointet"
      },
      {
        email: "zahida.huber@liip.ch",
        firstName: "Zahida",
        image: "https://liip.rokka.io/www_liipersmall_3/203ab660c055291985e4364a0ee7df2450a6361e.jpeg",
        job: [
          "Lead User Experience",
          "Service Designer"
        ],
        lastName: "Huber"
      },
      {
        email: "donato.rotunno@liip.ch",
        firstName: "Donato",
        image: "https://liip.rokka.io/www_liipersmall_3/11f2bfdfbfe22c3a660ad65a376af7002ac955b4.jpeg",
        job: [
          "Accessibility Expert",
          "Frontend Developer"
        ],
        lastName: "Rotunno"
      },
      {
        email: "geoffroy.perriard@liip.ch",
        firstName: "Geoffroy",
        image: "https://liip.rokka.io/www_liipersmall_3/f549264bbe7f0afd489abab3cb196c8661841ded.jpeg",
        job: [
          "Digital Analytics & Performance Consultant",
          "Software Developer"
        ],
        lastName: "Perriard"
      },
      {
        email: "david.jeanmonod@liip.ch",
        firstName: "David",
        image: "https://liip.rokka.io/www_liipersmall_3/9acefe7981f6cb4658672b37766def0ded8b2fbd.jpeg",
        job: [
          "Product Owner",
          "Senior Software Engineer"
        ],
        lastName: "Jeanmonod"
      },
      {
        email: "boris.hofer@liip.ch",
        firstName: "Boris",
        image: "https://liip.rokka.io/www_liipersmall_3/367ed1297645636969dcb1821d9913ead11805ae.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Hofer"
      },
      {
        email: "noora.suurnaekki@liip.ch",
        firstName: "Noora",
        image: "https://liip.rokka.io/www_liipersmall_3/81d6236dc4cd8abe8f1b9e11d23de95cce62f63f.jpeg",
        job: [
          "Frontend Developer",
          "User Experience Designer"
        ],
        lastName: "Suurnäkki-Vogler"
      },
      {
        email: "valentin.delley@liip.ch",
        firstName: "Valentin",
        image: "https://liip.rokka.io/www_liipersmall_3/1d43ab35c96744a2f74c0544d4b12f82bf7f9a05.jpeg",
        job: [
          "Liiper"
        ],
        lastName: "Delley"
      },
      {
        email: "didier.raboud@liip.ch",
        firstName: "Didier",
        image: "https://liip.rokka.io/www_liipersmall_3/4290aa43e58f7f61a1e9f1a06731ec683d487e12.jpeg",
        job: [
          "Free software Hacker"
        ],
        lastName: "Raboud"
      },
      {
        email: "melanie.strehler@liip.ch",
        firstName: "Melanie",
        image: "https://liip.rokka.io/www_liipersmall_3/716bcde0d1a8a2d4a8b662a3f31f1fa10b6bddd6.jpeg",
        job: [],
        lastName: "Strehler"
      },
      {
        email: "tobias.schultze@liip.ch",
        firstName: "Tobias",
        image: "https://liip.rokka.io/www_liipersmall_3/885e3a22f222fa4c5e8e51fa6490fde6f245f5c5.jpeg",
        job: [
          "Open Source Contributor & Maintainer",
          "Software Developer"
        ],
        lastName: "Schultze"
      },
      {
        email: "pierre.vanhulst@liip.ch",
        firstName: "Pierre",
        image: "https://liip.rokka.io/www_liipersmall_3/5700b9c34029b0b594e1d3f9e9297db98dd603ef.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Vanhulst"
      },
      {
        email: "jan.hug@liip.ch",
        firstName: "Jan",
        image: "https://liip.rokka.io/www_liipersmall_3/4b21f3ad82a0be456e9e1ace80feda345d292aec.jpeg",
        job: [
          "Frontend Developer",
          "User Experience Designer"
        ],
        lastName: "Hug"
      },
      {
        email: "martin.janser@liip.ch",
        firstName: "Martin",
        image: "https://liip.rokka.io/www_liipersmall_3/554836f9102d3dc2972793b48727f2a448c443b7.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Janser"
      },
      {
        email: "fabian.schweizer@liip.ch",
        firstName: "Fabian",
        image: "https://liip.rokka.io/www_liipersmall_3/18972c6d04ccd4a1c413b93d1b0e83e472d2ac22.jpeg",
        job: [
          "Senior Software Engineer"
        ],
        lastName: "Schweizer"
      },
      {
        email: "matthieu.cornut@liip.ch",
        firstName: "Matthieu",
        image: "https://liip.rokka.io/www_liipersmall_3/ef854cc2f2590c2fe3cf0a6fefb93985f3f9782f.jpeg",
        job: [
          "Apprentice Trainer",
          "Software Developer"
        ],
        lastName: "Cornut"
      },
      {
        email: "christian.riesen@liip.ch",
        firstName: "Christian",
        image: "https://liip.rokka.io/www_liipersmall_3/dbf7dd8fedb323926f5cea1921312e81179a8114.jpeg",
        job: [
          "Expert Develiiper"
        ],
        lastName: "Riesen"
      },
      {
        email: "daniel.lanz@liip.ch",
        firstName: "Daniel",
        image: "https://liip.rokka.io/www_liipersmall_3/e6082d24b90cd2a86728a0466115574d05fba644.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Lanz"
      },
      {
        email: "pascal.thormeier@liip.ch",
        firstName: "Pascal",
        image: "https://liip.rokka.io/www_liipersmall_3/917727702a994a577ac9f548fae0c2e07ba25685.jpeg",
        job: [
          "Senior Software Developer"
        ],
        lastName: "Thormeier"
      },
      {
        email: "chregu@liip.ch",
        firstName: "Christian",
        image: "https://liip.rokka.io/www_liipersmall_3/b483637f69f60f0d3b0af6af13c0bcf8a454cd6d.jpeg",
        job: [
          "Co-Founder",
          "Software Developer"
        ],
        lastName: "Stocker"
      },
      {
        email: "rae.knowler@liip.ch",
        firstName: "Rae",
        image: "https://liip.rokka.io/www_liipersmall_3/86dcfd40698ded4c8e5c00ad382dd756df05b2c3.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Knowler"
      },
      {
        email: "michelle.sanver@liip.ch",
        firstName: "Michelle",
        image: "https://liip.rokka.io/www_liipersmall_3/6fa018cc2649f37c301ad60c1cd5e19cde106f44.jpeg",
        job: [
          "Open Source Contributor & Maintainer",
          "Software Developer"
        ],
        lastName: "Sanver"
      },
      {
        email: "nicolas.dougoud@liip.ch",
        firstName: "Nicolas",
        image: "https://liip.rokka.io/www_liipersmall_3/698a56e4c5fd5fdbc92c6b8f48be603f6c58a237.jpeg",
        job: [
          "Mobile Developer"
        ],
        lastName: "Dougoud"
      },
      {
        email: "theres.scherrer@liip.ch",
        firstName: "Theres",
        image: "https://liip.rokka.io/www_liipersmall_3/d8de6c815feb36ca9ab65668848332cc278ed35c.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Scherrer"
      },
      {
        email: "benoit.burgener@liip.ch",
        firstName: "Benoît",
        image: "https://liip.rokka.io/www_liipersmall_3/d096209a4dcd25c443f048307e56c200b229ae7f.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Burgener"
      },
      {
        email: "yves.bertrand@liip.ch",
        firstName: "Yves",
        image: "https://liip.rokka.io/www_liipersmall_3/7584cffc534a7f4677e4377e2784877411b73ce7.jpeg",
        job: [
          "Digital Strategist"
        ],
        lastName: "Bertrand"
      },
      {
        email: "adrien.peisl@liip.ch",
        firstName: "Adrien",
        image: "https://liip.rokka.io/www_liipersmall_3/bae7a4b31a8c8f5ce6d735f49779b0162c3653b5.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Peisl"
      },
      {
        email: "olivia.mueller@liip.ch",
        firstName: "Olivia",
        image: "https://liip.rokka.io/www_liipersmall_3/0867c3b0d9c4099026768ac7d1bb225cddde6853.jpeg",
        job: [
          "Finance"
        ],
        lastName: "Müller"
      },
      {
        email: "jonathan.macheret@liip.ch",
        firstName: "Jonathan",
        image: "https://liip.rokka.io/www_liipersmall_3/98a4702f0f5a00bd3a67ebc81eea59f4161633c4.jpeg",
        job: [],
        lastName: "Macheret"
      },
      {
        email: "lennart.jegge@liip.ch",
        firstName: "Lennart",
        image: "https://liip.rokka.io/www_liipersmall_3/46e91700a6bea9629503cf3455180f25e62b6a50.jpeg",
        job: [
          "Drupalista",
          "Software Developer"
        ],
        lastName: "Jegge"
      },
      {
        email: "darja.gartner@liip.ch",
        firstName: "Darja",
        image: "https://liip.rokka.io/www_liipersmall_3/6d2cd12ddee1de488b10cfe0ab7b6edd516aef50.jpeg",
        job: [
          "Service Designer",
          "User Experience Designer"
        ],
        lastName: "Gartner"
      },
      {
        email: "dominique.sorg@liip.ch",
        firstName: "Dominique",
        image: "https://liip.rokka.io/www_liipersmall_3/82082de24519bc66d3d9dc73bf3ec9ae3e367ae6.jpeg",
        job: [
          "Software Engineer"
        ],
        lastName: "Sorg"
      },
      {
        email: "marc.bruehwiler@liip.ch",
        firstName: "Marc",
        image: "https://liip.rokka.io/www_liipersmall_3/8a4b00f476d4c8bb61dc28c731e4578ce55e7709.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Brühwiler"
      },
      {
        email: "kilian.schefer@liip.ch",
        firstName: "Kilian",
        image: "https://liip.rokka.io/www_liipersmall_3/13d90a8dd61b4dac8aa037c7ed75180741f1e355.jpeg",
        job: [
          "Frontend Developer",
          "Lead Leet"
        ],
        lastName: "Schefer"
      },
      {
        email: "fabio.santschi@liip.ch",
        firstName: "Fabio",
        image: "https://liip.rokka.io/www_liipersmall_3/4e69fac78f7920847c8f29e022ae31e1c967f264.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Santschi"
      },
      {
        email: "bettina.brennwald@liip.ch",
        firstName: "Bettina",
        image: "https://liip.rokka.io/www_liipersmall_3/adbddb7b6d4c2216c6c2c2e88a2baab6a4779394.jpeg",
        job: [
          "Finance"
        ],
        lastName: "Brennwald"
      },
      {
        email: "sylvain.aerni@liip.ch",
        firstName: "Sylvain",
        image: "https://liip.rokka.io/www_liipersmall_3/d136c8911a28c7eb0539e01d47a77b63566957d2.jpeg",
        job: [
          "Software Developer",
          "User Experience Designer"
        ],
        lastName: "Aerni"
      },
      {
        email: "philippe.savary@liip.ch",
        firstName: "Philippe",
        image: "https://liip.rokka.io/www_liipersmall_3/86355728c76031e2eefd86314d7bc64686096134.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Savary"
      },
      {
        email: "juerg.hunziker@liip.ch",
        firstName: "Jürg",
        image: "https://liip.rokka.io/www_liipersmall_3/395563f89af64eacd9a3a44d1ea12f89464c145e.jpeg",
        job: [
          "Apprentice Trainer",
          "Software Developer"
        ],
        lastName: "Hunziker"
      },
      {
        email: "emanuele.panzeri@liip.ch",
        firstName: "Emanuele",
        image: "https://liip.rokka.io/www_liipersmall_3/55a6078061497ef8295a4c33c87974689570bb55.jpeg",
        job: [
          "Open Source Contributor & Maintainer",
          "Software Developer"
        ],
        lastName: "Panzeri"
      },
      {
        email: "ludovic.turmel@liip.ch",
        firstName: "Ludovic",
        image: "https://liip.rokka.io/www_liipersmall_3/ff24c9ebb524062559a094010fb6455471f2a979.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Turmel"
      },
      {
        email: "karine.chor@liip.ch",
        firstName: "Karine",
        image: "https://liip.rokka.io/www_liipersmall_3/7b98443b4b51d2fd5c127975b9f15adea9f975ae.jpeg",
        job: [
          "Apprentice Trainer",
          "Software Developer"
        ],
        lastName: "Chor"
      },
      {
        email: "laura.helfer@liip.ch",
        firstName: "Laura",
        image: "https://liip.rokka.io/www_liipersmall_3/03baa56c876ab0809f65d7787036bceedc5e690e.jpeg",
        job: [
          "Digital Brand Designer",
          "User Experience Designer"
        ],
        lastName: "Helfer"
      },
      {
        email: "adrian@liip.ch",
        firstName: "Adrian",
        image: "https://liip.rokka.io/www_liipersmall_3/9aa465887780ff861e2440370e5d944b090fd56f.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Schlegel"
      },
      {
        email: "thierry.krummenacher@liip.ch",
        firstName: "Thierry",
        image: "https://liip.rokka.io/www_liipersmall_3/33444f9558f66a6f2fa2d4a9e8d88d38ca547342.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Krummenacher"
      },
      {
        email: "romina.borga@liip.ch",
        firstName: "Romina",
        image: "https://liip.rokka.io/www_liipersmall_3/128b73fa5ba41cb6ea4ba41eb7f88b1c371f831d.jpeg",
        job: [
          "Finance"
        ],
        lastName: "Borga"
      },
      {
        email: "david@liip.ch",
        firstName: "David",
        image: "https://liip.rokka.io/www_liipersmall_3/0121cf4dc8449abe6a29a9f2200caab8d9fdbe39.jpeg",
        job: [
          "Open Source Contributor & Maintainer",
          "Software Developer"
        ],
        lastName: "Buchmann"
      },
      {
        email: "clarissa.kuechler@liip.ch",
        firstName: "Clarissa",
        image: "https://liip.rokka.io/www_liipersmall_3/96eae364cf8ce6c01ef2271ccf2bc91284b50452.jpeg",
        job: [],
        lastName: "Küchler"
      },
      {
        email: "vera.lorenzi@liip.ch",
        firstName: "Vera",
        image: "https://liip.rokka.io/www_liipersmall_3/4bc2600131214d59bc0f6f9121ad7d240d6c3240.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Lorenzi"
      },
      {
        email: "elena.rigamonti@liip.ch",
        firstName: "Elena",
        image: "https://liip.rokka.io/www_liipersmall_3/934ee6e0414edc5ebc9d53728b08429bf2e4d5ae.jpeg",
        job: [
          "Agile Coach",
          "Scrum Master"
        ],
        lastName: "Rigamonti"
      },
      {
        email: "thomas.riotte@liip.ch",
        firstName: "Thomas",
        image: "https://liip.rokka.io/www_liipersmall_3/5e32944330f208205fbd491372868df98b33b706.jpeg",
        job: [
          "Lead Link Design Services Romandie",
          "Senior UX Architect"
        ],
        lastName: "Riotte"
      },
      {
        email: "eleonore.price@liip.ch",
        firstName: "Eléonore",
        image: "https://liip.rokka.io/www_liipersmall_3/e78d483194b5a983c732ae1ad00577568c901608.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Price"
      },
      {
        email: "miriam.pretzlaff@liip.ch",
        firstName: "Miriam",
        image: "https://liip.rokka.io/www_liipersmall_3/9edff87d0faac86ee1191970d1a77b37339ce878.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Pretzlaff"
      },
      {
        email: "fabian.ryf@liip.ch",
        firstName: "Fabian",
        image: "https://liip.rokka.io/www_liipersmall_3/d3e302d7c05691faffb2e7dc3fab21ad1cc338c8.jpeg",
        job: [
          "Lead Digital Analytics & Performance"
        ],
        lastName: "Ryf"
      },
      {
        email: "biram.ly@liip.ch",
        firstName: "Biram",
        image: "https://liip.rokka.io/www_liipersmall_3/22ed4f8ce81ece57a067796ac5bacb9c144b2aaf.jpeg",
        job: [
          "Finance"
        ],
        lastName: "Ly"
      },
      {
        email: "stefanie.taepke@liip.ch",
        firstName: "Stefanie",
        image: "https://liip.rokka.io/www_liipersmall_3/9c77ab820b64abc1f72457d08b047a14a4389310.jpeg",
        job: [
          "Lead Open Data",
          "Senior Software Engineer"
        ],
        lastName: "Taepke"
      },
      {
        email: "marton.orehovszky@liip.ch",
        firstName: "Marton",
        image: "https://liip.rokka.io/www_liipersmall_3/6d253dddd5033afeb4322c75de3b9ef3114a4464.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Orehovszky"
      },
      {
        email: "stefan.schweingruber@liip.ch",
        firstName: "Stefan",
        image: "https://liip.rokka.io/www_liipersmall_3/022e9f8edd278bc4efbf7058807f22f848d68fae.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Schweingruber"
      },
      {
        email: "philipp.klein@liip.ch",
        firstName: "Philipp",
        image: "https://liip.rokka.io/www_liipersmall_3/d29352d0fb4444d35c6672566c1aab44d9c82820.jpeg",
        job: [
          "Co-Worker "
        ],
        lastName: "Klein"
      },
      {
        email: "sascha.aeppli@liip.ch",
        firstName: "Sascha",
        image: "https://liip.rokka.io/www_liipersmall_3/f5a804f99cfaa58ec3266d17c08aed968e18b96a.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Aeppli"
      },
      {
        email: "beni@liip.ch",
        firstName: "Benjamin",
        image: "https://liip.rokka.io/www_liipersmall_3/abd6e020e193725632cf178c725fdb9d2dc358a8.jpeg",
        job: [
          "Senior Software Developer"
        ],
        lastName: "Wohlwend"
      },
      {
        email: "claes.lennman@liip.ch",
        firstName: "Claes",
        image: "https://liip.rokka.io/www_liipersmall_3/e2f2f7d829f170d7297162ec374a04bf8ea09a88.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Lennman"
      },
      {
        email: "julia.hertrich@liip.ch",
        firstName: "Julia",
        image: "https://liip.rokka.io/www_liipersmall_3/85843839ccd939a9620a0a4659e2edcfdeaa36b4.jpeg",
        job: [],
        lastName: "Hertrich"
      },
      {
        email: "raphael.santos@liip.ch",
        firstName: "Raphaël",
        image: "https://liip.rokka.io/www_liipersmall_3/0fbe2efcbedb8d2efa4724e0b8bda9f86266bd3a.jpeg",
        job: [
          "Lead Internal IT",
          "System Administrator"
        ],
        lastName: "Santos"
      },
      {
        email: "janina.kuersteiner@liip.ch",
        firstName: "Janina",
        image: "https://liip.rokka.io/www_liipersmall_3/e302d485c84e0953736d116d4d570472e5c80d9f.jpeg",
        job: [
          "Event Organiser",
          "Merchandise Expert"
        ],
        lastName: "Kürsteiner"
      },
      {
        email: "ursina.spadin@liip.ch",
        firstName: "Ursina",
        image: "https://liip.rokka.io/www_liipersmall_3/15b487ef7a2fb7616c1d3737ba6f3f70cad63f1f.jpeg",
        job: [
          "People Generalist"
        ],
        lastName: "Spadin"
      },
      {
        email: "lars.peyer@liip.ch",
        firstName: "Lars",
        image: "https://liip.rokka.io/www_liipersmall_3/8f84528dbb86ebe0a36e84ab99de60fac86eff64.jpeg",
        job: [
          "Apprentice Trainer",
          "Senior Software Engineer"
        ],
        lastName: "Peyer"
      },
      {
        email: "giorgio.nadig@liip.ch",
        firstName: "Giorgio",
        image: "https://liip.rokka.io/www_liipersmall_3/30b058609432ebe856013b04aee24f08b05044c7.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Nadig"
      },
      {
        email: "jonathan.droz@liip.ch",
        firstName: "Jonathan",
        image: "https://liip.rokka.io/www_liipersmall_3/8fe2269b3f57ab36504bea3d46a5a29503fd68cd.jpeg",
        job: [
          "Drupalista",
          "Software Developer"
        ],
        lastName: "Droz"
      },
      {
        email: "denis.haramincic@liip.ch",
        firstName: "Denis",
        image: "https://liip.rokka.io/www_liipersmall_3/b399dabc9e8b540ba775d8eff3b76d1c2770da49.jpeg",
        job: [
          "Agile Project Management",
          "Scrum Master"
        ],
        lastName: "Haramincic"
      },
      {
        email: "stefan.heinemann@liip.ch",
        firstName: "Stefan",
        image: "https://liip.rokka.io/www_liipersmall_3/4ef8da29c46a068736735d5cc254d16296769981.jpeg",
        job: [
          "doer of stuff"
        ],
        lastName: "Heinemann"
      },
      {
        email: "hugo.torres@liip.ch",
        firstName: "Hugo",
        image: "https://liip.rokka.io/www_liipersmall_3/3b52ab945bc4ac7d064cfce9835e8df72a253ec8.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Torres"
      },
      {
        email: "patrik.dummermuth@liip.ch",
        firstName: "Patrik",
        image: "https://liip.rokka.io/www_liipersmall_3/98c925d444d8d650ed31bb22f13ca5554d68fae0.jpeg",
        job: [
          "Apprentice Trainer",
          "Senior Frontend Developer"
        ],
        lastName: "Dummermuth"
      },
      {
        email: "patrick.retornaz@liip.ch",
        firstName: "Patrick",
        image: "https://liip.rokka.io/www_liipersmall_3/de04910ec3029e10e2bb55ff1d44c63ae6266217.jpeg",
        job: [
          "Product Owner",
          "Software Engineer"
        ],
        lastName: "Retornaz"
      },
      {
        email: "leo.davesne@liip.ch",
        firstName: "Léo",
        image: "https://liip.rokka.io/www_liipersmall_3/38273a334c75c797283d3c0cd7faed0c9ebbd767.jpeg",
        job: [
          "Agile Coach",
          "Scrum Master"
        ],
        lastName: "Davesne"
      },
      {
        email: "joelle.mary@liip.ch",
        firstName: "Joëlle",
        image: "https://liip.rokka.io/www_liipersmall_3/0a6fbdfc9c5e0ab00f93b29401ac32127c4f3ed6.jpeg",
        job: [
          "People Specialist"
        ],
        lastName: "Mary"
      },
      {
        email: "mannar.hielal@liip.ch",
        firstName: "Mannar",
        image: "https://liip.rokka.io/www_liipersmall_3/46d701d6adb055655fad6aa406463a1ac6f6a4f3.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Hielal"
      },
      {
        email: "simon.bock@liip.ch",
        firstName: "Simon",
        image: "https://liip.rokka.io/www_liipersmall_3/34bdb635bbc3f7a0ea3316dca0c313e31a93d41a.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Bock"
      },
      {
        email: "emilie.boillat@liip.ch",
        firstName: "Emilie",
        image: "https://liip.rokka.io/www_liipersmall_3/ecd8614098b4c526fe3cbea358a89de9e5656e43.jpeg",
        job: [
          "Business Developer"
        ],
        lastName: "Boillat"
      },
      {
        email: "jenny.zehnder@liip.ch",
        firstName: "Jenny",
        image: "https://liip.rokka.io/www_liipersmall_3/5b663701ecae96ccfe3d16804a55ebf357d14160.jpeg",
        job: [
          "Lead Marketing & Communications"
        ],
        lastName: "Zehnder"
      },
      {
        email: "jeremie.fontana@liip.ch",
        firstName: "Jérémie",
        image: "https://liip.rokka.io/www_liipersmall_3/6de26e89cf6af68413bc188e359291d83b2dff3c.jpeg",
        job: [
          "Privacy Advocate",
          "Senior Designer"
        ],
        lastName: "Fontana"
      },
      {
        email: "caroline.pieracci@liip.ch",
        firstName: "Caroline",
        image: "https://liip.rokka.io/www_liipersmall_3/3f75511582dc779a80164b3e5db9ae511fb2b94b.jpeg",
        job: [
          "Lead Content Strategy & UX Writing"
        ],
        lastName: "Pieracci"
      },
      {
        email: "stefan.suter@liip.ch",
        firstName: "Stefan",
        image: "https://liip.rokka.io/www_liipersmall_3/9f783f8afac57f38292fffaeef8b3117f481ce34.jpeg",
        job: [
          "Apprentice Trainer",
          "Software Developer"
        ],
        lastName: "Suter"
      },
      {
        email: "sergio.mendolia@liip.ch",
        firstName: "Sergio",
        image: "https://liip.rokka.io/www_liipersmall_3/1f71ae3a9d3b7e5f99777a72b12090db30581086.jpeg",
        job: [
          "Apprentice Trainer",
          "Full Stack Developer"
        ],
        lastName: "Mendolia"
      },
      {
        email: "tristan.rouiller@liip.ch",
        firstName: "Tristan",
        image: "https://liip.rokka.io/www_liipersmall_3/84d017e50c193beae6822c00263da5abf3f93054.jpeg",
        job: [
          "Full Stack Developer",
          "Scrum Master"
        ],
        lastName: "Rouiller"
      },
      {
        email: "laurent.constantin@liip.ch",
        firstName: "Laurent",
        image: "https://liip.rokka.io/www_liipersmall_3/09235ade1151022b940bd1eba0d07e650f47943d.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Constantin"
      },
      {
        email: "ilker.eryilmaz@liip.ch",
        firstName: "Ilker",
        image: "https://liip.rokka.io/www_liipersmall_3/482c59706383479366be8fe8e5c1586c128dda9e.jpeg",
        job: [],
        lastName: "Eryilmaz"
      },
      {
        email: "jason.crettenand@liip.ch",
        firstName: "Jason",
        image: "https://liip.rokka.io/www_liipersmall_3/e7d409165de080f091039e753f4c66be13116fc0.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Crettenand"
      },
      {
        email: "bryan.muhmenthaler@liip.ch",
        firstName: "Bryan",
        image: "https://liip.rokka.io/www_liipersmall_3/eaf45a46760f4d1852bea25f902a585fe4f93a2c.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Muhmenthaler"
      },
      {
        email: "renato.moor@liip.ch",
        firstName: "Renato",
        image: "https://liip.rokka.io/www_liipersmall_3/2b43eae8a7a3299416bb3f16f758c67dba079c9b.jpeg",
        job: [],
        lastName: "Moor"
      },
      {
        email: "sylvain.nicolet@liip.ch",
        firstName: "Sylvain",
        image: "https://liip.rokka.io/www_liipersmall_3/c2d0d21fde82cfc17ed60e22f9400e99bac5fd20.jpeg",
        job: [
          "Apprentice"
        ],
        lastName: "Nicolet"
      },
      {
        email: "sara.zbinden@liip.ch",
        firstName: "Sara",
        image: "https://liip.rokka.io/www_liipersmall_3/359cbbae9080430e989c626f1a922ce33b6e4624.jpeg",
        job: [
          "Marketing & Communications"
        ],
        lastName: "Zbinden"
      },
      {
        email: "basile.perrenoud@liip.ch",
        firstName: "Basile",
        image: "https://liip.rokka.io/www_liipersmall_3/58c6c5acca090f6f6d68a8e2a7e77dd73e6dae92.jpeg",
        job: [
          "Mobile Developer"
        ],
        lastName: "Perrenoud"
      },
      {
        email: "simon.brulhart@liip.ch",
        firstName: "Simon",
        image: "https://liip.rokka.io/www_liipersmall_3/8f81785cd69634e975612bddb03c496892a3c737.jpeg",
        job: [],
        lastName: "Brulhart"
      },
      {
        email: "hendrik.grahl@liip.ch",
        firstName: "Hendrik",
        image: "https://liip.rokka.io/www_liipersmall_3/808a2b58e1c504888af71a0bb1c64ccbfc43a926.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Grahl"
      },
      {
        email: "romain.dewolff@liip.ch",
        firstName: "Romain",
        image: "https://liip.rokka.io/www_liipersmall_3/f6379d1f349779f22e8bf82b1804cfc9a24f7823.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "de Wolff"
      },
      {
        email: "ioana.mitrea@liip.ch",
        firstName: "Ioana",
        image: "https://liip.rokka.io/www_liipersmall_3/686fb0f9782347b6cd9ef3289214941980cb5e95.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Mitrea"
      },
      {
        email: "etienne.engasser@liip.ch",
        firstName: "Etienne",
        image: "https://liip.rokka.io/www_liipersmall_3/022d7de29ff6adfc1a1dd82cf13c8819a004db77.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Engasser"
      },
      {
        email: "urs.hodel@liip.ch",
        firstName: "Urs",
        image: "https://liip.rokka.io/www_liipersmall_3/df9be40f61af6bee0ea73d116630cde1a606c8f7.jpeg",
        job: [
          "E-Learning"
        ],
        lastName: "Hodel"
      },
      {
        email: "joanita.bonnier@liip.ch",
        firstName: "Joanita",
        image: "https://liip.rokka.io/www_liipersmall_3/49e56d31e1aa427e89ba82cec257dc6f98ae1a77.jpeg",
        job: [
          "Agile Coach",
          "Scrum Master"
        ],
        lastName: "Bonnier"
      },
      {
        email: "flavio.muff@liip.ch",
        firstName: "Flavio",
        image: "https://liip.rokka.io/www_liipersmall_3/c6df485c0923fae09784f159fc5a61a02180619f.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Muff"
      },
      {
        email: "celine.adami@liip.ch",
        firstName: "Céline",
        image: "https://liip.rokka.io/www_liipersmall_3/69136648bdde24419b5e21a205dacd48a5a40ba5.jpeg",
        job: [],
        lastName: "Adami"
      },
      {
        email: "sabine.maennel@liip.ch",
        firstName: "Sabine",
        image: "https://liip.rokka.io/www_liipersmall_3/c327e1c87f94bf3aaf4e0cf0351545b623984588.jpeg",
        job: [
          "Software Engineer"
        ],
        lastName: "Maennel"
      },
      {
        email: "noah.siegrist@liip.ch",
        firstName: "Noah",
        image: "https://liip.rokka.io/www_liipersmall_3/0a8b1b9da0d07b53790a1b39cc8c76e1f4afa1d3.jpeg",
        job: [
          "Software Engineer"
        ],
        lastName: "Siegrist"
      },
      {
        email: "sara.moccand@liip.ch",
        firstName: "Sara",
        image: "https://liip.rokka.io/www_liipersmall_3/7d9d884ab8fd0046d28a9aab78603ed7cf54af2f.jpeg",
        job: [
          "SEO Specialist"
        ],
        lastName: "Moccand-Sayegh"
      },
      {
        email: "annina.vonplanta@liip.ch",
        firstName: "Annina",
        image: "https://liip.rokka.io/www_liipersmall_3/8d2134ee8abeb04ac06bed62ff2fa278d65b4871.jpeg",
        job: [
          "People Specialist",
          "Scrum Master"
        ],
        lastName: "von Planta"
      },
      {
        email: "merlin.zuni@liip.ch",
        firstName: "Merlin",
        image: "https://liip.rokka.io/www_liipersmall_3/7ab48a5aa42849e01b4c5cda62bd42335f55591c.jpeg",
        job: [
          "Senior Digital Designer"
        ],
        lastName: "Zuni"
      },
      {
        email: "gregory.wenger@liip.ch",
        firstName: "Gregory",
        image: "https://liip.rokka.io/www_liipersmall_3/2693e09f77a55108b5d40f757a71d9adb17696f3.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Wenger"
      },
      {
        email: "lena.tovar@liip.ch",
        firstName: "Lena",
        image: "https://liip.rokka.io/www_liipersmall_3/874b9ff88c24e80e49503156b2a7955b8c74b02c.jpeg",
        job: [
          "Content Strategist ",
          "ux writer"
        ],
        lastName: "Tovar"
      },
      {
        email: "benjamin.boldt@liip.ch",
        firstName: "Benjamin",
        image: "https://liip.rokka.io/www_liipersmall_3/07398f98b438ca2f048732458d016a7d8e571a01.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Boldt"
      },
      {
        email: "raphael.antonietti@liip.ch",
        firstName: "Raphael",
        image: "https://liip.rokka.io/www_liipersmall_3/780fe8b06a5f9db7572e009aeedb440186e3941d.jpeg",
        job: [
          "Dinosaur Trainer",
          "Frontend Developer"
        ],
        lastName: "Antonietti"
      },
      {
        email: "claudia.arndt@liip.ch",
        firstName: "Claudia",
        image: "https://liip.rokka.io/www_liipersmall_3/8b8f7ca37ebb876ae85f3d7e235f9a6b5a38644f.jpeg",
        job: [
          "People Specialist"
        ],
        lastName: "Arndt"
      },
      {
        email: "adrian.berger@liip.ch",
        firstName: "Adrian",
        image: "https://liip.rokka.io/www_liipersmall_3/6cdd03d94d4b11fca5e5ad0ddeb70faf3aa5f151.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Berger"
      },
      {
        email: "anina.angehrn@liip.ch",
        firstName: "Anina",
        image: "https://liip.rokka.io/www_liipersmall_3/d81af0879bbcd70423b91b659f43212c8d930ba9.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Angehrn"
      },
      {
        email: "stefan.huber@liip.ch",
        firstName: "Stefan",
        image: "https://liip.rokka.io/www_liipersmall_3/e5a1f30ab7accbe944e0d2164db122e9efedf402.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Huber"
      },
      {
        email: "marin.aeschbach@liip.ch",
        firstName: "Marin",
        image: "https://liip.rokka.io/www_liipersmall_3/1c13c622839e117c4c28bfd115defa51297f88be.jpeg",
        job: [
          "Frontend Developer",
          "User Experience Designer"
        ],
        lastName: "Aeschbach"
      },
      {
        email: "felice.candilio@liip.ch",
        firstName: "Felice",
        image: "https://liip.rokka.io/www_liipersmall_3/206031a287eba4a0b21d6dd127b9b2179d94b063.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Candilio"
      },
      {
        email: "jonas.niestroj@liip.ch",
        firstName: "Jonas",
        image: "https://liip.rokka.io/www_liipersmall_3/a66e0ce4ff9f608e7960dbfebd69b8f895772990.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Niestroj"
      },
      {
        email: "margaux.dupuy@liip.ch",
        firstName: "Margaux",
        image: "https://liip.rokka.io/www_liipersmall_3/ffe9f9181fe48d4f2a7469169405f82acda74cea.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Dupuy"
      },
      {
        email: "timur.erdag@liip.ch",
        firstName: "Timur",
        image: "https://liip.rokka.io/www_liipersmall_3/beb4772d1d16500beea9372c5733a0330e9dd17a.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Erdag"
      },
      {
        email: "jessica.lopes@liip.ch",
        firstName: "Jessica",
        image: "https://liip.rokka.io/www_liipersmall_3/e2bad76cfdb6d0ee901f0e74caf6a0623344aa55.jpeg",
        job: [],
        lastName: "Lopes"
      },
      {
        email: "rodrigo.rodrigues@liip.ch",
        firstName: "Rodrigo",
        image: "https://liip.rokka.io/www_liipersmall_3/4ffc900f10178b88f58d45982c79989d772f57ed.jpeg",
        job: [
          "Apprentice"
        ],
        lastName: "Rodrigues"
      },
      {
        email: "eliane.kunz@liip.ch",
        firstName: "Eliane",
        image: "https://liip.rokka.io/www_liipersmall_3/ad735a1a418aec1eb45d78959a69c7d0a03fa611.jpeg",
        job: [],
        lastName: "Kunz"
      },
      {
        email: "tim.rutishauser@liip.ch",
        firstName: "Tim",
        image: "https://liip.rokka.io/www_liipersmall_3/7fe468a514077e20fbf5cf06ccec14bf75399914.jpeg",
        job: [
          "Business Developer"
        ],
        lastName: "Rutishauser"
      },
      {
        email: "samira.greco@liip.ch",
        firstName: "Samira",
        image: "https://liip.rokka.io/www_liipersmall_3/b9aa2a80a0e2e47f6bff1037d9f909ecb2cc3c48.jpeg",
        job: [
          "Apprentice"
        ],
        lastName: "Greco"
      },
      {
        email: "louis.gollut@liip.ch",
        firstName: "Louis",
        image: "https://liip.rokka.io/www_liipersmall_3/d84de85064353c15427277918ecad7f6fe0307b9.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Gollut"
      },
      {
        email: "franziska.binz@liip.ch",
        firstName: "Franziska",
        image: "https://liip.rokka.io/www_liipersmall_3/4295574ea7d578a012badfd2dfe4f0ea458501df.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Binz"
      },
      {
        email: "gregor.stuber@liip.ch",
        firstName: "Gregor",
        image: "https://liip.rokka.io/www_liipersmall_3/3484b0c10b8318546c9f70ed7d46f7efba1e573e.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Stuber"
      },
      {
        email: "severin.kilchhofer@liip.ch",
        firstName: "Severin",
        image: "https://liip.rokka.io/www_liipersmall_3/ea31a07ca8517b32e45eb73e5a946bfceb63b83d.jpeg",
        job: [
          "Frontend Developer",
          "User Experience Designer"
        ],
        lastName: "Kilchhofer"
      },
      {
        email: "johan.noverraz@liip.ch",
        firstName: "Johan",
        image: "https://liip.rokka.io/www_liipersmall_3/b943f30152e81e64048a187e2b09586fd3977bad.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Noverraz"
      },
      {
        email: "trent.crawford@liip.ch",
        firstName: "Trent",
        image: "https://liip.rokka.io/www_liipersmall_3/5cd10d66c76a1890f78090278f8a206650d1ca24.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Crawford"
      },
      {
        email: "andrea.zioerjen@liip.ch",
        firstName: "Andrea",
        image: "https://liip.rokka.io/www_liipersmall_3/9f70db5979043956a02d8728f728a8050ed3eab2.jpeg",
        job: [],
        lastName: "Ziörjen"
      },
      {
        email: "alexandra.roscigno@liip.ch",
        firstName: "Alexandra",
        image: "https://liip.rokka.io/www_liipersmall_3/9e6ca1cf7f1b6be9f99c61faa8da060550c19e3e.jpeg",
        job: [],
        lastName: "Roscigno"
      },
      {
        email: "emmanuel.bernard@liip.ch",
        firstName: "Emmanuel",
        image: "https://liip.rokka.io/www_liipersmall_3/5568b366d2220be274871c213a88e34b0c94071a.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Bernard"
      },
      {
        email: "stephane.biolley@liip.ch",
        firstName: "Stéphane",
        image: "https://liip.rokka.io/www_liipersmall_3/56873d25b85eac5a620ab6f79dcdd638000f2b4d.jpeg",
        job: [
          "Business Developer",
          "Software Engineer"
        ],
        lastName: "Biolley"
      },
      {
        email: "alice.fada@liip.ch",
        firstName: "Alice",
        image: "https://liip.rokka.io/www_liipersmall_3/254b684bf918ea5decbef1c01878c1ed3ae0a3de.jpeg",
        job: [],
        lastName: "Fada"
      },
      {
        email: "till.ramstein@liip.ch",
        firstName: "Till",
        image: "https://liip.rokka.io/www_liipersmall_3/205386d9e0d8e5af708626c322baa110a4758543.jpeg",
        job: [
          "Business Developer"
        ],
        lastName: "Ramstein"
      },
      {
        email: "angie.born@liip.ch",
        firstName: "Angie",
        image: "https://liip.rokka.io/www_liipersmall_3/343b3658c3d3870abdf97c242a7b7f4256702b83.jpeg",
        job: [],
        lastName: "Born"
      },
      {
        email: "olivier.wenger@liip.ch",
        firstName: "Olivier",
        image: "https://liip.rokka.io/www_liipersmall_3/4d68e52ef7eeb23a30df3a783b5bbdc60a68ac2f.jpeg",
        job: [
          "Devops"
        ],
        lastName: "Wenger"
      },
      {
        email: "sarah.hilse@liip.ch",
        firstName: "Sarah",
        image: "https://liip.rokka.io/www_liipersmall_3/ac78969720ed2360015d6e92b273db9062cb399a.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Hilse"
      },
      {
        email: "jacqueline.bruegger@liip.ch",
        firstName: "Jacqueline",
        image: "https://liip.rokka.io/www_liipersmall_3/bdc15c836665ab6aa87ac5643aaf09c43926a62b.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Brügger"
      },
      {
        email: "susanne.perreijn@liip.ch",
        firstName: "Susanne",
        image: "https://liip.rokka.io/www_liipersmall_3/1f3c41bb3bd18f55d8197fb2dc616839e27c700e.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Perreijn"
      },
      {
        email: "arthur.verdon@liip.ch",
        firstName: "Arthur",
        image: "https://liip.rokka.io/www_liipersmall_3/9f29c11eeca2977f445e2730799df9cd08340698.jpeg",
        job: [
          "Full Stack Developer"
        ],
        lastName: "Verdon"
      },
      {
        email: "mathieu.baechler@liip.ch",
        firstName: "Mathieu",
        image: "https://liip.rokka.io/www_liipersmall_3/c366bb2efc341276e030e8feb910d58130807e5a.jpeg",
        job: [
          "Mobile Developer"
        ],
        lastName: "Baechler"
      },
      {
        email: "alexandre.bucci@liip.ch",
        firstName: "Alexandre",
        image: "https://liip.rokka.io/www_liipersmall_3/6030c208684dfefd2712cdc578591890630c0aa1.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Bucci"
      },
      {
        email: "marius.kueng@liip.ch",
        firstName: "Marius",
        image: "https://liip.rokka.io/www_liipersmall_3/ccde3b6254d8dc2c507600466d4d80c96edf0d84.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Küng"
      },
      {
        email: "lina.sentici@liip.ch",
        firstName: "Lina",
        image: "https://liip.rokka.io/www_liipersmall_3/bff8e7c683113e813dedf7695ec8e6385ff331d9.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Sentici"
      },
      {
        email: "bastien.crettenand@liip.ch",
        firstName: "Bastien",
        image: "https://liip.rokka.io/www_liipersmall_3/1655c7f9ae5e82661b86c496a18c95c5446daedf.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Crettenand"
      },
      {
        email: "benoit.husson@liip.ch",
        firstName: "Benoît",
        image: "https://liip.rokka.io/www_liipersmall_3/c5a696a087819e304ef2b457c30d192f21a8d1f0.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Husson"
      },
      {
        email: "nathanael.lack@liip.ch",
        firstName: "Nathanaël",
        image: "https://liip.rokka.io/www_liipersmall_3/56611c3b343fd2d144a41de7c6a7fc7941008e3a.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Lack"
      },
      {
        email: "jonathan.noack@liip.ch",
        firstName: "Jonathan",
        image: "https://liip.rokka.io/www_liipersmall_3/69b6b4a63003cf1fc8c4188d751bd6490e92bbf9.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Noack"
      },
      {
        email: "cindy.leschaud@liip.ch",
        firstName: "Cindy",
        image: "https://liip.rokka.io/www_liipersmall_3/b978ac9e82a06b78dd6385f1d9a3f725852fe72c.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Leschaud"
      },
      {
        email: "yannick.suter@liip.ch",
        firstName: "Yannick",
        image: "https://liip.rokka.io/www_liipersmall_3/5fe0570a4313dd1f23e8b53b5c60b8da8e44e3a4.jpeg",
        job: [
          "People Specialist"
        ],
        lastName: "Suter"
      },
      {
        email: "xenia.imbach@liip.ch",
        firstName: "Xenia",
        image: "https://liip.rokka.io/www_liipersmall_3/6140e9710e1016d02a5073595515f6fe0107bdf4.jpeg",
        job: [
          "Content Strategist ",
          "ux writer"
        ],
        lastName: "Imbach"
      },
      {
        email: "diana.vonow@liip.ch",
        firstName: "Diana",
        image: "https://liip.rokka.io/www_liipersmall_3/4e35f58d33a6d4603d4a26bec57d2cd46e953652.jpeg",
        job: [
          "User Experience Designer",
          "ux writer"
        ],
        lastName: "von Ow"
      },
      {
        email: "john.gannon@liip.ch",
        firstName: "John",
        image: "https://liip.rokka.io/www_liipersmall_3/370f135da03bd0c30b92f52a22171c839da48536.jpeg",
        job: [
          "Devops",
          "Software Developer"
        ],
        lastName: "Gannon"
      },
      {
        email: "matias.cerchierini@liip.ch",
        firstName: "Matias",
        image: "https://liip.rokka.io/www_liipersmall_3/e9f1142daf4eed5d4d9d88cca45d59506f1fa6f9.jpeg",
        job: [],
        lastName: "Cerchierini"
      },
      {
        email: "petra.schmaeh@liip.ch",
        firstName: "Petra",
        image: "https://liip.rokka.io/www_liipersmall_3/9fbfed8c605136bed9671610159d1cbd4c252caa.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Schmäh"
      },
      {
        email: "guillem.gelabert@liip.ch",
        firstName: "Guillem",
        image: "https://liip.rokka.io/www_liipersmall_3/de57a865236adcfff4d3be9f190613514457550a.jpeg",
        job: [],
        lastName: "Gelabert"
      },
      {
        email: "judith.aitmessaoud@liip.ch",
        firstName: "Judith",
        image: "https://liip.rokka.io/www_liipersmall_3/380061c6cd046573f3e8ab724740b6bf34abe20a.jpeg",
        job: [
          "Telephone operator"
        ],
        lastName: "Ait Messaoud"
      },
      {
        email: "alexandre.canana@liip.ch",
        firstName: "Alexandre",
        image: "https://liip.rokka.io/www_liipersmall_3/bcffd1307a5235aba6f0474b8870d96725118ab0.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Canana"
      },
      {
        email: "nicolas.hodel@liip.ch",
        firstName: "Nicolas",
        image: "https://liip.rokka.io/www_liipersmall_3/738b5cd3ebc347fcc1744617896540cb3e8ff7b6.jpeg",
        job: [
          "People Generalist"
        ],
        lastName: "Hodel"
      },
      {
        email: "marie.antoine@liip.ch",
        firstName: "Marie",
        image: "https://liip.rokka.io/www_liipersmall_3/4bcdabd361e6dff58f35a48043b3a525336d0e21.jpeg",
        job: [
          "User Experience Designer"
        ],
        lastName: "Antoine"
      },
      {
        email: "anca.verniceanu@liip.ch",
        firstName: "Anca",
        image: "https://liip.rokka.io/www_liipersmall_3/046cbf5212aec314dacbad8d1077c7092fcff02a.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Verniceanu"
      },
      {
        email: "tereza.peneva@liip.ch",
        firstName: "Tereza",
        image: "https://liip.rokka.io/www_liipersmall_3/efd90d694d849ba990975895d4d28d1e10fe2cfc.jpeg",
        job: [
          "Frontend Developer"
        ],
        lastName: "Peneva"
      },
      {
        email: "benoit.potty@liip.ch",
        firstName: "Benoît",
        image: "https://liip.rokka.io/www_liipersmall_3/3141d47a4796f126450fa4560a15cf4887c41eaf.jpeg",
        job: [
          "Full Stack Developer",
          "Software Architect"
        ],
        lastName: "Potty"
      },
      {
        email: "viviane.manke@liip.ch",
        firstName: "Viviane",
        image: "https://liip.rokka.io/www_liipersmall_3/809aaf09b56a911a1d50c227a356b587d4d4bd76.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Manke"
      },
      {
        email: "daniel.bensason@liip.ch",
        firstName: "Daniel",
        image: "https://liip.rokka.io/www_liipersmall_3/9a778b77018405df300ab01d53723e8a5818d5e2.jpeg",
        job: [
          "Digital Analytics & Performance Consultant"
        ],
        lastName: "Bensason"
      },
      {
        email: "lars.hofstetter@liip.ch",
        firstName: "Lars",
        image: "https://liip.rokka.io/www_liipersmall_3/7511eb6daed61dc1db8492a771d1c103fe94cab4.jpeg",
        job: [
          "E-Commerce Expert",
          "Product Owner"
        ],
        lastName: "Hofstetter"
      },
      {
        email: "kathrin.wuermli@liip.ch",
        firstName: "Kathrin",
        image: "https://liip.rokka.io/www_liipersmall_3/82d84a9ef4bd928549af6c3b34d58c7ce37f895c.jpeg",
        job: [
          "Content Strategy & UX Writing"
        ],
        lastName: "Würmli"
      },
      {
        email: "matthias.dhum@liip.ch",
        firstName: "Matthias",
        image: "https://liip.rokka.io/www_liipersmall_3/6de574c7ac87abd17651e37f3076f7c12eb39c8f.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Dhum"
      },
      {
        email: "joel.neugebauer@liip.ch",
        firstName: "Joël",
        image: "https://liip.rokka.io/www_liipersmall_3/ab16db293f746d6493e28cde8568107846ca83b9.jpeg",
        job: [
          "Digital Designer",
          "User Experience Designer"
        ],
        lastName: "Neugebauer"
      },
      {
        email: "naniko.kakabadze@liip.ch",
        firstName: "Naniko",
        image: "https://liip.rokka.io/www_liipersmall_3/329ca00eff98ac914ada5df3bf8ac0cd88b3c6eb.jpeg",
        job: [],
        lastName: "Kakabadze"
      },
      {
        email: "milan.bombsch@liip.ch",
        firstName: "Milan",
        image: "https://liip.rokka.io/www_liipersmall_3/b05c6e39c92a4c0d303d02ba0578c5cba64fd8ac.jpeg",
        job: [
          "Frontend Engineer"
        ],
        lastName: "Bombsch"
      },
      {
        email: "janine.wiedemar@liip.ch",
        firstName: "Janine",
        image: "https://liip.rokka.io/www_liipersmall_3/7625933a870ae3317138db6c1925b219097f5e1d.jpeg",
        job: [
          "Digital Analytics & Performance Consultant"
        ],
        lastName: "Wiedemar"
      },
      {
        email: "nicolas.bouteloup@liip.ch",
        firstName: "Nicolas",
        image: "https://liip.rokka.io/www_liipersmall_3/2d8dbd921ae8481d91a062f61c94cd1723e4b4bf.jpeg",
        job: [
          "Scrum Master"
        ],
        lastName: "Bouteloup"
      },
      {
        email: "bruno.joly@liip.ch",
        firstName: "Bruno",
        image: "https://liip.rokka.io/www_liipersmall_3/30156218409eea9345448d3268466cf964397834.jpeg",
        job: [],
        lastName: "Joly"
      },
      {
        email: "danick.fort@liip.ch",
        firstName: "Danick",
        image: "https://liip.rokka.io/www_liipersmall_3/fccb8e5803984dbd5b07b42f6af7ebc1b0fc53c9.jpeg",
        job: [
          "Software Developer"
        ],
        lastName: "Fort"
      },
      {
        email: "luca.hischier@liip.ch",
        firstName: "Luca",
        image: "https://liip.rokka.io/www_liipersmall_3/e91c5ec886be5b781f8d8866d8c4477f83c618f1.jpeg",
        job: [],
        lastName: "Hischier"
      },
      {
        email: "stephanie.grubenmann@liip.ch",
        firstName: "Stephanie",
        image: "https://liip.rokka.io/www_liipersmall_3/62ed592300b72b8c1af8b138cac1cdc96d3ac5cf.jpeg",
        job: [
          "Content Strategy & UX Writing"
        ],
        lastName: "Grubenmann"
      },
      {
        email: "david.darx@liip.ch",
        firstName: "David",
        image: "https://liip.rokka.io/www_liipersmall_3/cea87170b53a76f8de24a43c4e7fb43d450fce20.jpeg",
        job: [
          "Digital Designer",
          "Frontend Developer"
        ],
        lastName: "Darx"
      },
      {
        email: "peter.traenkle@liip.ch",
        firstName: "Peter",
        image: "https://liip.rokka.io/www_liipersmall_3/91c7762c26801086ad137b0798c819adab3128ca.jpeg",
        job: [],
        lastName: "Tränkle"
      },
      {
        email: "nadja.sterchi@liip.ch",
        firstName: "Nadja",
        image: "https://liip.rokka.io/www_liipersmall_3/418b541f6d8ca2bf16ddb889a972b667339a700b.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Sterchi"
      },
      {
        email: "pascal.helfenstein@liip.ch",
        firstName: "Pascal",
        image: "https://liip.rokka.io/www_liipersmall_3/2c93569e25ec657bbe07b55e0e287ee55698e20f.jpeg",
        job: [
          "Senior Software Engineer"
        ],
        lastName: "Helfenstein"
      },
      {
        email: "hannes@liip.ch",
        firstName: "Hannes",
        image: "https://liip.rokka.io/www_liipersmall_3/8ed783fa862aaf08cbca87959d4f51c58849e427.jpeg",
        job: [
          "Co-Founder"
        ],
        lastName: "Gassert"
      },
      {
        email: "nadja@liip.ch",
        firstName: "Nadja",
        image: "https://liip.rokka.io/www_liipersmall_3/c5dd50c8cabd2e77039124694f3c283f5d138524.jpeg",
        job: [
          "Co-Founder",
          "Lead People"
        ],
        lastName: "Perroulaz"
      },
      {
        email: "thomas.botton@liip.ch",
        firstName: "Thomas",
        image: "https://liip.rokka.io/www_liipersmall_3/9f3825fd0fec0d8d116105bc6da058961f1844e7.jpeg",
        job: [
          "Business Developer",
          "Product Owner"
        ],
        lastName: "Botton"
      },
      {
        email: "tonio.zemp@liip.ch",
        firstName: "Tonio",
        image: "https://liip.rokka.io/www_liipersmall_3/e682a1c42b31ab42f97385a5a344576504aa482e.jpeg",
        job: [
          "Product Owner"
        ],
        lastName: "Zemp"
      },
      {
        email: "jonas.vonlanthen@liip.ch",
        firstName: "Jonas",
        image: "https://liip.rokka.io/www_liipersmall_3/2d401c4c9dbb434563a7208ab48bf97ad9f9029c.jpeg",
        job: [
          "Lead Production",
          "Partner"
        ],
        lastName: "Vonlanthen"
      }
    ];
    this.sortByLastAndFirstName();
  }

  private sortByLastAndFirstName() {
    this.teamMembers = this.teamMembers.sort((a, b) => {
      if (a.lastName < b.lastName) return -1;
      if (a.lastName > b.lastName) return 1;
      console.log("same lastname" + a.lastName);

      // same lastname - sort by firstname
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }

  getTeamMembers(): ITeamMember[] {
    return this.teamMembers;
  }
}

export interface ITeamMember {
  email: string;
  firstName: string;
  lastName: string;
  image: string | null;
  job: string[];
}
