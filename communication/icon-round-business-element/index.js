import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBusinessElement
 * @class IconRoundBusinessElement
 * @extends {AoflElement}
 */
class IconRoundBusinessElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBusinessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-business';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBusinessElement.is, IconRoundBusinessElement);

export default IconRoundBusinessElement;
