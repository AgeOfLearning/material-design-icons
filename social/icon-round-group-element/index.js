import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGroupElement
 * @class IconRoundGroupElement
 * @extends {AoflElement}
 */
class IconRoundGroupElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGroupElement.is, IconRoundGroupElement);

export default IconRoundGroupElement;
