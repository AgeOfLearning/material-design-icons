import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLanguageElement
 * @class IconRoundLanguageElement
 * @extends {AoflElement}
 */
class IconRoundLanguageElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLanguageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-language';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLanguageElement.is, IconRoundLanguageElement);

export default IconRoundLanguageElement;
