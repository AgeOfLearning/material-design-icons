import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCastElement
 * @class IconTwotoneCastElement
 * @extends {AoflElement}
 */
class IconTwotoneCastElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCastElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-cast';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCastElement.is, IconTwotoneCastElement);

export default IconTwotoneCastElement;
