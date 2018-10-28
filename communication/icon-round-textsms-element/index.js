import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextsmsElement
 * @class IconRoundTextsmsElement
 * @extends {AoflElement}
 */
class IconRoundTextsmsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextsmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-textsms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextsmsElement.is, IconRoundTextsmsElement);

export default IconRoundTextsmsElement;
