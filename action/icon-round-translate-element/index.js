import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTranslateElement
 * @class IconRoundTranslateElement
 * @extends {AoflElement}
 */
class IconRoundTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTranslateElement.is, IconRoundTranslateElement);

export default IconRoundTranslateElement;
