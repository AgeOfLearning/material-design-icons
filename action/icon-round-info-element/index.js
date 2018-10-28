import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundInfoElement
 * @class IconRoundInfoElement
 * @extends {AoflElement}
 */
class IconRoundInfoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundInfoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-info';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundInfoElement.is, IconRoundInfoElement);

export default IconRoundInfoElement;
