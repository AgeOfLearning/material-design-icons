import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHomeElement
 * @class IconRoundHomeElement
 * @extends {AoflElement}
 */
class IconRoundHomeElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHomeElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-home';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHomeElement.is, IconRoundHomeElement);

export default IconRoundHomeElement;
