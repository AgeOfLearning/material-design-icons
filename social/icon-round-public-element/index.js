import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPublicElement
 * @class IconRoundPublicElement
 * @extends {AoflElement}
 */
class IconRoundPublicElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPublicElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-public';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPublicElement.is, IconRoundPublicElement);

export default IconRoundPublicElement;
