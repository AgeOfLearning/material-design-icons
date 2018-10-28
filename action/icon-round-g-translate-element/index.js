import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGTranslateElement
 * @class IconRoundGTranslateElement
 * @extends {AoflElement}
 */
class IconRoundGTranslateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGTranslateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-g-translate';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGTranslateElement.is, IconRoundGTranslateElement);

export default IconRoundGTranslateElement;
