/**
 * مسارات صور فهرس كل كتاب (Table of Contents)
 * -----------------------------------------------
 * المفتاح = نفس قيمة data-title في بطاقة الكتاب (بالأحرف الصغيرة).
 * القيمة = مصفوفة مسارات الصور داخل مجلد images/toc/
 *
 * مثال بعد إضافة الصور:
 *   "how not to diet": [
 *     "images/toc/how-not-to-diet-1.jpg",
 *     "images/toc/how-not-to-diet-2.jpg"
 *   ],
 *
 * ضع ملفات الصور في المجلد: images/toc/
 * ثم أضف المسارات هنا فقط — لا حاجة لتعديل index.html
 */
window.bookTocImages = {
  "the food safety book": [
    "images/toc/food-safety-book-1.jpg",
    "images/toc/food-safety-book-2.jpg",
    "images/toc/food-safety-book-3.jpg",
    "images/toc/food-safety-book-4.jpg",
    "images/toc/food-safety-book-5.jpg"
  ],
  "nutrition for dummies (7th edition)": [
    "images/toc/nutrition-for-dummies-1.jpg",
    "images/toc/nutrition-for-dummies-2.jpg"
  ],
  "how not to diet": [
    "images/toc/how-not-to-diet-1.jpg"
  ],
  "broccoli mum": [
    "images/toc/broccoli-mum-1.jpg",
    "images/toc/broccoli-mum-2.jpg",
    "images/toc/broccoli-mum-3.jpg",
    "images/toc/broccoli-mum-4.jpg",
    "images/toc/broccoli-mum-5.jpg",
    "images/toc/broccoli-mum-6.jpg"
  ],
  "fat loss guide": [
    "images/toc/fat-loss-guide-1.jpg",
    "images/toc/fat-loss-guide-2.jpg"
  ],
  // "broccoli mum": ["images/toc/broccoli-mum-1.jpg"],
  // "fat loss guide": ["images/toc/fat-loss-guide-1.jpg"],
  // "how not to diet": ["images/toc/how-not-to-diet-1.jpg", "images/toc/how-not-to-diet-2.jpg"],
  // "nutrition for dummies (7th edition)": ["images/toc/nutrition-for-dummies-1.jpg"],
  // "the food safety book": ["images/toc/food-safety-book-1.jpg"],
  // "the art of lifting": ["images/toc/art-of-lifting-1.jpg"],
  // "eat like a gym girl + egg white oats": ["images/toc/eat-like-a-gym-girl-1.jpg"],
  // "the biomechanics manual": ["images/toc/biomechanics-manual-1.jpg"],
  // "the champion's mind": ["images/toc/champions-mind-1.jpg"],
  // "built from broken": ["images/toc/built-from-broken-1.jpg"],
  // "deep nutrition": ["images/toc/deep-nutrition-1.jpg"],
  // "how not to die": ["images/toc/how-not-to-die-1.jpg"],
  // "ignite the fire": ["images/toc/ignite-the-fire-1.jpg"],
  // "the ultimate guide to body recomposition": ["images/toc/body-recomposition-1.jpg"],
  // "train smarter, not longer": ["images/toc/train-smarter-1.jpg"],
  // "the language of coaching": ["images/toc/language-of-coaching-1.jpg"],
  // "the renaissance diet 2.0": ["images/toc/renaissance-diet-1.jpg"],
  // "advanced sports nutrition": ["images/toc/advanced-sports-nutrition-1.jpg"],
  // "bodybuilding the complete contest preparation handbook": ["images/toc/contest-prep-1.jpg"],
  // "p.e.d. cheat sheets": ["images/toc/ped-cheat-sheets-1.jpg"],
  // "the aas cheat-sheet handbook": ["images/toc/aas-cheat-sheet-1.jpg"],
  // "nsca's guide to sport and exercise nutrition": ["images/toc/nsca-nutrition-1.jpg"],
  // "rebuilding milo": ["images/toc/rebuilding-milo-1.jpg"],
  // "the muscle & strength pyramid: nutrition": ["images/toc/msp-nutrition-1.jpg"],
  // "trt to sports hrt": ["images/toc/trt-sports-hrt-1.jpg"],
  // "biomechanics of sport and exercise": ["images/toc/biomechanics-sport-1.jpg"],
  // "sarms matrix": ["images/toc/sarms-matrix-1.jpg"],
  // "win": ["images/toc/win-1.jpg"],
  // "building effective cycles": ["images/toc/building-effective-cycles-1.jpg"],
  // "essentials of human nutrition": ["images/toc/essentials-human-nutrition-1.jpg"],
  // "essentials of sports nutrition and supplements study guide": ["images/toc/essentials-sports-nutrition-1.jpg"],
  // "physiology of sport and exercise": ["images/toc/physiology-sport-1.jpg"],
  // "principles and practice of resistance training": ["images/toc/resistance-training-1.jpg"],
  // "science and development of muscle hypertrophy": ["images/toc/muscle-hypertrophy-1.jpg"],
  // "science and practice of strength training": ["images/toc/strength-training-1.jpg"],
  // "sport nutrition": ["images/toc/sport-nutrition-1.jpg"],
  // "sports nutrition issa": ["images/toc/sports-nutrition-issa-1.jpg"],
  // "starting strength": ["images/toc/starting-strength-1.jpg"],
  // "the muscle & strength pyramid: training (3rd edition)": ["images/toc/msp-training-1.jpg"],
  // "advanced neuromuscular exercise physiology": ["images/toc/neuromuscular-1.jpg"],
  // "advanced nutrition and human metabolism": ["images/toc/advanced-nutrition-metabolism-1.jpg"],
  // "acsm's resources for the personal trainer": ["images/toc/acsm-personal-trainer-1.jpg"],
  // "be your own bodybuilding coach": ["images/toc/be-your-own-coach-1.jpg"],
  // "periodization theory and methodology of training": ["images/toc/periodization-1.jpg"],
  // "issa certified personal trainer": ["images/toc/issa-cpt-1.jpg"],
  // "level up": ["images/toc/level-up-1.jpg"],
  // "peptide mastery": ["images/toc/peptide-mastery-1.jpg"],
  // "practical programming for strength training (3rd edition)": ["images/toc/practical-programming-1.jpg"],
  // "sarms and peptides beginner handbook": ["images/toc/sarms-peptides-beginner-1.jpg"],
  // "steroids and other drugs used to enhance performance and image": ["images/toc/steroids-other-drugs-1.jpg"],
  // "nasm essentials of personal fitness training 7th": ["images/toc/nasm-7th-1.jpg"],
  // "underground injectable steroid handbook": ["images/toc/underground-injectable-1.jpg"],
  // "peptides handbook": ["images/toc/peptides-handbook-1.jpg"],
  // "anabolic steroids": ["images/toc/anabolic-steroids-1.jpg"],
  // "jeff nippard collection": ["images/toc/jeff-nippard-1.jpg"],
  // "scientific principles of hypertrophy training": ["images/toc/scientific-hypertrophy-1.jpg"],
  // "the basic map work for how to properly cycle": ["images/toc/basic-map-cycle-1.jpg"],
  // "william llewellyn's anabolics": ["images/toc/william-anabolics-1.jpg"],
  // "essentials of strength training and conditioning (5th edition)": ["images/toc/essentials-strength-conditioning-1.jpg"],
  // "j3 university physique programs collection": ["images/toc/j3-physique-1.jpg"],
  // "j3 university modules collection": ["images/toc/j3-modules-1.jpg"],
};
