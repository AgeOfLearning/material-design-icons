import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePagesElement
 * @class IconTwotonePagesElement
 * @extends {AoflElement}
 */
class IconTwotonePagesElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePagesElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-pages';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePagesElement.is, IconTwotonePagesElement);

export default IconTwotonePagesElement;
