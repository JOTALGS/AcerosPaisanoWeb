const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate({ key: "TU_API_KEY" });

async function translateText(text, targetLang) {
  let [translation] = await translate.translate(text, targetLang);
  return translation;
}

module.exports = { translateText };
